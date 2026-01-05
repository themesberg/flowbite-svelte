<script lang="ts">
  import List from "$lib/typography/list/List.svelte";
  import Li from "$lib/typography/list/Li.svelte";
</script>

<List class="custom-list-class" data-testid="custom-class-list">
  <Li class="custom-li-class" data-testid="custom-li">Styled item</Li>
</List>
