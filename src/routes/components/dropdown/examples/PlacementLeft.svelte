<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { ChevronLeftOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>

<div class="flex h-[160px] items-center justify-center">
  <Button><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>
  <Dropdown {activeUrl} placement="left">
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
