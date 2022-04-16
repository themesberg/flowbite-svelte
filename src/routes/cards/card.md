---
layout: cardLayout
---

<script>
  import { Card, Button, Table, TableDefaultRow, Breadcrumb }from '$lib/index';
  import componentProps from '../props/Card.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  const btn1 = ()　=>　{
    alert('You clicked.')
  }
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p>Import Card in the script tag.</p>

```html
<script>
  import { Card } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>


<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card header="Simple card with header and content">
    <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

```html
<Card header="Simple card with header and content">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```


<h2 class="text-2xl w-full dark:text-white py-8">Card with a link</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card header="Card with link" link="/">
  <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

```html
<Card header="Card with link" link="/">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```

<h2 class="text-2xl w-full dark:text-white py-8">Card with a link and image</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
  <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

```html
<Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```

<h2 class="text-2xl w-full dark:text-white py-8">Card with an image</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card img="/images/image-2.jpeg" header="Card with image">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
    </span>
  </Card>
</div>

```html
<Card img="/images/image-2.jpeg" header="Card with image">
  <span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </span>
</Card>
```

<h2 class="text-2xl w-full dark:text-white py-8">Card with a Button component</h2>

<p>If you need a click handler rather than a link, use a Button component.</p>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Card
    img="/images/image-1.jpeg"
    header="Button component"
  >
    <span slot="paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <div class="w-full pt-4">
      <Button name="Click me" on:click={btn1} />
    </div>
    </span>
  </Card>
</div>

```html
<script>
  const btn1 = ()　=>　{
    alert('You clicked.')
  }
</scipt>
<Card
  img="/images/image-1.jpeg"
  header="Button component"
>
<span slot="paragraph">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <div class="w-full pt-4">
      <Button name="Click me" on:click={btn1} />
    </div>
</span>
</Card>
```

<h2 class="text-2xl w-full dark:text-white py-8">Card with yellow button</h2>

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

<h2 class="text-2xl w-full dark:text-white py-8">Card with purple button</h2>

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

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>