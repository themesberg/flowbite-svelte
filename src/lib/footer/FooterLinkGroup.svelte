<script lang="ts">
  import { type FooterLinkGroupProps as Props, footerLinkGroup } from ".";

  let { class: ulClass, children, ...restProps }: Props = $props();
  const base = $derived(footerLinkGroup({ class: ulClass }));
</script>

<ul {...restProps} class={base}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop class: ulClass
@prop children
@prop ...restProps
-->
