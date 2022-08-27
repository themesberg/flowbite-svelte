---
layout: typographyLayout
---


<script>
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow } from '../../utils'
	import { Blockquote, P, Heading, Highlight, A, Mark, Secondary, TextGradient, Underline, Rating, Breadcrumb, BreadcrumbItem } from '$lib';
	
	import componentProps1 from '../../props/Blockquote.json'
  let items1 = componentProps1.props
	let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let QuoteLeft = `<svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>`
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/typography/">Typography</BreadcrumbItem>
	<BreadcrumbItem>Blockquote</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Blockquote</Heading>

<CompoDescription>The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes inside an article</CompoDescription>

<ExampleDiv>
	<GitHubSource href="typography/Blockquote.svelte">Blockquote</GitHubSource>
</ExampleDiv>

Get started with Blockquote component when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.


<Htwo label="Default blockquote" />

Use this example to quote an external source inside a blockquote element.

<ExampleDiv>
<Blockquote>
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<Blockquote>
<p>"Flowbite is just awesome. It contains tons of predesigned ..."</p>
</Blockquote>
```

<Htwo label="Solid background" />

This example can be used as an alternative style to the default one by applying a solid background color.

<ExampleDiv>
<P>Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.</P>
<Blockquote border bg class="p-4 my-4">
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
<P>First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</P>
</ExampleDiv>

```html
<P>Does your user know how to exit out of screens?...</P>
<Blockquote border bg class="p-4 my-4">
<p>"Flowbite is just awesome. It contains tons ..."</p>
</Blockquote>
<P>First of all you need to understand how Flowbite works...</P>
```

<Htwo label="Blockquote icon" />

Use this example to show an icon above the blockquote text content.

<ExampleDiv>
<Blockquote>
{@html QuoteLeft}
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<Blockquote>
{@html QuoteLeft}
<p>"Flowbite is just awesome. It contains tons of ..."</p>
</Blockquote>
```

<Htwo label="Paragraph context" />

Use this example to show a blockquote component between multiple paragraph elements.

<ExampleDiv>
<P class="mb-3">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
<P class="mb-3">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Blockquote class="mb-3">
    <p>" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
  </Blockquote>
</div>
<P class="mb-3">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</ExampleDiv>

```html
<P class="mb-3">Track work across the enterprise ...</P>
<div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
<P class="mb-3">Track work across the enterprise ...</P>
  <Blockquote class="mb-3">
    <p>" Flowbite is just awesome. It contains tons ... "</p>
  </Blockquote>
</div>
<P class="mb-3">Deliver great service experiences ...</P>
```

<Htwo label="User testimonial" />

This example can be used for user testimonials by mentioning the author and occupation of the author.

<ExampleDiv>
<figure class="mx-auto max-w-screen-md text-center">
{@html QuoteLeft}
<Blockquote alignment="center">
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
<figcaption class="flex justify-center items-center mt-6 space-x-3">
  <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile">
  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
      <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
      <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
  </div>
</figcaption>
</figure>
</ExampleDiv>

```html
<figure class="mx-auto max-w-screen-md text-center">
{@html QuoteLeft}
<Blockquote alignment="center">
<p>"Flowbite is just awesome. It contains tons ..."</p>
</Blockquote>
<figcaption class="flex justify-center items-center mt-6 space-x-3">
  <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile">
  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
      <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
      <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
  </div>
</figcaption>
</figure>
```

<Htwo label="User Review" />

Use this example to show a user review with rating stars and the name and occupation of the author.

<ExampleDiv>
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <Rating total={5} rating={4.66} ceil size="30"/>
    </div>
    <Blockquote italic={false}>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </Blockquote>
    <figcaption class="flex items-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile">
        <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
        </div>
    </figcaption>
</figure>
</ExampleDiv>

```html
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <Rating total={5} rating={4.66} ceil size="30"/>
    </div>
    <Blockquote italic={false}>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">"Flowbite is just awesome..."</p>
    </Blockquote>
    <figcaption class="flex items-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile">
        <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
        </div>
    </figcaption>
</figure>
```

<Htwo label="
Alignment" />

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.


<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Left</Heading>

The default alignment of the blockquote text content is the left side of the document.

<ExampleDiv>
<Blockquote>
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<Blockquote>
<p>"Flowbite is just awesome. It contains tons ..."</p>
</Blockquote>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Center</Heading>

Use the `alignment="center"` prop to align the text content inside the blockquote to the center.

<ExampleDiv>
<Blockquote alignment="center">
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<p>"Flowbite is just awesome. It contains tons of ..."</p>
</Blockquote>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Right</Heading>

Use the `alignment="right"` prop to align the blockquote text content to the right side of the page.

<ExampleDiv>
<Blockquote alignment="right">
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<Blockquote alignment="right">
<p>"Flowbite is just awesome. It contains tons ..."</p>
</Blockquote>
```

<Htwo label="Sizes" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Small</Heading>

Use the `size="lg"` prop to apply the small size for the blockquote component.

<ExampleDiv>
<Blockquote>
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<Blockquote>
<p>"Flowbite is just awesome. It contains tons of ..."</p>
</Blockquote>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Medium</Heading>

Use the `size="xl"` to set the default size for the blockquote element.

<ExampleDiv>
<Blockquote size="xl">
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<Blockquote size="xl">
<p>"Flowbite is just awesome. It contains tons of ..."</p>
</Blockquote>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Large</Heading>

The `size="xxl"` prop can be used to set a large size for the blockquote component.

<ExampleDiv>
<Blockquote size="xxl">
<p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</ExampleDiv>

```html
<Blockquote size="xxl">
<p>"Flowbite is just awesome. It contains tons of ..."</p>
</Blockquote>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>