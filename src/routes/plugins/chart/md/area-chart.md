<Card>
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
    </div>
    <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <ChevronRightSolid class="w-3 h-3 ms-1" />
    </div>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button onclick={toggle} btnclass="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownSolid class="w-2.5 m-2.5 ms-1.5" /></Button>
      <div class="relative">
        <Dropdown divclass="absolute top-[5px] -left-[180px]" {isOpen}>
          {#snippet children()}
          <DropdownItem href='/'>Yesterday</DropdownItem>
          <DropdownItem href='/'>Today</DropdownItem>
          <DropdownItem href='/'>Last 7 days</DropdownItem>
          <DropdownItem href='/'>Last 30 days</DropdownItem>
          <DropdownItem href='/'>Last 90 days</DropdownItem>
          {/snippet}
        </Dropdown>
      </div>
      <A href="/" aclass="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Users Report
        <ChevronRightSolid class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>