---
layout: navbarLayout
---

<script>
  import { Navbar, Table, TableDefaultRow }from '$lib/index';
  import componentProps from '../props/Navbar.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let sitename = "Flowbite Svelte";
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

<h1 class="text-3xl w-full dark:text-white pt-16">Navbar Default</h1>


```html
<script>
  import { Navbar } from "flowbite-svelte";
  let sitename = "Flowbite Svelte";
  let logo = "/images/mkdir-logo.webp";
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

<Navbar {menus} {sitename} {alt} {logo} {textsize} />
```

<h2 class="text-lg dark:text-white py-8">Text Size text-xs</h2>

```html
<Navbar textsize="text-xs" {sitename} {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xs" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-sm</h2>

```html
<Navbar textsize="text-sm" {sitename} {menus} />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-sm" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-base</h2>

```html
<Navbar textsize="text-base" {sitename} {menus} />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-base" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-lg</h2>

```html
<Navbar textsize="text-lg" {sitename} {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-lg" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-xl</h2>

```html
<Navbar textsize="text-xl" {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xl" {sitename} {menus} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>