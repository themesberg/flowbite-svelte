<script lang="ts">
  import { Dropdown, DropdownItem, DropdownGroup, Avatar } from "flowbite-svelte";
  import { BellSolid, EyeSolid } from "flowbite-svelte-icons";
</script>

<div id="bell" class="inline-flex items-center text-center text-sm font-medium text-body hover:text-heading focus:outline-hidden">
  <BellSolid class="h-8 w-8" />
  <div class="relative flex">
    <div class="relative end-4 -top-2 inline-flex h-3 w-3 rounded-full border-2 border-buffer bg-danger"></div>
  </div>
</div>
<Dropdown triggeredBy="#bell" class="w-full max-w-sm divide-y divide-default rounded-sm">
  <div class="py-2 text-center font-bold">Notifications</div>
  <DropdownGroup>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/people/profile-picture-1.jpg" dot={{ color: "neutral" }} />
      <div class="w-full ps-3">
        <div class="mb-1.5 text-sm text-body">
          New message from <span class="font-semibold text-heading">Jese Leos</span>
          : "Hey, what's up? All set for the presentation?"
        </div>
        <div class="text-fg-brand text-xs">a few moments ago</div>
      </div>
    </DropdownItem>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/people/profile-picture-2.jpg" dot={{ color: "danger" }} />
      <div class="w-full ps-3">
        <div class="mb-1.5 text-sm text-body">
          <span class="font-semibold text-heading">Joseph Mcfall</span>
          and
          <span class="font-medium text-heading">5 others</span>
          started following you.
        </div>
        <div class="text-fg-brand text-xs">10 minutes ago</div>
      </div>
    </DropdownItem>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/people/profile-picture-5.jpg" dot={{ color: "success" }} />
      <div class="w-full ps-3">
        <div class="mb-1.5 text-sm text-body">
          <span class="font-semibold text-heading">Bonnie Green</span>
          and
          <span class="font-medium text-heading">141 others</span>
          love your story. See it and view more stories.
        </div>
        <div class="text-fg-brand text-xs">44 minutes ago</div>
      </div>
    </DropdownItem>
  </DropdownGroup>
  <a href="/" class="-my-1 block bg-neutral-tertiary py-2 text-center text-sm font-medium text-heading hover:bg-neutral-tertiary-medium">
    <div class="inline-flex items-center">
      <EyeSolid class="me-2 h-4 w-4 text-body" />
      View all
    </div>
  </a>
</Dropdown>
