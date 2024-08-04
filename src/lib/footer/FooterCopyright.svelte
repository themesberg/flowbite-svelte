<script lang="ts">
  import { type FooterCopyrightProps as Props, copyrightVariants } from '.';

  let {
    spanClass,
    aClass,
    href,
    by,
    copyrightMessage = 'All Rights Reserved.',
    year,
    ...attributes
  }: Props = $props();

  if (!year) year = new Date().getFullYear();
 
  const { base, link, bySpan } = $derived(copyrightVariants());
</script>

<span class={base({ class: spanClass })}>
  &copy; {year}
  {#if href}
    <a {...attributes} {href} class={link({ class: aClass })}>
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
@prop ...attributes
-->
