---
layout: spinnerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Spinner, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Spinner.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Spinners',
      href:'/spinners/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Spinner Components</h1>

```html
<script>
	import { Spinner } from 'flowbite-svelte';
</script>
```

<Htwo label="Colors" />

<ExampleDiv>
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
</ExampleDiv>

```html
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
```

<Htwo label="Sizes" />

<ExampleDiv>
<Spinner size={4} />
<Spinner size={6} />
<Spinner size={8} />
</ExampleDiv>

```html
<Spinner size="4" />
<Spinner size="6" />
<Spinner size="8" />
```

<Htwo label="Alignment" />

<ExampleDiv>
<div class="text-left"><Spinner/></div>
<div class="text-center"><Spinner/></div>
<div class="text-right"><Spinner/></div>
</ExampleDiv>

```html
<div class="text-left"><Spinner /></div>
<div class="text-center"><Spinner /></div>
<div class="text-right"><Spinner /></div>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
