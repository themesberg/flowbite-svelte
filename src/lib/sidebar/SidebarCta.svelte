<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { sidebarcta } from ".";
  import type { SidebarCtaProps } from "$lib/types";

  let { children, icon, divClass, spanClass, label, class: className, ...restProps }: SidebarCtaProps = $props();
  const { base, div, span } = $derived(sidebarcta());
</script>

<div {...restProps} id="dropdown-cta" class={twMerge(base(), clsx(className))} role="alert">
  <div class={twMerge(div(), clsx(divClass))}>
    <span class={twMerge(span(), clsx(spanClass))}>{label}</span>
    {#if icon}
      {@render icon()}
    {/if}
  </div>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarCtaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1377)
## Props
@prop children
@prop icon
@prop divClass
@prop spanClass
@prop label
@prop class: className
@prop ...restProps
-->
