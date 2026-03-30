<script lang="ts">
  import { Listgroup, ListgroupItem, Avatar } from "flowbite-svelte";
  import { TrashBinSolid } from "flowbite-svelte-icons";
</script>

<Listgroup active class="w-48">
  <h3 class="text-heading p-1 text-center text-xl font-medium">User list</h3>
  <ListgroupItem class="gap-2 text-base font-semibold">
    <Avatar src="/images/people/profile-picture-1.jpg" size="xs" />Jese Leos
  </ListgroupItem>
  <ListgroupItem class="gap-2 text-base font-semibold">
    <Avatar src="/images/people/profile-picture-2.jpg" size="xs" />Robert Gouth
  </ListgroupItem>
  <ListgroupItem class="gap-2 text-base font-semibold">
    <Avatar src="/images/people/profile-picture-5.jpg" size="xs" />Bonnie Green
  </ListgroupItem>
  <a href="/" class="rounded-b-base bg-neutral-tertiary text-fg-danger hover:bg-neutral-secondary-medium flex items-center p-3 text-sm font-medium hover:underline">
    <TrashBinSolid class="ms-1 me-2 h-6 w-6" />
    Delete user
  </a>
</Listgroup>
