<script lang="ts">
  import { Drawer, CardPlaceholder, Button, Sidebar, SidebarWrapper, SidebarDropdownWrapper, SidebarGroup, SidebarItem } from "flowbite-svelte";
  import { ChartPieSolid, CartSolid, GridSolid, MailBoxSolid, UsersSolid, ShoppingBagSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let open2 = $state(false);
  let labelClass = "flex-1 ms-3 whitespace-nowrap";
  let iconClass = "text-body group-hover:text-heading h-5 w-5 transition duration-75";
</script>

<div class="text-center">
  <Button onclick={() => (open2 = true)}>Show navigation</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer bind:open={open2} class="bg-neutral-tertiary w-64 p-0">
  <h5 class="text-heading px-6 py-4 text-base font-semibold uppercase">Menu</h5>
  <Sidebar disableBreakpoints={true} class="top-16">
    <SidebarWrapper class="overflow-y-auto rounded-sm px-3 py-0">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartPieSolid class={iconClass} />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce">
          {#snippet icon()}
            <CartSolid class={iconClass} />
          {/snippet}
          <SidebarItem label="Products" />
          <SidebarItem label="Billing" />
          <SidebarItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" classes={{ label: labelClass }}>
          {#snippet icon()}
            <GridSolid class={iconClass} />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-neutral-quaternary text-heading ms-3 inline-flex items-center justify-center rounded-full px-2 text-sm font-medium">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" classes={{ label: labelClass }}>
          {#snippet icon()}
            <MailBoxSolid class={iconClass} />
          {/snippet}
          {#snippet subtext()}
            <span class="text-fg-danger-strong bg-danger-soft border-danger-subtle ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full border p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Users">
          {#snippet icon()}
            <UsersSolid class={iconClass} />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Products">
          {#snippet icon()}
            <ShoppingBagSolid class={iconClass} />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign In">
          {#snippet icon()}
            <ArrowRightToBracketOutline class={iconClass} />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign Up">
          {#snippet icon()}
            <EditOutline class={iconClass} />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
