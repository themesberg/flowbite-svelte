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
  let eventValue = $state("");
  let clearableValue = $state("");

  const submitted = (e: Event) => {
    e.preventDefault();
    alert(`You are searching: ${value}`);
  };

  let searchRef = $state() as HTMLInputElement;
  let elementTxt = $state("This text has NOT been updated.");
</script>

<h1 class="my-4 text-3xl">Search Input</h1>

<h2 class="text-2xl">Search bar example</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Search>
    <Button class="me-1">Search</Button>
  </Search>
</div>

<h2 class="text-2xl">Search input with clearable</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <form class="flex gap-2">
    <Search size="md" clearable />
    <Button class="p-2.5!">
      <SearchOutline class="h-5 w-5" />
    </Button>
  </form>
</div>

<h2 class="text-2xl">Search with dropdown</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
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
    <Search size="lg" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
    <Button class="rounded-s-none p-2.5!">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>

<h2 class="text-2xl">Location search</h2>
Use this example where you can select a country in which you want to search for an address or city.

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
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
    <Search size="lg" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
    <Button class="rounded-s-none p-2.5!">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>

<h2 class="text-2xl">Voice Search</h2>
Get started with this example if you would like to enable voice search for your website and users.

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
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

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <form id="example-form" onsubmit={submitted}>
    <Search bind:value />
    <P class="my-1">You are searching: {value}</P>
    <Button type="submit">Submit</Button>
  </form>
</div>

<h2 class="text-2xl">Accessing Search Element with elementRef</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <form id="example-form" onsubmit={submitted}>
    <Search bind:value={elementTxt} bind:elementRef={searchRef} class="my-4" />
    <Button
      onclick={() => {
        searchRef?.setRangeText("ALREADY", 14, 17, "select");
        searchRef?.select();
      }}
    >
      Update text
    </Button>
  </form>
</div>

<h2 class="text-2xl">Clearable</h2>

<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Search bind:value={clearableValue} clearable />
</div>

<h2 class="text-2xl">Event</h2>

<div class="my-4 mb-32 rounded border p-4">
  <Search
    bind:value={eventValue}
    clearable
    clearableOnClick={() => {
      alert("Clicked clear button!");
    }}
  />
</div>
