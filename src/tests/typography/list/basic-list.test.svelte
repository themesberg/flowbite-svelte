<script lang="ts">
  import List from "$lib/typography/list/List.svelte";
  import Li from "$lib/typography/list/Li.svelte";
</script>

<List data-testid="basic-list">
  {#snippet children()}
    <Li>Item one</Li>
    <Li>Item two</Li>
    <Li>Item three</Li>
  {/snippet}
</List>
