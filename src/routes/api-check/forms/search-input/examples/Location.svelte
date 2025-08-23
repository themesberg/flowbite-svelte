<script>
  import { Search, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { SearchOutline, ChevronDownOutline } from "flowbite-svelte-icons";

  const countries = [
    {
      label: "United States",
      labelSelected: "USA",
      icon: "/images/forms/search-input/usa-flag.svg"
    },
    {
      label: "Germany",
      labelSelected: "DE",
      icon: "/images/forms/search-input/de-flag.svg"
    },
    {
      label: "Italy",
      labelSelected: "ITA",
      icon: "/images/forms/search-input/it-flag.svg"
    },
    {
      label: "China",
      labelSelected: "CH",
      icon: "/images/forms/search-input/ch-flag.svg"
    }
  ];

  let selectCountry = $state("USA");

  let buttonLabel = $derived(countries.find(({ labelSelected }) => labelSelected === selectCountry));
</script>

<form class="flex">
  <div class="relative">
    <Button class="border-primary-700 rounded-e-none border border-e-0 whitespace-nowrap">
      <img class="me-2 h-3.5 w-3.5 rounded-full" src={buttonLabel?.icon} alt={buttonLabel?.label} />
      {buttonLabel?.labelSelected}
      <ChevronDownOutline class="ms-2.5 h-6 w-6" />
    </Button>
    <Dropdown simple class="w-40">
      {#each countries as country}
        <DropdownItem
          onclick={() => {
            selectCountry = country.labelSelected;
          }}
          class="inline-flex items-center {selectCountry === country.labelSelected ? 'underline' : ''}"
        >
          <img class="me-2 h-3.5 w-3.5 rounded-full" src={country.icon} alt={country.label} />
          {country.label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="lg" classes={{ input: "rounded-none py-2.5" }} placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="rounded-s-none p-2!">
    <SearchOutline class="h-6 w-6" />
  </Button>
</form>