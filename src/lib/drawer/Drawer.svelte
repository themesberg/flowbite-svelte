<script lang="ts">
  import type { ParamsType } from "$lib/types";
  import { fly } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import { type DrawerProps as Props, drawer } from ".";

  let { children, drawerStatus, closeDrawer, activateClickOutside = true, position, width, backdrop = true, backdropClass, placement = "left", class: className, params = { x: -320, duration: 200, easing: sineIn }, transition = fly, ...restProps }: Props = $props();

  const { base, backdrop: backdropCls } = $derived(
    drawer({
      position,
      placement,
      width,
      backdrop
    })
  );
</script>

{#if drawerStatus}
  {#if backdrop && activateClickOutside}
    <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={closeDrawer}></div>
  {:else if backdrop && !activateClickOutside}
    <div role="presentation" class={backdropCls({ class: backdropClass })}></div>
  {:else if !backdrop && activateClickOutside}
    <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeDrawer}></div>
  {/if}
  <div {...restProps} class={base({ className })} transition:transition={params as ParamsType} tabindex="-1">
    {@render children()}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:drawerStatus: boolean;
@props:closeDrawer: () => void;
@props:activateClickOutside: boolean = true;
@props:position: "fixed" | "absolute" | undefined;
@props:width: "default" | "full" | "half" | undefined;
@props:backdrop: boolean = true;
@props:backdropClass: string;
@props:placement: "left" | "right" | "top" | "bottom" | undefined = "left";
@props:class: string;
@props:params: ParamsType = { x: -320;
@props:duration: any;
@props:easing: any;
@props:transition: TransitionFunc = fly;
-->
