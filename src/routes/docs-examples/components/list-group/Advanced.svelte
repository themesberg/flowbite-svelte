<script lang="ts">
  import { Listgroup, ListgroupItem, Avatar } from "flowbite-svelte";
  import { TrashBinSolid } from "flowbite-svelte-icons";
</script>

<Listgroup active class="w-48">
  <h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">User list</h3>
  <ListgroupItem class="gap-2 text-base font-semibold">
    <Avatar src="/images/people/profile-picture-1.jpg" size="xs" />Jese Leos
  </ListgroupItem>
  <ListgroupItem class="gap-2 text-base font-semibold">
    <Avatar src="/images/people/profile-picture-2.jpg" size="xs" />Robert Gouth
  </ListgroupItem>
  <ListgroupItem class="gap-2 text-base font-semibold">
    <Avatar src="/images/people/profile-picture-5.jpg" size="xs" />Bonnie Green
  </ListgroupItem>
  <a href="/" class="flex items-center rounded-b-lg bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
    <TrashBinSolid class="ms-1 me-2 h-6 w-6" />
    Delete user
  </a>
</Listgroup>
