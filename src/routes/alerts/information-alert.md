---
layout: alertLayout
---

<script>
  import { InfoAlert, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/InfoAlert.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Alerts',
      href:'/alerts/'
    },
    {
      label:'Information alert',
      href:'/alerts/information-alert'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Information Alert</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

<p class="text-gray-900 dark:text-white py-4 text-lg">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```html
<script>
  import { InfoAlert } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Information Alert Examples</h2>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert>
    <span slot="header">Info header 1</span>
    InfoAlert without View more and Dismiss button.
  </InfoAlert>
</div>

```html
<InfoAlert>
  <span slot="header">Info header 1</span>
  InfoAlert without View more and Dismiss button.
</InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-2"
    color="green"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 2</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```html
 <InfoAlert
    alertId="info-alert-2"
    color="green"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 2</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-3"
    color="red"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 3</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```html
<InfoAlert
    alertId="info-alert-3"
    color="red"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 3</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-4"
    color="yellow"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```html
<InfoAlert
    alertId="info-alert-4"
    color="yellow"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-5"
    color="gray"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 5</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```html
<InfoAlert
    alertId="info-alert-5"
    color="gray"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 5</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-6"
    color="indigo"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```html
<InfoAlert
    alertId="info-alert-6"
    color="indigo"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-7"
    color="purple"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```html
<InfoAlert
    alertId="info-alert-7"
    color="purple"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <InfoAlert
    alertId="info-alert-8"
    color="pink"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
</div>

```html
<InfoAlert
    alertId="info-alert-8"
    color="pink"
    closeBtn
    infoLink="/"
  >
    <span slot="header">Info header 4</span>
    InfoAlert with View more and Dismiss button.
  </InfoAlert>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Default Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
