---
layout: sidebarLayout
---

<script>
  import { Sidebar, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Sidebar.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

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

<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Default sidebar</h2>

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
      icon: ChartPieSolid
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagSolid,
      href: '/',
      subtext: '3'
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: TableSolid,
      href: '/',
      subtext: 'Pro'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: LoginSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogSolid,
      href: '/'
    }
  ];
</script>

<Sidebar {links} />

```

<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Multi_level_dropdown">Multi-level dropdown</h2>

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
      icon: ChartPieSolid
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagSolid,
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
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserSolid,
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
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogSolid,
      href: '/'
    }
  ];
</script>

<Sidebar links={links2} {site} />
```

<h2 class="text-2xl w-full mt-8 dark:text-white py-8">CTA button</h2>

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

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>