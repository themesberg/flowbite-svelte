<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  export let speed: number = 1;
  export let hoverSpeed: number = 1;
  export let shadow: boolean = false;

  let offset: number = 0;
  let isHovering: boolean = false;
  let marquee: HTMLElement;
  let intervalId: NodeJS.Timer;

  let shadowClass: string = `after:content-[''] after:absolute after:block after:z-10 after:h-full before:content-[''] before:absolute 
    before:block before:z-10 before:h-full before:right-0 after:shadow-[10px_0_50px_65px_rgba(256,256,256,1)] 
    before:shadow-[-10px_0_50px_65px_rgba(256,256,256,1)] dark:after:shadow-[10px_0_50px_65px_rgba(16,24,39,1)]
    dark:before:shadow-[-10px_0_50px_65px_rgba(16,24,39,1)]`;

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
  class="relative flex overflow-hidden w-[100%] {shadow ? shadowClass : ''}"
  on:mouseover={() => (isHovering = true)}
  on:mouseleave={() => (isHovering = false)}>
  <div
    class="flex justify-around items-center min-w-[100%]"
    style="transform: {`translateX(${offset}px)`}"
    bind:this={marquee}>
    <slot />
  </div>
  <div class="flex justify-around items-center min-w-[100%]" style="transform: {`translateX(${offset}px)`}">
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
