---
layout: navbarLayout
---

<script>
  import { Navbar, Table, TableDefaultRow, Breadcrumb }from '$lib/index';
  import componentProps from '../props/Navbar.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let siteName = "Flowbite Svelte";
  let menus = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "GitHub",
      href: "https://github.com/shinokada/flowbite-svelte"
    },
    {
      name: "Design",
      href: "https://flowbite-svelte.vercel.app"
    },
  ];
 
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Navbar Default</h1>


```html
<script>
  import { Navbar } from "flowbite-svelte";
  let siteName = "Flowbite Svelte";
  let logo = "/images/flowbite-svelte-logo-30.png";
  let alt = "flowbite-svelte";
  let textsize = "text-lg";
  let menus = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "GitHub",
      href: "https://github.com/shinokada/flowbite-svelte"
    },
    {
      name: "Design",
      href: "https://flowbite-svelte.vercel.app",
    },
  ];
</script>

<Navbar {menus} {siteName} {alt} {logo} {textsize} />
```

<h2 class="text-lg dark:text-white py-8">Text Size text-xs</h2>

```html
<Navbar textsize="text-xs" {siteName} {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xs" {siteName} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-sm</h2>

```html
<Navbar textsize="text-sm" {siteName} {menus} />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-sm" {siteName} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-base</h2>

```html
<Navbar textsize="text-base" {siteName} {menus} />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-base" {siteName} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-lg</h2>

```html
<Navbar textsize="text-lg" {siteName} {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-lg" {siteName} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-xl</h2>

```html
<Navbar textsize="text-xl" {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xl" {siteName} {menus} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>