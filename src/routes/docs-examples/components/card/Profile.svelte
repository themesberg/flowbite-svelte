<script lang="ts">
  import { Card, Dropdown, DropdownItem, Avatar, Button } from "flowbite-svelte";
  import { DotsHorizontalOutline } from "flowbite-svelte-icons";
</script>

<Card class="p-4 sm:p-5 md:p-7">
  <div class="flex justify-end">
    <DotsHorizontalOutline />
    <Dropdown class="w-36" simple>
      <DropdownItem href="javascript:void(0)">Edit</DropdownItem>
      <DropdownItem href="javascript:void(0)">Export data</DropdownItem>
      <DropdownItem href="javascript:void(0)">Delete</DropdownItem>
    </Dropdown>
  </div>
  <div class="flex flex-col items-center pb-4">
    <Avatar size="lg" src="/images/people/profile-picture-3.jpg" />
    <h5 class="text-heading mb-1 text-xl font-medium">Bonnie Green</h5>
    <span class="text-body text-sm">Visual Designer</span>
    <div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
      <Button>Add friend</Button>
      <Button color="success">Message</Button>
    </div>
  </div>
</Card>
