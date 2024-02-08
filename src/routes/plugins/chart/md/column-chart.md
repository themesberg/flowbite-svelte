<Card>
  <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center">
      <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
        <UsersGroupSolid class="w-6 h-6 text-gray-500 dark:text-gray-400" />
      </div>
      <div>
        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">3.4k</h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p>
      </div>
    </div>
    <div>
      <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
        <ArrowUpSolid class="w-2.5 h-2.5 me-1.5" />
        42.5%
      </span>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <dl class="flex items-center">
      <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Money spent:</dt>
      <dd class="text-gray-900 text-sm dark:text-white font-semibold">$3,232</dd>
    </dl>
    <dl class="flex items-center justify-end">
      <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Conversion rate:</dt>
      <dd class="text-gray-900 text-sm dark:text-white font-semibold">1.2%</dd>
    </dl>
  </div>
  <Chart options={optionCol} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button onclick={toggle2} btnclass="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownSolid class="w-2.5 m-2.5 ms-1.5" /></Button>
      <div class="relative">
        <Dropdown divclass="absolute top-[5px] -left-[180px]" isOpen={isOpen2}>
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
        Leads Report
        <ChevronRightSolid class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>