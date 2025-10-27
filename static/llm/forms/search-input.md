# Svelte Search Input - Flowbite


The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS.

You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more.

## Setup

```svelte
<script lang="ts">
  import { Search } from "flowbite-svelte";
</script>
```

## Search bar example

```svelte
<script lang="ts">
  import { Search, Button } from "flowbite-svelte";
</script>

<Search>
  <Button class="me-1">Search</Button>
</Search>
```

## Disabled

```svelte
<script lang="ts">
  import { Search, Button } from "flowbite-svelte";
</script>

<Search disabled>
  <Button disabled class="me-1">Search</Button>
</Search>
```

## Search input with clearable

Use the simplest form of a search input component with an icon and a search button next to the text field.

```svelte
<script lang="ts">
  import { Search } from "flowbite-svelte";
</script>

<Search size="md" clearable />
```

## Event

```svelte
<script lang="ts">
  import { Search } from "flowbite-svelte";
</script>

<Search
  clearable
  clearableOnClick={() => {
    alert("Clicked clear button!");
  }}
/>
```

## Accessing Search Element with elementRef

```svelte
<script lang="ts">
  import { Search, Button } from "flowbite-svelte";
  let searchRef: HTMLInputElement | undefined = $state();
  let elementTxt = $state("This text has NOT been updated.");
</script>

<form id="example-form">
  <Search bind:value={elementTxt} bind:elementRef={searchRef} />
  <Button
    class="mt-2"
    onclick={() => {
      searchRef?.setRangeText("ALREADY", 14, 17, "select");
      searchRef?.select();
    }}
  >
    Update text
  </Button>
</form>
```

## Search with dropdown

Use this search component with a dropdown to let your users select a category in which they would like the search query to be targeted in.

```svelte
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
```

## Location search

Use this example where you can select a country in which you want to search for an address or city.

```svelte
<script lang="ts">
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
```

## Voice Search

Get started with this example if you would like to enable voice search for your website and users.

```svelte
<script lang="ts">
  import { Search, Button } from "flowbite-svelte";
  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";
  function handleVoiceBtn() {
    alert("You clicked voice button");
  }
</script>

<form class="flex gap-2">
  <Search size="lg" classes={{ input: "flex items-center gap-2" }} placeholder="Search Mockups, Logos, Design Templates...">
    <button type="button" onclick={handleVoiceBtn} class="outline-hidden">
      <MicrophoneSolid class="me-2 h-5 w-5" />
    </button>
  </Search>
  <Button size="sm" class="p-2!">
    <SearchOutline class="-ms-1 me-2 h-6 w-6" />
    Search
  </Button>
</form>
```

## Example

```svelte
<script lang="ts">
  import { Search, Button, P } from "flowbite-svelte";

  let value = $state("");

  const submitted = (e: Event) => {
    e.preventDefault();
    alert(`You are searching: ${value}`);
  };
</script>

<form id="example-form" onsubmit={submitted}>
  <Search bind:value />
  <P class="my-1">You are searching: {value}</P>
  <Button type="submit">Submit</Button>
</form>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Search Input](https://flowbite.com/docs/forms/search-input/)
