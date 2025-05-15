<script lang="ts">
  import clsx from "clsx";
  import { sidebarcta } from ".";
  import type { SidebarCtaProps } from "$lib/types";

  let { children, icon, divClass, spanClass, label, class: className, ...restProps }: SidebarCtaProps = $props();
  const { base, div, span } = $derived(sidebarcta());
</script>

<div {...restProps} id="dropdown-cta" class={base({ class: clsx(className) })} role="alert">
  <div class={div({ class: divClass })}>
    <span class={span({ class: spanClass })}>{label}</span>
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
[SidebarCtaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1290)
## Props
@prop children
@prop icon
@prop divClass
@prop spanClass
@prop label
@prop class: className
@prop ...restProps
-->
