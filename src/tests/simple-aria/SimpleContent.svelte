<script lang="ts">
  import type { Snippet } from "svelte";
  import { getSimpleContext } from "./SimpleContext";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  const state = getSimpleContext();

  // Use $derived.by to explicitly track the getter
  let hidden = $derived.by(() => {
    if (!state) return true;
    return state.hidden;
  });
</script>

{#if !hidden}
  <div data-testid="content-visible">
    {@render children()}
  </div>
{:else}
  <div data-testid="content-hidden">
    {@render children()}
  </div>
{/if}
