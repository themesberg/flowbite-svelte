<script lang="ts">
  import { type FooterProps as Props, footer } from '.';

  let {
    children,
    footerType = 'default',
    class: className,
    ...restProps
  }: Props = $props();

  const footerCls = $derived(footer({ footerType, className }));
</script>

<footer {...restProps} class={footerCls}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop footerType = 'default'
@prop class: className
@prop ...restProps
-->
