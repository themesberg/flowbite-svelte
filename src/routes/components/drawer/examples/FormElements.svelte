<script lang="ts">
  import { Button, Drawer, uiHelpers, Drawerhead, Label, Input, Textarea } from "$lib";
  import { InfoCircleSolid, UserAddOutline, CalendarEditSolid } from "flowbite-svelte-icons";
  const drawer = uiHelpers();
  let drawerStatus = $state(false);
  const closeDrawer = drawer.close;
  $effect(() => {
    drawerStatus = drawer.isOpen;
  });
</script>

<div class="text-center">
  <Button onclick={drawer.toggle}>Show navigation</Button>
</div>
<Drawer {drawerStatus} {closeDrawer}>
  <Drawerhead onclick={closeDrawer} class="mb-4">
    <h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="me-2.5 h-5 w-5" />New event
    </h5>
  </Drawerhead>
  <form action="#" class="mb-6">
    <div class="mb-6">
      <Label for="title" class="mb-2 block">Title</Label>
      <Input id="title" name="title" required placeholder="Apple Keynote" />
    </div>
    <div class="mb-6">
      <Label for="description" class="mb-2">Description</Label>
      <Textarea id="message" placeholder="Write event description..." rows={4} name="message" />
    </div>
    <div class="mb-6">
      <Input id="date" name="date" required type="date" />
    </div>
    <div class="mb-4">
      <div class="relative">
        <Input id="search" placeholder="Add guest email" class="p-3" />
        <Button class="absolute bottom-2 end-2 inline-flex items-center rounded-lg bg-primary-700 px-3 py-1 text-sm font-medium text-white hover:bg-primary-800 focus:outline-hidden focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">
          <UserAddOutline class="me-1.5 h-3 w-3 text-white" />Add
        </Button>
      </div>
    </div>
    <div class="mb-4 flex -space-x-4 rtl:space-x-reverse">
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-1.webp" alt="" />
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-2.webp" alt="" />
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-3.webp" alt="" />
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-4.webp" alt="" />
    </div>
    <Button type="submit" class="w-full">
      <CalendarEditSolid class="me-2.5 h-3.5 w-3.5 text-white" /> Create event
    </Button>
  </form>
</Drawer>
