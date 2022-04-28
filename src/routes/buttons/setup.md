---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Button, Breadcrumb }from '$lib/index';
  import { BellOutline } from "svelte-heros";
  import { goto }from '$app/navigation';
  const btn1 = ()=>{
    alert('This redirects to the home page.')
    goto('/')
  }
  const btn2 = ()=>{
    alert ('You clicked btn2.')
  }

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
      label:'Button setup',
      href:'/buttons/setup'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Getting started with Button Component</h1>

<p>Import a button component in the script tag.</p>

```html
<script>
	import { Button } from 'flowbite-svelte';
</script>
```

<Htwo label="Button types" />

<p>The default `type` is set to `button`. You can chage it by using the `type` prop.</p>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button type="submit">Submit</Button>
</div>

```html
<Button type="submit">Submit</Button>
```

<Htwo label="Button handler" />

<p>You can use on:click to listen to the event. Add your event handler.</p>

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
<Button on:click={btn2} textSize="text-xs">Button text-xs</Button>
```

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button on:click={btn1} textSize="text-xs">Button text-xs</Button>
<Button on:click={btn2} textSize="text-xs">Button text-xs</Button>
</div>

<Htwo label="Additional button attributes" />

<p>You can add any additional button attributes. The following example shows adding the `disabled` attribute.</p>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button disabled >Disabled</Button>
<Button disabled btnColor="green">Disabled</Button>
<Button disabled btnColor="red">Disabled</Button>
<Button disabled btnColor="yellow">Disabled</Button>
<Button disabled btnColor="purple">Disabled</Button>
</div>

```html
<Button disabled >Button disabled</Button>
```

<Htwo label="Icon button" />

<p>Since all the buttons have the `slot` you can add an icon component to create an icon button.</p>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button>
  <BellOutline size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button btnColor="red" >
  <BellOutline size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button>
  <BellOutline size="24" class="text-red-500 dark:text-purple-300" /> First
</Button>
<Button>
  Last <BellOutline size="24" class="text-red-500 dark:text-purple-300" />
</Button>
</div>

```html
<script>
	import { BellOutline } from 'svelte-heros';
</script>

<Button>
  <BellOutline size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button btnColor="red" >
  <BellOutline size="24" class="text-red-500 dark:text-purple-300" />
</Button>
<Button>
  <BellOutline size="24" class="text-red-500 dark:text-purple-300" /> First
</Button>
<Button>
  Last <BellOutline size="24" class="text-red-500 dark:text-purple-300" />
</Button>
```
