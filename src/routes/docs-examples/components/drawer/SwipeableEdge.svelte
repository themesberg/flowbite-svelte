<script>
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
  <DrawerHandle onclick={() => (open = !open)} class="h-14 hover:bg-gray-50 dark:hover:bg-gray-700">
    <h5 id="drawer-swipe-label" class="inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-400">
      <GridPlusSolid />Add widget
    </h5>
  </DrawerHandle>

  <div class="mt-16 grid grid-cols-3 gap-4 lg:grid-cols-4">
    {#each widgets as { icon: Icon, name }}
      <div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
        <div class="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
          <Icon class="inline h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div class="text-center font-medium text-gray-500 dark:text-gray-400">{name}</div>
      </div>
    {/each}
  </div>
</Drawer>
