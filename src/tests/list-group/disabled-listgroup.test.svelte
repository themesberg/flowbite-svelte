<script lang="ts">
  import { Listgroup, ListgroupItem } from "$lib";
</script>

<div data-testid="disabled-listgroup">
  <Listgroup active>
    <ListgroupItem active>Normal Item</ListgroupItem>
    <ListgroupItem active disabled>Disabled Item</ListgroupItem>
    <ListgroupItem active>Another Item</ListgroupItem>
  </Listgroup>
</div>
