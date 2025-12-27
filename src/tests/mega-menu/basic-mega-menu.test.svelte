<script lang="ts">
  import { MegaMenu, Button } from "$lib";

  const items = [{ name: "Menu Item 1" }, { name: "Menu Item 2" }, { name: "Menu Item 3" }];
</script>

<Button data-testid="mega-menu-trigger" id="mega-menu-trigger-btn">Open Menu</Button>
<MegaMenu {items} triggeredBy="#mega-menu-trigger-btn">
  {#snippet children({ item })}
    <a href="/">{item.name}</a>
  {/snippet}
</MegaMenu>
