<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Heading } from '$lib';
  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<Heading tag="h2" class="my-6 text-2xl">
  {@render children()}
</Heading>
