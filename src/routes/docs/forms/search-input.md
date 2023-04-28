---
layout: componentLayout
title: Svelte Search Input - Flowbite
breadcrumb_title: Svelte Search Input
component_title: Search Input
dir: Forms
description: Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, A } from '$lib'
  import { props as searchItems } from '../../props/Search.json'  

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover","on:paste"];
</script>



The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS.

You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more.

## Setup

```svelte example hideOutput
<script>
  import { Search } from 'flowbite-svelte'
</script>
```

## Search bar example

```svelte example hideScript class="flex flex-col gap-4"
<script>
  import { Search, Button } from 'flowbite-svelte'
</script>

<Search >
  <Button>Search</Button>
</Search>
```

## Simple search input

Use the simplest form of a search input component with an icon and a search button next to the text field.

```svelte example hideScript class="flex flex-col gap-4"
<script>
  import { Search, Button } from 'flowbite-svelte'
</script>

<form class="flex gap-2">
  <Search size="md" />
  <Button class="!p-2.5">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
  </Button>
</form>
```

## Voice Search

Get started with this example if you would like to enable voice search for your website and users.

```svelte example class="space-y-4"
<script>
  import { Search, Button } from 'flowbite-svelte'
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<form class="flex gap-2">
  <Search size='md' class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
    <button type="button" on:click={handleVoiceBtn} class="outline-none">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/></svg>
    </button>
  </Search>
  <Button size='sm'>
    <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    Search
  </Button>
</form>
```

## Events

```js
on:blur
on:change
on:input
on:click
on:focus
on:keydown
on:keypress
on:keyup
on:mouseenter
on:mouseleave
on:mouseover
on:paste
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

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

### Search

<TableProp>
  <TableDefaultRow items={searchItems} rowState='hover' />
</TableProp>

## Forwarded Events: Search

<DocBadgeList items={events} />
