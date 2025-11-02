<script lang="ts" module>
  import { setContext, getContext } from "svelte";

  const SPLIT_PANE_KEY = Symbol("SPLIT_PANE");

  interface SplitPaneContext {
    registerPane: () => number;
    getPaneStyle: (index: number) => string;
    getPaneSize: (index: number) => number;
    shouldRenderDivider: (index: number) => boolean;
    getDirection: () => "horizontal" | "vertical";
    getIsDragging: () => boolean;
    onMouseDown: (e: MouseEvent, index: number) => void;
    onKeyDown: (e: KeyboardEvent, index: number) => void;
  }

  export function setSplitPaneContext(ctx: SplitPaneContext) {
    setContext(SPLIT_PANE_KEY, ctx);
  }

  export function getSplitPaneContext(): SplitPaneContext | undefined {
    return getContext(SPLIT_PANE_KEY);
  }
</script>

<script lang="ts">
  import type { SplitPaneProps } from "$lib/types";
  import { splitpane } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let {
    direction = "horizontal",
    minSize = 100,
    responsive = true,
    breakpoint = 768,
    transition: transitionProp = true,
    transitionDuration = 150,
    keyboardStep = 2,
    initialSizes,
    onResize,
    children,
    class: className = ""
  }: SplitPaneProps = $props();

  const TOLERANCE = 0.5; // For pixel comparisons (minSize - TOLERANCE)
  const MIN_CHANGE_THRESHOLD = 0.01; // For percentage changes (size deltas)
  const MIN_DELTA = 1; // For mouse movement (Math.abs(delta) < MIN_DELTA)

  // Validate numeric props
  if (minSize <= 0) {
    console.warn(`minSize must be positive, got ${minSize}. Using default 100.`);
    minSize = 100;
  }
  if (keyboardStep <= 0) {
    console.warn(`keyboardStep must be positive, got ${keyboardStep}. Using default 2.`);
    keyboardStep = 2;
  }

  let transition = $state(transitionProp);
  $effect(() => {
    // syncing local transition state with prop changes
    if (!isDragging) {
      transition = transitionProp;
    }
  });
  const theme = getTheme("splitpane");

  let isDragging = $state(false);
  let startPos = $state(0);
  let sizes = $state<number[]>([]);
  let container: HTMLDivElement;
  let currentDirection = $state(direction);
  let registeredPanes = $state(0);

  // Register panes as they mount
  function registerPane(): number {
    const index = registeredPanes;
    registeredPanes++;
    return index;
  }

  function getPaneStyle(index: number): string {
    if (sizes[index] === undefined) return "";

    const size = `${sizes[index]}%`;
    const transitionStyle = transition ? `${currentDirection === "horizontal" ? "width" : "height"} ${transitionDuration}ms ease` : "none";

    if (currentDirection === "horizontal") {
      return `width: ${size}; height: 100%; transition: ${transitionStyle};`;
    } else {
      return `height: ${size}; width: 100%; transition: ${transitionStyle};`;
    }
  }

  function shouldRenderDivider(paneIndex: number): boolean {
    return paneIndex < registeredPanes - 1;
  }

  // Set context for child Pane components
  setSplitPaneContext({
    registerPane,
    getPaneStyle,
    getPaneSize: (index: number) => sizes[index] ?? (registeredPanes > 0 ? 100 / registeredPanes : 0),
    shouldRenderDivider,
    getDirection: () => currentDirection,
    getIsDragging: () => isDragging,
    onMouseDown: startResize,
    onKeyDown: handleKeyResize
  });

  let containerSize = $state(0);

  // Track container size changes
  $effect(() => {
    if (!container) return;

    const updateSize = () => {
      containerSize = currentDirection === "horizontal" ? container.offsetWidth : container.offsetHeight;
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  });

  // Initialize and maintain sizes
  $effect(() => {
    if (registeredPanes === 0) {
      sizes = [];
      return;
    }

    // If container not ready yet, use equal distribution
    if (containerSize < 1) {
      if (sizes.length !== registeredPanes) {
        const equal = 100 / registeredPanes;
        sizes = Array.from({ length: registeredPanes }, () => equal);
      }
      return;
    }

    const minPercent = (minSize / containerSize) * 100;

    // Check if minSize is achievable for all panes
    const totalMinRequired = minPercent * registeredPanes;
    if (totalMinRequired > 100) {
      console.error(
        `Cannot satisfy minSize=${minSize}px for ${registeredPanes} panes in ${containerSize}px container. ` + `Required: ${(minSize * registeredPanes).toFixed(0)}px. Using equal distribution.`
      );
      const equal = 100 / registeredPanes;
      sizes = Array.from({ length: registeredPanes }, () => equal);
      return;
    }

    // Check if current sizes violate minSize constraints
    const currentPixelSizes = sizes.map((s) => (s / 100) * containerSize);
    const violatesMinSize = currentPixelSizes.some((pixelSize) => pixelSize < minSize - TOLERANCE); // small tolerance

    if (violatesMinSize) {
      // Recalculate sizes to respect minSize
      let newSizes = sizes.map((s) => Math.max((s / 100) * containerSize, minSize));
      const totalPixels = newSizes.reduce((a, b) => a + b, 0);

      // Convert back to percentages
      if (totalPixels > containerSize) {
        // If we can't fit all panes at minSize, distribute proportionally
        newSizes = newSizes.map((s) => (s / totalPixels) * containerSize);
      }

      sizes = newSizes.map((pixelSize) => (pixelSize / containerSize) * 100);
    }

    // Handle initialSizes (only on first initialization)
    if (initialSizes && initialSizes.length === registeredPanes && sizes.length !== registeredPanes) {
      const hasInvalidValues = initialSizes.some((s) => s < 0 || !isFinite(s));

      if (hasInvalidValues) {
        console.warn("initialSizes contains invalid values. Using equal distribution.");
        const equal = Math.max(100 / registeredPanes, minPercent);
        sizes = Array.from({ length: registeredPanes }, () => equal);
        return;
      }

      const sum = initialSizes.reduce((a, b) => a + b, 0);

      if (sum <= 0 || sum < 0.01) {
        console.warn("initialSizes sum to zero. Using equal distribution.");
        const equal = Math.max(100 / registeredPanes, minPercent);
        sizes = Array.from({ length: registeredPanes }, () => equal);
        return;
      }

      let normalizedSizes = initialSizes.map((s) => (s / sum) * 100);

      const violatesConstraints = normalizedSizes.some((size) => size < minPercent);

      if (violatesConstraints) {
        console.warn(
          `initialSizes [${normalizedSizes.map((s) => s.toFixed(1)).join("%, ")}%] ` +
            `violate minSize constraint (${minSize}px = ${minPercent.toFixed(1)}%). ` +
            `Adjusting to respect minimum constraints.`
        );

        normalizedSizes = normalizedSizes.map((size) => Math.max(size, minPercent));
        const newSum = normalizedSizes.reduce((a, b) => a + b, 0);
        normalizedSizes = normalizedSizes.map((size) => (size / newSum) * 100);
      }

      sizes = normalizedSizes;
      return;
    }

    // Default: equal distribution respecting minSize
    if (sizes.length !== registeredPanes) {
      const equal = Math.max(100 / registeredPanes, minPercent);
      sizes = Array.from({ length: registeredPanes }, () => equal);
    }
  });

  // Responsive direction handling
  $effect(() => {
    if (!responsive) {
      currentDirection = direction;
      return;
    }

    if (typeof window === "undefined") {
      currentDirection = direction;
      return;
    }

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleResize = () => {
      // deferring the direction switch until the drag completes
      if (!isDragging) {
        currentDirection = mq.matches ? "vertical" : "horizontal";
      }
    };

    handleResize();
    mq.addEventListener("change", handleResize);

    return () => mq.removeEventListener("change", handleResize);
  });

  // Notify parent of size changes
  $effect(() => {
    if (sizes.length > 0 && onResize) {
      onResize(sizes);
    }
  });

  function startResize(e: MouseEvent, index: number) {
    e.preventDefault();
    isDragging = true;
    transition = false;
    startPos = currentDirection === "horizontal" ? e.clientX : e.clientY;

    const moveHandler = (ev: MouseEvent) => resize(ev, index);
    const upHandler = () => stopResize(moveHandler, upHandler);

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);

    document.body.style.cursor = currentDirection === "horizontal" ? "col-resize" : "row-resize";
    document.body.style.userSelect = "none";
  }

  function stopResize(moveHandler: (e: MouseEvent) => void, upHandler: () => void) {
    isDragging = false;
    transition = transitionProp;
    window.removeEventListener("mousemove", moveHandler);
    window.removeEventListener("mouseup", upHandler);

    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }

  function resize(e: MouseEvent, index: number) {
    if (!isDragging || !container) return;
    if (index < 0 || index + 1 >= sizes.length) return;

    const currentPos = currentDirection === "horizontal" ? e.clientX : e.clientY;
    const delta = currentPos - startPos;

    if (Math.abs(delta) < MIN_DELTA) return; // Ignore very small movements

    const containerSize = currentDirection === "horizontal" ? container.offsetWidth : container.offsetHeight;

    // Bail out if container has zero or near-zero dimensions
    if (containerSize < 1) return;

    const deltaPercent = (delta / containerSize) * 100;

    // Calculate min as percentage based on current container size
    const minPercent = (minSize / containerSize) * 100;

    // Store original sizes
    const oldSize1 = sizes[index];
    const oldSize2 = sizes[index + 1];
    const totalSize = oldSize1 + oldSize2;

    // Calculate desired new sizes
    let newSize1 = oldSize1 + deltaPercent;
    let newSize2 = oldSize2 - deltaPercent;

    // Apply minimum constraints - clamp to valid range
    newSize1 = Math.max(minPercent, newSize1);
    newSize2 = totalSize - newSize1;

    // Check if second pane violates minimum constraint after first pane clamping
    if (newSize2 < minPercent) {
      newSize2 = minPercent;
      newSize1 = totalSize - newSize2;
    }

    // Only update if changed significantly
    if (Math.abs(newSize1 - oldSize1) > MIN_CHANGE_THRESHOLD) {
      sizes[index] = newSize1;
      sizes[index + 1] = newSize2;
      startPos = currentPos;
    }
  }

  function handleKeyResize(e: KeyboardEvent, index: number) {
    if (!container) return;
    if (index < 0 || index + 1 >= sizes.length) return;

    const step = keyboardStep;
    let handled = false;

    const isHorizontal = currentDirection === "horizontal";
    const increaseKeys = isHorizontal ? ["ArrowRight"] : ["ArrowDown"];
    const decreaseKeys = isHorizontal ? ["ArrowLeft"] : ["ArrowUp"];

    const containerSize = isHorizontal ? container.offsetWidth : container.offsetHeight;
    // Bail out if container has zero or near-zero dimensions
    if (containerSize < 1) return;

    const minPercent = (minSize / containerSize) * 100;

    const total = sizes[index] + sizes[index + 1];

    const applyClamp = (target: number) => {
      let newSize1 = Math.min(total - minPercent, Math.max(minPercent, target));
      let newSize2 = total - newSize1;

      if (newSize2 < minPercent) {
        newSize2 = minPercent;
        newSize1 = total - newSize2;
      }

      if (Math.abs(newSize1 - sizes[index]) > MIN_CHANGE_THRESHOLD) {
        sizes[index] = newSize1;
        sizes[index + 1] = newSize2;
        handled = true;
      }
    };

    if (increaseKeys.includes(e.key)) {
      applyClamp(sizes[index] + step);
    } else if (decreaseKeys.includes(e.key)) {
      applyClamp(sizes[index] - step);
    } else if (e.key === "Enter" || e.key === " ") {
      // Reset to equal sizes
      const equal = 100 / registeredPanes;
      sizes = sizes.map(() => equal);
      handled = true;
    }

    if (handled) {
      e.preventDefault();
    }
  }
</script>

<div bind:this={container} class={splitpane({ direction: currentDirection, class: clsx(theme, className) })}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SplitPaneProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2125)
## Props
@prop direction = "horizontal"
@prop minSize = 100
@prop responsive = true
@prop breakpoint = 768
@prop transition: transitionProp = true
@prop transitionDuration = 150
@prop keyboardStep = 2
@prop initialSizes
@prop onResize
@prop children
@prop class: className = ""
-->
