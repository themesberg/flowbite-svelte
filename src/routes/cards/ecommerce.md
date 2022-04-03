---
layout: cardLayout
---

<script>
  import { EcommerceCard }from '$lib/index';
  let img2 = {
    src: "/images/product-2.jpeg",
    alt: "product image",
  };
  let img3 = {
    src: "/images/product-3.jpeg",
    alt: "product image",
  };
  let img4 = {
    src: "/images/product-4.jpeg",
    alt: "product image",
  };
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Ecommerce Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

```html
<script>
  import { EcommerceCard } from "flowbite-svelte";
  let img2 = {
    src: "/images/product-2.jpeg",
    alt: "product image",
  };
  let img3 = {
    src: "/images/product-3.jpeg",
    alt: "product image",
  };
  let img4 = {
    src: "/images/product-4.jpeg",
    alt: "product image",
  };
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

```html
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  link="/alerts"
  price="$543"
/>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  link="/alerts"
  price="$543"
/>
</div>

```html
<EcommerceCard
  title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
  link="/tabs"
  btnColor="red"
  stars="4.0"
  price="$461"
  img={img2}
/>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <EcommerceCard
    title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
    link="/tabs"
    btnColor="red"
    stars="4.0"
    price="$461"
    img={img2}
  />
</div>


```html
<EcommerceCard
  title="Pink cup Lorem ipsum dolor sit amet et mete."
  link="/cards"
  btnColor="purple"
  stars="3"
  price="$321"
  img={img3}
/>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <EcommerceCard
    title="Pink cup Lorem ipsum dolor sit amet et mete."
    link="/cards"
    btnColor="purple"
    stars="3"
    price="$321"
    img={img3}
  />
</div>

```html
<EcommerceCard
  title="Nintendo Game Lorem ipsum dolor sit amet."
  link="modals"
  btnColor="green"
  stars="5"
  price="$211"
  img={img4}
/>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <EcommerceCard
    title="Nintendo Game Lorem ipsum dolor sit amet."
    link="modals"
    btnColor="green"
    stars="5"
    price="$211"
    img={img4}
  />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';
let link: string = '/';
let btnColor: Colors = 'blue';
let rel: string = '';
let title: string = 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport';
let stars: number = 5;
let price = '$555';
let divClass = 'max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700';
```
