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
    initialSizes,
    onResize,
    children,
    class: className = ""
  }: SplitPaneProps = $props();

  let transition = $state(transitionProp);
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
    if (!sizes[index]) return "";

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
    getPaneSize: (index: number) => sizes[index] ?? 50, 
    shouldRenderDivider,
    getDirection: () => currentDirection,
    getIsDragging: () => isDragging,
    onMouseDown: startResize,
    onKeyDown: handleKeyResize
  });

  // Initialize sizes
  $effect(() => {
    if (registeredPanes === 0) {
      sizes = [];
      return;
    }

    if (initialSizes && initialSizes.length === registeredPanes) {
      // Validate and sanitize initialSizes
      const hasInvalidValues = initialSizes.some((s) => s < 0 || !isFinite(s));

      if (hasInvalidValues) {
        console.warn("initialSizes contains invalid values (negative or non-finite). Using equal distribution instead.");
        const equal = 100 / registeredPanes;
        sizes = Array.from({ length: registeredPanes }, () => equal);
        return;
      }

      const sum = initialSizes.reduce((a, b) => a + b, 0);

      // If sum is 0 or near-zero, fall back to equal distribution
      if (sum <= 0 || sum < 0.01) {
        console.warn("initialSizes sum to zero or near-zero. Using equal distribution instead.");
        const equal = 100 / registeredPanes;
        sizes = Array.from({ length: registeredPanes }, () => equal);
        return;
      }

      // Normalize to percentages
      sizes = initialSizes.map((s) => (s / sum) * 100);
      return;
    }

    if (sizes.length !== registeredPanes) {
      const equal = 100 / registeredPanes;
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

    const currentPos = currentDirection === "horizontal" ? e.clientX : e.clientY;
    const delta = currentPos - startPos;

    if (Math.abs(delta) < 1) return; // Ignore very small movements

    const containerSize = currentDirection === "horizontal" ? container.offsetWidth : container.offsetHeight;

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
    if (Math.abs(newSize1 - oldSize1) > 0.01) {
      sizes[index] = newSize1;
      sizes[index + 1] = newSize2;
      startPos = currentPos;
    }
  }

  function handleKeyResize(e: KeyboardEvent, index: number) {
    if (!container) return;

    const step = 2; // percentage
    let handled = false;

    const isHorizontal = currentDirection === "horizontal";
    const increaseKeys = isHorizontal ? ["ArrowRight"] : ["ArrowDown"];
    const decreaseKeys = isHorizontal ? ["ArrowLeft"] : ["ArrowUp"];

    const containerSize = isHorizontal ? container.offsetWidth : container.offsetHeight;
    const minPercent = (minSize / containerSize) * 100;

    const total = sizes[index] + sizes[index + 1];

    const applyClamp = (target: number) => {
      let newSize1 = Math.min(total - minPercent, Math.max(minPercent, target));
      let newSize2 = total - newSize1;

      if (newSize2 < minPercent) {
        newSize2 = minPercent;
        newSize1 = total - newSize2;
      }

      if (Math.abs(newSize1 - sizes[index]) > 0.01) {
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
