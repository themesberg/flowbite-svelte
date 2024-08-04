<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';
  import { type FooterProps as Props, footerVariants } from '.'

  // interface Props extends HTMLAttributes<HTMLElement> {
  //   children: Snippet;
  //   footerType?: 'sitemap' | 'default' | 'logo' | 'socialmedia' | undefined;
  //   class?: string | undefined;
  // }

  let {
    children,
    footerType = 'default',
    class: className,
    ...attributes
  }: Props = $props();

  const footerCls = $derived(footerVariants({footerType, className}));
</script>

<footer {...attributes} class={footerCls}>
  {@render children()}
</footer>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop footerType = 'default'
@prop class: footerclass
@prop ...attributes
-->
