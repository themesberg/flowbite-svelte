<script lang="ts">
  import DocBadge from './DocBadge.svelte';
  export let items: string[] = [];
</script>

<div class="flex flex-wrap gap-2">
  {#each items as item}
    <DocBadge large>{item}</DocBadge>
  {/each}
</div>
