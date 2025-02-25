<script lang="ts">
  import { page } from "$app/stores";
  import { Button, Dropdown, DropdownLi, DropdownUl } from "$lib";
  import { ChevronUpOutline } from "flowbite-svelte-icons";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>

<div class="flex h-[200px] items-end justify-center">
  <Button>Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} placement="top">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
