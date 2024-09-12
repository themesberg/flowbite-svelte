<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
  let dropdownRight = uiHelpers();
  let dropdownRightStatus = $state(false);
  let closeDropdownRight = dropdownRight.close;
  $effect(() => {
    dropdownRightStatus = dropdownRight.isOpen;
  });
</script>

<div class="flex h-[160px] items-center justify-center">
  <Button onclick={dropdownRight.toggle}>Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownRightStatus} closeDropdown={closeDropdownRight} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[80px] left-[10px]">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>
