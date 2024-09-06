<script>
  import { Avatar, Dropdown, DropdownHeader, DropdownFooter, DropdownUl, DropdownLi, DropdownDivider, uiHelpers } from 'svelte-5-ui-lib';
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    dropdownStatus = dropdown.isOpen;
  });
</script>