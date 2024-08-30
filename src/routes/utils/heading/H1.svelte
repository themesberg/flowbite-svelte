<script lang="ts">
  import Anchor from '../anchor/Anchor.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string | undefined | null;
  }
  let { children, class: className = 'group relative' }: Props = $props();
</script>

<Anchor tag="h1" class={className}>
  {@render children()}
</Anchor>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop class: h1Class = 'group relative'
-->
