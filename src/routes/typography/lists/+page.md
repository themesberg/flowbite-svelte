---
layout: typographyLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
  import {  Ul, Li, A, P, Button, Card, Heading, Breadcrumb, BreadcrumbItem } from '$lib'

  // import componentProps from '../../props/Ul.json'
  // import componentProps2 from '../../props/Li.json'

  // Props table
  // let items1 = componentProps.props
  // let items2 = componentProps2.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/typography/">Typography</BreadcrumbItem>
	<BreadcrumbItem>Lists</BreadcrumbItem>
</Breadcrumb>

<Heading class="w-full mb-2" tag="h1" customSize="text-3xl">Lists</Heading>

<CompoDescription>
Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS and Flowbite
</CompoDescription>

<ExampleDiv>
<GitHubSource href="buttongroups/P.svelte">Li</GitHubSource>
<GitHubSource href="buttongroups/A.svelte">Ul</GitHubSource>
</ExampleDiv>

Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.

<Htwo label="Setup" />

```html
<script>
  import { Ul, Li } from 'flowbite-svelte';
</script>
```

<Htwo label="Unordored list" />

Use this example to create a default unordered list of items. 

<ExampleDiv>
<Heading tag="h3" class="text-lg mb-2">Password requirements</Heading>
<Ul>
  <Li>At least 10 </Li>
  <Li>At least one</Li>
  <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
</Ul>
</ExampleDiv>

