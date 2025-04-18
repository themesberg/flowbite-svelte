<script lang="ts">
  import clsx from "clsx";
  import { type SidebarCtaProps as Props, sidebarcta } from ".";
  let { children, icon, divClass, spanClass, label, class: className, ...restProps }: Props = $props();
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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop icon
@prop divClass
@prop spanClass
@prop label
@prop class: className
@prop ...restProps
-->
