<script lang="ts">
  import List from "$lib/typography/list/List.svelte";
  import Li from "$lib/typography/list/Li.svelte";
</script>

<List data-testid="icon-list">
  <Li icon={true} data-testid="icon-li">Item with icon</Li>
  <Li icon={true}>Another icon item</Li>
</List>
