<script lang="ts">
  import { footerLink } from ".";
  import type { FooterLinkProps } from "$lib/types";

  let { children, liClass, aClass, href, ...restProps }: FooterLinkProps = $props();
  const { base, link } = $derived(footerLink());
</script>

<li class={base({ class: liClass })}>
  <a {...restProps} {href} class={link({ class: aClass })}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L636)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop ...restProps
-->
