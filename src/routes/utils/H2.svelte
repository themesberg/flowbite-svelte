<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { Heading } from '$lib';
  import { h2Cls } from './theme';
  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: Snippet;
  }
  let { children, class: className }: Props = $props();
  const base = $derived(h2Cls({ className }));
</script>

<Heading tag="h2" class={base}>
  {@render children()}
</Heading>
