<script lang="ts">
  import List from "$lib/typography/list/List.svelte";
  import Li from "$lib/typography/list/Li.svelte";
</script>

<List isContenteditable={true} data-testid="contenteditable-list">
  <Li>Editable item</Li>
  <Li>Another item</Li>
</List>
