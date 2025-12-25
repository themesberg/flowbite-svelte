<script lang="ts">
  import { Listgroup, ListgroupItem } from "$lib";

  const items = [
    { name: "Custom 1", value: 1 },
    { name: "Custom 2", value: 2 }
  ];
</script>

<Listgroup {items} class="custom-list-class">
  {#snippet children(item)}
    <ListgroupItem data-testid="custom-item-{item.value}">
      {item.name} - Value: {item.value}
    </ListgroupItem>
  {/snippet}
</Listgroup>
