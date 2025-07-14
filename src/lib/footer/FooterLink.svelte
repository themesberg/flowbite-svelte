<script lang="ts">
  import { footerLink, type FooterLinkTheme } from ".";
  import { type FooterLinkProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, liClass, aClass, href, ...restProps }: FooterLinkProps = $props();

  const theme = getTheme("footerLink");

  const { base, link } = footerLink();
</script>

<li class={cn(base(), liClass, (theme as FooterLinkTheme)?.base)}>
  <a {...restProps} {href} class={cn(link(), aClass, (theme as FooterLinkTheme)?.link)}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L662)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop ...restProps
-->
