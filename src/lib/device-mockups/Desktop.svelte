<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { desktop } from ".";
  import type { MockupBaseProps } from "$lib/types";

  let { children, divClass, div2Class, div3Class, div4Class, ...restProps }: MockupBaseProps = $props();

  const { div, inner, bot, botUnder } = desktop();
</script>

<div {...restProps} class={twMerge(div(), clsx(divClass))}>
  <div class={twMerge(inner(), clsx(div2Class))}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div class={twMerge(bot(), clsx(div3Class))}></div>
<div class={twMerge(botUnder(), clsx(div4Class))}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MockupBaseProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L524)
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop ...restProps
-->
