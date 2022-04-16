---
layout: badgeLayout
---

<script>
  import {InformationCircleIconOutline} from '@codewithshin/svelte-heroicons'
  import {BadgeLink, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import componentProps from '../props/BadgeLink.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let link="/"
    let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Badges',
      href:'/badges/'
    },
    {
      label:'Link badge',
      href:'/badges/badge-link'
    }
  ]
</script>

<Breadcrumb {crumbs}/>



<h1 class="text-3xl w-full dark:text-white py-8">Badges with Link</h1>

```html
<script>
  import {BadgeLink} from 'flowbite-svelte'
  let link="/"
</script>
```

<h2 class="text-2xl w-full dark:text-white py-4">Size xs</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeLink name="Default" {link}/>
<BadgeLink name="Gray" color="gray" {link}/>
<BadgeLink name="Red" color="red" {link}/>
<BadgeLink name="Green" color="green" {link}/>
<BadgeLink name="Yellow" color="yellow" {link}/>
<BadgeLink name="Indigo" color="indigo" {link}/>
<BadgeLink name="Purple" color="purple" {link}/>
<BadgeLink name="Pink" color="pink" {link}/>
</div>

```html
<BadgeLink name="Default" {link}/>
<BadgeLink name="Gray" color="gray" {link}/>
<BadgeLink name="Red" color="red" {link}/>
<BadgeLink name="Green" color="green" {link}/>
<BadgeLink name="Yellow" color="yellow" {link}/>
<BadgeLink name="Indigo" color="indigo" {link}/>
<BadgeLink name="Purple" color="purple" {link}/>
<BadgeLink name="Pink" color="pink" {link}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Size sm</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeLink name="Default" textSize="text-sm" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-sm" {link}/>
<BadgeLink name="Red" color="red" textSize="text-sm" {link}/>
<BadgeLink name="Green" color="green" textSize="text-sm" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-sm" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-sm" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-sm" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-sm" {link}/>
</div>

```html
<BadgeLink name="Default" textSize="text-sm" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-sm" {link}/>
<BadgeLink name="Red" color="red" textSize="text-sm" {link}/>
<BadgeLink name="Green" color="green" textSize="text-sm" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-sm" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-sm" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-sm" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-sm" {link}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Size base</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<BadgeLink name="Default" textSize="text-base" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-base" {link}/>
<BadgeLink name="Red" color="red" textSize="text-base" {link}/>
<BadgeLink name="Green" color="green" textSize="text-base" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-base" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-base" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-base" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-base" {link}/>
</div>

```html
<BadgeLink name="Default" textSize="text-base" {link}/>
<BadgeLink name="Gray" color="gray" textSize="text-base" {link}/>
<BadgeLink name="Red" color="red" textSize="text-base" {link}/>
<BadgeLink name="Green" color="green" textSize="text-base" {link}/>
<BadgeLink name="Yellow" color="yellow" textSize="text-base" {link}/>
<BadgeLink name="Indigo" color="indigo" textSize="text-base" {link}/>
<BadgeLink name="Purple" color="purple" textSize="text-base" {link}/>
<BadgeLink name="Pink" color="pink" textSize="text-base" {link}/>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>