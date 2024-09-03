<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { Heading } from '$lib';
  import { h1Cls } from './theme';
  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: Snippet;
  }
  let { children, class: className }: Props = $props();
  const base = $derived(h1Cls({ className }));
</script>

<Heading tag="h1" class={base}>
  {@render children()}
</Heading>
