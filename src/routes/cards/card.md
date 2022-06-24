---
layout: cardLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Card, Button, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Card.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  const btn1 = ()　=>　{
    alert('You clicked.')
  }

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Cards',
      href:'/cards/'
    },
    {
      label:'Card default',
      href:'/cards/card'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Card</h1>

<Htwo label="Set up" />

<p>Import Card in the script tag.</p>

```html
<script>
  import { Card } from "flowbite-svelte";
</script>
```

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
  <Card header="Noteworthy technology acquisitions 2021">
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</ExampleDiv>

```html
<Card header="Noteworthy technology acquisitions 2021">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
```

<Htwo label="Card with a link" />

<ExampleDiv class="flex justify-center">
  <Card header="Noteworthy technology acquisitions 2021" link="/" btnLabel="Read more">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</ExampleDiv>

```html
<Card header="Noteworthy technology acquisitions 2021" link="/" btnLabel="Read more">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
 Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
```

<Htwo label="Card with image" />

<ExampleDiv class="flex justify-center">
  <Card img="/images/image-1.jpeg" header="Noteworthy technology acquisitions 2021" link="/" btnLabel="Read more">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</ExampleDiv>

```html
<Card img="/images/image-1.jpeg" header="Noteworthy technology acquisitions 2021" link="/" btnLabel="Read more">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
```

<Htwo label="Card with a Button component" />

<p>If you need a click handler rather than a link, use a Button component.</p>

<ExampleDiv class="flex justify-center">
  <Card
    img="/images/image-1.jpeg"
    header="Button component"
    btnLabel="Read more"
  ><span slot="paragraph">
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="w-full pt-4">
      <Button on:click={btn1}>Click me</Button>
    </div>
    </span>
  </Card>
</ExampleDiv>

```html
<script>
  const btn1 = ()　=>　{
    alert('You clicked.')
  }
</scipt>
<Card
  img="/images/image-1.jpeg"
  header="Button component"
  btnLabel="Read more"
><span slot="paragraph">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" >
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>
  <div class="w-full pt-4">
    <Button on:click={btn1}>Click me</Button>
  </div>
  </span>
</Card>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>