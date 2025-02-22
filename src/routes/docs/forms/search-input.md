---
layout: componentLayout
title: Svelte Search Input - Flowbite
breadcrumb_title: Svelte Search Input
component_title: Search Input
dir: Forms
description: Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes
---

<script>
  import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, A } from '$lib'
  import componentData1 from '../../component-data/Search.json'
  const components = 'Search'
</script>

The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS.

You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more.

## Setup

```svelte example hideOutput
<script>
  import { Search } from 'flowbite-svelte';
</script>
```

## Search bar example

```svelte example class="flex flex-col gap-4"
<script>
  import { Search, Button } from 'flowbite-svelte';
</script>

<Search>
  <Button class="me-1">Search</Button>
</Search>
```

## Simple search input

Use the simplest form of a search input component with an icon and a search button next to the text field.

```svelte example class="flex flex-col gap-4"
<script>
  import { Search, Button } from 'flowbite-svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<form class="flex gap-2">
  <Search size="md" />
  <Button class="p-2.5!">
    <SearchOutline class="w-6 h-6" />
  </Button>
</form>
```

## Search with dropdown

Use this search component with a dropdown to let your users select a category in which they would like the search query to be targeted in.

```svelte example class="flex flex-col gap-4 h-72"
<script>
  import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

  const items = [
    {
      label: 'All categories'
    },
    {
      label: 'Mockups'
    },
    {
      label: 'Templates'
    },
    {
      label: 'Design'
    },
    {
      label: 'Logos'
    }
  ]

  let selectCategory = 'All categories'

</script>

<form class="flex">
  <div class="relative">
    <Button class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700">
      {selectCategory}
      <ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
    </Button>
    <Dropdown classContainer="w-40">
      {#each items as { label }}
        <DropdownItem
          on:click={() => {
            selectCategory = label;
          }}
          class={selectCategory === label ? 'underline' : ''}
        >
          {label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="p-2.5! rounded-s-none">
    <SearchOutline class="w-6 h-6" />
  </Button>
</form>
```

## Location search

Use this example where you can select a country in which you want to search for an address or city.

```svelte example class="flex flex-col gap-4 h-72"
<script>
  import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

  const countries = [
    {
      label: 'United States',
      labelSelected: 'USA',
      icon: '/images/forms/search-input/usa-flag.svg'
    },
    {
      label: 'Germany',
      labelSelected: 'DE',
      icon: '/images/forms/search-input/de-flag.svg'
    },
    {
      label: 'Italy',
      labelSelected: 'ITA',
      icon: '/images/forms/search-input/it-flag.svg'
    },
    {
      label: 'China',
      labelSelected: 'CH',
      icon: '/images/forms/search-input/ch-flag.svg'
    }
  ]

  let selectCountry = 'USA'

  $: buttonLabel = countries.find(({ labelSelected }) => labelSelected ===  selectCountry)

</script>

<form class="flex">
  <div class="relative">
    <Button class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700">
      <img class="h-3.5 w-3.5 rounded-full me-2" src={buttonLabel.icon} alt={buttonLabel.label}>
      {buttonLabel.labelSelected}
      <ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
    </Button>
    <Dropdown classContainer="w-40">
      {#each countries as country}
        <DropdownItem
          on:click={() => {
            selectCountry = country.labelSelected;
          }}
          class="inline-flex items-center {selectCountry === country.labelSelected ? 'underline' : ''}"
        >
          <img class="h-3.5 w-3.5 rounded-full me-2" src={country.icon} alt={country.label}>
          {country.label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="p-2.5! rounded-s-none">
    <SearchOutline class="w-6 h-6" />
  </Button>
</form>
```

## Voice Search

Get started with this example if you would like to enable voice search for your website and users.

```svelte example class="space-y-4"
<script>
  import { Search, Button } from 'flowbite-svelte';
  import { MicrophoneSolid, SearchOutline } from 'flowbite-svelte-icons';
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<form class="flex gap-2">
  <Search size="md" class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
    <button type="button" on:click={handleVoiceBtn} class="outline-hidden">
      <MicrophoneSolid class="w-5 h-5 me-2" />
    </button>
  </Search>
  <Button size="sm">
    <SearchOutline class="w-6 h-6 me-2 -ms-1" />
    Search
  </Button>
</form>
```

## Events

```js
on: blur;
on: change;
on: input;
on: click;
on: focus;
on: keydown;
on: keypress;
on: keyup;
on: mouseenter;
on: mouseleave;
on: mouseover;
on: paste;
```

## Example

```svelte example class="space-y-4"
<script>
  import { Search, Button, P } from '$lib';

  let value = '';

  const submitted = (ev) => {
    ev.preventDefault();
    alert(`You are searching: ${value}`);
  };
</script>

<form id="example-form" on:submit={submitted}>
  <Search bind:value />
  <P class="my-1">You are searching: {value}</P>
  <Button type="submit">Submit</Button>
</form>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Search styling

- Use the `class` prop to overwrite the `Input` tag.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Search Input](https://flowbite.com/docs/forms/search-input/)

<GitHubCompoLinks {components}/>
