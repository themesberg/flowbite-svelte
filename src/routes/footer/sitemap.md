---
layout: footerLayout
---

<script>
  import { SitemapFooter, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import componentProps from '../props/SitemapFooter.json'
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
    name: "Flowbite Svelte",
    img: "/images/flowbite-svelte-logo-30.png",
  };
  let links = [
  {
    parent: "Company",
    children: [
      { name: "About", href: "/" },
      {
        name: "Careers",
        href: "/",
      },
      { name: "Brand Center", href: "/" },
      {
        name: "Blog",
        href: "/",
      },
    ],
  },
  {
    parent: "Help center",
    children: [
      { name: "Discord Server", href: "/" },
      {
        name: "Twitter",
        href: "/",
      },
      { name: "Facebook", href: "/" },
      {
        name: "Contact Us",
        href: "/",
      },
    ],
  },
  {
    parent: "LEGAL",
    children: [
      { name: "Privacy Policy", href: "/" },
      { name: "Licensing", href: "/" },
      {
        name: "Terms & Conditions",
        href: "/",
      },
    ],
  },
  {
    parent: "Download",
    children: [
      { name: "iOS", href: "/" },
      { name: "Android", href: "/" },
      {
        name: "Windows",
        href: "/",
      },
      {
        name: "MacOS",
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

<h1 class="text-3xl w-full dark:text-white py-8">Sitemap Footer</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SitemapFooter {socialMedia} {links} {site}/>
</div>

```html
<script>
  import {SitemapFooter} from 'flowbite-svelte'
  import {
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
  } from "@codewithshin/svelte-simpleicons";
  let site = {
    href: "/",
    name: "Flowbite Svelte",
  };
  let links = [
  {
    parent: "Company",
    children: [
      { name: "About", href: "/" },
      {
        name: "Careers",
        href: "/",
      },
      { name: "Brand Center", href: "/" },
      {
        name: "Blog",
        href: "/",
      },
    ],
  },
  {
    parent: "Help center",
    children: [
      { name: "Discord Server", href: "/" },
      {
        name: "Twitter",
        href: "/",
      },
      { name: "Facebook", href: "/" },
      {
        name: "Contact Us",
        href: "/",
      },
    ],
  },
  {
    parent: "LEGAL",
    children: [
      { name: "Privacy Policy", href: "/" },
      { name: "Licensing", href: "/" },
      {
        name: "Terms & Conditions",
        href: "/",
      },
    ],
  },
  {
    parent: "Download",
    children: [
      { name: "iOS", href: "/" },
      { name: "Android", href: "/" },
      {
        name: "Windows",
        href: "/",
      },
      {
        name: "MacOS",
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

<SitemapFooter {socialMedia} {links} {site} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>