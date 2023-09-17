---
layout: componentLayout
title: Svelte Search Input - Flowbite
breadcrumb_title: Svelte Search Input
component_title: Search Input
dir: Forms
description: Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer, DocBadgeList } from '../../utils'
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
  <Button>Search</Button>
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
  <Button class="!p-2.5">
    <SearchOutline class="w-5 h-5" />
  </Button>
</form>
```

## Search with dropdown

Use this search component with a dropdown to let your users select a category in which they would like the search query to be targeted in.

```svelte example class="flex flex-col gap-4 h-64"
<script>
  import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownSolid } from 'flowbite-svelte-icons';

  // let el <!-- on component bind:ref={el} -->

  const items = [
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

  let selectCategory = undefined

</script>

<form class="flex">
  <div class="relative">
    <Button class="rounded-e-none whitespace-nowrap border border-r-0 border-primary-700">
      {selectCategory || "All categories"}
      <ChevronDownSolid class="w-2.5 h-2.5 ml-2.5" />
    </Button>
    <Dropdown classContainer="w-full">
      {#each items as { label }}
        <DropdownItem 
          on:click={() => {
            selectCategory = label;
            // el.focus()
          }} 
          class={selectCategory === label ? 'underline' : ''}
        >
          {label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="!p-2.5 rounded-s-none">
    <SearchOutline class="w-5 h-5" />
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
    <button type="button" on:click={handleVoiceBtn} class="outline-none">
      <MicrophoneSolid class="w-4 h-4 mr-2" />
    </button>
  </Search>
  <Button size="sm">
    <SearchOutline class="w-5 h-5 mr-2 -ml-1" />
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
  import { Search, Button } from '$lib';
  let value = '';

  const submitted = () => {
    alert(`You are searching: ${value}`);
  };
</script>

<form id="example-form" on:submit={submitted}>
  <Search bind:value />
  <p>You are searching: {value}</p>
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
