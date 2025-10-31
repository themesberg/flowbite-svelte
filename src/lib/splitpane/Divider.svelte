<script lang="ts">
  import type { DividerProps } from '$lib/types';
  import { divider, dividerHitArea } from './theme';

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
  aria-label={`Resize ${isHorizontal ? 'horizontal' : 'vertical'} panes`}
  class={divider({ direction, isDragging, class: className })}
  onmousedown={(e) => onMouseDown(e, index)}
  onkeydown={(e) => onKeyDown(e, index)}
>
  <div class={dividerHitArea({ direction })}></div>
</div>