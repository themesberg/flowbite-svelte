<div id="bell" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400">
  <BellSolid class="w-8 h-8" onclick={dropdownNotification.toggle}/>
  <div class="flex relative">
    <div class="inline-flex relative -top-2 end-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
  </div>
</div>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownNotificationStatus}
    closeDropdown={closeDropdownNotification}
    {transitionParams}
    class="absolute top-[30px] -left-[230px] w-96"
  >
    <DropdownHeader class="text-center py-2 font-bold">Notifications</DropdownHeader>
    <DropdownUl class="p-2 space-y-2 max-w-sm rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
      <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Avatar src="/images/profile-picture-1.webp" dot={{ color: 'gray' }} rounded />
        <div class="ps-3 w-full">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>
            : "Hey, what's up? All set for the presentation?"
          </div>
          <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div>
        </div>
      </DropdownLi>
      <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Avatar src="/images/profile-picture-2.webp" dot={{ color: 'red' }} rounded />
        <div class="ps-3 w-full">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
            and
            <span class="font-medium text-gray-900 dark:text-white">5 others</span>
            started following you.
          </div>
          <div class="text-xs text-primary-600 dark:text-primary-500">10 minutes ago</div>
        </div>
      </DropdownLi>
      <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Avatar src="/images/profile-picture-3.webp" dot={{ color: 'green' }} rounded />
        <div class="ps-3 w-full">
          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            and
            <span class="font-medium text-gray-900 dark:text-white">141 others</span>
            love your story. See it and view more stories.
          </div>
          <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div>
        </div>
      </DropdownLi>
    </DropdownUl>
    <DropdownFooter class="block py-2 -my-1 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
      <div class="inline-flex items-center">
        <EyeSolid class="me-2 w-4 h-4 text-gray-500 dark:text-gray-400" />
      View all
      </div>
    </DropdownFooter>
  </Dropdown>
</div>