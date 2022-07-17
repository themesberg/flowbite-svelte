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

<Htwo label='Multiple files' />

<ExampleDiv>
<Label for='multiple_files' >Upload multiple files</Label>
<Fileupload id='multiple_files' multiple/>
</ExampleDiv>

```html
<Label for='multiple_files' >Upload multiple files</Label>
<Fileupload id='multiple_files' multiple/>
```

<Htwo label='Sizes' />

<ExampleDiv>
<Label for='small_size' >Small file input</Label>
<Fileupload id="small_size" size='xs' />
<Label for='default_size' >Default size</Label>
<Fileupload id="default_size" />
<Label for='larg_size' >Large file input</Label>
<Fileupload id="larg_size" size='lg' />
</ExampleDiv>

```html
<Label for='small_size' >Small file input</Label>
<Fileupload id="small_size" size='xs' />
<Label for='default_size' >Default size</Label>
<Fileupload id="default_size" />
<Label for='larg_size' >Large file input</Label>
<Fileupload id="larg_size" size='lg' />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>