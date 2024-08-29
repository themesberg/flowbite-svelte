<script>
  import { Avatar, Dropdown, DropdownItem, DropdownDivider, uiHelpers } from 'svelte-5-ui-lib';
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    dropdownStatus = dropdown.isOpen;
  });
</script>