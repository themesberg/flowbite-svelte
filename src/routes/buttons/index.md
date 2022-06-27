---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Button, GradientMonochromeButton, GradientDuotoneButton, Spinner, Breadcrumb } from '$lib/index';
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

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Buttons</h1>

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

<button on:click="{btn1}">Button 1</button>
<button on:click="{btn2}">Button 2</button>
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
<button>Default</button>
<button color="alternative">Alternative</button>
<button color="dark">Dark</button>
<button color="light">Light</button>
<button color="green">Green</button>
<button color="red">Red</button>
<button color="yellow">Yellow</button>
<button color="purple">Purple</button>
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
<button pill="{true}">Default</button>
<button color="alternative" pill="{true}">Alternative</button>
<button color="dark" pill="{true}">Dark</button>
<button color="light" pill="{true}">Light</button>
<button color="green" pill="{true}">Green</button>
<button color="red" pill="{true}">Red</button>
<button color="yellow" pill="{true}">Yellow</button>
<button color="purple" pill="{true}">Purple</button>
```

<Htwo label="Gradient monochrome" />

<p>These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.</p>

<ExampleDiv class="flex flex-wrap gap-2">
  <GradientMonochromeButton color="blue">Blue</GradientMonochromeButton>
  <GradientMonochromeButton color="green">Green</GradientMonochromeButton>
  <GradientMonochromeButton color="cyan">Cyan</GradientMonochromeButton>
  <GradientMonochromeButton color="teal">Teal</GradientMonochromeButton>
  <GradientMonochromeButton color="lime">Lime</GradientMonochromeButton>
  <GradientMonochromeButton color="red">Red</GradientMonochromeButton>
  <GradientMonochromeButton color="pink">Pink</GradientMonochromeButton>
  <GradientMonochromeButton color="purple">Purple</GradientMonochromeButton>
</ExampleDiv>

```html
<GradientMonochromeButton color="blue">Blue</GradientMonochromeButton>
<GradientMonochromeButton color="green">Green</GradientMonochromeButton>
<GradientMonochromeButton color="cyan">Cyan</GradientMonochromeButton>
<GradientMonochromeButton color="teal">Teal</GradientMonochromeButton>
<GradientMonochromeButton color="lime">Lime</GradientMonochromeButton>
<GradientMonochromeButton color="red">Red</GradientMonochromeButton>
<GradientMonochromeButton color="pink">Pink</GradientMonochromeButton>
<GradientMonochromeButton color="purple">Purple</GradientMonochromeButton>
```

<Htwo label="Gradient duotone" />

<p>These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
  <GradientDuotoneButton color="purpleToBlue">Purple to Blue</GradientDuotoneButton>
  <GradientDuotoneButton color="cyanToBlue">Cyan to Blue</GradientDuotoneButton>
  <GradientDuotoneButton color="greenToBlue">Green to Blue</GradientDuotoneButton>
  <GradientDuotoneButton color="purpleToPink">Purple to Pink</GradientDuotoneButton>
  <GradientDuotoneButton color="pinkToOrange">Pink to Orange</GradientDuotoneButton>
  <GradientDuotoneButton color="tealToLime">Teal to Lime</GradientDuotoneButton>
  <GradientDuotoneButton color="redToYellow">Red to Yellow</GradientDuotoneButton>
</ExampleDiv>

```html
<GradientDuotoneButton color="purpleToBlue">Purple to Blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyanToBlue">Cyan to Blue</GradientDuotoneButton>
<GradientDuotoneButton color="greenToBlue">Green to Blue</GradientDuotoneButton>
<GradientDuotoneButton color="purpleToPink">Purple to Pink</GradientDuotoneButton>
<GradientDuotoneButton color="pinkToOrange">Pink to Orange</GradientDuotoneButton>
<GradientDuotoneButton color="tealToLime">Teal to Lime</GradientDuotoneButton>
<GradientDuotoneButton color="redToYellow">Red to Yellow</GradientDuotoneButton>
```

<Htwo label="Gradient outline" />

<p>This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
  <GradientDuotoneButton outline={true} color="purpleToBlue">Purple to Blue</GradientDuotoneButton>
  <GradientDuotoneButton outline={true} color="cyanToBlue">Cyan to Blue</GradientDuotoneButton>
  <GradientDuotoneButton outline={true} color="greenToBlue">Green to Blue</GradientDuotoneButton>
  <GradientDuotoneButton outline={true} color="purpleToPink">Purple to Pink</GradientDuotoneButton>
  <GradientDuotoneButton outline={true} color="pinkToOrange">Pink to Orange</GradientDuotoneButton>
  <GradientDuotoneButton outline={true} color="tealToLime">Teal to Lime</GradientDuotoneButton>
  <GradientDuotoneButton outline={true} color="redToYellow">Red to Yellow</GradientDuotoneButton>
</ExampleDiv>

```html
<GradientDuotoneButton outline="{true}" color="purpleToBlue">Purple to Blue</GradientDuotoneButton>
<GradientDuotoneButton outline="{true}" color="cyanToBlue">Cyan to Blue</GradientDuotoneButton>
<GradientDuotoneButton outline="{true}" color="greenToBlue">Green to Blue</GradientDuotoneButton>
<GradientDuotoneButton outline="{true}" color="purpleToPink">Purple to Pink</GradientDuotoneButton>
<GradientDuotoneButton outline="{true}" color="pinkToOrange">Pink to Orange</GradientDuotoneButton>
<GradientDuotoneButton outline="{true}" color="tealToLime">Teal to Lime</GradientDuotoneButton>
<GradientDuotoneButton outline="{true}" color="redToYellow">Red to Yellow</GradientDuotoneButton>
```

<Htwo label="Colored shadows" />

<p>These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
  <Button coloredShadow="blue">Blue</Button>
  <Button coloredShadow="green">Green</Button>
  <Button coloredShadow="cyan">Cyan</Button>
  <Button coloredShadow="teal">Teal</Button>
  <Button coloredShadow="lime">Lime</Button>
  <Button coloredShadow="red">Red</Button>
  <Button coloredShadow="pink">Pink</Button>
  <Button coloredShadow="purple">Purple</Button>
</ExampleDiv>

```html
<button coloredShadow="blue">Blue</button>
<button coloredShadow="green">Green</button>
<button coloredShadow="cyan">Cyan</button>
<button coloredShadow="teal">Teal</button>
<button coloredShadow="lime">Lime</button>
<button coloredShadow="red">Red</button>
<button coloredShadow="pink">Pink</button>
<button coloredShadow="purple">Purple</button>
```

<Htwo label="Outline buttons" />

<p>Use the following button styles to show the colors only for the border of the element.</p>

<ExampleDiv>
<div class="flex flex-wrap gap-2">
  <Button outlineStyle="default">Default</Button>
  <Button outlineStyle="dark">Dark</Button>
  <Button outlineStyle="green">Green</Button>
  <Button outlineStyle="red">Red</Button>
  <Button outlineStyle="yellow">Yellow</Button>
  <Button outlineStyle="purple">Purple</Button>
</div>
</ExampleDiv>

```html
<div class="flex flex-wrap gap-2">
	<button outlineStyle="default">Default</button>
	<button outlineStyle="dark">Dark</button>
	<button outlineStyle="green">Green</button>
	<button outlineStyle="red">Red</button>
	<button outlineStyle="yellow">Yellow</button>
	<button outlineStyle="purple">Purple</button>
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
<button size="xs">Extra small</button>
<button size="sm">Small</button>
<button size="md">Base</button>
<button size="lg">Large</button>
<button size="xl">Extra large</button>
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
<button><ShoppingCart size="18" class="mr-2" /> Buy Now</button>
<button>Choose Plan <ArrowRight size="18" class="ml-2" /></button>
```

<Htwo label="Button with label" />

<p>This example can be used to show a notification count or helper text inside a button using the badge element.</p>

<ExampleDiv class="flex flex-wrap items-center gap-2">
<Button>
  Messages
  <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
    2
  </span>
</Button>
</ExampleDiv>

```html
<button>
	Messages
	<span
		class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
	>
		2
	</span>
</button>
```

<Htwo label="Icon buttons" />

<p>Sometimes you need a button to indicate an action using only an icon.</p>

<ExampleDiv>
<div class="flex flex-wrap items-center gap-2">
<Button icon={ArrowRight} />
<Button icon={ArrowRight} pill={true} />
<Button icon={ArrowRight} outline={true} />
<Button icon={ArrowRight} pill={true} outline={true} />
</div>
</ExampleDiv>

```html
<script>
	import { ArrowRight } from 'svelte-heros';
</script>

<div class="flex flex-wrap items-center gap-2">
	<button icon="{ArrowRight}" />
	<button icon="{ArrowRight}" pill="{true}" />
	<button icon="{ArrowRight}" outline="{true}" />
	<button icon="{ArrowRight}" pill="{true}" outline="{true}" />
</div>
```

<Htwo label="Loader" />

<ExampleDiv>
<div class="flex flex-wrap items-center gap-2">
<Button>
  <Spinner class="mr-3" size="4" />
  Loading ...
</Button>
<Button outlineStyle="white">
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
<button disabled>Button disabled</button>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>
