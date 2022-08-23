---
layout: formLayout
---

<script>
import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
import { Button, Textarea, Label, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
import CloseButton from "$lib/utils/CloseButton.svelte";
import { Upload } from 'svelte-heros';
import { Home } from 'svelte-heros'

import componentProps from '../../props/Textarea.json'
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
  <BreadcrumbItem href="/forms/" rel="external">Forms</BreadcrumbItem>
  <BreadcrumbItem>Textarea</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Textarea</h1>

<CompoDescription>Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Textarea.svelte">Textarea</GitHubSource>
</ExampleDiv>

The textarea component is a multi-line text field input that can be used to receive longer chuncks of text from the user in the form of a comment box, description field, and more.

<Htwo label="Setup" />

```html
<script>
  import { Textarea } from 'flowbite-svelte'
</script>
```

<Htwo label="Textarea examples" />

<ExampleDiv class="flex flex-col gap-4">
<Textarea {...textareaprops} />

<Textarea placeholder="My placeholder">Embedded label</Textarea>

<Label for="textarea1">Separate label</Label>
<Textarea id="textarea1" placeholder="My placeholder"/>

<Textarea placeholder="My placeholder">
  Embedded label
  <p slot="header">Header</p>
  <p slot="footer">Footer</p>
</Textarea>


</ExampleDiv>

<ExampleDiv>
<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    <div slot="footer" class="flex justify-between items-center py-2 px-3 dark:border-gray-600">
        <Button type="submit">Post comment</Button>
        <div class="flex pl-0 space-x-1 sm:pl-2">
            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Attach file</span>
            </button>
            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Set location</span>
            </button>
            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <Upload size="20" />
                <span class="sr-only">Upload image</span>
            </button>
            <CloseButton />
        </div>
    </div>
  </Textarea>
</form>
<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
</ExampleDiv>

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.


<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

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