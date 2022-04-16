---
layout: footerLayout
---

<script>
import { SocialMediaFooter, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/SocialMediaFooter.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

import {
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
  } from "@codewithshin/svelte-simpleicons";
let site = {
    href: "/",
    name: "Company",
    img: "/images/flowbite-svelte-logo-30.png",
  };
let links = [
    {
      parent: "RESOURCES",
      children: [
        { name: "Flowbite-Svelte", href: "/" },
        {
          name: "Flowbite",
          href: "/",
        },
      ],
    },
    {
      parent: "FOLLOW US",
      children: [
        { name: "Github", href: "/" },
        {
          name: "Flowbite",
          href: "/",
        },
      ],
    },
    {
      parent: "LEGAL",
      children: [
        { name: "Privacy Policy", href: "/" },
        {
          name: "Terms & Conditions",
          href: "/",
        },
      ],
    },
  ];
  let socialMedia = [
    {
      href: "/",
      icon: FacebookIcon,
    },
    {
      href: "/",
      icon: GithubIcon,
    },
    {
      href: "/",
      icon: TwitterIcon,
    },
    {
      href: "/",
      icon: InstagramIcon,
    },
  ];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Footer',
      href:'/footer/'
    },
    {
      label:'Social media footer',
      href:'/footer/socialmedia'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Socialmedia Footer</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SocialMediaFooter {socialMedia} {links} {site}/>
</div>

```html
<script>
  import {SocialMediaFooter} from 'flowbite-svelte'
  import {
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
  } from "@codewithshin/svelte-simpleicons";
  let site = {
    href: "/",
    name: "Company",
    img: "/images/flowbite-svelte-logo-30.png",
  };
  let links = [
    {
      parent: "RESOURCES",
      children: [
        { name: "Flowbite-Svelte", href: "/" },
        {
          name: "Flowbite",
          href: "/",
        },
      ],
    },
    {
      parent: "FOLLOW US",
      children: [
        { name: "Github", href: "/" },
        {
          name: "Flowbite",
          href: "/",
        },
      ],
    },
    {
      parent: "LEGAL",
      children: [
        { name: "Privacy Policy", href: "/" },
        {
          name: "Terms & Conditions",
          href: "/",
        },
      ],
    },
  ];
  let socialMedia = [
  {
    href: "/",
    icon: FacebookIcon,
  },
  {
    href: "/",
    icon: GithubIcon,
  },
  {
    href: "/",
    icon: TwitterIcon,
  },
  {
    href: "/",
    icon: InstagramIcon,
  },
];
</script>

<SocialMediaFooter {socialMedia} {links} {site}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>