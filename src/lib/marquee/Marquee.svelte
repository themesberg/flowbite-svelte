<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  let offset: number = 0;
  let isHovering: boolean = false;
  let marqWidth: HTMLElement;

  onMount(() => {
    const interval = setInterval(() => {
      if (Math.abs(offset) >= marqWidth.offsetWidth) {
        offset = 0;
      } else {
        if (isHovering) offset -= 0.5;
        else offset -= 1;
      }
    }, 5);

    onDestroy(() => interval);
  });
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="relative flex overflow-x-hidden w-[100%]"
  on:mouseover={() => (isHovering = true)}
  on:mouseleave={() => (isHovering = false)}>
  <div 
    class="flex justify-around items-center min-w-[100%]" 
    style="transform: {`translateX(${offset}px)`}" 
    bind:this={marqWidth}
  >
    <slot />
  </div>
  <div 
    class="flex justify-around items-center min-w-[100%]" 
    style="transform: {`translateX(${offset}px)`}"
  >
    <slot />
  </div>
</div>

<style>
  /* .marquee-container {
    display: flex;
    overflow-x: hidden;
    flex-direction: row;
    position: relative;
  } */

  /* .marquee {
    border: 1px solid;
    flex: 0 0 auto;
    min-width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  } */
</style>
