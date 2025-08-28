<script>
  import { Card, Dropdown, DropdownItem, Avatar, Button } from "flowbite-svelte";
  import { DotsHorizontalOutline } from "flowbite-svelte-icons";
</script>

<Card class="p-4 sm:p-5 md:p-7">
  <div class="flex justify-end">
    <DotsHorizontalOutline />
    <Dropdown class="w-36">
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Export data</DropdownItem>
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
  </div>
  <div class="flex flex-col items-center pb-4">
    <Avatar size="lg" src="/images/profile-picture-3.webp" />
    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
    <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
    <div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
      <Button>Add friend</Button>
      <Button color="light" class="dark:text-white">Message</Button>
    </div>
  </div>
</Card>