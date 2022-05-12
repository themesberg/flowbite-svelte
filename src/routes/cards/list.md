---
layout: cardLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { ListCard, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/ListCard.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let lists = [
    {
      img: {
        src: "/images/profile-picture-1.jpeg",
        alt: "Neil Sims",
      },
      field1: "Neil Sims",
      field2: "email@windster.com",
      field3: "Advisor",
    },
    {
      img: {
        src: "/images/profile-picture-2.jpeg",
        alt: "Bonnie Green",
      },
      field1: "Bonnie Green",
      field2: "email@windster.com",
      field3: "Developer",
    },
    {
      img: {
        src: "/images/profile-picture-3.jpeg",
        alt: "Michael Gough",
      },
      field1: "Michael Gough",
      field2: "email@windster.com",
      field3: "Marketing",
    },
  ];
  let title = 'Latest Customers';
  let action ={
    name: "View all",
    href: "/"
  }

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
      label:'List card',
      href:'/cards/list'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Card with List</h1>

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
  <ListCard {action} {title} {lists}/>
</ExampleDiv>

```html
<script>
  import { ListCard }from '$lib/index';
  let lists = [
    {
      img: {
        src: "/images/profile-picture-1.jpeg",
        alt: "Neil Sims",
      },
      field1: "Neil Sims",
      field2: "email@windster.com",
      field3: "Advisor",
    },
    {
      img: {
        src: "/images/profile-picture-2.jpeg",
        alt: "Bonnie Green",
      },
      field1: "Bonnie Green",
      field2: "email@windster.com",
      field3: "Developer",
    },
    {
      img: {
        src: "/images/profile-picture-3.jpeg",
        alt: "Michael Gough",
      },
      field1: "Michael Gough",
      field2: "email@windster.com",
      field3: "Marketing",
    },
  ];
  let title = 'Latest Customers';
  let action ={
    name: "View all",
    href: "/"
  }
</script>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>