---
layout: cardLayout
---

<script>
  import { CtaCard, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/CtaCard.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      href: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      href: "/#",
      rel: "external",
    },
  ];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Cards',
      href:'/cards/'
    },
    {
      label:'CTA Card',
      href:'/cards/cta'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">CTA Card</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

```html
<script>
  import { CtaCard } from "flowbite-svelte";
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      href: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      href: "/#",
      rel: "external",
    },
  ];
</script>
```

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

```html
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
</div>

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>