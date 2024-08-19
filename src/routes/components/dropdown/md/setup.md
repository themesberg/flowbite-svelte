<script lang="ts">
  import { Button, Dropdown, DropdownDivider, DropdownHeader, DropdownFooter, DropdownUl, DropdownLi, uiHelpers } from 'svelte-5-ui-lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';

  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
</script>