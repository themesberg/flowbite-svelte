---
layout: footerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { SocialMediaFooter, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import componentProps from '../props/SocialMediaFooter.json'
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

<Htwo label="Examples" />

<ExampleDiv>
<SocialMediaFooter {socialMedia} {links} {site}/>
</ExampleDiv>

```html
<script>
  import {SocialMediaFooter} from 'flowbite-svelte'
  import {
    Facebook,
    Github,
    Twitter,
    Instagram,
  } from "svelte-simples";
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

<SocialMediaFooter {socialMedia} {links} {site}/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>