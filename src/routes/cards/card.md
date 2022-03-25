---
layout: cardLayout
---

<script>
  import { Card, Button }from '$lib/index';
  const btn1 = ()　=>　{
    alert('You clicked.')
  }
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="dark:text-white py-4 text-lg">Import Card in the script tag.</p>

```html
<script>
  import { Card } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';
let link: string = '';
let rel: string = '';
let alt: string = '';
let img: string = '';
let btnLabel: string = 'Read more';
let btnColor: Colors = 'blue';
let header: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
let divClass = 'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

```html
<Card header="Simple card with header and content">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card header="Simple card with header and content">
    <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Card with Link</h2>

```html
<Card header="Card with link" link="/">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card header="Card with link" link="/">
  <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Card with link and image</h2>

```html
<Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
  <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Card with image</h2>

```html
<Card img="/images/image-2.jpeg" header="Card with image">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card img="/images/image-2.jpeg" header="Card with image">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Card a button component</h2>

<p class="dark:text-white py-4 text-lg">If you need a click handler rather than a link, use a Button component.</p>

```html
<script>
  const btn1 = ()　=>　{
    alert('You clicked.')
  }
</scipt>
<Card
  img="/images/image-1.jpeg"
  header="Button component"
  btnColor="red"
>
<span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <div class="w-full pt-4">
      <Button name="Click me" on:click={btn1} />
    </div>
</span>
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card
    img="/images/image-1.jpeg"
    header="Button component"
    btnColor="red"
  >
    <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <div class="w-full pt-4">
      <Button name="Click me" on:click={btn1} />
    </div>
    </span>
  </Card>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Card with yellow button</h2>

```html
<Card
  img="/images/image-1.jpeg"
  header="Yellow button"
  link="/"
  btnColor="yellow"
>
<span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</span>
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card
    img="/images/image-1.jpeg"
    header="Yellow button"
    link="/"
    btnColor="yellow"
  >
    <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
    </span>
  </Card>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Card with purple button</h2>

```html
<Card
  img="/images/image-1.jpeg"
  header="Purple button"
  link="/"
  btnColor="purple"
>
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
  consequatur modi ab nisi perferendis placeat natus repellendus officiis
  ipsa.
  </span>
</Card>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card
    img="/images/image-1.jpeg"
    header="Purple button"
    link="/"
    btnColor="purple"
  >
  <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </span>
  </Card>
</div>

