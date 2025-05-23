<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { smartwatch } from ".";
  import type { SmartwatchProps } from "$lib/types";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: SmartwatchProps = $props();

  const { div, top, rightTop, rightBot, bot, slot } = smartwatch();
</script>

<div {...restProps}>
  <div class={twMerge(div(), clsx(divClass))}></div>
  <div class={twMerge(top(), clsx(div2Class))}>
    <div class={twMerge(rightTop(), clsx(div3Class))}></div>
    <div class={twMerge(rightBot(), clsx(div4Class))}></div>
    <div class={twMerge(slot(), clsx(div5Class))}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
  <div class={twMerge(bot(), clsx(div6Class))}></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L563)
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
