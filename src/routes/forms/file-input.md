---
layout: formLayout
dir: Forms
title: File Input
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Breadcrumb, BreadcrumbItem, Badge, Heading } from '$lib'
  
  import componentProps from '../props/Fileupload.json'
  import componentProps2 from '../props/Dropzone.json'
  let items = componentProps.props
  let items2 = componentProps2.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Fileupload.svelte">Fileupload</GitHubSource>
</ExampleDiv>

The file input component can be used to upload one or more files from the device storage of the user available in multiple sizes, styles, variants and support for dark mode.

<Htwo label="Setup" />

```html
<script>
  import { Fileupload } from 'flowbite-svelte'
</script>
```

<Htwo label="File upload example" />

```svelte example
<script>
  import { Fileupload, Label } from 'flowbite-svelte'
  let fileuploadprops = {
    id : 'user_avatar'
  }
</script>

<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
```

<Htwo label="Helper text" />

```svelte example
<script>
  import { Fileupload, Label, Helper } from 'flowbite-svelte'
  let fileuploadprops = {
    id : 'user_avatar'
  }
</script>

<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
```

<Htwo label='Multiple files' />

```svelte example
<script>
  import { Fileupload, Label } from 'flowbite-svelte'
</script>

<Label class="pb-2" for='multiple_files' >Upload multiple files</Label>
<Fileupload id='multiple_files' multiple/>
```

<Htwo label='Sizes' />

```svelte example
<script>
  import { Fileupload, Label } from 'flowbite-svelte'
</script>

<Label class="pb-2" for='small_size' >Small file input</Label>
<Fileupload id="small_size" size='xs' />
<Label class="pb-2" for='default_size' >Default size</Label>
<Fileupload id="default_size" />
<Label class="pb-2" for='larg_size' >Large file input</Label>
<Fileupload id="larg_size" size='lg' />
```

<Htwo label="Dropzone" />

```svelte example
<script>
  import { Dropzone } from 'flowbite-svelte'
</script>

<Dropzone id='dropzone'>
  <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
</Dropzone>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Fileupload</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Dropzone</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>


<Htwo label="Forwarded Events: Fileupload" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
<Badge large={true}>on:paste</Badge>
</div>

<Htwo label="Forwarded Events: Dropzone" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
</div>
