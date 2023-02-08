---
layout: typographyLayout
title: Svelte Heading - Flowbite
breadcrumb_title: Heading
dir: Typography
description: The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow , MetaTag } from '../utils'
  import { A, Heading, Breadcrumb, BreadcrumbItem } from '$lib';
  
  import { props as items1 } from '../props/Heading.json'
  import { props as items2 } from '../props/P.json'
  import { props as items3 } from '../props/A.json'
  import { props as items4 } from '../props/Mark.json'
  import { props as items5 } from '../props/Secondary.json'
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
  <GitHubSource href="typography/Heading.svelte">Heading</GitHubSource>
  <GitHubSource href="typography/P.svelte">P</GitHubSource>
  <GitHubSource href="typography/A.svelte">A</GitHubSource>
  <GitHubSource href="typography/Mark.svelte">Mark</GitHubSource>
  <GitHubSource href="typography/Secondary.svelte">Secondary</GitHubSource>
</ExampleDiv>

Get started with the heading component to define titles and subtitles on a web page and also improve the on-page SEO metrics of your website by targeting high-traffic keywords on Google.

At least one unique H1 tag should be available for each page on your website with the next tags starting from H2 to H6 for each section. Choose from a collection of custom heading components based on multiple styles and layouts built with the utility classes from Tailwind CSS.

<Htwo label="Setup" />

```html
<script>
  import {  Heading, P, A, Mark, Secondary } from 'flowbite-svelte'
</script>
```

<Htwo label="Default heading" />

Use this example of a H1 heading in the context of a paragraph and CTA button for landing pages.

```svelte example
<script>
  import {  Heading, P, Button } from 'flowbite-svelte'
</script>

<div  class="text-center">
  <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">We invest in the world’s potential</Heading>
  <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  <Button href="/">Learn more 
  <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
</div>
```

<Htwo label="Second-level heading" />

Use this example of a second-level H2 heading as the main subtitle for each section of your web page.

```svelte example
<script>
  import {  Heading, P, A } from 'flowbite-svelte'
</script>

<Heading tag="h2" customSize="text-4xl font-extrabold ">Payments tool for companies</Heading>
<P class="my-4 text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</P>
<P class="mb-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</P>
<A>Read more 
  <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
</A>
```

<Htwo label="Highlighted heading" />

Use this example to highlight a certain portion of the heading text with a different color.


```svelte example
<script>
  import {  Heading, P, Span } from 'flowbite-svelte'
</script>

<Heading tag="h1" class="mb-4">Get back to growth with <Span highlight>the world's #1</Span> CRM.</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

<Htwo label="Heading mark" />

This example can be used to mark one part of the heading text with a solid background for highlighting.


```svelte example
<script>
  import {  Heading, P, Mark } from 'flowbite-svelte'
</script>

<Heading tag="h1" class='mb-4'>Regain <Mark>control</Mark> over your days</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

<Htwo label="Heading gradient" />

Use this example to highlight a portion of the heading text by using a gradient style.


```svelte example
<script>
  import {  Heading, P, Span } from 'flowbite-svelte'
</script>

<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"><Span gradient>Better Data</Span> Scalable AI.</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

<Htwo label="Heading underline" />

Get started with this example to underline an important part of the heading component using the `underline` prop in the `Span` component.


```svelte example
<script>
  import {  Heading, P, Span } from 'flowbite-svelte'
</script>

<Heading tag="h1" class="mb-4">We invest in the <Span underline underDecoration="decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</Span></Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

<Htwo label="Breadcrumb context" />

Get started with this example to position a breadcrumb component above the heading component.


```svelte example
<script>
  import {  Heading, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte'
</script>

<Breadcrumb class="mb-4">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Settings</BreadcrumbItem>
  <BreadcrumbItem>Team</BreadcrumbItem>
</Breadcrumb>
<Heading tag="h2" class="mb-4">Team management</Heading>
```

<Htwo label="Badge context" />

Use this example to show a badge component inside the heading text element as a secondary indicator.


```svelte example
<script>
  import {  Heading, Badge } from 'flowbite-svelte'
</script>

<Heading tag="h1" class='flex items-center' size='text-5xl'>Flowbite <Badge class="text-2xl font-semibold ml-2" >PRO</Badge></Heading>
```

<Htwo label="Secondary text" />

This example can be used to add a secondary text inside the main heading component.


```svelte example
<script>
  import {  Heading, Secondary } from 'flowbite-svelte'
</script>

<Heading tag="h1" customSize="text-5xl font-extrabold">Flowbite <Secondary class="ml-2">This is secondary text</Secondary></Heading>
```

<Htwo label="Sizes" />

The heading component has six levels of importance starting from H1 which has to be unique on the page and has the greatest weight of importance all the way to H6.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Heading one (H1)</Heading>

Use the `tag="h1"` as the most important text element to indicate the title of your web page.


```svelte example
<script>
  import {  Heading } from 'flowbite-svelte'
</script>

<Heading tag="h1">Heading 1</Heading>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Heading two (H2)</Heading>

The `tag="h2"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import {  Heading } from 'flowbite-svelte'
</script>

<Heading tag="h2">Heading 2</Heading>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Heading three (H3)</Heading>

The `tag="h3"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import {  Heading } from 'flowbite-svelte'
</script>

<Heading tag="h3">Heading 3</Heading>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Heading four (H4)</Heading>

The `tag="h4"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import {  Heading } from 'flowbite-svelte'
</script>

<Heading tag="h4">Heading 4</Heading>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Heading five (H5)</Heading>

The `tag="h5"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import {  Heading } from 'flowbite-svelte'
</script>

<Heading tag="h5">Heading 5</Heading>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Heading six (H6)</Heading>

The `tag="h6"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import {  Heading } from 'flowbite-svelte'
</script>

<Heading tag="h6">Heading 6</Heading>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Heading</Heading>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">P</Heading>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">A</Heading>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Mark</Heading>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Secondary</Heading>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>
