<script lang="ts">
  import { type FooterProps, footer } from ".";

  let { children, footerType = "default", class: className, ...restProps }: FooterProps = $props();

  const footerCls = $derived(footer({ footerType, className }));
</script>

<footer {...restProps} class={footerCls}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:footerType: any = "default";
@props:class: string;
-->
