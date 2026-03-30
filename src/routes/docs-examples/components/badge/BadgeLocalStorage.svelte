<script lang="ts">
  import { Badge } from "$lib";
  import { Button } from "flowbite-svelte";
  import { onMount } from "svelte";

  const STORAGE_KEY = "example-badge-hidden";

  let badgeVisible = $state(true);
  let hasSeen = $state(false);

  onMount(() => {
    const exists = localStorage.getItem(STORAGE_KEY);
    hasSeen = Boolean(exists);
    badgeVisible = !exists; // hide if localStorage says so
  });

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    badgeVisible = false;
    hasSeen = true;
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    badgeVisible = true;
    hasSeen = false;
  }
</script>

{#if hasSeen}
  <div class="text-body mb-3 flex items-center gap-3 text-sm">
    <span>
      Badge is hidden because you dismissed it earlier. Remove <code>{STORAGE_KEY}</code>
      from localStorage or click Reset:
    </span>
    <Button size="xs" onclick={reset}>Reset</Button>
  </div>
{/if}

{#if badgeVisible}
  <Badge dismissable onclose={dismiss} class="cursor-pointer">Example badge (click × to dismiss)</Badge>
{/if}
