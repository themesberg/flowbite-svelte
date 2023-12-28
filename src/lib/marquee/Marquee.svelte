<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let speed: number = 1;
  export let hoverSpeed: number = 1;
  export let shadow: boolean = false;

  let offset: number = 0;
  let isHovering: boolean = false;

  let shadowClass: string = `after:content-[''] after:absolute after:block after:z-10 after:h-full before:content-[''] before:absolute 
    before:block before:z-10 before:h-full before:end-0 after:shadow-[10px_0_50px_65px_rgba(256,256,256,1)] 
    before:shadow-[-10px_0_50px_65px_rgba(256,256,256,1)] dark:after:shadow-[10px_0_50px_65px_rgba(16,24,39,1)]
    dark:before:shadow-[-10px_0_50px_65px_rgba(16,24,39,1)]`;

  let divCls: string = twMerge('relative flex overflow-hidden w-full', shadow ? shadowClass : '', $$props.class);

  function init(marquee: HTMLElement) {
    const intervalId = setInterval(() => {
      if (marquee && Math.abs(offset) >= marquee.offsetWidth) {
        offset = 0;
      } else {
        if (isHovering) offset -= hoverSpeed;
        else offset -= speed;
      }
    }, 5);

    return {
      destroy() {
        clearInterval(intervalId);
      }
    };
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class={divCls} role="banner" on:mouseover={() => (isHovering = true)} on:mouseleave={() => (isHovering = false)}>
  <div class="flex justify-around items-center min-w-full" style="transform: {`translateX(${offset}px)`}" use:init>
    <slot />
  </div>
  <div class="flex justify-around items-center min-w-full" style="transform: {`translateX(${offset}px)`}">
    <slot />
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let speed: number = 1;
@prop export let hoverSpeed: number = 1;
@prop export let shadow: boolean = false;
-->
