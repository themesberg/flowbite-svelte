---
layout: cardLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { InteractiveCard, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/InteractiveCard.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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

<Htwo label="Set up" />

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

<Htwo label="Examples" />

<ExampleDiv>
  
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
</ExampleDiv>

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>