---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Search, SimpleSearch, Breadcrumb } from '$lib/index'
  import componentProps1 from '../props/Search.json'
  import componentProps2 from '../props/SimpleSearch.json'

  let items1 = componentProps1.props
  let items2 = componentProps2.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Forms',
      href:'/forms/'
    },
    {
      label:'Search',
      href:'/forms/search'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Search Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
<Search />
</ExampleDiv>

```html
<script>
  import { Search } from 'flowbite-svelte'
</script>

<Search />
```

<h1 class="text-3xl w-full dark:text-white py-8">SimpleSearch Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
<SimpleSearch />
</ExampleDiv>

```html
<script>
  import { SimpleSearch } from 'flowbite-svelte'
</script>

<SimpleSearch />
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
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3>SimpleSearch</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>
