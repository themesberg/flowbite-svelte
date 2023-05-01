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
  import { TableProp, TableDefaultRow} from '../../utils'
  import {  A} from '$lib'
  import { props as items1 } from '../../props/A.json'
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

<P>The free updates that will be provided is based on the <A href="/" class="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</P>
```

## Icon link

This example can be used to set a custom SVG icon inside the hyperlink element.

```svelte example
<script>
  import { A, P } from 'flowbite-svelte';
</script>

<P>500,000 people have made over a million apps with Glide. 
  <A href="/" textColor="text-blue-600 dark:text-blue-500" aClass="inline-flex items-center font-medium  hover:underline">
    Read their stories
    <svg aria-hidden="true" class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </A>
</P>
```

## CTA link

Use this example to set a hyperlink on a CTA element with text and a custom icon.

```svelte example
<script>
  import { A } from 'flowbite-svelte';
</script>

<A textColor="text-gray-500 dark:text-gray-400 dark:hover:text-white" aClass="inline-flex justify-center items-center p-5 text-base font-medium bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
  <svg aria-hidden="true" class="mr-3 w-5 h-5" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83"/><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF"/><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E"/><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262"/><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE"/></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)"/></clipPath></defs></svg>
  <span class="w-full">Get started with our  Figma Design System</span>
  <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
```

## Image link

This example can be used to set a hyperlink on an image inside a card component.

```svelte example
<script>
  import { Card, Button } from 'flowbite-svelte';
</script>

<Card img="/images/image-1.webp" href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
  <Button>
    Read more <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </Button>
</Card>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>
