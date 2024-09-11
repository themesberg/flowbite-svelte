<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let dropdownBottom = uiHelpers();
  let dropdownBottomStatus = $state(false);
  let closeDropdownBottom = dropdownBottom.close;
  $effect(() => {
    dropdownBottomStatus = dropdownBottom.isOpen;
  })
</script>

<div class="flex h-[360px] items-start justify-center">
  <Button onclick={dropdownBottom.toggle}>Dropdown bottom<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownBottomStatus} closeDropdown={closeDropdownBottom} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[190px] top-[40px]">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>