---
layout: formLayout
---

<script>
import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
import { Textarea, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
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

<ExampleDiv>
<Textarea {...textareaprops} />
</ExampleDiv>

```html
<script>
...
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