---
layout: tabLayout
---

<script>
  import { InteractiveTabs, Table, TableDefaultRow }from '$lib/index';
  import componentProps from '../props/InteractiveTabs.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


  let tabs1 = [
    {
      name: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Contacts-1",
      id: 4,
      content:
        "1-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  let tabs2 = [
    {
      name: "Profile-2",
      id: 1,
      content:
        "2-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Dashboard-2",
      id: 2,
      content:
        "2-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Settings-2",
      id: 3,
      content:
        "2-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Contacts-2",
      id: 4,
      content:
        "2-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Multiple Interactive Tabs</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <InteractiveTabs tabId="myTab1" tabs={tabs1} />
</div>

<div class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <InteractiveTabs tabId="myTab2" tabs={tabs2} />
</div>

```html
<script>
  import { InteractiveTabs } from "flowbite-svelte";

  let tabs1 = [
    {
      name: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Contacts-1",
      id: 4,
      content:
        "1-4 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
  ];
  let tabs2 = [
    {
      name: "Profile-2",
      id: 1,
      content:
        "2-1 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Dashboard-2",
      id: 2,
      content:
        "2-2 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Settings-2",
      id: 3,
      content:
        "2-3 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Contacts-2",
      id: 4,
      content:
        "2-4 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
  ];
</script>


<InteractiveTabs tabId="myTab1" tabs={tabs1} />
<InteractiveTabs tabId="myTab2" tabs={tabs2} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>