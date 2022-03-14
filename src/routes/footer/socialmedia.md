---
layout: doc
---

<script>
import {SocialMediaFooter} from '$lib/index'
import {
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
  } from "@codewithshin/svelte-simpleicons";
let site = {
    link: "/",
    name: "Company",
    img: "/images/mkdir-logo.png",
  };
let links = [
    {
      parent: "RESOURCES",
      children: [
        { name: "Flowbite-Svelte", link: "/" },
        {
          name: "Flowbite",
          link: "/",
        },
      ],
    },
    {
      parent: "FOLLOW US",
      children: [
        { name: "Github", link: "/" },
        {
          name: "Flowbite",
          link: "/",
        },
      ],
    },
    {
      parent: "LEGAL",
      children: [
        { name: "Privacy Policy", link: "/" },
        {
          name: "Terms & Conditions",
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

<h1 class="text-3xl w-full dark:text-white py-8">Socialmedia footer</h1>

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
    link: "/",
    name: "Company",
    img: "/images/mkdir-logo.png",
  };
  let links = [
    {
      parent: "RESOURCES",
      children: [
        { name: "Flowbite-Svelte", link: "/" },
        {
          name: "Flowbite",
          link: "/",
        },
      ],
    },
    {
      parent: "FOLLOW US",
      children: [
        { name: "Github", link: "/" },
        {
          name: "Flowbite",
          link: "/",
        },
      ],
    },
    {
      parent: "LEGAL",
      children: [
        { name: "Privacy Policy", link: "/" },
        {
          name: "Terms & Conditions",
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

<SocialMediaFooter {socialMedia} {links} {site}/>
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
    parent: "RESOURCES",
    children: [
      { name: "Flowbite-Svelte", link: "/" },
      {
        name: "Flowbite",
        link: "/",
      },
    ],
  },
  {
    parent: "FOLLOW US",
    children: [
      { name: "Github", link: "/" },
      {
        name: "Flowbite",
        link: "/",
      },
    ],
  },
  {
    parent: "LEGAL",
    children: [
      { name: "Privacy Policy", link: "/" },
      {
        name: "Terms & Conditions",
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
let footerClass = "p-4 bg-white sm:p-6 dark:bg-gray-800";
let divClass = "md:flex md:justify-between";
let divClass2 = "mb-6 md:mb-0";
let siteLinkClass = "flex items-center";
let siteNameSpanClass =
  "self-center text-2xl font-semibold whitespace-nowrap dark:text-white";
let imgClass = "mr-3 h-8";
let linksDivClass = "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3";
let parentClass =
  "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white";
let ulClass = "text-gray-600 dark:text-gray-400";
let linkClass = "hover:underline";
let hrClass =
  "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8";
let copyrightDivClass = "sm:flex sm:items-center sm:justify-between";
let copyrightClass =
  "text-sm text-gray-500 sm:text-center dark:text-gray-400";
let socialMediaDivClass =
  "flex mt-4 space-x-6 sm:justify-center sm:mt-0";
let socialMediaLinkClass =
  "text-gray-500 hover:text-gray-900 dark:hover:text-white";
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