---
layout: buttonLayout
---

<script>
  import { Button, Breadcrumb }from '$lib/index';
  import { BellIconOutline } from "@codewithshin/svelte-heroicons";
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
  import { Button } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button type</h2>

<p>The default `type` is set to `button`. You can chage it by using the `type` prop.</p>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button type="submit" name="Submit" />
</div>

```html
<Button type="submit" name="Submit" />
```


<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button handler</h2>

<p>You can use on:click to listen to the event. Add your event handler.</p>

```html
<script>
  import { Button } from "flowbite-svelte";
  import { goto }from '$app/navigation';
  const btn1 = ()　=>　{
    alert('This redirects to the home page.')
    goto('/')
  }
  const btn2 = ()　=>　{
    alert ('You clicked btn2.')
  }
</script>

<Button name="Button text-xs" on:click={btn1} textSize="text-xs" />
<Button name="Button text-xs" on:click={btn2} textSize="text-xs" />
```

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="Button text-xs" on:click={btn1} textSize="text-xs" />
<Button name="Button text-xs" on:click={btn2} textSize="text-xs" />
</div>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Additional button attributes</h2>

<p>You can add any additional button attributes. The following example shows adding the `disabled` attribute.</p>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="Button disabled" disabled />
</div>

```html
<Button name="Button disabled" disabled />
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Icon button</h2>

<p>Since all the buttons have the `slot` you can add an icon component to create an icon button.</p>

<div class="rounded-xl w-full flex justify-center my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="">
  <BellIconOutline className="h-6 w-6 text-red-500 dark:text-purple-300" />
</Button>
<Button name="" btnColor="red" >
  <BellIconOutline className="h-6 w-6 text-red-500 dark:text-purple-300" />
</Button>
</div>

```html
<script>
  import { BellIconOutline } from "@codewithshin/svelte-heroicons";
</script>

<Button name="">
  <BellIconOutline className="h-6 w-6 text-red-500 dark:text-purple-300" />
</Button>
<Button name="" btnColor="red" >
  <BellIconOutline className="h-6 w-6 text-red-500 dark:text-purple-300" />
</Button>
```

