---
layout: sidebarLayout
---

<script>
  import { Sidebar } from '$lib/index';
  import {
    ChartPieIconSolid,
    ShoppingBagIconSolid,
    TableIconSolid,
    InboxInIconSolid,
    UserIconSolid,
    LoginIconSolid,
    CogIconSolid
  } from '@codewithshin/svelte-heroicons';
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/mkdir-logo.webp'
  };
  let uid = 1;
  let links = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieIconSolid
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagIconSolid,
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>'
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: TableIconSolid,
      href: '/',
      subtext: '<span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: LoginIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogIconSolid,
      href: '/'
    }
  ];
  let links2 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieIconSolid
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagIconSolid,
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
      icon: TableIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserIconSolid,
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
      icon: LoginIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogIconSolid,
      href: '/'
    }
  ];
  let cta ={
    label:'Beta',
    text: 'Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.'
  }
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sidebar</h1>

<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Default sidebar</h2>

<div class="container flex flex-wrap rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Sidebar {links} />
</div>

```html
<script>
  import { Sidebar } from 'flowbite-svelte';
  import {
    ChartPieIconSolid,
    ShoppingBagIconSolid,
    TableIconSolid,
    InboxInIconSolid,
    UserIconSolid,
    LoginIconSolid,
    CogIconSolid
  } from '@codewithshin/svelte-heroicons';

  let uid = 1;
  let links = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieIconSolid
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagIconSolid,
      href: '/',
      subtext: '3'
    },
    {
      id: uid++,
      name: 'Kanban',
      icon: TableIconSolid,
      href: '/',
      subtext: 'Pro'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Sign In',
      icon: LoginIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogIconSolid,
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
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/mkdir-logo.webp'
  };
  let uid = 1;
  let links2 = [
    {
      id: uid++,
      name: 'Dashboard',
      href: '/',
      icon: ChartPieIconSolid
    },
    {
      id: uid++,
      name: 'E-commerce',
      icon: ShoppingBagIconSolid,
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
      icon: TableIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Inbox',
      icon: InboxInIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Users',
      icon: UserIconSolid,
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
      icon: LoginIconSolid,
      href: '/'
    },
    {
      id: uid++,
      name: 'Setting',
      icon: CogIconSolid,
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

<h2 class="text-2xl w-full mt-8 dark:text-white py-8">Props and types</h2>

<p class="dark:text-white py-4 text-lg w-full">The component has the following props, type, and default values:</p>

```js
type SidebarType = {
  id: number;
  name: string;
  href?: string;
  icon?: typeof SvelteComponent;
  rel?: string;
  children?: SidebarType[];
  subtext?: HTMLElement;
}

type SidebarCtaType = {
  label: string;
  text: HTMLElement;
}

let site: SiteType;
let links: SidebarType[];
let cta: SidebarCtaType;
```