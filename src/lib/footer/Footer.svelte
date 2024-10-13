<script lang="ts">
  import { type FooterProps as Props, footer } from ".";

  let { children, footerType = "default", class: className, ...restProps }: Props = $props();

  const footerCls = $derived(footer({ footerType, className }));
</script>

<footer {...restProps} class={footerCls}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:footerType: "default" | "sticky" | "sitemap" | "socialmedia" | "logo" | undefined = "default";
@props:class: string;
-->
