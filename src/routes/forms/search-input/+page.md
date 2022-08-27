---
layout: formLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
  import { Search, SimpleSearch, VoiceSearch, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
  

  import searchComponentProps from '../../props/Search.json'
  import simpleSearchComponentProps from '../../props/SimpleSearch.json'
  import voiceSearchcomponentProps from '../../props/VoiceSearch.json'

  let searchItems = searchComponentProps.props
  let simpleSearchItems = simpleSearchComponentProps.props
  let voiceSearchItems = voiceSearchcomponentProps.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms/" rel="external">Forms</BreadcrumbItem>
  <BreadcrumbItem>Search</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Search</h1>

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

<ExampleDiv>
<Search />
</ExampleDiv>

```html
<Search />
```

<Htwo label="Voice Search" />

Get started with this example if you would like to enable voice search for your website and users.

<ExampleDiv>
<VoiceSearch on:handleVoiceBtn={handleVoiceBtn}/>
</ExampleDiv>

```html
<script>
  ...
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<VoiceSearch on:handleVoiceBtn={handleVoiceBtn}/>
```

<Htwo label="Events" />

```js
on:submit
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

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