<script lang="ts">
  import DocBadge from "./DocBadge.svelte";
  let { items = [] } = $props();
  console.log("DocBadgeList - used indeed.");
</script>

<div class="flex flex-wrap gap-2">
  {#each items as item}
    <DocBadge large>{item}</DocBadge>
  {/each}
</div>
