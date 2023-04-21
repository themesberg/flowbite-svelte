---
layout: componentLayout
title: Svelte Paragraph - Flowbite
breadcrumb_title: Svelte Paragraph
component_title: Paragraph
dir: Typography
description: Use the paragraph component to create multiple blocks of text separated by blank lines and write content based on multiple layouts and styles
thumnailSize: w-64
---

<script>
  import { TableProp, TableDefaultRow} from '../../utils';
  import {  A, Heading } from '$lib';
  import { props as items1 } from '../../props/P.json'
  import { props as items2 } from '../../props/Layout.json'

  // lib files
  const libFilesArray = [
    import.meta.glob("$lib/typography/P.svelte"),
    import.meta.glob("$lib/typography/Layout.svelte"),
  ];
  const libFiles = { ...libFilesArray[0], ...libFilesArray[1] };
</script>



The paragraph element is one of the most commonly used HTML tags on a document page because it is
used to write longer blocks of text separated by a blank line and can massively improve the on-page
SEO of the page when used correctly. Get started with a collection of paragraph components based on
multiple styles, layouts, colors and sizes to use for your website.

## Default paragraph

Use this example of a paragraph element to use inside article content or a landing page.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
<P weight="light" color="text-gray-500 dark:text-gray-400">
  Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
  Accelerate critical development work, eliminate toil, and deploy changes with ease, with a
  complete audit trail for every change.
</P>
```

## Leading paragraph

The leading text can be used as the first paragraph inside an article content page.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P class="mb-3 md:text-xl" weight="light" size="lg" color="text-gray-500 dark:text-gray-400"
  >Deliver great service experiences fast - without the complexity of traditional ITSM
  solutions.Accelerate critical development work and deploy.
</P>
<P weight="light" color="text-gray-500 dark:text-gray-400"
  >Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
```

## First letter

Use `firstupper` prop to highlight the first letter of the paragraph, often used in e-books and PDF
documents.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P class="mb-3" color="text-gray-500 dark:text-gray-400" firstupper
  >Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
<P weight="light" color="text-gray-500 dark:text-gray-400"
  >Deliver great service experiences fast - without the complexity of traditional ITSM
  solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
  with a complete audit trail for every change.
</P>
```

## Paragraph link

This example can be used to add a custom styled link element inside the paragraph.

```svelte example
<script>
  import { P, A } from 'flowbite-svelte'
</script>

<P weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <A href="/"
    >Link issues across Jira</A> and ingest data from other software development tools, so your IT
  support and operations teams have richer contextual information to rapidly respond to requests, incidents,
  and changes.
</P>
```

## Paragraph bold

Use this example to highlight a piece of text inside the paragraph by using a bolder font weight.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <strong
    class="font-semibold text-gray-900 dark:text-white">Link issues across Jira</strong> and ingest
  data from other software development tools, so your IT support and operations teams have richer contextual
  information to rapidly respond to requests, incidents, and changes.
</P>
```

## Paragraph underline

This example can be used to underline a certain part of the text inside the paragraph.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <u class="underline"
    >Link issues across Jira</u>
  and ingest data from other software development tools, so your IT support and operations teams have
  richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
```

## Paragraph italic

Use this example to make the font style of the text inside the paragraph italic.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <em
    class="font-italic">Link issues across Jira</em>
  and ingest data from other software development tools, so your IT support and operations teams have
  richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
```

## Paragraph popover

Get started with this example to show a popover with extra information inside paragraph elements.

```svelte example class="flex items-end h-96"
<script>
  import { Popover, P, A } from 'flowbite-svelte'
</script>

<P weight="font-light" color="text-gray-500 dark:text-gray-400"
  >Due to its central geographic location in Southern Europe, <A href="/" id="popover-image"
    >Italy</A> has historically been home to myriad peoples and cultures. In addition to the various
  ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the
  Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians
  and Carthaginians founded colonies mostly in insular Italy</P>
<Popover triggeredBy="#popover-image" class="w-96 text-sm font-light" defaultClass="">
  <div class="grid grid-cols-5">
    <div class="col-span-3 p-3">
      <div class="space-y-2">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">About Italy</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also
          considered part of Western Europe.
        </p>
        <A href="/"
          >Read more <svg
            class="ml-1 w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd" /></svg
          ></A>
      </div>
    </div>
    <img src="/images/image-1.webp" class="col-span-2 h-full rounded-r-lg" alt="Italy map" />
  </div>
</Popover>
```

## Layout

Get started with examples of layouts for the paragraph component to separate content into multiple
rows and columns.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">One column</Heading>

Use this example to show multiple paragraphs on a single line.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Deliver great service experiences fast - without the complexity of traditional ITSM
  solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
  with a complete audit trail for every change.
</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Two columns even</Heading>

Use this example to separate paragraphs into two columns for better readability.

```svelte example
<script>
  import { P, Layout } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
<Layout gap={6}>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and
    changes.
  </P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.
  </P>
</Layout>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Deliver great service experiences fast - without the complexity of traditional ITSM
  solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
  with a complete audit trail for every change.
</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Three columns even</Heading>

This example can be used to separate paragraphs into three separate columns.

```svelte example
<script>
  import { P, Layout } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
<Layout gap={6} cols="grid-cols-1 sm:grid-cols-3">
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and
    changes.
  </P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.
  </P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.
  </P>
</Layout>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Deliver great service experiences fast - without the complexity of traditional ITSM
  solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
  with a complete audit trail for every change.
</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Two columns uneven</Heading>

Use this example to separate paragraphs into two uneven columns.

```svelte example
<script>
  import { P, Layout } from 'flowbite-svelte'
</script>

<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
<Layout gap={6} cols="grid-cols-1 sm:grid-cols-3">
  <div class="col-span-2">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
      Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools, so your IT support and
      operations teams have richer contextual information to rapidly respond to requests,
      incidents, and changes.
    </P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
      Deliver great service experiences fast - without the complexity of traditional ITSM
      solutions.Accelerate critical development work, eliminate toil, and deploy changes with
      ease, with a complete audit trail for every change.
    </P>
  </div>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
    Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.
  </P>
</Layout>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Deliver great service experiences fast - without the complexity of traditional ITSM
  solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
  with a complete audit trail for every change.
</P>
```

## Text alignment

Align the paragraph component to the left (default), center or right side of the document page using
the `text-left|center|right` utility class from Tailwind CSS.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Left</Heading>

The default alignment of the paragraph is to the left side and you can use the `align="left"` prop
to align it manually.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P align="left">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Center</Heading>

Use the `align="center"` prop to align the paragraph text to the center.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P align="center">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Right</Heading>

Use the `align="right"` prop to align the paragraph text the right side of the page.

```svelte example
<script>
  import { P } from 'flowbite-svelte'
</script>

<P align="right">
  Track work across the enterprise through an open, collaborative platform. Link issues across
  Jira and ingest data from other software development tools, so your IT support and operations
  teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">P</Heading>

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Layout</Heading>

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

