<script lang="ts">
  ...
  const closeAllMultilevel = () => {
    dropdownMultiLevel.close();
    dropdownMultiLevel2.close();
  };
</script>

 <Button onclick={dropdownMultiLevel.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownMultiLevelStatus}
    closeDropdown={closeDropdownMultiLevel}
    {transitionParams}
    class="absolute top-[40px] -left-[150px] overflow-visible"
  >
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <button onclick={dropdownMultiLevel2.toggle} class="flex p-2 pl-4">
        Dropdown<ChevronRightOutline class="w-6 h-6 ms-2 text-primary-700 dark:text-white" /></button>
      <div class="relative">
        <Dropdown
        dropdownStatus={dropdownMultiLevelStatus2}
        closeDropdown={closeAllMultilevel}
        {transitionParams}
        class="absolute -top-[60px] left-[120px]"
        >
          <DropdownUl class="z-100">
            <DropdownLi href="/">Home</DropdownLi>
            <DropdownLi href="/components/footer">Footer</DropdownLi>
            <DropdownLi href="/components">Alert</DropdownLi>
          </DropdownUl>
        </Dropdown>
      </div>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>