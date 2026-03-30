<script lang="ts">
  import { Drawer, CardPlaceholder, Button, Sidebar, SidebarWrapper, SidebarDropdownWrapper, SidebarGroup, SidebarItem } from "flowbite-svelte";
  import { ChartPieSolid, CartSolid, GridSolid, MailBoxSolid, UsersSolid, ShoppingBagSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let open2 = $state(false);
  let labelClass = "flex-1 ms-3 whitespace-nowrap";
</script>

<div class="text-center">
  <Button onclick={() => (open2 = true)}>Show navigation</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer bind:open={open2} class="w-64 bg-neutral-tertiary p-0">
  <h5 class="px-6 py-4 text-base font-semibold text-body uppercase">Menu</h5>
  <Sidebar disableBreakpoints={true} class="top-16">
    <SidebarWrapper class="overflow-y-auto rounded-sm px-3 py-0">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartPieSolid class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce">
          {#snippet icon()}
            <CartSolid class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
          <SidebarItem label="Products" />
          <SidebarItem label="Billing" />
          <SidebarItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" classes={{ label: labelClass }}>
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-neutral-quaternary px-2 text-sm font-medium text-heading">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" classes={{ label: labelClass }}>
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Users">
          {#snippet icon()}
            <UsersSolid class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Products">
          {#snippet icon()}
            <ShoppingBagSolid class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign In">
          {#snippet icon()}
            <ArrowRightToBracketOutline class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign Up">
          {#snippet icon()}
            <EditOutline class="h-5 w-5 text-body transition duration-75 group-hover:text-heading" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
