<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Avatar, uiHelpers } from '$lib';
  import { BellSolid, EyeSolid } from 'flowbite-svelte-icons';
  let dropdownNotification = uiHelpers();
  let dropdownNotificationStatus = $state(false);
  let closeDropdownNotification = dropdownNotification.close;
  $effect(() => {
    dropdownNotificationStatus = dropdownNotification.isOpen;
  })
</script>

<div class="flex h-[360px] items-start justify-center">
  <div id="bell" class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
    <BellSolid class="h-8 w-8" onclick={dropdownNotification.toggle} />
    <div class="relative flex">
      <div class="relative -top-2 end-4 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div>
    </div>
  </div>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownNotificationStatus} closeDropdown={closeDropdownNotification} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[230px] top-[30px] w-96">
      <DropdownHeader class="py-2 text-center font-bold">Notifications</DropdownHeader>
      <DropdownUl class="max-w-sm space-y-2 divide-y divide-gray-100 rounded p-2 shadow dark:divide-gray-700 dark:bg-gray-800">
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-1.webp" dot={{ color: 'gray' }} cornerStyle="rounded" />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>
              : "Hey, what's up? All set for the presentation?"
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div>
          </div>
        </DropdownLi>
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-2.webp" dot={{ color: 'red' }} cornerStyle="rounded" />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
              and
              <span class="font-medium text-gray-900 dark:text-white">5 others</span>
              started following you.
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">10 minutes ago</div>
          </div>
        </DropdownLi>
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-3.webp" dot={{ color: 'green' }} cornerStyle="rounded" />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
              and
              <span class="font-medium text-gray-900 dark:text-white">141 others</span>
              love your story. See it and view more stories.
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div>
          </div>
        </DropdownLi>
      </DropdownUl>
      <DropdownFooter class="-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
        <div class="inline-flex items-center">
          <EyeSolid class="me-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          View all
        </div>
      </DropdownFooter>
    </Dropdown>
  </div>
</div>