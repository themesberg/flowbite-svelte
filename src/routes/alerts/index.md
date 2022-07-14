---
layout: alertLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Alert, Breadcrumb, BreadcrumbItem, Button } from '$lib/index'
  import { Home } from 'svelte-heros';
  import { XCircle, Eye, InformationCircle } from "svelte-heros";
  import componentProps from '../props/Alert.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Alerts</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Alert</h1>

<p>Show contextual information to your users using alert elements based on Tailwind CSS</p>

<p>The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page. Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.</p>

<Htwo label="Set up" />

<p class="text-gray-900 dark:text-white py-4 text-lg">
Import Alert and set variables in the script tag.
</p>

```html
<script>
	import { Alert } from 'flowbite-svelte';
</script>
```

<Htwo label="Default alert" />

<p>Use the following examples of alert components to show messages as feedback to your users.</p>

<ExampleDiv>
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
</ExampleDiv>

```html
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

<p>You can also include a descriptive icon to complement the message inside the alert component with the following example.</p>

<ExampleDiv>
  <Alert icon={InformationCircle}>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="red" icon={InformationCircle}>
    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="green" icon={InformationCircle}>
    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow" icon={InformationCircle}>
    <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="dark" icon={InformationCircle}>
    <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
  </Alert>
</ExampleDiv>

```html
<Alert icon="{InformationCircle}">
	<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="red" icon="{InformationCircle}">
	<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="green" icon="{InformationCircle}">
	<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="yellow" icon="{InformationCircle}">
	<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="dark" icon="{InformationCircle}">
	<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
```

<Htwo label="Dismissable alerts" />

<p>Use the following alert elements that are also dismissable.</p>

<ExampleDiv>
  <Alert icon={InformationCircle} dismissable>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="red" icon={InformationCircle} dismissable>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="green" icon={InformationCircle} dismissable>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="yellow" icon={InformationCircle} dismissable>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-yellow-800 dark:hover:text-yellow-900">example link</a>. Give it a click if you like.
  </Alert>
  <Alert color="dark" icon={InformationCircle} dismissable>
    A simple info alert with an <a href="/" class="font-semibold underline hover:text-gray-800 dark:hover:text-white">example link</a>. Give it a click if you like.
  </Alert>

</ExampleDiv>

```html
<Alert color="green" icon="{InformationCircle}" dismissable>
	A simple info alert with an
	<a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900"
		>example link</a
	>. Give it a click if you like.
</Alert>
```

<Htwo label="Border accent" />

<p>Use the following alert components with a border accent as an alternative style.</p>

<ExampleDiv>
  <Alert accent rounded={false} icon={InformationCircle}>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="red" accent rounded={false} icon={InformationCircle}>
    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="green" accent rounded={false} icon={InformationCircle}>
    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow" accent rounded={false} icon={InformationCircle}>
    <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
  </Alert>
  <Alert color="dark" accent rounded={false} icon={InformationCircle}>
    <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
  </Alert>
</ExampleDiv>

```html
<Alert accent rounded="{false}" icon="{InformationCircle}">
	<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="red" accent rounded="{false}" icon="{InformationCircle}">
	<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="green" accent rounded="{false}" icon="{InformationCircle}">
	<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="yellow" accent rounded="{false}" icon="{InformationCircle}">
	<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="dark" accent rounded="{false}" icon="{InformationCircle}">
	<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
```

<Htwo label="Additional content" />

<p>The following alert components can be used if you wish to disclose more information inside the element.</p>

<ExampleDiv>
  <Alert color="blue" icon={InformationCircle}>
    <span class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</span>
    <div slot="extra">
      <div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </div>
      <div class="flex gap-2">
      <Button size="xs"><Eye class="mr-2 h-4 w-4" />View more</Button>
      <Button size="xs" outline color="default">Go to Home</Button>
      </div>
    </div>
  </Alert>
</ExampleDiv>

```html
<Alert color="blue" icon="{InformationCircle}">
	<span class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</span>
	<div slot="extra">
		<div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
			More info about this info alert goes here. This example text is going to run a bit longer so
			that you can see how spacing within an alert works with this kind of content.
		</div>
		<div class="flex gap-2">
			<button size="xs"><Eye class="-ml-0.5 mr-2 h-4 w-4" />View more</button>
			<button size="xs" outline color="default">Go to Home</button>
		</div>
	</div>
</Alert>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>
