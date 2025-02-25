<script lang="ts">
  import { page } from "$app/stores";
  import { Button, Dropdown, DropdownLi, DropdownUl } from "$lib";
  import { ChevronRightOutline } from "flowbite-svelte-icons";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>

<div class="flex h-[160px] items-center justify-center">
  <Button>Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} placement="right">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
