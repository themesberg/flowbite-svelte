<script lang="ts">
  import { Search, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { SearchOutline, ChevronDownOutline } from "flowbite-svelte-icons";

  const items = [
    {
      label: "All categories"
    },
    {
      label: "Mockups"
    },
    {
      label: "Templates"
    },
    {
      label: "Design"
    },
    {
      label: "Logos"
    }
  ];

  let selectCategory = $state("All categories");
</script>

<form class="flex">
  <div class="relative">
    <Button class="border-primary-700 rounded-e-none border border-e-0 whitespace-nowrap">
      {selectCategory}
      <ChevronDownOutline class="ms-2.5 h-6 w-6" />
    </Button>
    <Dropdown simple class="w-40">
      {#each items as { label }}
        <DropdownItem
          onclick={() => {
            selectCategory = label;
          }}
          class={selectCategory === label ? "underline" : ""}
        >
          {label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="lg" classes={{ input: "rounded-none py-2.5" }} placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="rounded-s-none p-2!">
    <SearchOutline class="h-6 w-6" />
  </Button>
</form>
