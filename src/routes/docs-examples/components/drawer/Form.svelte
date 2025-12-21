<script lang="ts">
  import { Avatar, Drawer, CardPlaceholder, Button, Label, Input, Textarea } from "flowbite-svelte";
  import { InfoCircleSolid, UserAddOutline, CalendarEditSolid } from "flowbite-svelte-icons";

  let open4 = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open4 = true)}>Show drawer form</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer form bind:open={open4} classes={{ form: "space-y-6 mb-6" }}>
  <h5 class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />New event
  </h5>
  <Label>
    Title
    <Input name="title" class="mt-2" required placeholder="Apple Keynote" />
  </Label>
  <Label>
    Description
    <Textarea placeholder="Write event description..." rows={4} name="message" class="mt-2 w-full font-normal" />
  </Label>
  <Input name="date" required type="date" />
  <Input placeholder="Add guest email">
    {#snippet right()}
      <Button size="xs">
        <UserAddOutline class="me-1.5 h-4 w-4 text-white" />Add
      </Button>
    {/snippet}
  </Input>
  <div class="mb-4 flex">
    <Avatar src="/images/people/profile-picture-1.jpg" stacked size="sm" />
    <Avatar src="/images/people/profile-picture-2.jpg" stacked size="sm" />
    <Avatar src="/images/people/profile-picture-5.jpg" stacked size="sm" />
    <Avatar src="/images/people/profile-picture-4.jpg" stacked size="sm" />
  </div>
  <Button type="submit" class="w-full">
    <CalendarEditSolid class="me-2.5 h-3.5 w-3.5 text-white" /> Create event
  </Button>
</Drawer>
