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
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:footerType: any = "default";
@props:class: string;
-->
