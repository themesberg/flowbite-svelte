---
layout: doc
---

<script>
  import { InteractiveCard }from '$lib/index';
  let dropdownLinks = [
    {
      href: "/",
      label: "Edit",
    },
    {
      href: "/",
      label: "About",
    },
    {
      href: "/",
      label: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { link: "/", name: "Profile" };
  let link2 = { link: "/", name: "About" };
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Interactive Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

```html
<script>
  import { InteractiveCard }from '$lib/index';
  let dropdownLinks = [
    {
      href: "/",
      label: "Edit",
    },
    {
      href: "/",
      label: "About",
    },
    {
      href: "/",
      label: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { link: "/", name: "Profile" };
  let link2 = { link: "/", name: "About" };
</script>
```

<h1 class="text-3xl w-full dark:text-white py-8">Interactive cards</h1>

```svelte
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

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  buttonColor="green"
/>
```

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

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="flex-auto p-4">

</div>

<h1 class="text-3xl w-full dark:text-white py-8">References</h1>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/card/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Card</a></p>