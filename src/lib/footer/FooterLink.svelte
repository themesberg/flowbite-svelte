<script lang="ts">
  import { type FooterLinkProps as Props, footerLink } from ".";

  let { children, liClass, aClass, href, ...restProps }: Props = $props();
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
## Props
@props: children: any;
@props:liClass: any;
@props:aClass: any;
@props:href: any;
-->
