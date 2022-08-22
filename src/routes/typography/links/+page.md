---
layout: buttongroupLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
  import {  A, P, Button, Card, Heading, Figma, Breadcrumb, BreadcrumbItem } from '$lib'
  import { Home, ArrowRight } from 'svelte-heros';

  import componentProps from '../../props/ButtonGroup.json'

  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/typography/">Typography</BreadcrumbItem>
	<BreadcrumbItem>Links</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Links</h1>

<CompoDescription>The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card</CompoDescription>

<ExampleDiv>
<GitHubSource href="buttongroups/A.svelte">Link</GitHubSource>
</ExampleDiv>

Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text, buttons, cards, inside paragraphs, and more.

Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your website and become a returning user.

<Htwo label="Setup" />

```html
<script>
  import { Link } from 'flowbite-svelte';
</script>
```

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Default link</Heading>

Use this example to set default styles to an inline link element.


<ExampleDiv>

</ExampleDiv>

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Button</Heading>

This example can be used to set a hyperlink on a button component.

<ExampleDiv>

</ExampleDiv>

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Pagagraph</Heading>

Use this example to set a link inside a paragraph with an underline style.

<ExampleDiv>

</ExampleDiv>


<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Icon link</Heading>

This example can be used to set a custom SVG icon inside the hyperlink element.

<ExampleDiv>
<P>500,000 people have made over a million apps with Glide. <A href="/" textColor="text-blue-600 dark:text-blue-500" aClass="inline-flex items-center font-medium  hover:underline">
Read their stories
<ArrowRight /></A>
</P>
</ExampleDiv>

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">CTA link</Heading>

Use this example to set a hyperlink on a CTA element with text and a custom icon.


<ExampleDiv>
<A textColor="text-gray-500 dark:text-gray-400 dark:hover:text-white" aClass="inline-flex justify-center items-center p-5 text-base font-medium bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
<Figma />
<span class="w-full">Get started with our  Figma Design System</span>
<ArrowRight />
</A>
</ExampleDiv>

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Card link</Heading>

Use this example to set a hyperlink on a card component.

<ExampleDiv>
<Card href="/cards">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</ExampleDiv>

<Heading tag="h2" class='htwo mb-4 mt-8' customSize="text-2xl font-semibold">Image link</Heading>

This example can be used to set a hyperlink on an image inside a card component.

<ExampleDiv>
<Card img="/images/image-1.jpeg" href="/cards">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    <Button>
      Read more <ArrowRight class="w-5 h-5 ml-2"/>
    </Button>
  </Card>
</ExampleDiv>