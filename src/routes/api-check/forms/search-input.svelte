<script lang="ts">
  const components = "Search";

  import { Search, Button, Dropdown, DropdownItem, P } from "$lib";
  import { SearchOutline, ChevronDownOutline, MicrophoneSolid } from "flowbite-svelte-icons";

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

  function handleVoiceBtn() {
    alert("You clicked voice button");
  }

  let value = $state("");

  const submitted = (e: Event) => {
    e.preventDefault();
    alert(`You are searching: ${value}`);
  };
</script>

<h1 class="text-3xl my-4">Search Input</h1>
The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS. You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more. 

<h2 class="text-2xl">Search bar example</h2>

<div class="m-8">
  <Search>
    <Button class="me-1">Search</Button>
  </Search>
</div>

<h2 class="text-2xl">Simple search input</h2>
 Use the simplest form of a search input component with an icon and a search button next to the text field.

<div class="m-8">
  <form class="flex gap-2">
    <Search size="md" />
    <Button class="p-2.5!">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>

<h2 class="text-2xl">Search with dropdown</h2>
 Use this search component with a dropdown to let your users select a category in which they would like the search query to be targeted in.

<div class="m-8">
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
    <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
    <Button class="rounded-s-none p-2.5!">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>

<h2 class="text-2xl">Location search</h2>
 Use this example where you can select a country in which you want to search for an address or city.

<div class="m-8">
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
    <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
    <Button class="rounded-s-none p-2.5!">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>

<h2 class="text-2xl">Voice Search</h2>
 Get started with this example if you would like to enable voice search for your website and users.

<div class="m-8">
  <form class="flex gap-2">
    <Search size="md" class="flex items-center gap-2" placeholder="Search Mockups, Logos, Design Templates...">
      <button type="button" onclick={handleVoiceBtn} class="outline-hidden">
        <MicrophoneSolid class="me-2 h-5 w-5" />
      </button>
    </Search>
    <Button size="sm">
      <SearchOutline class="-ms-1 me-2 h-6 w-6" />
      Search
    </Button>
  </form>
</div>

<h2 class="text-2xl">Example</h2>

<div class="m-8">
  <form id="example-form" onsubmit={submitted}>
    <Search bind:value />
    <P class="my-1">You are searching: {value}</P>
    <Button type="submit">Submit</Button>
  </form>
</div>
