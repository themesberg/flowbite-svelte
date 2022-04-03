---
layout: footerLayout
---

<script>
  import {SitemapFooter} from '$lib/index'
  import {
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
  } from "@codewithshin/svelte-simpleicons";
  let site = {
    href: "/",
    name: "Flowbite Svelte",
    img: "/images/mkdir-logo.png",
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

<h1 class="text-3xl w-full dark:text-white py-8">Sitemap footer</h1>

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

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface SiteType {
  name: string;
  href: string;
  img?: string;
}
interface SocialMediaType {
  href: string;
  icon: typeof SvelteComponent;
}
interface SocialMediaLinkType {
  parent: string;
  children?: LinkType[]
}
let site: SiteType;
let links: SocialMediaLinkType[];
let socialMedia: SocialMediaType[];
let footerClass = "bg-gray-800";
let linksClass = "grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4";
let parentClass = "mb-6 text-sm font-semibold text-gray-400 uppercase";
let ulClass = "text-gray-300";
let linkClass = "hover:underline";
let copyrightDivClass =
  "py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between";
let copyrightClass = "text-sm text-gray-300 sm:text-center";
let socialMediaDivClass =
  "flex mt-4 space-x-6 sm:justify-center md:mt-0";
let socialMediaLinkClass = "text-gray-400 hover:text-white";
let iconClass = "h-5 w-5 mr-2";
let copyrightYear = "© 2022";
let allRightsReserved = "All Rights Reserved.";
```
