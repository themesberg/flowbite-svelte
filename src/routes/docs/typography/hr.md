---
layout: componentLayout
title: Svelte Horizontal Line (HR) - Flowbite
breadcrumb_title: Svelte HR
component_title: HR
dir: Typography
description: Create a horizontal line using the `Hr` component to separate content such as paragraphs, blockquotes, and other elements
thumnailSize: w-64
---

<script>
  import { TableProp, TableDefaultRow } from '../../utils'
  import { A} from '$lib';
  import { props as items1 } from '../../props/Hr.json'
</script>



The `Hr` component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.

## Setup

```html
<script>
  import { Hr } from 'flowbite-svelte'
</script>
```

## Default HR

```svelte example
<script>
  import { Hr, P } from 'flowbite-svelte'
</script>

<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="my-8" height="h-px" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
```

## Trimmed

Use this example to show a shorter version of the horizontal line.

```svelte example
<script>
  import { Hr, P } from 'flowbite-svelte'
</script>

<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="my-4 mx-auto md:my-10" width="w-48" height="h-1"/>
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
```

## Icon HR

This example can be used to set a custom SVG icon in the middle of the HR element.

```svelte example
<script>
  import { Hr, P } from 'flowbite-svelte'
</script>

<div class="text-center">
  <P>
  Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and
    changes.
  </P>
  <Hr class="my-8" width="w-64" height="h-1" icon>
    <svg
      aria-hidden="true"
      class="w-5 h-5 text-gray-700 dark:text-gray-300"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
        fill="currentColor" /></svg>
  </Hr>
  <P>
  Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.
    </P>
</div>
```

## HR with text

Use this example to add a text in the middle of the HR component.

```svelte example
<script>
  import { Hr, P } from 'flowbite-svelte'
</script>

<div class="text-center">
  <P>
    Track work across the enterprise through an open, collaborative platform. Link issues across
    Jira and ingest data from other software development tools, so your IT support and operations
    teams have richer contextual information to rapidly respond to requests, incidents, and
    changes.
  </P>
  <Hr class="my-8" width="w-64">or</Hr>
  <P>
    Deliver great service experiences fast - without the complexity of traditional ITSM
    solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
    with a complete audit trail for every change.
  </P>
</div>
```

## HR shape

This example can be used to separate content with a HR tag as a shape instead of a line.

```svelte example
<script>
  import { Hr, P, Blockquote } from 'flowbite-svelte'
</script>

<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr class="my-8 mx-auto" width="w-8" height="h-8"/>
<Blockquote alignment="center"><p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p></Blockquote>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>
