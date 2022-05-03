---
layout: navbarLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Navbar, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Navbar.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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
 
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Navbar',
      href:'/navbars/'
    },
    {
      label:'Navbar default',
      href:'/navbars/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

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

<Htwo label="text-xs" />

```html
<Navbar textsize="text-xs" {siteName} {menus}/>
```

<ExampleDiv>
<Navbar textsize="text-xs" {siteName} {menus}/>
</ExampleDiv>

<Htwo label="text-sm" />

```html
<Navbar textsize="text-sm" {siteName} {menus} />
```

<ExampleDiv><Navbar textsize="text-sm" {siteName} {menus}/>
</ExampleDiv>

<Htwo label="text-base" />

```html
<Navbar textsize="text-base" {siteName} {menus} />
```

<ExampleDiv><Navbar textsize="text-base" {siteName} {menus}/>
</ExampleDiv>

<Htwo label="text-lg" />

```html
<Navbar textsize="text-lg" {siteName} {menus}/>
```

<ExampleDiv><Navbar textsize="text-lg" {siteName} {menus}/>
</ExampleDiv>

<Htwo label="text-xl" />

```html
<Navbar textsize="text-xl" {menus}/>
```

<ExampleDiv><Navbar textsize="text-xl" {siteName} {menus} />
</ExampleDiv>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>