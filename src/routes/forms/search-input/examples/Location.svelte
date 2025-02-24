<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Search, Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
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
  let selectCategory = $state("All categories");
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  $effect(() => {
    dropdownStatus = dropdown.isOpen;
  });
</script>

<div class="h-48">
  <form class="flex">
    <Button class="whitespace-nowrap rounded-e-none border border-e-0 border-primary-700" onclick={dropdown.toggle}>
      <img class="me-2 h-3.5 w-3.5 rounded-full" src={buttonLabel?.icon} alt={buttonLabel?.label} />
      {buttonLabel?.labelSelected}
      <ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
    </Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[110px] top-[45px]">
        <DropdownUl>
          {#each countries as country}
            <DropdownLi onclick={() => (selectCountry = country.labelSelected)} liClass="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left inline-flex items-center {selectCountry === country.labelSelected ? 'underline' : ''}">
              <img class="me-2 h-3.5 w-3.5 rounded-full" src={country.icon} alt={country.label} />
              {country.label}
            </DropdownLi>
          {/each}
        </DropdownUl>
      </Dropdown>
    </div>
    <Search inputClass="rounded-none py-3 pl-8" placeholder="Searching {selectCategory}" />
    <Button class="rounded-s-none p-2.5!">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>
