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
  class="
    bg-gray-300 shrink-0 relative z-10 transition-colors duration-200
    hover:bg-gray-400 focus:bg-gray-400 focus:outline focus:outline-2 focus:outline-blue-500 focus:-outline-offset-2
    {isDragging ? 'bg-blue-500' : ''}
    {isHorizontal ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize'}
    {className}
  "
  onmousedown={(e) => onMouseDown(e, index)}
  onkeydown={(e) => onKeyDown(e, index)}
>
  <div class="absolute bg-transparent {isHorizontal ? 'w-3 h-full -left-1 top-0' : 'h-3 w-full -top-1 left-0'}"></div>
</div>