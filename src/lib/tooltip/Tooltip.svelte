<script lang="ts">
  import type { Snippet } from "svelte";

  // import { onMount, onDestroy } from 'svelte';
  interface Props {
    children: Snippet;
    triggeredBy: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
  }
  let { children, triggeredBy, position = 'top' }: Props = $props();
  // export let triggeredBy = '';
  // export let position = 'top';

  let tooltip = $state();
  let triggerElement: HTMLElement | null = null;
  let visible = $state(false);

  const showTooltip = () => visible = true;
  const hideTooltip = () => visible = false;
  triggerElement = document.querySelector(triggeredBy);

  $effect(() => {
    if (triggerElement) {
      triggerElement.addEventListener('mouseenter', showTooltip);
      triggerElement.addEventListener('mouseleave', hideTooltip);
    }

    return () => {
      if (triggerElement) {
        triggerElement.removeEventListener('mouseenter', showTooltip);
        triggerElement.removeEventListener('mouseleave', hideTooltip);
      }
    };
    triggerElement = document.querySelector(triggeredBy);
  });
</script>

{#if visible}
  <div 
    bind:this={tooltip}
    class="tooltip"
    class:top={position === 'top'}
    class:bottom={position === 'bottom'}
    class:left={position === 'left'}
    class:right={position === 'right'}
  >
    {@render children()}
  </div>
{/if}

<style>
  .tooltip {
    position: absolute;
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 1000;
    pointer-events: none;
  }

  .top { bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-10px); }
  .bottom { top: 100%; left: 50%; transform: translateX(-50%) translateY(10px); }
  .left { right: 100%; top: 50%; transform: translateY(-50%) translateX(-10px); }
  .right { left: 100%; top: 50%; transform: translateY(-50%) translateX(10px); }
</style>