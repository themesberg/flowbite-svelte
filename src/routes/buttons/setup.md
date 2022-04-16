---
layout: buttonLayout
---

<script>
  import { Button, Breadcrumb }from '$lib/index';
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

<h1 class="text-3xl w-full dark:text-white py-8">Button Component Set Up</h1>

<p>Import Button in the script tag.</p>

```html
<script>
  import { Button } from "flowbite-svelte";
</script>
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

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="Button text-xs" on:click={btn1} textSize="text-xs" />
<Button name="Button text-xs" on:click={btn2} textSize="text-xs" />
</div>

