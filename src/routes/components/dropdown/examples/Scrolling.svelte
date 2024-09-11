<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, DropdownFooter, Avatar, uiHelpers } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let dropdownScroll = uiHelpers();
  let dropdownScrollStatus = $state(false);
  let closeDropdownScroll = dropdownScroll.close;
  $effect(() => {
    dropdownScrollStatus = dropdownScroll.isOpen;
  })
</script>

<div class="flex h-60 items-start justify-center">
  <Button onclick={dropdownScroll.toggle}>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownScrollStatus} closeDropdown={closeDropdownScroll} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[160px] top-[40px] w-48">
      <DropdownUl class="h-40 w-52 overflow-y-auto py-1">
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Robert Wall</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Joseph Mcfall</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Leslie Livingston</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
      </DropdownUl>
      <DropdownFooter class="overflow-hidden rounded-b-lg py-1">
        <a href="/" class="-mb-1 flex items-center bg-gray-50 px-3 py-2 text-sm font-medium text-primary-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-primary-500 dark:hover:bg-gray-600">
          <ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />Add new user
        </a>
      </DropdownFooter>
    </Dropdown>
  </div>
</div>