<script lang="ts">
  import Anchor from '../anchor/Anchor.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string;
  }
  let { children, class: className = 'group relative' }: Props = $props();
</script>

<Anchor tag="h3" class={className}>
  {@render children()}
</Anchor>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop class: h3Class = 'group relative'
-->
