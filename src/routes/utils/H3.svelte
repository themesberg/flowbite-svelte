<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { Heading } from '$lib';
  import { h3Cls } from './theme';
  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: Snippet;
  }
  let { children, class: className }: Props = $props();
  const base = $derived(h3Cls({ className }));
</script>

<Heading tag="h3" class={base}>
  {@render children()}
</Heading>
