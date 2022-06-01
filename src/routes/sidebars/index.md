---
layout: sidebarLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Sidebar, SidebarItem, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Sidebar.json'
  import componentProps2 from '../props/SidebarDropdown.json'
  import componentProps3 from '../props/SidebarItem.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props

	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  import { ChartPie, ShoppingBag, Pencil, InboxIn, User, Login, Cog} from 'svelte-heros';

  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-logo-30.png'
  };

  let uid = 1;
  let sidebarItem1 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPie,
      iconSize: 16,
      iconClass: "text-blue-500",
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBag,
      iconSize: 16,
      iconClass: "text-green-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>'
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: Pencil,
      iconSize: 16,
      iconClass: "text-red-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxIn,
      iconSize: 16,
      iconClass: "text-pink-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: User,
      iconSize: 16,
      iconClass: "text-purple-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: Login,
      iconSize: 16,
      iconClass: "text-green-300",
      iconClass: "text-indigo-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: Cog,
      iconSize: 16,
      iconClass: "text-yellow-300",
      href: '/'
    }
  ];
  let sidebarItem2 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPie,
      iconSize: 16,
      iconClass: "text-red-500",
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBag,
      iconSize: 16,
      iconClass: "text-blue-500",
      children: [
        {
          id: uid++,
          name: 'Product',
          href: '/'
        },
        {
          id: uid++,
          name: 'Billing',
          href: '/'
        },
        {
          id: uid++,
          name: 'Invoice',
          href: '/'
        }
      ]
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: Pencil,
      iconSize: 16,
      iconClass: "text-purple-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxIn,
      iconSize: 16,
      iconClass: "text-yellow-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: User,
      iconClass: "text-green-500",
      iconSize: 16,
      children: [
        {
          id: uid++,
          name: 'Sign In',
          href: '/'
        },
        {
          id: uid++,
          name: 'Sign Out',
          href: '/'
        },
        {
          id: uid++,
          name: 'Profile',
          href: '/'
        }
      ]
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: Login,
      iconSize: 16,
      iconClass: "text-pink-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: Cog,
      iconSize: 16,
      iconClass: "text-indigo-500",
      href: '/'
    }
  ];

  let sidebarItem3 = [
    {
      id: uid++,
      name: 'Upgrade to Pro',
      href: '/',
      icon: ChartPie,
      iconSize: 16,
      iconClass: "text-blue-500 dark:text-red-500",
    },
    {
      id: uid++,
      name: 'Documentation',
      href: '/',
      icon: ShoppingBag,
      iconSize: 16,
      iconClass: "text-green-500 dark:text-purple-500",
    },
    {
      id: uid++,
      name: 'Components',
      href: '/',
      icon: Pencil,
      iconSize: 16,
      iconClass: "text-pink-500 dark:text-indigo-500",
    },
    {
      id: uid++,
      name: 'Help',
      href: '/',
      icon: User,
      iconSize: 16,
      iconClass: "text-yellow-500 dark:text-blue-500",
    },
  ]

  let cta ={
    label:'Beta',
    text: 'Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.'
  }

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Sidebar',
      href:'/sidebars/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Sidebar Components</h1>

<Htwo label="Default sidebar" />

<div class="container flex flex-wrap rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Sidebar {site}>
		<SidebarItem links={sidebarItem1} />
  </Sidebar>
</div>

```html
<script>
  import { Sidebar, SidebarItem } from 'flowbite-svelte';
  import {
    ChartPie,
    ShoppingBag,
    Pencil,
    InboxIn,
    User,
    Login,
    Cog
  } from 'svelte-heros';

  let uid = 1;
  let sidebarItem1 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPie,
      iconSize: 16,
      iconClass: "text-blue-500",
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBag,
      iconSize: 16,
      iconClass: "text-green-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>'
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: Pencil,
      iconSize: 16,
      iconClass: "text-red-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxIn,
      iconSize: 16,
      iconClass: "text-pink-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: User,
      iconSize: 16,
      iconClass: "text-purple-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: Login,
      iconSize: 16,
      iconClass: "text-green-300",
      iconClass: "text-indigo-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: Cog,
      iconSize: 16,
      iconClass: "text-yellow-300",
      href: '/'
    }
  ];
  
</script>

<Sidebar {site}>
  <SidebarItem links={sidebarItem1} />
</Sidebar>
```

<Htwo label="Multi-level dropdown" />

<ExampleDiv>
  <Sidebar  {site} >
		<SidebarItem links={sidebarItem2} />
  </Sidebar>
</ExampleDiv>


```html
<script>
  import { Sidebar } from 'flowbite-svelte';
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-logo-30.png'
  };
  let uid = 1;
  let sidebarItem2 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPie,
      iconSize: 16,
      iconClass: "text-red-500",
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBag,
      iconSize: 16,
      iconClass: "text-blue-500",
      children: [
        {
          id: uid++,
          name: 'Product',
          href: '/'
        },
        {
          id: uid++,
          name: 'Billing',
          href: '/'
        },
        {
          id: uid++,
          name: 'Invoice',
          href: '/'
        }
      ]
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: Pencil,
      iconSize: 16,
      iconClass: "text-purple-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxIn,
      iconSize: 16,
      iconClass: "text-yellow-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: User,
      iconClass: "text-green-500",
      iconSize: 16,
      children: [
        {
          id: uid++,
          name: 'Sign In',
          href: '/'
        },
        {
          id: uid++,
          name: 'Sign Out',
          href: '/'
        },
        {
          id: uid++,
          name: 'Profile',
          href: '/'
        }
      ]
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: Login,
      iconSize: 16,
      iconClass: "text-pink-500",
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: Cog,
      iconSize: 16,
      iconClass: "text-indigo-500",
      href: '/'
    }
  ];

</script>

 <Sidebar  {site} >
    <SidebarItem links={sidebarItem2} />
</Sidebar>
```

<Htwo label="CTA button" />

<ExampleDiv>
  <Sidebar {cta} >
		<SidebarItem links={sidebarItem1} />
  </Sidebar>
</ExampleDiv>

```html
<script>
  let cta ={
    label:'Beta',
    text: 'Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.'
  }
</script>

<Sidebar {cta} >
  <SidebarItem links={sidebarItem1} />
</Sidebar>
```

<Htwo label="Content separator" />

<p>Use the `border` prop to add a top border.</p>

<ExampleDiv>
  <Sidebar {site}>
		<SidebarItem links={sidebarItem1} />
		<SidebarItem links={sidebarItem3} border />
  </Sidebar>
</ExampleDiv>

```html
<script>
  let sidebarItem3 = [
    {
      id: uid++,
      name: 'Upgrade to Pro',
      href: '/',
      icon: ChartPie,
      iconSize: 16,
      iconClass: "text-blue-500 dark:text-red-500",
    },
    {
      id: uid++,
      name: 'Documentation',
      href: '/',
      icon: ShoppingBag,
      iconSize: 16,
      iconClass: "text-green-500 dark:text-purple-500",
    },
    {
      id: uid++,
      name: 'Components',
      href: '/',
      icon: Pencil,
      iconSize: 16,
      iconClass: "text-pink-500 dark:text-indigo-500",
    },
    {
      id: uid++,
      name: 'Help',
      href: '/',
      icon: User,
      iconSize: 16,
      iconClass: "text-yellow-500 dark:text-blue-500",
    },
  ]
</script>

<Sidebar {site}>
  <SidebarItem links={sidebarItem1} />
  <SidebarItem links={sidebarItem3} border />
</Sidebar>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Sidebar</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

<h3>SidebarDropdown</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>

<h3>SidebarItem</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</Table>