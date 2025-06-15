<script lang="ts">
  import { footerLinkGroup } from ".";
  import { type FooterLinkGroupProps, cn } from "$lib";

  let { class: className, children, ...restProps }: FooterLinkGroupProps = $props();
</script>

<ul {...restProps} class={cn(footerLinkGroup(), className)}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L660)
## Props
@prop class: className
@prop children
@prop ...restProps
-->
