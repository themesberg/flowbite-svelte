---
layout: doc
---

<script>
  import { InteractiveCard } from "$lib/index";
  let dropdownLinks = [
    {
      href: "/#",
      name: "Edit",
    },
    {
      href: "/#",
      name: "About",
    },
    {
      href: "/#",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/dummy-pages/profile", title: "Profile" };
  let link2 = { href: "/dummy-pages/about", title: "About" };
</script>

<h1 class="text-3xl w-full dark:text-white">Interactive Card: Setup</h1>

```html
<script>
  import { InteractiveCard } from "$lib/index";
  let dropdownLinks = [
    {
      href: "/#",
      name: "Edit",
    },
    {
      href: "/#",
      name: "About",
    },
    {
      href: "/#",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/dummy-pages/profile", title: "Profile" };
  let link2 = { href: "/dummy-pages/about", title: "About" };
</script>
```

<h1 class="text-3xl w-full dark:text-white">Interactive cards</h1>

```html
<InteractiveCard {dropdownLinks} {img} {header} {content} {link1} {link2} />

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  btnColor1="purple"
/>

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  btnColor1="green"
/>
```


<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} {link1} {link2} />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      {link2}
      btnColor1="purple"
    />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      {link2}
      btnColor1="green"
    />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      btnColor1="red"
    />
  </div>
</div>
<div class="flex flex-wrap mx-auto p-8">
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} {link2} />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} />
  </div>
</div>
