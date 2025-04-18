<script lang="ts">
  import { type FooterIconProps as Props, footerIcon } from ".";

  let { children, href, ariaLabel, class: aClass, ...restProps }: Props = $props();

  const aCls = $derived(footerIcon({ class: aClass }));
</script>

{#if href}
  <a {...restProps} {href} aria-label={ariaLabel} class={aCls}>
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop href
@prop ariaLabel
@prop class: aClass
@prop ...restProps
-->
