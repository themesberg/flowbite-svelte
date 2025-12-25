<script lang="ts">
  import { Listgroup, ListgroupItem } from "$lib";
</script>

<div data-testid="active-listgroup">
  <Listgroup active>
    <ListgroupItem active>Regular Item</ListgroupItem>
    <ListgroupItem active>Clickable Item</ListgroupItem>
    <ListgroupItem active>Another Item</ListgroupItem>
  </Listgroup>
</div>
