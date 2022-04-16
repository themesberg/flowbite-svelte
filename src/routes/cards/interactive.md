---
layout: cardLayout
---

<script>
  import { InteractiveCard, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/InteractiveCard.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let dropdownLinks = [
    {
      href: "/",
      name: "Edit",
    },
    {
      href: "/",
      name: "About",
    },
    {
      href: "/",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/", name: "Add friend" };
  let link2 = { href: "/", name: "Message" };

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
      label:'Interactive card',
      href:'/cards/interactive'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Interactive Card</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

```html
<script>
  import { InteractiveCard }from 'flowbite-svelte';
  let dropdownLinks = [
    {
      href: "/",
      name: "Edit",
    },
    {
      href: "/",
      name: "About",
    },
    {
      href: "/",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/", name: "Add friend" };
  let link2 = { href: "/", name: "Message" };
</script>
```

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<div class="container flex flex-col space-y-4 justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  
<InteractiveCard {dropdownLinks} {img} {header} {content} {link1} {link2} />

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  buttonColor="purple"
/>
</div>

```html
<InteractiveCard 
  {dropdownLinks}
  {img} 
  {header} 
  {content} 
  {link1} 
  {link2} 
/>

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  buttonColor="purple"
/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>