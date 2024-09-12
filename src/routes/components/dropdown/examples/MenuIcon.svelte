<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { DotsVerticalOutline } from 'flowbite-svelte-icons';
  let dropdownIcon = uiHelpers();
  let dropdownIconStatus = $state(false);
  let closeDropdownIcon = dropdownIcon.close;
  $effect(() => {
    dropdownIconStatus = dropdownIcon.isOpen;
  });
</script>

<div class="flex h-40 items-start justify-center">
  <DotsVerticalOutline onclick={dropdownIcon.toggle} class="dots-menu dark:text-white" />
  <div class="relative">
    <Dropdown dropdownStatus={dropdownIconStatus} closeDropdown={closeDropdownIcon} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[90px] top-[20px]">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>
