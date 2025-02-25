<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers, Checkbox, Helper } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<div class="relative flex h-72 items-start justify-center">
  <Button>Dropdown helper text<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown class="absolute top-[45px] -left-[240px] w-64 overflow-y-auto p-2 pb-3 text-sm">
    <DropdownUl>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Enable notifications</Checkbox>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Enable 2FA auth</Checkbox>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox checked>Subscribe newsletter</Checkbox>
        <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
      </DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
