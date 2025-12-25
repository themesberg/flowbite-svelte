<script lang="ts">
  import { MegaMenu, Button } from "$lib";

  const items = [{ name: "Full Width Item" }];
</script>

<Button data-testid="full-mega-menu-trigger" id="full-mega-menu-trigger-btn">Open Full Menu</Button>
<MegaMenu {items} full triggeredBy="#full-mega-menu-trigger-btn">
  {#snippet children({ item })}
    <a href="/">{item.name}</a>
  {/snippet}
  {#snippet extra()}
    <div>Extra Content</div>
  {/snippet}
</MegaMenu>
