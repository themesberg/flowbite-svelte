<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { ChevronLeftOutline } from 'flowbite-svelte-icons';
  let dropdownLeft = uiHelpers();
  let dropdownLeftStatus = $state(false);
  let closeDropdownLeft = dropdownLeft.close;
  $effect(() => {
    dropdownLeftStatus = dropdownLeft.isOpen;
  });
</script>

<div class="flex h-[160px] items-center justify-center">
  <Button onclick={dropdownLeft.toggle}><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownLeftStatus} closeDropdown={closeDropdownLeft} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[80px] right-[175px]">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>
