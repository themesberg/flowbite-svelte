---
layout: alertLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Alert, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import {
    XCircleSolid, EyeSolid, InformationCircleSolid
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
    },
    {
      label:'Alert default',
      href:'/alerts/default-alert'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Alert</h1>

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
<ExampleDiv>
  <Alert id="alert-red" color="red" icon={XCircleSolid}>
    <span slot="content">
      <span class="font-medium">
        Info alert!
      </span>
      Change a few things up and try submitting again.
    </span>
  </Alert>

  ```html
  <Alert id="alert-red" color="red" icon={XCircleSolid}>
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

<Htwo label="Rounded" />
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

<Htwo label="With border" />
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

<Htwo label="Additional content" />
<ExampleDiv>
  <Alert id="alert-extra" color="blue" icon={InformationCircleSolid} closeBtn>
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
          <EyeSolid class="-ml-0.5 mr-2 h-4 w-4" />View more
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
  <Alert id="alert-extra" color="blue" icon={InformationCircleSolid} closeBtn>
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
          <EyeSolid class="-ml-0.5 mr-2 h-4 w-4" />View more
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

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>