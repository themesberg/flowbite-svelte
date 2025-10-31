<script lang="ts">
  import type { PaneProps } from '$lib/types';
  import { getSplitPaneContext } from './SplitPane.svelte';
  import Divider from './Divider.svelte';
  import { pane } from './theme';
  
  let { 
    children, 
    class: className = '', 
    style = ''
  }: PaneProps = $props();

  const context = getSplitPaneContext();
  const paneIndex = context ? context.registerPane() : 0;
  
  const paneStyle = $derived(() => {
    const styles = [style];
    if (context) {
      const contextStyle = context.getPaneStyle(paneIndex);
      styles.push(contextStyle);
    }
    return styles.filter(Boolean).join('; ');
  });

  const showDivider = $derived(context?.shouldRenderDivider(paneIndex) ?? false);
  const direction = $derived(context?.getDirection() ?? 'horizontal');
  const isDragging = $derived(context?.getIsDragging() ?? false);
</script>

<div class={pane({ class: className })} style={paneStyle()}>
  {@render children?.()}
</div>

{#if showDivider && context}
  <Divider
    {direction}
    index={paneIndex}
    {isDragging}
    onMouseDown={context.onMouseDown}
    onKeyDown={context.onKeyDown}
  />
{/if}