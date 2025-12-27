<script lang="ts">
  import { MegaMenu, Button } from "$lib";

  const items = [
    { name: "Custom 1", id: 1 },
    { name: "Custom 2", id: 2 }
  ];
</script>

<Button data-testid="custom-mega-menu-trigger" id="custom-mega-menu-trigger-btn">Custom Menu</Button>
<MegaMenu {items} triggeredBy="#custom-mega-menu-trigger-btn">
  {#snippet children({ item, index })}
    <div data-testid="custom-menu-item-{index}">
      {item.name} (ID: {item.id})
    </div>
  {/snippet}
</MegaMenu>
