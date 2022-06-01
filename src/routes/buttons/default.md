---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Button, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import { ArrowRight, Bell, ShoppingCart, ChevronRight } from "svelte-heros";
  import { goto }from '$app/navigation';
  import componentProps from '../props/Button.json'

  const btn1 = ()=>{
    alert('This redirects to the home page.')
    goto('/')
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
    },
    {
      label:'Button default',
      href:'/buttons/default'
    },
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

<Htwo label="Types" />

<p>The default `type` is set to `button`. You can chage it by using the `type` prop.</p>

<ExampleDiv>
<Button type="submit">Submit</Button>
</ExampleDiv>

```html
<Button type="submit">Submit</Button>
```

<Htwo label="Sizes" />

<ExampleDiv>
  <Button textSize="text-xs">Button text-xs</Button>
  <Button textSize="text-sm">Button text-sm</Button>
  <Button textSize="text-base">Button text-base</Button>
  <Button textSize="text-lg">Button text-lg</Button>
  <Button textSize="text-xl">Button text-xl</Button>
  <Button textSize="text-2xl">Button text-2xl</Button>
  <Button textSize="text-3xl">Button text-3xl</Button>
  <Button textSize="text-4xl">Button text-4xl</Button>
</ExampleDiv>

```html
<Button textSize="text-xs">Button text-xs</Button>
<Button textSize="text-sm">Button text-sm</Button>
<Button textSize="text-base">Button text-base</Button>
<Button textSize="text-lg">Button text-lg</Button>
<Button textSize="text-xl">Button text-xl</Button>
<Button textSize="text-2xl">Button text-2xl</Button>
<Button textSize="text-3xl">Button text-3xl</Button>
<Button textSize="text-4xl">Button text-4xl</Button>
```

<Htwo label="Colors" />

<ExampleDiv>
  <Button textSize="text-sm">Button</Button>
  <Button textSize="text-sm" btnColor="dark">Button</Button>
  <Button textSize="text-sm" btnColor="light">Button</Button>
  <Button textSize="text-sm" btnColor="red">Button</Button>
  <Button textSize="text-sm" btnColor="green">Button</Button>
  <Button textSize="text-sm" btnColor="yellow">Button</Button>
  <Button textSize="text-sm" btnColor="purple">Button</Button>
</ExampleDiv>

```html
<Button textSize="text-sm">Button</Button>
<Button textSize="text-sm" btnColor="dark">Button</Button>
<Button textSize="text-sm" btnColor="light">Button</Button>
<Button textSize="text-sm" btnColor="red">Button</Button>
<Button textSize="text-sm" btnColor="green">Button</Button>
<Button textSize="text-sm" btnColor="yellow">Button</Button>
<Button textSize="text-sm" btnColor="purple">Button</Button>
```

<Htwo label="Handlers" />

<p>You can use on:click or any standard on:* to listen to the event.</p>

```html
<script>
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	const btn1 = () => {
		alert('This redirects to the home page.');
		goto('/');
	};
	const btn2 = () => {
		alert('You clicked btn2.');
	};
</script>

<Button on:click={btn1} textSize="text-xs">Button text-xs</Button>
<Button on:click={btn2} textSize="text-xl">Button text-xl</Button>
```

<ExampleDiv>
<Button on:click={btn1} textSize="text-xs">Button text-xs</Button>
<Button on:click={btn2} textSize="text-xl">Button text-xl</Button>
</ExampleDiv>

<Htwo label="Icons & Labels" />

<p>Since all the buttons have a `slot` you can add an icon component to create an icon button.</p>

<ExampleDiv>
<Button>
    <ArrowRight/>
</Button>
<Button>
  <Bell size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button btnColor="red" >
  <Bell size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button btnColor="green">
  <ShoppingCart size="24"/> Buy Now
</Button>
<Button>
  Choose Plan <ChevronRight size="24" class="text-gray-500 dark:text-gray-300" />
</Button>
<Button>
  Messages
  <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
    2
  </span>
</Button>
</ExampleDiv>

```html
<script>
	import { ArrowRight, Bell, ShoppingCart, ChevronRight } from 'svelte-heros';
</script>

<Button>
    <ArrowRight/>
</Button>
<Button>
  <Bell size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button btnColor="red" >
  <Bell size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button btnColor="green">
  <ShoppingCart size="24"/> Buy Now
</Button>
<Button>
  Choose Plan <ChevronRight size="24" class="text-gray-500 dark:text-gray-300" />
</Button>
<Button>
  Messages
  <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
    2
  </span>
</Button>
```

<Htwo label="Disabled" />

<p>You can add any additional button attributes. The following example shows adding the `disabled` attribute.</p>

<ExampleDiv>
<Button disabled >Disabled</Button>
<Button disabled btnColor="green">Disabled</Button>
<Button disabled btnColor="red">Disabled</Button>
<Button disabled btnColor="yellow">Disabled</Button>
<Button disabled btnColor="purple">Disabled</Button>
</ExampleDiv>

```html
<Button disabled>Button disabled</Button>
```


<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
