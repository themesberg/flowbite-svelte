<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { ChevronDownOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
  let dropdownMultiLevel = uiHelpers();
  let dropdownMultiLevelStatus = $state(false);
  let closeDropdownMultiLevel = dropdownMultiLevel.close;
  let dropdownMultiLevel2 = uiHelpers();
  let dropdownMultiLevelStatus2 = $state(false);
  const closeAllMultilevel = () => {
    dropdownMultiLevel.close();
    dropdownMultiLevel2.close();
  };
  $effect(() => {
    dropdownMultiLevelStatus = dropdownMultiLevel.isOpen;
    dropdownMultiLevelStatus2 = dropdownMultiLevel2.isOpen;
  })
</script>

<div class="flex h-60 items-start justify-center">
  <Button onclick={dropdownMultiLevel.toggle}>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownMultiLevelStatus} closeDropdown={closeDropdownMultiLevel} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[150px] top-[40px] overflow-visible">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <button onclick={dropdownMultiLevel2.toggle} class="flex p-2 pl-4">Dropdown<ChevronRightOutline class="ms-2 h-6 w-6 text-primary-700 dark:text-white" /></button>
        <div class="relative">
          <Dropdown dropdownStatus={dropdownMultiLevelStatus2} closeDropdown={closeAllMultilevel} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[60px] left-[120px]">
            <DropdownUl class="z-100">
              <DropdownLi href="/">Home</DropdownLi>
              <DropdownLi href="/components/footer">Footer</DropdownLi>
              <DropdownLi href="/components/alert">Alert</DropdownLi>
            </DropdownUl>
          </Dropdown>
        </div>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components/button">Button</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>