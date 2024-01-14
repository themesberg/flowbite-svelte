---
layout: componentLayout
title: Svelte Links - Flowbite
breadcrumb_title: Svelte Links
component_title: Link
dir: Typography
description: The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card
thumnailSize: w-64
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { A } from '$lib'
  
  const components = 'A'
</script>

Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text, buttons, cards, inside paragraphs, and more.

Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your website and become a returning user.

## Setup

```html
<script>
  import { A } from 'flowbite-svelte';
</script>
```

## Default link

Use this example to set default styles to an inline link element.

```svelte example
<script>
  import { A } from 'flowbite-svelte';
</script>

<A class="font-medium hover:underline">Read more</A>
```

## Button

This example can be used to set a hyperlink on a button component.

```svelte example
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button href="/">Read more</Button>
```

## Paragraph

Use this example to set a link inside a paragraph with an underline style.

```svelte example
<script>
  import { A, P } from 'flowbite-svelte';
</script>

<P>
  The free updates that will be provided is based on the <A href="/" class="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
</P>
```

## Icon link

This example can be used to set a custom SVG icon inside the hyperlink element.

```svelte example
<script>
  import { A, P } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<P>
  500,000 people have made over a million apps with Glide.
  <A href="/" textColor="text-primary-600 dark:text-primary-500" aClass="inline-flex items-center font-medium  hover:underline">
    Read their stories
    <ArrowRightOutline class="w-4 h-4 ms-2" />
  </A>
</P>
```

## CTA link

Use this example to set a hyperlink on a CTA element with text and a custom icon.

```svelte example
<script>
  import { A } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Figma from '../../utils/icons/Figma.svelte';
</script>

<A textColor="text-gray-500 dark:text-gray-400 dark:hover:text-white" aClass="inline-flex justify-center items-center p-5 text-base font-medium bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
  <Figma />
  <span class="w-full ms-3">Get started with our Figma Design System</span>
  <ArrowRightOutline class="w-4 h-4 ms-2" />
</A>
```

## Card link

Use this example to set a hyperlink on a card component.

```svelte example
<script>
  import { Card } from 'flowbite-svelte';
</script>

<Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>
```

## Image link

This example can be used to set a hyperlink on an image inside a card component.

```svelte example
<script>
  import { Card, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Card img="/images/image-1.webp" href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <Button>
    Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
  </Button>
</Card>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### A styling

- Use the `class` prop to overwrite the `a` tag class.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
