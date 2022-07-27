---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { onMount } from 'svelte';
  import { Label, Fileupload, Helper, Dropzone, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Fileupload.json'
  import componentProps2 from '../props/Dropzone.json'
  let items = componentProps.props
  let items2 = componentProps2.props

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


<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">File</h1>

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

<Htwo label="Dropzone" />

<ExampleDiv>
<Dropzone id='dropzone'>
  <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
</Dropzone>
</ExampleDiv>

```html
<Dropzone id='dropzone'>
  <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
</Dropzone>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Fileupload</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>Dropzone</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>