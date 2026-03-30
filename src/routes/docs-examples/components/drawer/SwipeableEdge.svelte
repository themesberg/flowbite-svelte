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
  <DrawerHandle onclick={() => (open = !open)} class="hover:bg-neutral-tertiary h-14">
    <h5 id="drawer-swipe-label" class="text-body inline-flex items-center gap-2 text-base font-medium">
      <GridPlusSolid />Add widget
    </h5>
  </DrawerHandle>

  <div class="mt-16 grid grid-cols-3 gap-4 lg:grid-cols-4">
    {#each widgets as { icon: Icon, name }}
      <div class="rounded-base bg-neutral-tertiary hover:bg-neutral-tertiary-medium cursor-pointer p-4">
        <div class="bg-neutral-quaternary mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full p-2">
          <Icon class="text-body inline h-5 w-5" />
        </div>
        <div class="text-body text-center font-medium">{name}</div>
      </div>
    {/each}
  </div>
</Drawer>
