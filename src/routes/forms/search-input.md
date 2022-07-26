---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Search, SimpleSearch, VoiceSearch, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros'
  import searchComponentProps from '../props/Search.json'
  import simpleSearchComponentProps from '../props/SimpleSearch.json'
  import voiceSearchcomponentProps from '../props/VoiceSearch.json'

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
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Search</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Search</h1>

<Htwo label="Default search" />

<ExampleDiv>
<Search />
</ExampleDiv>

```html
<script>
  import { Search } from 'flowbite-svelte'
</script>

<Search />
```

<Htwo label="Simple Search" />

<ExampleDiv>
<SimpleSearch />
</ExampleDiv>

```html
<script>
  import { SimpleSearch } from 'flowbite-svelte'
</script>

<SimpleSearch />
```

<Htwo label="Voice Search" />

<ExampleDiv>
<VoiceSearch on:handleVoiceBtn={handleVoiceBtn}/>
</ExampleDiv>

```html
<script>
  import { VoiceSearch } from 'flowbite-svelte'
  
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<VoiceSearch on:handleVoiceBtn={handleVoiceBtn}/>
```

<Htwo label="Event handlers" />

```js
on:submit
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Search</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={searchItems} rowState='hover' />
</TableProp>

<h3>Simple Search</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={simpleSearchItems} rowState='hover' />
</TableProp>

<h3>Voice Search</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={voiceSearchItems} rowState='hover' />
</TableProp>
