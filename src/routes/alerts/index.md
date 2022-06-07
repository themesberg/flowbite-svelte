---
layout: alertLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Alert, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import {
    XCircle, Eye, InformationCircle
  } from "svelte-heros";
  import componentProps from '../props/Alert.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Alerts',
      href:'/alerts/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Alert</h1>

<p>Show contextual information to your users using alert elements based on Tailwind CSS</p>

<p>The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page. Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.</p>

<Htwo label="Set up" />

<p class="text-gray-900 dark:text-white py-4 text-lg">
Import Alert and set variables in the script tag.
</p>

```html
<script>
  import { Alert } from "flowbite-svelte";
</script>
```

<Htwo label="Default alert" />

<p>Use the following examples of alert components to show messages as feedback to your users.</p>

<ExampleDiv>
  <Alert id="alert-blue">
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>

  ```html
  <Alert id="alert-blue">
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>
  ```
</ExampleDiv>

<Htwo label="Alerts with icon" />

<p>You can also include a descriptive icon to complement the message inside the alert component with the following example.</p>

<ExampleDiv>
  <Alert id="alert-red" color="red" icon={XCircle}>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>

  ```html
  <Alert id="alert-red" color="red" icon={XCircle}>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>
  ```
</ExampleDiv>

<Htwo label="Dismissable alerts" />

<p>Use the following alert elements that are also dismissable.</p>

<ExampleDiv>
  <Alert id="alert-green" color="green" closeBtn>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>

  ```html
  <Alert id="alert-green" color="green" closeBtn>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>
  ```
</ExampleDiv>


<Htwo label="Border accent" />

<p>Use the following alert components with a border accent as an alternative style.</p>

<ExampleDiv>
  <Alert id="alert-yellow" color="yellow" borderAccent={true}>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>

```html
<Alert id="alert-yellow" color="yellow" borderAccent={true}>
  <span slot="content">
    <span class="font-medium">
      Info alert!
    </span>
    Change a few things up and try submitting again.
  </span>
</Alert>
```
</ExampleDiv>

<Htwo label="Rounded" />

<p>Use rounded props to control roundedness.</p>

<ExampleDiv>
  <Alert id="alert-yellow" color="yellow" rounded={false}>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>

```html
<Alert id="alert-yellow" color="yellow" rounded={false}>
  <span slot="content">
    <span class="font-medium">
      Info alert!
    </span>
    Change a few things up and try submitting again.
  </span>
</Alert>
```
</ExampleDiv>

<Htwo label="Additional content" />

<p>The following alert components can be used if you wish to disclose more information inside the element.</p>

<ExampleDiv>
  <Alert id="alert-extra" color="blue" icon={InformationCircle} closeBtn>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
    <div slot="extra">
      <div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <button type="button" class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900">
          <Eye class="-ml-0.5 mr-2 h-4 w-4" />View more
        </button>
        <button
          type="button"
          class="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
        >
          Go to Home
        </button>
      </div>
    </div>
  </Alert>

```html
<Alert id="alert-extra" color="blue" icon={InformationCircle} closeBtn>
  <span slot="content">
    <span class="font-medium">
      Info alert!
    </span>
    Change a few things up and try submitting again.
  </span>
  <div slot="extra">
    <div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </div>
    <div class="flex">
      <button type="button" class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900">
        <Eye class="-ml-0.5 mr-2 h-4 w-4" />View more
      </button>
      <button
        type="button"
        class="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
      >
        Dismiss
      </button>
    </div>
  </div>
</Alert>
```
</ExampleDiv>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>