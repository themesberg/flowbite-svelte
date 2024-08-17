<script lang="ts">
  import { type FooterCopyrightProps as Props, footerCopyright } from '.';

  let {
    spanClass,
    aClass,
    href,
    by,
    copyrightMessage = 'All Rights Reserved.',
    year,
    ...restProps
  }: Props = $props();

  if (!year) year = new Date().getFullYear();

  const { base, link, bySpan } = $derived(footerCopyright());
</script>

<span class={base({ class: spanClass })}>
  &copy; {year}
  {#if href}
    <a {...restProps} {href} class={link({ class: aClass })}>
      {by}
    </a>
  {:else}
    <span class={bySpan()}>{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop spanClass
@prop aClass
@prop href
@prop by
@prop copyrightMessage = 'All Rights Reserved.'
@prop year
@prop ...restProps
-->
