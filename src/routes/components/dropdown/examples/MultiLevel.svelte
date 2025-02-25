<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<div class="flex h-60 items-start justify-start">
  <Button>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <Dropdown>
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi class="flex items-center justify-between">
        Dropdown<ChevronRightOutline class="text-primary-700 ms-2 h-6 w-6 dark:text-white" />
      </DropdownLi>
      <Dropdown placement="right">
        <DropdownUl>
          <DropdownLi href="/">Home</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi class="flex items-center justify-between">
            Submenu<ChevronRightOutline class="text-primary-700 ms-2 h-6 w-6 dark:text-white" />
          </DropdownLi>
          <Dropdown placement="right">
            <DropdownUl>
              <DropdownLi href="/components/alert">Alert</DropdownLi>
            </DropdownUl>
          </Dropdown>
        </DropdownUl>
      </Dropdown>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/components/button">Button</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
