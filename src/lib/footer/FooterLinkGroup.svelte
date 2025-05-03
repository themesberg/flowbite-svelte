<script lang="ts">
  import { footerLinkGroup } from ".";
  import type { FooterLinkGroupProps } from "$lib/types";

  let { class: ulClass, children, ...restProps }: FooterLinkGroupProps = $props();
  const base = $derived(footerLinkGroup({ class: ulClass }));
</script>

<ul {...restProps} class={base}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L630)
## Props
@prop class: ulClass
@prop children
@prop ...restProps
-->
