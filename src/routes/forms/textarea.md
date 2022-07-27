---
layout: formLayout
---

<script>
import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
import TableProp from '../utils/TableProp.svelte'
import TableDefaultRow from '../utils/TableDefaultRow.svelte'
import { onMount } from 'svelte';
import { Textarea, Breadcrumb, BreadcrumbItem } from "$lib/index"
import { Home } from 'svelte-heros'
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
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Textarea</BreadcrumbItem>
</Breadcrumb>


<h1 class="text-3xl w-full dark:text-white py-8">Textarea</h1>

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

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>


<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

