---
layout: doc
---

<script>
  import { Card }from '$lib/index';
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white py-4 text-lg">Import Card in the script tag.</p>

```svelte
<script>
  import { Card } from "flowbite-svelte";
</script>
```

<h2 class="text-xl w-full mt-8 dark:text-white py-8">Simple Card</h2>

```svelte
<Card header="Simple card with header and content">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card header="Simple card with header and content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8 dark:text-white py-8">Card with Link</h2>

```svelte
<Card header="Card with link" link="/">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card header="Card with link" link="/">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8 dark:text-white py-8">Card with link and image</h2>

```svelte
<Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8 dark:text-white py-8">Card with image</h2>

```svelte
<Card img="/images/image-2.jpeg" header="Card with image"
  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card img="/images/image-2.jpeg" header="Card with image"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8 dark:text-white py-8">Card with red button</h2>

```svelte
<Card
  img="/images/image-1.jpeg"
  header="Red button"
  link="/"
  btnColor="red"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card
    img="/images/image-1.jpeg"
    header="Red button"
    link="/"
    btnColor="red"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8 dark:text-white py-8">Card with yellow button</h2>

```svelte
<Card
  img="/images/image-1.jpeg"
  header="Yellow button"
  link="/"
  btnColor="yellow"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card
    img="/images/image-1.jpeg"
    header="Yellow button"
    link="/"
    btnColor="yellow"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </Card>
</div>

<h2 class="text-xl w-full mt-8 dark:text-white py-8">Card with purple button</h2>

```svelte
<Card
  img="/images/image-1.jpeg"
  header="Purple button"
  link="/"
  btnColor="purple"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
  consequatur modi ab nisi perferendis placeat natus repellendus officiis
  ipsa.
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card
    img="/images/image-1.jpeg"
    header="Purple button"
    link="/"
    btnColor="purple"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

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