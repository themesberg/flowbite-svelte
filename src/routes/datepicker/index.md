---
layout: datepickerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Datepicker, Breadcrumb, BreadcrumbItem } from '$lib'
  import { Home } from 'svelte-heros';
  // import componentProps from '../props/DarkMode.json'
  // // Props table
  // let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Datepicker</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Datepicker</h1>

<CompoDescription>Start receiving date and time data from your users using this free datepicker element based on Tailwind utility-classes and vanilla JavaScript</CompoDescription>


<Htwo label="Setup" />


```html
<script>
  import { Datepicker } from 'flowbite-svelte'
</script> 
```

<Htwo label="Datepicker example" />

Use the following example of an input element to create a datepicker component. All you need to do is to add the datepicker data attribute to any input element.

<ExampleDiv>
<Datepicker />
</ExampleDiv>

```html
<Datepicker />
```

<Htwo label="Inline datepicker"/>

<ExampleDiv>
<div inline-datepicker data-date="02/25/2022"></div>
</ExampleDiv>

<Htwo label="Date range picker" />

<ExampleDiv>
<Datepicker range />
</ExampleDiv>

<Htwo label="Action buttons" />

By adding the `datepickerButtons` prop you will enable the today and clear buttons with the following features:

- Clicking on the today button will browse back to the current day/month/year
- Clicking on the clear button will reset all selections

<ExampleDiv>
<Datepicker datepickerButtons />
</ExampleDiv>

<Htwo label="Date format" />

<ExampleDiv>
<Datepicker datepickerFormat="dd/mm/yy" />
</ExampleDiv>