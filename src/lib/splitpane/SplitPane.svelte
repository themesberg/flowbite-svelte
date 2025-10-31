<script lang="ts" module>
  import { setContext, getContext } from 'svelte';
  
  const SPLIT_PANE_KEY = Symbol('SPLIT_PANE');
  
  interface SplitPaneContext {
    registerPane: () => number;
    getPaneStyle: (index: number) => string;
    shouldRenderDivider: (index: number) => boolean;
    getDirection: () => 'horizontal' | 'vertical';
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
  import type { SplitPaneProps } from '$lib/types';

  let {
    direction = 'horizontal',
    minSize = 100,
    maxSize,
    responsive = true,
    breakpoint = 768,
    transition = true,
    transitionDuration = 150,
    initialSizes,
    onResize,
    children,
    class: className = ''
  }: SplitPaneProps = $props();

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
    if (!sizes[index]) return '';
    
    const size = `${sizes[index]}%`;
    const transitionStyle = transition 
      ? `${currentDirection === 'horizontal' ? 'width' : 'height'} ${transitionDuration}ms ease` 
      : 'none';

    if (currentDirection === 'horizontal') {
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
    shouldRenderDivider,
    getDirection: () => currentDirection,
    getIsDragging: () => isDragging,
    onMouseDown: startResize,
    onKeyDown: handleKeyResize
  });

  // Initialize sizes
  $effect(() => {
    if (registeredPanes > 0 && sizes.length === 0 && container) {
      const containerSize = currentDirection === 'horizontal' 
        ? container.offsetWidth 
        : container.offsetHeight;
      
      let newSizes: number[];
      
      if (initialSizes && initialSizes.length === registeredPanes) {
        newSizes = [...initialSizes];
      } else {
        const equal = 100 / registeredPanes;
        newSizes = Array.from({ length: registeredPanes }, () => equal);
      }
      
      // Apply max constraints during initialization if needed
      if (maxSize && containerSize > 0) {
        const maxPercent = (maxSize / containerSize) * 100;
        newSizes = newSizes.map((size, i) => {
          if (size > maxPercent) {
            return maxPercent;
          }
          return size;
        });
        
        // Redistribute excess to other panes
        const total = newSizes.reduce((sum, s) => sum + s, 0);
        if (total < 100) {
          const excess = 100 - total;
          const lastIndex = newSizes.length - 1;
          newSizes[lastIndex] += excess;
        }
      }
      
      sizes = newSizes;
    }
  });

  // Responsive direction handling
  $effect(() => {
    if (!responsive) {
      currentDirection = direction;
      return;
    }

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    
    const handleResize = () => {
      currentDirection = mq.matches ? 'vertical' : 'horizontal';
    };

    handleResize();
    mq.addEventListener('change', handleResize);
    
    return () => mq.removeEventListener('change', handleResize);
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
    startPos = currentDirection === 'horizontal' ? e.clientX : e.clientY;

    const moveHandler = (ev: MouseEvent) => resize(ev, index);
    const upHandler = () => stopResize(moveHandler, upHandler);

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', upHandler);
    
    document.body.style.cursor = currentDirection === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  }

  function stopResize(moveHandler: (e: MouseEvent) => void, upHandler: () => void) {
    isDragging = false;
    window.removeEventListener('mousemove', moveHandler);
    window.removeEventListener('mouseup', upHandler);
    
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }

  function resize(e: MouseEvent, index: number) {
    if (!isDragging || !container) return;

    const currentPos = currentDirection === 'horizontal' ? e.clientX : e.clientY;
    const delta = currentPos - startPos;
    
    const containerSize = currentDirection === 'horizontal' 
      ? container.offsetWidth 
      : container.offsetHeight;
    
    const deltaPercent = (delta / containerSize) * 100;

    // Calculate min/max as percentages based on current container size
    const minPercent = (minSize / containerSize) * 100;
    const maxPercent = maxSize ? (maxSize / containerSize) * 100 : Infinity;

    // Store original total
    const totalSize = sizes[index] + sizes[index + 1];

    // Calculate new sizes with delta
    let newSize1 = sizes[index] + deltaPercent;
    let newSize2 = totalSize - newSize1;

    // Apply constraints to first pane
    if (newSize1 < minPercent) {
      newSize1 = minPercent;
    } else if (maxPercent !== Infinity && newSize1 > maxPercent) {
      newSize1 = maxPercent;
    }
    
    // Recalculate second pane
    newSize2 = totalSize - newSize1;
    
    // Apply constraints to second pane (if it violates, adjust first pane back)
    if (newSize2 < minPercent) {
      newSize2 = minPercent;
      newSize1 = totalSize - newSize2;
      // Re-check first pane constraints after adjustment
      if (maxPercent !== Infinity && newSize1 > maxPercent) {
        // Both constraints can't be satisfied, prioritize min
        newSize1 = maxPercent;
        newSize2 = totalSize - newSize1;
      }
    } else if (maxPercent !== Infinity && newSize2 > maxPercent) {
      newSize2 = maxPercent;
      newSize1 = totalSize - newSize2;
    }

    // Only update if changed significantly
    if (Math.abs(newSize1 - sizes[index]) > 0.1) {
      sizes[index] = newSize1;
      sizes[index + 1] = newSize2;
      startPos = currentPos;
    }
  }

  function handleKeyResize(e: KeyboardEvent, index: number) {
    if (!container) return;

    const step = 2; // percentage
    let handled = false;

    const isHorizontal = currentDirection === 'horizontal';
    const increaseKeys = isHorizontal ? ['ArrowRight'] : ['ArrowDown'];
    const decreaseKeys = isHorizontal ? ['ArrowLeft'] : ['ArrowUp'];

    if (increaseKeys.includes(e.key)) {
      const containerSize = isHorizontal ? container.offsetWidth : container.offsetHeight;
      const minPercent = (minSize / containerSize) * 100;
      
      if (sizes[index] + step <= 100 - minPercent) {
        sizes[index] += step;
        sizes[index + 1] -= step;
        handled = true;
      }
    } else if (decreaseKeys.includes(e.key)) {
      const containerSize = isHorizontal ? container.offsetWidth : container.offsetHeight;
      const minPercent = (minSize / containerSize) * 100;
      
      if (sizes[index] - step >= minPercent) {
        sizes[index] -= step;
        sizes[index + 1] += step;
        handled = true;
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
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

<div
  bind:this={container}
  class="split-pane {className}"
  class:horizontal={currentDirection === 'horizontal'}
  class:vertical={currentDirection === 'vertical'}
  class:dragging={isDragging}
>
  {@render children()}
</div>

<style>
  .split-pane {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    position: relative;
  }

  .split-pane.vertical {
    flex-direction: column;
  }

  .split-pane.dragging {
    cursor: inherit;
  }

  :global(.split-pane-pane) {
    overflow: auto;
    flex-shrink: 0;
    min-width: 0;
    min-height: 0;
  }
</style>