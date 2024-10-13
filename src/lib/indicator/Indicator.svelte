<script lang="ts">
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

<div {...restProps} class={base({ className })}>
  {#if children}
    {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:color: "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined = "primary";
@props:cornerStyle: "rounded" | "circular" = "circular";
@props:size: "md" | "sm" | "lg" | "xl" | "xs" | undefined = "md";
@props:border: boolean = false;
@props:placement: "top-left" | "top-center" | "top-right" | "center-left" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right" | "default" | "center" | undefined | undefined;
@props:offset: boolean = true;
@props:class: string;
-->
