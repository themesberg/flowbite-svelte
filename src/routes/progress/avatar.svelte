<script>
  import { Avatar, Dropdown, DropdownHeader, DropdownItem,  DropdownGroup, Tooltip } from "flowbite-svelte";

  let name;
</script>

<h1 class="text-3xl my-4">Avatar</h1>

<h2 class="text-2xl my-4">Default avatar</h2>

<div class="flex justify-center gap-4">
  <div class="flex space-x-4 rtl:space-x-reverse">
    <Avatar src="/images/profile-picture-2.webp" />
    <Avatar src="/images/profile-picture-2.webp" cornerStyle="rounded" />
  </div>
</div>

<h2 class="text-2xl my-4">Bordered</h2>

<div class="flex justify-center gap-4">
  <Avatar src="/images/profile-picture-2.webp" border />
  <Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300" />
</div>

<h2 class="text-2xl my-4">Placeholder</h2>

<div class="flex justify-center gap-4">
  <Avatar />
  <Avatar cornerStyle="rounded" />
  <Avatar border />
  <Avatar cornerStyle="rounded" border />
</div>

<h2 class="text-2xl my-4">Placeholder initials</h2>

<div class="flex justify-center gap-4">
  <Avatar>JL</Avatar>
</div>

<h2 class="text-2xl my-4">Avatar tooltip</h2>

<div class="flex justify-center gap-4">
  <Avatar data-name="Jese Leos"  src="/images/profile-picture-1.webp" />
  <Tooltip>Jese Leos</Tooltip>
  <Avatar data-name="Robert Gouth"  src="/images/profile-picture-2.webp" />
  <Tooltip>Robert Gouth</Tooltip>
  <Avatar data-name="Bonnie Green"  src="/images/profile-picture-3.webp" />
  <Tooltip>Bonnie Green</Tooltip>
</div>

<h2 class="text-2xl my-4">Dot indicator</h2>

<div class="flex justify-center gap-4">
  <Avatar src="/images/profile-picture-3.webp" dot={{ color: "red" }} />
  <Avatar src="/images/profile-picture-3.webp" dot={{ placement: "top-right", color: "red" }} cornerStyle="rounded" />
  <Avatar src="/images/profile-picture-5.webp" dot={{ placement: "bottom-right", color: "green" }} />
  <Avatar src="/images/profile-picture-5.webp" dot={{ placement: "bottom-right" }} cornerStyle="rounded" />
  <Avatar dot={{}} />
</div>

<h2 class="text-2xl my-4">Stacked</h2>

<div class="flex flex-col justify-center gap-4">
  <div class="mb-5 flex">
    <Avatar src="/images/profile-picture-1.webp" stacked />
    <Avatar src="/images/profile-picture-2.webp" stacked />
    <Avatar src="/images/profile-picture-3.webp" stacked />
    <Avatar stacked />
  </div>
  <div class="flex">
    <Avatar src="/images/profile-picture-1.webp" stacked />
    <Avatar src="/images/profile-picture-2.webp" stacked />
    <Avatar src="/images/profile-picture-3.webp" stacked />
    <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar>
  </div>
</div>

<h2 class="text-2xl my-4">Avatar text</h2>

<div class="flex justify-center gap-4">
  <div class="flex items-center space-x-4 rtl:space-x-reverse">
    <Avatar src="/images/profile-picture-1.webp" cornerStyle="rounded" />
    <div class="space-y-1 font-medium dark:text-white">
      <div>Jese Leos</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
  </div>
</div>

<h2 class="text-2xl my-4">User dropdown</h2>

<div class="flex justify-center h-96">
  <Avatar id="user-drop" src="/images/profile-picture-3.webp" class="cursor-pointer" dot={{ color: "green" }} />
  <Dropdown triggeredBy="#user-drop">
    <DropdownHeader>
      <span class="block text-sm">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownGroup>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
    </DropdownGroup>
    <DropdownGroup>
      <DropdownItem>Sign out</DropdownItem>
    </DropdownGroup>
  </Dropdown>
</div>

<h2 class="text-2xl my-4">Sizes</h2>

<div class="flex flex-col gap-4">
  <div class="flex flex-wrap justify-center space-x-4 rtl:space-x-reverse">
    <Avatar src="/images/profile-picture-3.webp"  size="xs" />
    <Avatar src="/images/profile-picture-3.webp"  size="sm" />
    <Avatar src="/images/profile-picture-3.webp"  size="md" />
    <Avatar src="/images/profile-picture-3.webp"  size="lg" />
    <Avatar src="/images/profile-picture-3.webp"  size="xl" />
    <Avatar src="/images/profile-picture-3.webp"  class="h-28 w-28" />
  </div>
</div>