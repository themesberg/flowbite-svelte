<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  export let speed: number = 1;
  export let hoverSpeed: number = 1;

  let offset: number = 0;
  let isHovering: boolean = false;
  let marquee: HTMLElement;
  let intervalId: NodeJS.Timer;

  onMount(() => {
    intervalId = setInterval(() => {
      if (Math.abs(offset) >= marquee.offsetWidth) {
        offset = 0;
      } else {
        if (isHovering) offset -= hoverSpeed;
        else offset -= speed;
      }
    }, 5);
  });

  onDestroy(() => intervalId);
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="relative flex overflow-x-hidden w-[100%]"
  on:mouseover={() => (isHovering = true)}
  on:mouseleave={() => (isHovering = false)}>
  <div
    class="flex justify-around items-center min-w-[100%]"
    style="transform: {`translateX(${offset}px)`}"
    bind:this={marquee}>
    <slot />
  </div>
  <div 
    class="flex justify-around items-center min-w-[100%]"
    style="transform: {`translateX(${offset}px)`}"
  >
    <slot />
  </div>
</div>

<!--
  @component
  ## Feature
  [Go to Mega Menu](https://flowbite-svelte.com/docs/components/maquee)
  ## Example
  ```
  <script>
    import { Marquee } from 'flowbite-svelte'
  </script>

  <Marquee speed={1}>
    <img class="w-32 h-32" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-32 h-32" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-32 h-32" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-32 h-32" src="https://flowbite.com/docs/images/logo.svg" />
  </Marquee>
  ```
-->
