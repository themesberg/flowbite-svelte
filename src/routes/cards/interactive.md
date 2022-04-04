---
layout: cardLayout
---

<script>
  import { InteractiveCard }from '$lib/index';
  let dropdownLinks = [
    {
      href: "/",
      name: "Edit",
    },
    {
      href: "/",
      name: "About",
    },
    {
      href: "/",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/", name: "Add friend" };
  let link2 = { href: "/", name: "Message" };
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Interactive Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

```html
<script>
  import { InteractiveCard }from 'flowbite-svelte';
  let dropdownLinks = [
    {
      href: "/",
      name: "Edit",
    },
    {
      href: "/",
      name: "About",
    },
    {
      href: "/",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/", name: "Add friend" };
  let link2 = { href: "/", name: "Message" };
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="container flex flex-col space-y-4 justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  
<InteractiveCard {dropdownLinks} {img} {header} {content} {link1} {link2} />

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  buttonColor="purple"
/>
</div>

```html
<InteractiveCard 
  {dropdownLinks}
  {img} 
  {header} 
  {content} 
  {link1} 
  {link2} 
/>

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  buttonColor="purple"
/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface LinkType {
    name: string;
    href: string;
    rel?: string;
}
type ImgType = {
    src: string;
    alt?: string;
}
let dropdownLinks: LinkType[];
let img: ImgType;
let header = 'Lorem ipsum';
let content = 'Proin efficitur purus felis.';
let buttonColor: 'blue'|'gray'|'red'|'yellow'|'green'|'indigo'|'purple'|'pink' = 'blue'
let link1: LinkType;
let link2: LinkType;
let divClass = 'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
```
