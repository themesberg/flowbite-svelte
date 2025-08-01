<script>
  import { Drawer, Button, CloseButton, Label, Input, Textarea } from "flowbite-svelte";
  import { InfoCircleSolid, UserAddOutline, CalendarEditSolid } from "flowbite-svelte-icons";

  let hidden4 = $state(true);
</script>

<div class="text-center">
  <Button onclick={() => (hidden4 = false)}>Show drawer form</Button>
</div>
<Drawer bind:hidden={hidden4}>
  <div class="flex items-center justify-between">
    <h5 id="drawer-label" class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
      <InfoCircleSolid class="me-2.5 h-5 w-5" />New event
    </h5>
    <CloseButton class="mb-4 dark:text-white" />
  </div>
  <form action="#" class="mb-6">
    <div class="mb-6">
      <Label for="title" class="mb-2 block">Title</Label>
      <Input id="title" name="title" required placeholder="Apple Keynote" />
    </div>
    <div class="mb-6">
      <Label for="description" class="mb-2">Description</Label>
      <Textarea id="message" placeholder="Write event description..." rows={4} name="message" class="w-full" />
    </div>
    <div class="mb-6">
      <Input id="date" name="date" required type="date" />
    </div>
    <div class="mb-4">
      <div class="relative">
        <Input id="search" placeholder="Add guest email" class="p-3" />
        <Button class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 absolute end-2 bottom-2 inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium text-white focus:ring-4 focus:outline-hidden" type="submit">
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
