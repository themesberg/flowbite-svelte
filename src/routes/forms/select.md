---
layout: formLayout
---

<script>
import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
import { onMount } from 'svelte';
import { Select, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/Select.json'
let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let selectprops = {
  id : 'countries',
	name : 'country',
	label : 'Select your country',
}
let selected;
let fileuploadprops = {
  id : 'user_avatar',
	label : 'Upload file'
}
let fileuploadprops2 = {
  id : 'user_avatar',
  label : 'Upload file',
  helper : 'A profile picture is useful to confirm your are logged into your account'
}

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
      label:'Select',
      href:'/forms/select'
    }
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Select Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
<Select {...selectprops} bind:value={selected}>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="fr">France</option>
</Select>
</ExampleDiv>

```html
<script>
import { Select} from 'flowbite-svelte'

let selectprops = {
  id : 'countries',
	name : 'country',
	label : 'Select your country',
}
</script>

<Select {...selectprops} bind:value={selected}>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="fr">France</option>
</Select>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

