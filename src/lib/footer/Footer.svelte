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
## Type
FooterProps
## Props
@prop children
@prop footerType = "default"
@prop class: className
@prop ...restProps
-->
