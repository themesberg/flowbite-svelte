<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, Radio, Helper, uiHelpers } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let group3 = $state(2);
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
</script>

<div class="flex h-72 items-start justify-center">
<Button onclick={dropdown.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<div class="relative">
  <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute w-64 top-[40px] -left-[220px]">
    <DropdownUl>
      <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </li>
      <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </li>
      <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </li>
    </DropdownUl>
  </Dropdown>
</div>
</div>