---
layout: cardLayout
---

<script>
  import { ListCard, Table, TableDefaultRow }from '$lib/index';
  import componentProps from '../props/ListCard.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

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

<h1 class="text-3xl w-full dark:text-white pt-16">Card with List</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ListCard {action} {title} {lists}/>
</div>

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

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>