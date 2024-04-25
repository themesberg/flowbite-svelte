---
layout: componentLayout
title: Svelte Heading - Flowbite
breadcrumb_title: Svelte Heading
component_title: Heading
dir: Typography
description: The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts
thumnailSize: w-72
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { A, Heading, Breadcrumb, BreadcrumbItem } from '$lib';

  const components = 'Heading, P, A, Mark, Secondary'
</script>

Get started with the heading component to define titles and subtitles on a web page and also improve the on-page SEO metrics of your website by targeting high-traffic keywords on Google.

At least one unique H1 tag should be available for each page on your website with the next tags starting from H2 to H6 for each section. Choose from a collection of custom heading components based on multiple styles and layouts built with the utility classes from Tailwind CSS.

## Setup

```svelte example hideOutput
<script>
  import { Heading, P, A, Mark, Secondary } from 'flowbite-svelte';
</script>
```

## Default heading

Use this example of a H1 heading in the context of a paragraph and CTA button for landing pages.

```svelte example
<script>
  import { Heading, P, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="text-center">
  <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">We invest in the world’s potential</Heading>
  <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
  <Button href="/">
    Learn more
    <ArrowRightOutline class="w-6 h-6 ms-2" />
  </Button>
</div>
```

## Second-level heading

Use this example of a second-level H2 heading as the main subtitle for each section of your web page.

```svelte example
<script>
  import { Heading, P, A } from 'flowbite-svelte';
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<Heading tag="h2" customSize="text-4xl font-extrabold ">Payments tool for companies</Heading>
<P class="my-4 text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</P>
<P class="mb-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</P>
<A>
  Read more
  <ChevronRightOutline class="w-3.5 h-3.5 ms-2" />
</A>
```

## Highlighted heading

Use this example to highlight a certain portion of the heading text with a different color.

```svelte example
<script>
  import { Heading, P, Span } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="mb-4">Get back to growth with <Span highlight>the world's #1</Span> CRM.</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

## Heading mark

This example can be used to mark one part of the heading text with a solid background for highlighting.

```svelte example
<script>
  import { Heading, P, Mark } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="mb-4">Regain <Mark>control</Mark> over your days</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

## Heading gradient

Use this example to highlight a portion of the heading text by using a gradient style.

```svelte example
<script>
  import { Heading, P, Span } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl">
  <Span gradient>Better Data</Span> Scalable AI.
</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

## Heading underline

Get started with this example to underline an important part of the heading component using the `underline` prop in the `Span` component.

```svelte example
<script>
  import { Heading, P, Span } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="mb-4">
  We invest in the <Span underline decorationClass="decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</Span>
</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
```

## Breadcrumb context

Get started with this example to position a breadcrumb component above the heading component.

```svelte example
<script>
  import { Heading, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<Breadcrumb class="mb-4">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Settings</BreadcrumbItem>
  <BreadcrumbItem>Team</BreadcrumbItem>
</Breadcrumb>
<Heading tag="h2" class="mb-4">Team management</Heading>
```

## Badge context

Use this example to show a badge component inside the heading text element as a secondary indicator.

```svelte example
<script>
  import { Heading, Badge } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="flex items-center" size="text-5xl">
  Flowbite <Badge class="text-2xl font-semibold ms-2">PRO</Badge>
</Heading>
```

## Secondary text

This example can be used to add a secondary text inside the main heading component.

```svelte example
<script>
  import { Heading, Secondary } from 'flowbite-svelte';
</script>

<Heading tag="h1" customSize="text-5xl font-extrabold">
  Flowbite <Secondary class="ms-2">This is secondary text</Secondary>
</Heading>
```

## Sizes

The heading component has six levels of importance starting from H1 which has to be unique on the page and has the greatest weight of importance all the way to H6.

### Heading one (H1)

Use the `tag="h1"` as the most important text element to indicate the title of your web page.

```svelte example
<script>
  import { Heading } from 'flowbite-svelte';
</script>

<Heading tag="h1">Heading 1</Heading>
```

### Heading two (H2)

The `tag="h2"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import { Heading } from 'flowbite-svelte';
</script>

<Heading tag="h2">Heading 2</Heading>
```

### Heading three (H3)

The `tag="h3"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import { Heading } from 'flowbite-svelte';
</script>

<Heading tag="h3">Heading 3</Heading>
```

### Heading four (H4)

The `tag="h4"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import { Heading } from 'flowbite-svelte';
</script>

<Heading tag="h4">Heading 4</Heading>
```

### Heading five (H5)

The `tag="h5"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import { Heading } from 'flowbite-svelte';
</script>

<Heading tag="h5">Heading 5</Heading>
```

### Heading six (H6)

The `tag="h6"` can be used as subtitles of the page’s sections.

```svelte example
<script>
  import { Heading } from 'flowbite-svelte';
</script>

<Heading tag="h6">Heading 6</Heading>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Heading styling

- Use the `class` prop to overwrite the heading class.

### P styling

- Use the `class` prop to overwrite the `p` tag class.

### A styling

- Use the `class` prop to overwrite the `a` tag class.

### Mark styling

- Use the `class` prop to overwrite the `mark` tag class.

### Secondary styling

- Use the `class` prop to overwrite the `small` tag class.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
