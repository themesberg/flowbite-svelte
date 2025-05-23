<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { tablet } from ".";
  import type { TabletProps } from "$lib/types";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: TabletProps = $props();

  const { div, leftTop, leftMid, leftBot, right, slot } = tablet();
</script>

<div {...restProps} class={twMerge(div(), clsx(divClass))}>
  <div class={twMerge(leftTop(), clsx(div2Class))}></div>
  <div class={twMerge(leftMid(), clsx(div3Class))}></div>
  <div class={twMerge(leftBot(), clsx(div4Class))}></div>
  <div class={twMerge(right(), clsx(div5Class))}></div>
  <div class={twMerge(slot(), clsx(div6Class))}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabletProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L573)
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop div5Class
@prop div6Class
@prop ...restProps
-->
