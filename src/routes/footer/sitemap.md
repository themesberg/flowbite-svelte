---
layout: footerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { SitemapFooter, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  import componentProps from '../props/SitemapFooter.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  import Facebook from '../utils/icons/Facebook.svelte'
  import Github from '../utils/icons/Github.svelte'
  import Twitter from '../utils/icons/Twitter.svelte'
  import Instagram from '../utils/icons/Instagram.svelte'

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
      icon: Facebook,
    },
    {
      href: "/",
      icon: Github,
    },
    {
      href: "/",
      icon: Twitter,
    },
    {
      href: "/",
      icon: Instagram,
    },
  ];
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/footer">Footer</BreadcrumbItem>
  <BreadcrumbItem>Footer with sitemap</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Sitemap Footer</h1>

<Htwo label="Examples" />

<ExampleDiv>
<SitemapFooter {socialMedia} {links} {site}/>
</ExampleDiv>

```html
<script>
  import {SitemapFooter} from 'flowbite-svelte'
  import {
    Facebook,
    Github,
    Twitter,
    Instagram,
  } from "svelte-simples";
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
      icon: Facebook,
    },
    {
      href: "/",
      icon: Github,
    },
    {
      href: "/",
      icon: Twitter,
    },
    {
      href: "/",
      icon: Instagram,
    },
  ];
</script>

<SitemapFooter {socialMedia} {links} {site} />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>