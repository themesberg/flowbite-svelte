---
layout: formLayout
title: Svelte Search Input - Flowbite
breadcrumb_title: Search input
dir: Forms
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Breadcrumb, BreadcrumbItem, Badge, Heading, A } from '$lib'
  
  import searchComponentProps from '../props/Search.json'
  import simpleSearchComponentProps from '../props/SimpleSearch.json'
  import voiceSearchcomponentProps from '../props/VoiceSearch.json'

  let searchItems = searchComponentProps.props
  let simpleSearchItems = simpleSearchComponentProps.props
  let voiceSearchItems = voiceSearchcomponentProps.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Range.svelte">Range</GitHubSource>
</ExampleDiv>

The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS.

You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more.

<Htwo label="Setup" />

```html
<script>
  import { Search, SimpleSearch, VoiceSearch } from 'flowbite-svelte'
</script>
```

<Htwo label="Search bar example" />

```svelte example hideScript class="flex flex-col gap-4"
<script>
  import { Search, Button, SimpleSearch } from 'flowbite-svelte'
</script>

<Search >
  <Button>Search</Button>
</Search>
```

<Htwo label="Simple search input" />

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

<Htwo label="Voice Search" />

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

<Htwo label="Events" />

```js
on:submit
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Search</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={searchItems} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Simple Search</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={simpleSearchItems} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Voice Search</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={voiceSearchItems} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events: Search, SimpleSearch" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
<Badge large={true}>on:paste</Badge>
</div>