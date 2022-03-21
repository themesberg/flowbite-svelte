---
layout: doc
---

<script>
  import { ListCard }from '$lib/index';
  let lists = [
    {
      img: {
        src: "/images/profile-picture-1.jpeg",
        alt: "Neil Sims",
      },
      field1: "Neil Sims",
      field2: "email@windster.com",
      field3: "Advisor",
    },
    {
      img: {
        src: "/images/profile-picture-2.jpeg",
        alt: "Bonnie Green",
      },
      field1: "Bonnie Green",
      field2: "email@windster.com",
      field3: "Developer",
    },
    {
      img: {
        src: "/images/profile-picture-3.jpeg",
        alt: "Michael Gough",
      },
      field1: "Michael Gough",
      field2: "email@windster.com",
      field3: "Marketing",
    },
  ];
  let title = 'Latest Customers';
  let action ={
    name: "View all",
    href: "/"
  }
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Card with list</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface ListCardType {
  img: ImgType;
  field1: string;
  field2?: string;
  field3?: string;
}
interface LinkType {
  name: string;
  href: string;
  rel?: string;
}
let lists: ListCardType[];
let title = 'Latest Customers';
let action: LinkType;
let divClass = 'p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700';

```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ListCard {action} {title} {lists}/>
</div>

```html
<script>
  import { ListCard }from '$lib/index';
  let lists = [
    {
      img: {
        src: "/images/profile-picture-1.jpeg",
        alt: "Neil Sims",
      },
      field1: "Neil Sims",
      field2: "email@windster.com",
      field3: "Advisor",
    },
    {
      img: {
        src: "/images/profile-picture-2.jpeg",
        alt: "Bonnie Green",
      },
      field1: "Bonnie Green",
      field2: "email@windster.com",
      field3: "Developer",
    },
    {
      img: {
        src: "/images/profile-picture-3.jpeg",
        alt: "Michael Gough",
      },
      field1: "Michael Gough",
      field2: "email@windster.com",
      field3: "Marketing",
    },
  ];
  let title = 'Latest Customers';
  let action ={
    name: "View all",
    href: "/"
  }
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/card" class="text-blue-600 hover:underline dark:text-blue-500">Default Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/cta" class="text-blue-600 hover:underline dark:text-blue-500">CTA Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/ecommerce" class="text-blue-600 hover:underline dark:text-blue-500">Ecommerce Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/horizontal" class="text-blue-600 hover:underline dark:text-blue-500">Horizontal Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/interactive" class="text-blue-600 hover:underline dark:text-blue-500">Interactive Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/list" class="text-blue-600 hover:underline dark:text-blue-500">List Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/signin" class="text-blue-600 hover:underline dark:text-blue-500">Signin Card</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/card/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Card</a></p>
