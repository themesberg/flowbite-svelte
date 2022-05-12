---
layout: formLayout
---

<script>
import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
import { onMount } from 'svelte';
import { Textarea, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/Textarea.json'
let items = componentProps.props
let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let textareaprops = {
  id: 'message',
  name: 'message',
  label: 'Your message',
  rows: 4,
  placeholder: 'Leave a comment...',
};
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
      label:'Textarea',
      href:'/forms/textarea'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Textarea Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
<Textarea {...textareaprops} />
</ExampleDiv>

```html
<script>
import { Textarea } from 'flowbite-svelte'
let textareaprops = {
  id: 'message',
  name: 'message',
  label: 'Your message',
  rows: 4,
  placeholder: 'Leave a comment...',
};
</script>

<Textarea {...textareaprops} />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

