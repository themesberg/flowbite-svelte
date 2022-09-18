---
layout: componentLayout
title: Alert
dir: Components
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Alert, Breadcrumb, BreadcrumbItem, Button, Badge, Heading, P, A } from 'flowbite-svelte'

  import componentProps from '../props/Alert.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  // slots
  let slotHeader = ['Name', 'Description']
  let slotItems = [['default', 'The first slot.'],['extra','A slot after the default slot.']]

  const handleAlert = ()=>{
    alert('Clicked handleAlert.')
  }
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Alert</Heading>

<CompoDescription>Show contextual information to your users using alert elements based on Tailwind CSS</CompoDescription>

<ExampleDiv>
<GitHubSource href="alerts/Alert.svelte">{title}</GitHubSource>
</ExampleDiv>

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page. Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

<Htwo label="Set up" />

Import Alert and set variables in the script tag.

```html
<script>
  import { Alert } from 'flowbite-svelte';
</script>
```

<Htwo label="Default alert" />

Use the following examples of alert components to show messages as feedback to your users.

```svelte example class="flex flex-col gap-4"
<script>
  import {Alert} from "flowbite-svelte";
</script>
<Alert>
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
```

<Htwo label="Alerts with icon" />

You can also include a descriptive icon to complement the message inside the alert component with the following example.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Alert} from "flowbite-svelte";
</script>
<Alert>
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
```

<Htwo label="Alerts with list" />

Use this example to show a list and a description inside an alert component.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Alert} from "flowbite-svelte";
</script>
<Alert>
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <span class="font-medium">Ensure that these requirements are met:</span>
  <ul slot="extra" class="mt-0 ml-8 list-disc list-inside">
    <li>At least 10 characters (and up to 100 characters)</li>
    <li>At least one lowercase character</li>
    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
  </ul>
</Alert>
<Alert color="red">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <span class="font-medium">Ensure that these requirements are met:</span>
  <ul slot="extra" class="mt-0 ml-8 list-disc list-inside">
    <li>At least 10 characters (and up to 100 characters)</li>
    <li>At least one lowercase character</li>
    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
  </ul>
</Alert>
```

<Htwo label="Dismissable alerts" />

Use the following alert elements that are also dismissable.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Alert} from "flowbite-svelte";
</script>
<Alert dismissable>
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="red" dismissable>
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="green" dismissable>
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="yellow" dismissable>
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-yellow-800 dark:hover:text-yellow-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="dark" dismissable>
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-gray-800 dark:hover:text-white">example link</a>. Give it a click if you like.
  </Alert>
```

<Htwo label="Border accent" />

Use the following alert components with a border accent as an alternative style.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Alert} from "flowbite-svelte";
</script>
<Alert accent rounded="{false}">
    <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="red" accent rounded="{false}">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="green" accent rounded="{false}">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="yellow" accent rounded="{false}">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="dark" accent rounded="{false}">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
```

<Htwo label="Additional content" />

The following alert components can be used if you wish to disclose more information inside the element.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Alert, Button} from "flowbite-svelte";
</script>
<Alert color="blue">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</span>
  <div slot="extra">
    <div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </div>
    <div class="flex gap-2">
    <Button size="xs"><svg aria-hidden="true" class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>View more</Button>
    <Button size="xs" outline color="blue">Go to Home</Button>
    </div>
  </div>
</Alert>
```

<Htwo label="Custom color" />

Use `color='none'` to disable coloring. Then use `class` to add your custom colors classes.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Alert} from "flowbite-svelte";
</script>
<Alert color='none' class='bg-sky-700 text-pink-400'>
  Your content
</Alert>
```

<Htwo label="Events" />

Use the `handleAlert` event with `dismissable` prop.

<ExampleDiv>
<Alert dismissable on:handleAlert={handleAlert}>Close me</Alert>
</ExampleDiv>

```html
<script>
  const handleAlert = ()=>{
    alert('Clicked handleAlert.')
  }
</script>

<Alert dismissable on:handleAlert={handleAlert}>Close me</Alert>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="Slots" />

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
</div>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/alerts/" target="_blank" class="link">
  Flowbite Alerts
  </A>
</P>
