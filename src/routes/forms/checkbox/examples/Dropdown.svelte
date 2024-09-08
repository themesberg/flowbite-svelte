<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownHeader, DropdownUl, Search, Checkbox, uiHelpers } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
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

<div class="h-56">
  <div class="flex justify-center">
    <Button onclick={dropdown.toggle}>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[190px] top-[45px] w-52 overflow-y-auto p-2 pb-3 text-sm">
        <div class="relative">
          <DropdownHeader>
            <div class="p-0">
              <Search size="md" class="pl-8" />
            </div>
          </DropdownHeader>
          <DropdownUl>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
              <Checkbox>Robert Gouth</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
              <Checkbox>Bonnie Green</Checkbox>
            </li>
          </DropdownUl>
        </div>
      </Dropdown>
    </div>
  </div>
</div>
