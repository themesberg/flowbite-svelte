<script lang="ts">
  import clsx from "clsx";
  import { indicator, type IndicatorProps as Props } from "./index";

  let { children, color = "primary", cornerStyle = "circular", size = "md", border = false, placement, offset = true, class: className, ...restProps }: Props = $props();

  let hasChildren = !!children;
  const { base } = $derived(
    indicator({
      color,
      size,
      cornerStyle,
      border,
      placement,
      offset,
      hasChildren
    })
  );
</script>

<div {...restProps} class={base({ class: clsx(className) })}>
  {#if children}
    {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop color = "primary"
@prop cornerStyle = "circular"
@prop size = "md"
@prop border = false
@prop placement
@prop offset = true
@prop class: className
@prop ...restProps
-->
