<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Heading } from '$lib';
  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<Heading tag="h1" class="my-8 text-3xl">
  {@render children()}
</Heading>
