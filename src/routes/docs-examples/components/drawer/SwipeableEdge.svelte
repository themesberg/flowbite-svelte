<script lang="ts">
  import { Drawer, DrawerHandle, CardPlaceholder } from "flowbite-svelte";
  import { AdjustmentsVerticalSolid, ChartPieSolid, ClipboardListSolid, GridPlusSolid, ReceiptSolid, TableRowSolid, UsersSolid } from "flowbite-svelte-icons";

  let open = $state(false);
  let widgets = [
    { icon: ChartPieSolid, name: "Chart" },
    { icon: TableRowSolid, name: "Table" },
    { icon: ClipboardListSolid, name: "List" },
    { icon: ReceiptSolid, name: "Ticket" },
    { icon: UsersSolid, name: "Users" },
    { icon: AdjustmentsVerticalSolid, name: "Custom" }
  ];
</script>

<div class="ms-12 text-center">
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer bind:open offset="52px" placement="bottom" class="rounded-t-lg" aria-labelledby="drawer-swipe-label">
  <DrawerHandle onclick={() => (open = !open)} class="h-14 hover:bg-neutral-tertiary">
    <h5 id="drawer-swipe-label" class="inline-flex items-center gap-2 text-base font-medium text-body">
      <GridPlusSolid />Add widget
    </h5>
  </DrawerHandle>

  <div class="mt-16 grid grid-cols-3 gap-4 lg:grid-cols-4">
    {#each widgets as { icon: Icon, name }}
      <div class="cursor-pointer rounded-base bg-neutral-tertiary p-4 hover:bg-neutral-tertiary-medium">
        <div class="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-neutral-quaternary p-2">
          <Icon class="inline h-5 w-5 text-body" />
        </div>
        <div class="text-center font-medium text-body">{name}</div>
      </div>
    {/each}
  </div>
</Drawer>
