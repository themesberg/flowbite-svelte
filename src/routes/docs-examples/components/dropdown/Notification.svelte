<script lang="ts">
  import { Dropdown, DropdownItem, DropdownGroup, Avatar } from "flowbite-svelte";
  import { BellSolid, EyeSolid } from "flowbite-svelte-icons";
</script>

<div id="bell" class="text-body hover:text-heading inline-flex items-center text-center text-sm font-medium focus:outline-hidden">
  <BellSolid class="h-8 w-8" />
  <div class="relative flex">
    <div class="border-buffer bg-danger relative end-4 -top-2 inline-flex h-3 w-3 rounded-full border-2"></div>
  </div>
</div>
<Dropdown triggeredBy="#bell" class="divide-default w-full max-w-sm divide-y rounded-sm">
  <div class="py-2 text-center font-bold">Notifications</div>
  <DropdownGroup>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/people/profile-picture-1.jpg" dot={{ color: "neutral" }} />
      <div class="w-full ps-3">
        <div class="text-body mb-1.5 text-sm">
          New message from <span class="text-heading font-semibold">Jese Leos</span>
          : "Hey, what's up? All set for the presentation?"
        </div>
        <div class="text-fg-brand text-xs">a few moments ago</div>
      </div>
    </DropdownItem>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/people/profile-picture-2.jpg" dot={{ color: "danger" }} />
      <div class="w-full ps-3">
        <div class="text-body mb-1.5 text-sm">
          <span class="text-heading font-semibold">Joseph Mcfall</span>
          and
          <span class="text-heading font-medium">5 others</span>
          started following you.
        </div>
        <div class="text-fg-brand text-xs">10 minutes ago</div>
      </div>
    </DropdownItem>
    <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
      <Avatar src="/images/people/profile-picture-5.jpg" dot={{ color: "success" }} />
      <div class="w-full ps-3">
        <div class="text-body mb-1.5 text-sm">
          <span class="text-heading font-semibold">Bonnie Green</span>
          and
          <span class="text-heading font-medium">141 others</span>
          love your story. See it and view more stories.
        </div>
        <div class="text-fg-brand text-xs">44 minutes ago</div>
      </div>
    </DropdownItem>
  </DropdownGroup>
  <a href="/" class="bg-neutral-tertiary text-heading hover:bg-neutral-tertiary-medium -my-1 block py-2 text-center text-sm font-medium">
    <div class="inline-flex items-center">
      <EyeSolid class="text-body me-2 h-4 w-4" />
      View all
    </div>
  </a>
</Dropdown>
