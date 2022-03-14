---
layout: doc
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
    link: "/",
    name: "Flowbite Svelte",
    img: "/images/mkdir-logo.png",
  };
  let links = [
  {
    parent: "Company",
    children: [
      { name: "About", link: "/" },
      {
        name: "Careers",
        link: "/",
      },
      { name: "Brand Center", link: "/" },
      {
        name: "Blog",
        link: "/",
      },
    ],
  },
  {
    parent: "Help center",
    children: [
      { name: "Discord Server", link: "/" },
      {
        name: "Twitter",
        link: "/",
      },
      { name: "Facebook", link: "/" },
      {
        name: "Contact Us",
        link: "/",
      },
    ],
  },
  {
    parent: "LEGAL",
    children: [
      { name: "Privacy Policy", link: "/" },
      { name: "Licensing", link: "/" },
      {
        name: "Terms & Conditions",
        link: "/",
      },
    ],
  },
  {
    parent: "Download",
    children: [
      { name: "iOS", link: "/" },
      { name: "Android", link: "/" },
      {
        name: "Windows",
        link: "/",
      },
      {
        name: "MacOS",
        link: "/",
      },
    ],
  },
];
  let socialMedia = [
    {
      link: "/",
      icon: FacebookIcon,
    },
    {
      link: "/",
      icon: GithubIcon,
    },
    {
      link: "/",
      icon: TwitterIcon,
    },
    {
      link: "/",
      icon: InstagramIcon,
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sitemap footer</h1>

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
    link: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", link: "/" },
    { name: "Profile", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let socialMedia = [
    {
      link: "/",
      icon: FacebookIcon,
    },
    {
      link: "/",
      icon: GithubIcon,
    },
    {
      link: "/",
      icon: TwitterIcon,
    },
    {
      link: "/",
      icon: InstagramIcon,
    },
  ];
</script>

<SitemapFooter {socialMedia} {links} {site} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Default props</h2>

```js
let site = {
  link: "/",
  name: "Flowbite Svelte",
  img: "/images/mkdir-logo.png",
};
let links = [
  {
    parent: "Company",
    children: [
      { name: "About", link: "/" },
      {
        name: "Careers",
        link: "/",
      },
      { name: "Brand Center", link: "/" },
      {
        name: "Blog",
        link: "/",
      },
    ],
  },
  {
    parent: "Help center",
    children: [
      { name: "Discord Server", link: "/" },
      {
        name: "Twitter",
        link: "/",
      },
      { name: "Facebook", link: "/" },
      {
        name: "Contact Us",
        link: "/",
      },
    ],
  },
  {
    parent: "LEGAL",
    children: [
      { name: "Privacy Policy", link: "/" },
      { name: "Licensing", link: "/" },
      {
        name: "Terms & Conditions",
        link: "/",
      },
    ],
  },
  {
    parent: "Download",
    children: [
      { name: "iOS", link: "/" },
      { name: "Android", link: "/" },
      {
        name: "Windows",
        link: "/",
      },
      {
        name: "MacOS",
        link: "/",
      },
    ],
  },
];
let socialMedia = [
  {
    link: "/",
    icon: "",
  },
];
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

<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Footer</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/logo" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Logo</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/sitemap" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Sitemap</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/socialmedia" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Socialmedia</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/footer/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Footer</a></p>