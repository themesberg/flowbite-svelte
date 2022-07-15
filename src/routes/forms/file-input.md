---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { onMount } from 'svelte';
  import { Label, Fileupload, Helper, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Fileupload.json'
  let items = componentProps.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let fileuploadprops = {
    id : 'user_avatar'
  }
  let fileuploadprops2 = {
    id : 'user_avatar2',
  }
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>File input</BreadcrumbItem>
</Breadcrumb>


<h1 class="text-3xl w-full dark:text-white py-8">File Components</h1>

<Htwo label="File upload example" />

<ExampleDiv>
<Label>Upload file</Label>
<Fileupload {...fileuploadprops} />
</ExampleDiv>

```html
<script>
import { Fileupload } from 'flowbite-svelte'

let fileuploadprops = {
  id : 'user_avatar'
}

let fileuploadprops2 = {
  id : 'user_avatar2'
}
</script>

<Fileupload {...fileuploadprops} />

```

<Htwo label="Helper text" />

<ExampleDiv>
<Label>Upload file</Label>
<Fileupload {...fileuploadprops2} />
<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
</ExampleDiv>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>