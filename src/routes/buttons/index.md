---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Button, Spinner, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
  import { ArrowRight, Bell, ShoppingCart, ChevronRight } from "svelte-heros";
  import BrandFacebook from '../utils/icons/Facebook.svelte'
  import { goto }from '$app/navigation';
  import componentProps from '../props/Button.json'

  const btn1 = ()=>{
    alert('You clicked btn1.')
  }
  const btn2 = ()=>{
    alert ('You clicked btn2.')
  }

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
      label:'Buttons',
      href:'/buttons/'
    }
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Buttons</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Button</h1>

<ExampleDiv>
<GitHubSource href="buttons/Button.svelte">Button</GitHubSource>
</ExampleDiv>

<p>Import a button component in the script tag.</p>

```html
<script>
	import { Button } from 'flowbite-svelte';
</script>
```

<Htwo label="Handlers" />

<p>You can use on:click or any standard on:* to listen to the event.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
<Button on:click={btn1}>Button 1</Button>
<Button on:click={btn2}>Button 2</Button>
</ExampleDiv>

```html
<script>
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	const btn1 = () => {
		alert('You clicked btn1.');
	};
	const btn2 = () => {
		alert('You clicked btn2.');
	};
</script>

<Button on:click="{btn1}">Button 1</Button>
<Button on:click="{btn2}">Button 2</Button>
```

<Htwo label="Default button" />

<p>Use these default button styles with multiple colors to indicate an action or link within your website. The default `type` is set to `button`. You can chage it by using the `type` prop.</p>

<ExampleDiv class="flex flex-wrap gap-2">
<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
</ExampleDiv>

```html
<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
```

<Htwo label="Button pills" />

<ExampleDiv class="flex flex-wrap gap-2">
  <Button pill={true}>Default</Button>
  <Button color="alternative" pill={true}>Alternative</Button>
  <Button color="dark" pill={true}>Dark</Button>
  <Button color="light" pill={true}>Light</Button>
  <Button color="green" pill={true}>Green</Button>
  <Button color="red" pill={true}>Red</Button>
  <Button color="yellow" pill={true}>Yellow</Button>
  <Button color="purple" pill={true}>Purple</Button>
</ExampleDiv>

```html
<Button pill="{true}">Default</Button>
<Button color="alternative" pill="{true}">Alternative</Button>
<Button color="dark" pill="{true}">Dark</Button>
<Button color="light" pill="{true}">Light</Button>
<Button color="green" pill="{true}">Green</Button>
<Button color="red" pill="{true}">Red</Button>
<Button color="yellow" pill="{true}">Yellow</Button>
<Button color="purple" pill="{true}">Purple</Button>
```

<Htwo label="Gradient monochrome" />

<p>These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.</p>

<ExampleDiv class="flex flex-wrap gap-2">
  <Button gradient color="blue">Blue</Button>
  <Button gradient color="green">Green</Button>
  <Button gradient color="cyan">Cyan</Button>
  <Button gradient color="teal">Teal</Button>
  <Button gradient color="lime">Lime</Button>
  <Button gradient color="red">Red</Button>
  <Button gradient color="pink">Pink</Button>
  <Button gradient color="purple">Purple</Button>
</ExampleDiv>

```html
<Button gradient color="blue">Blue</Button>
<Button gradient color="green">Green</Button>
<Button gradient color="cyan">Cyan</Button>
<Button gradient color="teal">Teal</Button>
<Button gradient color="lime">Lime</Button>
<Button gradient color="red">Red</Button>
<Button gradient color="pink">Pink</Button>
<Button gradient color="purple">Purple</Button>
```

<Htwo label="Gradient duotone" />

<p>These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
  <Button gradient color="purpleToBlue">Purple to Blue</Button>
  <Button gradient color="cyanToBlue">Cyan to Blue</Button>
  <Button gradient color="greenToBlue">Green to Blue</Button>
  <Button gradient color="purpleToPink">Purple to Pink</Button>
  <Button gradient color="pinkToOrange">Pink to Orange</Button>
  <Button gradient color="tealToLime">Teal to Lime</Button>
  <Button gradient color="redToYellow">Red to Yellow</Button>
</ExampleDiv>

```html
<Button gradient color="purpleToBlue">Purple to Blue</Button>
<Button gradient color="cyanToBlue">Cyan to Blue</Button>
<Button gradient color="greenToBlue">Green to Blue</Button>
<Button gradient color="purpleToPink">Purple to Pink</Button>
<Button gradient color="pinkToOrange">Pink to Orange</Button>
<Button gradient color="tealToLime">Teal to Lime</Button>
<Button gradient color="redToYellow">Red to Yellow</Button>
```

<Htwo label="Gradient outline" />

<p>This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
  <Button outline gradient color="purpleToBlue">Purple to Blue</Button>
  <Button outline gradient color="cyanToBlue">Cyan to Blue</Button>
  <Button outline gradient color="greenToBlue">Green to Blue</Button>
  <Button outline gradient color="purpleToPink">Purple to Pink</Button>
  <Button outline gradient color="pinkToOrange">Pink to Orange</Button>
  <Button outline gradient color="tealToLime">Teal to Lime</Button>
  <Button outline gradient color="redToYellow">Red to Yellow</Button>
</ExampleDiv>

```html
<Button outline gradient color="purpleToBlue">Purple to Blue</Button>
<Button outline gradient color="cyanToBlue">Cyan to Blue</Button>
<Button outline gradient color="greenToBlue">Green to Blue</Button>
<Button outline gradient color="purpleToPink">Purple to Pink</Button>
<Button outline gradient color="pinkToOrange">Pink to Orange</Button>
<Button outline gradient color="tealToLime">Teal to Lime</Button>
<Button outline gradient color="redToYellow">Red to Yellow</Button>
```

<Htwo label="Colored shadows" />

<p>These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
  <Button shadow="blue" gradient color="blue">Blue</Button>
  <Button shadow="green" gradient color="green">Green</Button>
  <Button shadow="cyan" gradient color="cyan">Cyan</Button>
  <Button shadow="teal" gradient color="teal">Teal</Button>
  <Button shadow="lime" gradient color="lime">Lime</Button>
  <Button shadow="red" gradient color="red">Red</Button>
  <Button shadow="pink" gradient color="pink">Pink</Button>
  <Button shadow="purple" gradient color="purple">Purple</Button>
</ExampleDiv>

```html
<Button shadow="blue" gradient color="blue">Blue</Button>
<Button shadow="green" gradient color="green">Green</Button>
<Button shadow="cyan" gradient color="cyan">Cyan</Button>
<Button shadow="teal" gradient color="teal">Teal</Button>
<Button shadow="lime" gradient color="lime">Lime</Button>
<Button shadow="red" gradient color="red">Red</Button>
<Button shadow="pink" gradient color="pink">Pink</Button>
<Button shadow="purple" gradient color="purple">Purple</Button>
```

<Htwo label="Outline buttons" />

<p>Use the following button styles to show the colors only for the border of the element.</p>

<ExampleDiv>
<div class="flex flex-wrap gap-2">
  <Button outline>Default</Button>
  <Button outline color="dark">Dark</Button>
  <Button outline color="green">Green</Button>
  <Button outline color="red">Red</Button>
  <Button outline color="yellow">Yellow</Button>
  <Button outline color="purple">Purple</Button>
</div>
</ExampleDiv>

```html
<div class="flex flex-wrap gap-2">
	<Button outline>Default</Button>
	<Button outline color="dark">Dark</Button>
	<Button outline color="green">Green</Button>
	<Button outline color="red">Red</Button>
	<Button outline color="yellow">Yellow</Button>
	<Button outline color="purple">Purple</Button>
</div>
```

<Htwo label="Button sizes" />

<ExampleDiv class="flex flex-wrap items-center gap-2">
  <Button size="xs">Extra small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Base</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra large</Button>
</ExampleDiv>

```html
<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Base</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>
```

<Htwo label="Buttons with icon" />

<p>Use the following examples to add a SVG icon inside the button either on the left or right side.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
<Button>
  <ShoppingCart size="18" class="mr-2"/> Buy Now
</Button>
<Button>
  Choose Plan <ArrowRight size="18" class="ml-2" />
</Button>
</ExampleDiv>

```html
<Button><ShoppingCart size="18" class="mr-2" /> Buy Now</Button>
<Button>Choose Plan <ArrowRight size="18" class="ml-2" /></Button>
```

<Htwo label="Button with label" />

<p>This example can be used to show a notification count or helper text inside a button using the badge element.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
<Button>
  Messages
  <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
    2
  </span>
  <!-- Badge color="blue" rounded class="w-4 h-4 ml-2 font-semibold">2</Badge -->
</Button>
</ExampleDiv>

```html
<Button>
	Messages
	<span
		class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
	>
		2
	</span>
</Button>
```

<Htwo label="Icon buttons" />

<p>Sometimes you need a button to indicate an action using only an icon.</p>

<ExampleDiv>
  <div class="flex flex-wrap items-center gap-2">
    <Button class="!p-2"><ArrowRight class="w-5 h-5"/></Button>
    <Button pill={true} class="!p-2"><ArrowRight class="w-5 h-5"/></Button>
    <Button outline={true} class="!p-2" size="lg"><ArrowRight class="w-5 h-5"/></Button>
    <Button pill={true} outline={true} class="!p-2" size="xl"><ArrowRight class="w-5 h-5"/></Button>
  </div>
</ExampleDiv>

```html
<script>
	import { ArrowRight } from 'svelte-heros';
</script>

<div class="flex flex-wrap items-center gap-2">
	<Button class="!p-2"><ArrowRight class="w-5 h-5" /></Button>
	<Button pill="{true}" class="!p-2"><ArrowRight class="w-5 h-5" /></Button>
	<Button outline="{true}" class="!p-2"><ArrowRight class="w-5 h-5" /></Button>
	<Button pill="{true}" class="!p-2" outline="{true}"><ArrowRight class="w-5 h-5" /></Button>
</div>
```

<Htwo label="Loader" />

<ExampleDiv>
<div class="flex flex-wrap items-center gap-2">
<Button>
  <Spinner class="mr-3" size="4" color="white" />
  Loading ...
</Button>
<Button outline color="dark">
  <Spinner class="mr-3" size="4" />
  Loading ...
</Button>
</div>
</ExampleDiv>

<Htwo label="Disabled" />

<p>You can add any additional button attributes. The following example shows adding the `disabled` attribute.</p>

<ExampleDiv>
<Button disabled >Disabled</Button>
</ExampleDiv>

```html
<Button disabled>Button disabled</Button>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>
