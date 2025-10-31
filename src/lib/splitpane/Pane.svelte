<script lang="ts">
  import type { PaneProps } from '$lib/types';
  import { getSplitPaneContext } from './SplitPane.svelte';
  import Divider from './Divider.svelte';
  
  let { 
    children, 
    class: className = '', 
    style = '',
    minSize,
    maxSize 
  }: PaneProps = $props();

  const context = getSplitPaneContext();
  const paneIndex = context ? context.registerPane() : 0;
  
  const paneStyle = $derived(() => {
    const styles = [style];
    if (context) {
      const contextStyle = context.getPaneStyle(paneIndex);
      styles.push(contextStyle);
    }
    if (minSize) styles.push(`min-width: ${minSize}px; min-height: ${minSize}px`);
    if (maxSize) styles.push(`max-width: ${maxSize}px; max-height: ${maxSize}px`);
    return styles.filter(Boolean).join('; ');
  });

  const showDivider = $derived(context?.shouldRenderDivider(paneIndex) ?? false);
  const direction = $derived(context?.getDirection() ?? 'horizontal');
  const isDragging = $derived(context?.getIsDragging() ?? false);
</script>

<div class="pane split-pane-pane {className}" style={paneStyle()}>
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

<style>
  .pane {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
</style>