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
  import { Icon } from 'flowbite-svelte-icons';
</script>

<form class="flex gap-2">
  <Search size="md" />
  <Button class="!p-2.5">
    <Icon name="search-outline" class="w-5 h-5" />
  </Button>
</form>
```

## Voice Search

Get started with this example if you would like to enable voice search for your website and users.

```svelte example class="space-y-4"
<script>
  import { Search, Button } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<form class="flex gap-2">
  <Search size="md" class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
    <button type="button" on:click={handleVoiceBtn} class="outline-none">
      <Icon name="microphone-solid" class="w-4 h-4" />
    </button>
  </Search>
  <Button size="sm">
    <Icon name="search-outline" class="w-5 h-5 mr-2 -ml-1" />
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
