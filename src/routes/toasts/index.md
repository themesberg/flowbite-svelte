---
layout: toastLayout
---

<script>
import { Toast, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import { quintOut, elasticOut } from 'svelte/easing';
import {FireIconOutline, CheckCircleIconSolid, PlusCircleIconOutline,ArchiveIconSolid} from '@codewithshin/svelte-heroicons'
import componentProps from '../props/Toast.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Toasts',
      href:'/toasts/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Toast Components</h1>

<p>Import the Toast component and Icons.</p>

```html
<script>
import {Toast} from 'flowbite-svelte'
import {FireIconOutline, CheckCircleIconSolid, PlusCircleIconOutline,ArchiveIconSolid} from '@codewithshin/svelte-heroicons'
</script>
```

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<p>Use fade, fly, slide, or blur for transitionType.</p>

<h3>Fade examples</h3>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Toast>
    <span slot="icon">
    <FireIconOutline />
    </span>
    <span slot="text">
      Transition type: fade
    </span>
  </Toast>
</div>

```html
<Toast>
  <span slot="icon">
  <FireIconOutline />
  </span>
  <span slot="text">
    Transition type: fade
  </span>
</Toast>
```

<h3>Slide examples</h3>

<p>You can use one of <a href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank"  class="text-blue-600 hover:underline dark:text-blue-500">Svelte/easing</a>.</p>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <Toast transitionType="slide" iconColor='red'>
    <span slot="icon">
    <CheckCircleIconSolid className="h-5 w-5 text-red-500"/>
    </span>
    <span slot="text">
      Transition type: slide
    </span>
  </Toast>
</div>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <Toast transitionType="slide" iconColor='red' transitionParams={{delay: 250, duration: 300, easing: quintOut}}>
    <span slot="icon">
    <CheckCircleIconSolid className="h-5 w-5 text-red-500"/>
    </span>
    <span slot="text">
      Transition type: slide, delay: 250, duration: 300, easing: quintOut
    </span>
  </Toast>
</div>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <Toast transitionType="slide" iconColor='red' transitionParams={{delay: 250, duration: 2000, easing: elasticOut}}>
    <span slot="icon">
    <CheckCircleIconSolid className="h-5 w-5 text-red-500"/>
    </span>
    <span slot="text">
      Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
    </span>
  </Toast>
</div>

```html
<Toast transitionType="slide" iconColor='red'>
  <span slot="icon">
  <CheckCircleIconSolid className="h-5 w-5 text-red-500"/>
  </span>
  <span slot="text">
    Transition type: slide
  </span>
</Toast>

 <Toast transitionType="slide" iconColor='red' transitionParams={{delay: 250, duration: 300, easing: quintOut}}>
  <span slot="icon">
  <CheckCircleIconSolid className="h-5 w-5 text-red-500"/>
  </span>
  <span slot="text">
    Transition type: slide, delay: 250, duration: 300, easing: quintOut
  </span>
</Toast>

<Toast transitionType="slide" iconColor='red' transitionParams={{delay: 250, duration: 2000, easing: elasticOut}}>
  <span slot="icon">
  <CheckCircleIconSolid className="h-5 w-5 text-red-500"/>
  </span>
  <span slot="text">
    Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
  </span>
</Toast>
```

<h3>Blur examples</h3>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Toast transitionType="blur" iconColor='purple' transitionParams={{amount: 10}}>
    <span slot="icon">
    <PlusCircleIconOutline className="h-5 w-5 text-purple-500"/>
    </span>
    <span slot="text">
      Transition type: blur, amount: 10
    </span>
  </Toast>
</div>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Toast transitionType="blur" iconColor='purple' transitionParams={{amount: 50, delay: 1000}}>
    <span slot="icon">
    <PlusCircleIconOutline className="h-5 w-5 text-purple-500"/>
    </span>
    <span slot="text">
      Transition type: blur, amount: 50, delay 1000
    </span>
  </Toast>
</div>

```html
<Toast transitionType="blur" iconColor='purple' transitionParams={{amount: 10}}>
  <span slot="icon">
  <PlusCircleIconOutline className="h-5 w-5 text-purple-500"/>
  </span>
  <span slot="text">
    Transition type: blur, amount: 10
  </span>
</Toast>

<Toast transitionType="blur" iconColor='purple' transitionParams={{amount: 50, delay: 1000}}>
  <span slot="icon">
  <PlusCircleIconOutline className="h-5 w-5 text-purple-500"/>
  </span>
  <span slot="text">
    Transition type: blur, amount: 50, delay 1000
  </span>
</Toast>
```

<h3>Fly examples</h3>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Toast transitionType="fly" transitionParams={{x: 200}} iconColor="green">
    <span slot="icon">
    <ArchiveIconSolid  className="h-5 w-5 text-green-500"/>
    </span>
    <span slot="text">
      Transition type: fly right
    </span>
  </Toast>
</div>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Toast transitionType="fly" transitionParams={{y: 200}} iconColor="green">
    <span slot="icon">
    <ArchiveIconSolid  className="h-5 w-5 text-green-500"/>
    </span>
    <span slot="text">
      Transition type: fly down
    </span>
  </Toast>
</div>

```html
<Toast transitionType="fly" transitionParams={{x: 200}} iconColor="green">
  <span slot="icon">
  <ArchiveIconSolid  className="h-5 w-5 text-green-500"/>
  </span>
  <span slot="text">
    Transition type: fly right
  </span>
</Toast>

<Toast transitionType="fly" transitionParams={{y: 200}} iconColor="green">
  <span slot="icon">
  <ArchiveIconSolid  className="h-5 w-5 text-green-500"/>
  </span>
  <span slot="text">
    Transition type: fly down
  </span>
</Toast>
```

<h2 class="text-2xl w-full dark:text-white py-4">Icons</h2>

<p>Use any <a href="/icons" class="text-blue-600 hover:underline dark:text-blue-500">icon components.</a></p>

```html
<script>
import {Toast} from 'flowbite-svelte'
import {FireIconOutline, CheckCircleIconSolid, PlusCircleIconOutline,ArchiveIconSolid} from '@codewithshin/svelte-heroicons'
</scrip>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>