---
layout: sidebarLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Sidebar, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Sidebar.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  import {
    ChartPieSolid,
    ShoppingBagSolid,
    TableSolid,
    InboxInSolid,
    UserSolid,
    LoginSolid,
    CogSolid
  } from 'svelte-heros';
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-logo-30.png'
  };
  let uid = 1;
  let links = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieSolid,
      iconSize: 16,
      iconClass: "text-blue-500 dark:text-white",
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagSolid,
      iconSize: 16,
      iconClass: "text-green-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>'
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: TableSolid,
      iconSize: 16,
      iconClass: "text-red-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: LoginSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogSolid,
      iconSize: 16,
      href: '/'
    }
  ];
  let links2 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieSolid,
      iconSize: 16,
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagSolid,
      iconSize: 16,
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
      icon: TableSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserSolid,
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
      icon: LoginSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogSolid,
      iconSize: 16,
      href: '/'
    }
  ];
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
  <Sidebar {links} />
</div>

```html
<script>
  import { Sidebar } from 'flowbite-svelte';
  import {
    ChartPieSolid,
    ShoppingBagSolid,
    TableSolid,
    InboxInSolid,
    UserSolid,
    LoginSolid,
    CogSolid
  } from 'svelte-heros';

  let uid = 1;
  let links = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieSolid,
      iconSize: 16,
      iconClass: "text-blue-500 dark:text-white",
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagSolid,
      iconSize: 16,
      iconClass: "text-green-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>'
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: TableSolid,
      iconSize: 16,
      iconClass: "text-red-500",
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: LoginSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogSolid,
      iconSize: 16,
      href: '/'
    }
  ];
</script>

<Sidebar {links} />

```

<Htwo label="Multi-level dropdown" />

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

  <Sidebar links={links2} {site} />
  
</div>


```html
<script>
  import { Sidebar } from 'flowbite-svelte';
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-logo-30.png'
  };
  let uid = 1;
  let links2 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieSolid,
      iconSize: 16,
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagSolid,
      iconSize: 16,
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
      icon: TableSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserSolid,
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
      icon: LoginSolid,
      iconSize: 16,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogSolid,
      iconSize: 16,
      href: '/'
    }
  ];
</script>

<Sidebar links={links2} {site} />
```

<Htwo label="CTA button" />

<div class="container flex flex-wrap rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Sidebar {links} {cta} />
</div>

```html
<script>
  let cta ={
    label:'Beta',
    text: 'Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.'
  }
</script>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>