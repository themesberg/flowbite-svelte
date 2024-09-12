<script lang="ts">
  import { Button, Dropdown, DropdownDivider, DropdownHeader, DropdownFooter, DropdownUl, DropdownLi, uiHelpers } from 'svelte-5-ui-lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { blur, fly, slide, scale } from 'svelte/transition';
  import { sineIn, linear } from 'svelte/easing';

  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  let dropdownA = uiHelpers();
  let dropdownAStatus = $state(false);
  let closeDropdownA = dropdownA.close;

  $effect(() => {
    dropdownAStatus = dropdownA.isOpen;
  });
</script>
