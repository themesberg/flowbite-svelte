---
layout: cardLayout
---

<script>
  import { CtaCard }from '$lib/index';
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      href: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      href: "/#",
      rel: "external",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">CTA Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

```html
<script>
  import { CtaCard } from "flowbite-svelte";
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      href: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      href: "/#",
      rel: "external",
    },
  ];
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

```html
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type CardButtonType = {
    textSize?: Textsize;
    name: string;
    type?: Buttontypes;
    href?: string;
    rel?: string;
    rounded?: boolean;
};
type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';
let title: string = 'Work fast from anywhere';
let headColor: Colors = 'gray';
let btns: CardButtonType[];
let divClass =
```
