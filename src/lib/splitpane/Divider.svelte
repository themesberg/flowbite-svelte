<script lang="ts">
  import type { DividerProps } from '$lib/types';

  let {
    direction,
    index,
    onMouseDown,
    onKeyDown,
    isDragging,
    class: className = ''
  }: DividerProps = $props();

  const isHorizontal = $derived(direction === 'horizontal');
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  role="separator"
  tabindex="0"
  aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label={`Resize ${isHorizontal ? 'horizontal' : 'vertical'} panes`}
  class="divider {className}"
  class:horizontal={isHorizontal}
  class:vertical={!isHorizontal}
  class:dragging={isDragging}
  onmousedown={(e) => onMouseDown(e, index)}
  onkeydown={(e) => onKeyDown(e, index)}
></div>

<style>
  .divider {
    background: rgb(229, 231, 235);
    flex-shrink: 0;
    position: relative;
    z-index: 10;
    transition: background 0.2s ease;
  }

  .divider:hover,
  .divider:focus {
    background: rgb(209, 213, 219);
    outline: 2px solid rgb(59, 130, 246);
    outline-offset: -2px;
  }

  .divider.dragging {
    background: rgb(59, 130, 246);
  }

  .divider.horizontal {
    width: 4px;
    cursor: col-resize;
  }

  .divider.vertical {
    height: 4px;
    cursor: row-resize;
  }

  .divider::after {
    content: '';
    position: absolute;
    background: transparent;
  }

  .divider.horizontal::after {
    width: 12px;
    height: 100%;
    left: -4px;
    top: 0;
  }

  .divider.vertical::after {
    height: 12px;
    width: 100%;
    top: -4px;
    left: 0;
  }
</style>