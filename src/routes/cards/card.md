---
layout: cardLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Avatar, Button, Breadcrumb, BreadcrumbItem, Card, Dropdown, DropdownItem } from '$lib/index'
  import { DotsHorizontal } from 'svelte-heros'
  import CloseButton from "$lib/utils/CloseButton.svelte"
  import { Home } from 'svelte-heros';
  import componentProps from '../props/Card.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  const btn1 = ()　=>　{
    alert('You clicked.')
  }
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/cards">Cards</BreadcrumbItem>
  <BreadcrumbItem>Card default</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Card</h1>

<Htwo label="Set up" />

<p>Import Card in the script tag.</p>

```html
<script>
  import { Card } from "flowbite-svelte";
</script>
```

<Htwo label="Examples" />

<ExampleDiv class="flex flex-col justify-center gap-6">
  <Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card href="/" horizontal>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card img="/images/image-1.jpeg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card img="/images/image-1.jpeg" href="/" horizontal>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card reverse img="/images/image-1.jpeg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card reverse img="/images/image-1.jpeg" href="/" horizontal>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</ExampleDiv>

```html
<Card header="Noteworthy technology acquisitions 2021">
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
```

<Htwo label="User profile card" />

Use this user profile card example if you want to show a dropdown menu and buttons to enable multiple actions from your user.

<ExampleDiv>
  <Card>
    <div class="flex justify-end px-4 pt-4">
      <Dropdown class="w-44">
        <CloseButton slot="trigger" class="text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <DotsHorizontal class="w-5 h-5"/>
        </CloseButton>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Export data</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </Dropdown>
    </div>
    <div class="flex flex-col items-center pb-10">
      <Avatar size="lg" src="/images/profile-picture-3.webp" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
  </Card>
</ExampleDiv>


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
      <Button on:click={btn1}>Click me please</Button>
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