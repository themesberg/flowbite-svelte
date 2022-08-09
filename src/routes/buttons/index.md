---
layout: buttonLayout
---

<script>
  import {Htwo,ExampleDiv,GitHubSource,CompoDescription,TableProp, TableDefaultRow, BrandFacebook} from '../utils'
  import { Button, Spinner, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
  import { Home, ArrowRight, Bell, ShoppingCart, ChevronRight } from "svelte-heros";
  import { goto }from '$app/navigation';
  
  import componentProps from '../props/Button.json'
  let slotHeader = ['Name', 'Description']

  let slotItems = [['default', 'For a button label.']]

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

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Buttons</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Button</h1>

<CompoDescription>Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows</CompoDescription>

<ExampleDiv>
<GitHubSource href="buttons/Button.svelte">Button</GitHubSource>
</ExampleDiv>

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

Flowbite-Svelte provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

<Htwo label="Setup" />

Import a button component in the script tag.

```html
<script>
	import { Button } from 'flowbite-svelte';
</script>
```

<Htwo label="Default button" />

Use these default button styles with multiple colors to indicate an action or link within your website. The default `type` is set to `button`. You can chage it by using the `type` prop.

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

The button pills can be used as an alternative style by using fully rounded edges.

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

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

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

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.

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

This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.

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

These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.

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

Use the following button styles to show the colors only for the border of the element.

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

Use these examples if you want to use smaller or larger buttons.

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

Use the following examples to add a SVG icon inside the button either on the left or right side.

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

This example can be used to show a notification count or helper text inside a button using the badge element.

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

Sometimes you need a button to indicate an action using only an icon.

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

Use the spinner components from Flowbite-Svelte to indicate a loader animation inside buttons.

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

You can add any additional button attributes. The following example shows adding the `disabled` attribute.

<ExampleDiv>
<Button disabled >Disabled</Button>
</ExampleDiv>

```html
<Button disabled>Button disabled</Button>
```

<Htwo label="Events" />

You can use on:click or any standard on:* to listen to the event.

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

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>Custom CSS</h3>

Use `btnClass` to overwrite Button class.

<Htwo label="Slots" />

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
</div>
