<script lang="ts">
  import { footerLink } from ".";
  import { type FooterLinkProps, cn } from "$lib";

  let { children, liClass, aClass, href, ...restProps }: FooterLinkProps = $props();
  const { base, link } = footerLink();
</script>

<li class={cn(base(), liClass)}>
  <a {...restProps} {href} class={cn(link(), aClass)}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L667)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop ...restProps
-->
