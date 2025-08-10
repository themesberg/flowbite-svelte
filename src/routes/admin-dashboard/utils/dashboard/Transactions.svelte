<script lang="ts">
  import { Button, Card, Checkbox, Dropdown, DropdownItem, Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Datepicker } from 'flowbite-svelte';
  import { ChevronDownOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
  import { StatusBadge, CreditCard, DateRangeSelector } from 'flowbite-svelte-admin-dashboard';

  let { dark } = $props<{ dark: boolean }>();

  // Define the state type to match StatusBadge requirements
  type StatusState = 'completed' | 'cancelled' | 'inreview' | 'inprogress';

  const headers = ['Transaction', 'Date & Time', 'Amount', 'Reference number', 'Payment method', 'Status'];

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });

  // Update the type definition to include the specific StatusState type
  const data: [string, string, string, string, number, StatusState][] = [
    ['Payment from Bonnie Green', 'Apr 23 ,2021', '$2300', '0047568936', 475, 'completed'],
    ['Payment refund to #00910', 'Apr 23 ,2021', '-$670', '0078568936', 924, 'completed'],
    ['Payment failed from #087651', 'Apr 18 ,2021', '$234', '0088568934', 826, 'cancelled'],
    ['Payment from Lana Byrd', 'Apr 15 ,2021', '$5000', '0018568911', 634, 'inprogress'],
    ['Payment from Jese Leos', 'Apr 15 ,2021', '$2300', '0045568939', 163, 'completed'],
    ['Refund to THEMESBERG LLC', 'Apr 11 ,2021', '-$560', '0031568935', 443, 'inreview'],
    ['Payment from Lana Lysle', 'Apr 6 ,2021', '$1437', '0023568934', 223, 'inreview'],
    ['Payment to Joseph Mcfall', 'Apr 1 ,2021', '$980', '0057568935', 362, 'completed'],
    ['Payment from Alphabet', 'Mar 23 ,2021', '$11,436', '00836143841', 772, 'inprogress'],
    ['Payment from Bonnie Green', 'Mar 23 ,2021', '$560', '0031568935', 123, 'completed']
  ];
</script>

<Card size="xl" class="max-w-none p-4 shadow-sm sm:p-6">
  <div class="items-center justify-between lg:flex">
    <div class="mt-px mb-4 lg:mb-0">
      <Heading tag="h3" class="mb-2 -ml-0.25 text-xl font-semibold dark:text-white">Transactions</Heading>
      <span class="text-base font-normal text-gray-500 dark:text-gray-300"> This is a list of latest transactions </span>
    </div>
    <div class="items-center justify-between gap-3 space-y-4 sm:flex sm:space-y-0">
      <div class="flex items-center">
        <Button color="alternative" class="w-fit px-4 py-2 whitespace-nowrap">
          Filter by status
          <ChevronDownOutline size="lg" />
        </Button>
        <Dropdown simple class="w-48 space-y-2 text-sm" placement="bottom-start">
          <DropdownItem><Checkbox class="accent-primary-600">Completed (56)</Checkbox></DropdownItem>
          <DropdownItem><Checkbox checked>Cancelled (56)</Checkbox></DropdownItem>
          <DropdownItem><Checkbox class="accent-primary-600">In progress (56)</Checkbox></DropdownItem>
          <DropdownItem><Checkbox checked>In review (97)</Checkbox></DropdownItem>
        </Dropdown>
      </div>
      <div class="flex items-center space-x-4">
        <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="pink" inputClass="w-64" />
      </div>
    </div>
  </div>
  <Table hoverable={true} striped class="mt-6 min-w-full divide-y divide-gray-200 dark:divide-gray-600">
    <TableHead class="bg-gray-50 dark:bg-gray-700">
      {#each headers as header}
        <TableHeadCell class="p-4 font-normal whitespace-nowrap">{header}</TableHeadCell>
      {/each}
    </TableHead>
    <TableBody>
      {#each data as [name, date, amount, reference, method, status]}
        <TableBodyRow>
          <TableBodyCell class="px-4 font-normal">{name}</TableBodyCell>
          <TableBodyCell class="px-4 font-normal text-gray-500 dark:text-gray-300">
            {date}
          </TableBodyCell>
          <TableBodyCell class="px-4">{amount}</TableBodyCell>
          <TableBodyCell class="px-4 font-normal  text-gray-500 dark:text-gray-300">
            {reference}
          </TableBodyCell>
          <TableBodyCell class="flex items-center gap-2 px-4 font-normal  text-gray-500 dark:text-gray-300">
            <CreditCard number={method} /> <span>••• {method}</span>
          </TableBodyCell>
          <TableBodyCell class="px-4 font-normal">
            <StatusBadge state={status} {dark} />
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
  <div class="-mb-1 flex items-center justify-between pt-3 sm:pt-6">
    <DateRangeSelector />
    <a href="#top" class="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-100 sm:text-sm dark:hover:bg-gray-700">
      Transactions report <ChevronRightOutline size="lg" />
    </a>
  </div>
</Card>
