---
layout: componentLayout
title: Svelte File Input - Flowbite
breadcrumb_title: Svelte File Input
component_title: File input
dir: Forms
description: Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes
thumnailSize: w-48
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, A } from '$lib'
  import { props as items } from '../../props/Fileupload.json'
  import { props as items2 } from '../../props/Dropzone.json'

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover","on:paste"];
  const events2 = ["on:click","on:change","on:focus","on:blur","on:mouseenter","on:mouseleave","on:mouseover"];
</script>



The file input component can be used to upload one or more files from the device storage of the user available in multiple sizes, styles, variants and support for dark mode.

## Setup

```svelte example hideOutput
<script>
  import { Fileupload } from 'flowbite-svelte'
</script>
```

## File upload example

```svelte example
<script>
  import { Fileupload, Label } from 'flowbite-svelte'
  let value;
</script>

<Label class="space-y-2 mb-2">
  <span>Upload file</span>
  <Fileupload bind:value/>
</Label>
<Label>File: {value }</Label>
```

## Helper text

```svelte example
<script>
  import { Fileupload, Label, Helper } from 'flowbite-svelte'
</script>

<Label for="with_helper" class="pb-2">Upload file</Label>
<Fileupload id="with_helper" class="mb-2" />
<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
```

## Multiple files

When the user selected multiple files, the `value` represents the first file in the list of files they selected. The other files can be identified using the `files` property.

```svelte example
<script>
  import { Fileupload, Label, Listgroup, ListgroupItem } from 'flowbite-svelte'
  let files;  // FileList type
</script>

<Label class="pb-2" for='multiple_files' >Upload multiple files</Label>
<Fileupload id='multiple_files' multiple bind:files />
<Listgroup items={files} let:item class="mt-2">
  {#if item}
    {item.name} 
  {:else}
    <ListgroupItem>No files</ListgroupItem>
  {/if}
</Listgroup>

```

## Sizes

```svelte example
<script>
  import { Fileupload, Label } from 'flowbite-svelte'
</script>

<Label class="pb-2" for='small_size' >Small file input</Label>
<Fileupload id="small_size" size='sm' />
<Label class="py-2" for='default_size' >Default size</Label>
<Fileupload id="default_size" />
<Label class="py-2" for='larg_size' >Large file input</Label>
<Fileupload id="larg_size" size='lg' />
```

## Dropzone

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

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

### Fileupload

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### Dropzone

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

## Forwarded Events: Fileupload

<DocBadgeList items={events} />


## Forwarded Events: Dropzone

<DocBadgeList items={events2} />

