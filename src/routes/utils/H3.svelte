<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Heading } from '$lib';
  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<Heading tag="h3" class="my-4 text-xl">
  {@render children()}
</Heading>
