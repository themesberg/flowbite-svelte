<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { ChevronUpOutline } from 'flowbite-svelte-icons';
  let dropdownTop = uiHelpers();
  let dropdownTopStatus = $state(false);
  let closeDropdownTop = dropdownTop.close;
  $effect(() => {
    dropdownTopStatus = dropdownTop.isOpen;
  });
</script>

<div class="flex h-[200px] items-end justify-center">
  <Button onclick={dropdownTop.toggle}>Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownTopStatus} closeDropdown={closeDropdownTop} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[170px] -top-[220px]">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>
