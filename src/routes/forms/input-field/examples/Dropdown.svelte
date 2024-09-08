<script lang="ts">
  import { Button, ButtonGroup, Dropdown, DropdownLi, DropdownUl, Input, uiHelpers } from '$lib';
  import { sineIn } from 'svelte/easing';
  import { ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
</script>

<div class="h-48">
  <ButtonGroup class="w-full">
    <Button onclick={dropdown.toggle} class="flex-shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
      All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
    </Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[160px] top-[40px]">
        <DropdownUl>
          <DropdownLi href="/">Shopping</DropdownLi>
          <DropdownLi href="/">Images</DropdownLi>
          <DropdownLi href="/">News</DropdownLi>
          <DropdownLi href="/">Finance</DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
    <Input placeholder="Search" />
    <Button color="primary" class="!p-2.5" type="submit">
      <SearchOutline class="h-5 w-5" />
    </Button>
  </ButtonGroup>
</div>
