---
layout: componentLayout
title: Svelte Breadcrumb - Flowbite
breadcrumb_title: Svelte Breadcrumb
component_title: Breadcrumb
dir: Components
description: Show the location of the current page in a hierarchical structure using the breadcrumb components
thumnailSize: w-64
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Setup

```svelte example hideOutput
<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>
```

## Default Breadcrumb

Use the following breadcrumb example to show the hierarchical structure of pages.

```svelte example hideScript
<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

## Solid Breadcrumb

You can alternatively also use the breadcrumb components with a solid background.

```svelte example hideScript
<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

## Icons

Use the `icon` slot to change icons.

```svelte example
<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { HomeOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons';
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
  <BreadcrumbItem href="/" home>
    <svelte:fragment slot="icon">
      <HomeOutline class="w-4 h-4 me-2" />
    </svelte:fragment>Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/">
    <svelte:fragment slot="icon">
      <ChevronDoubleRightOutline class="w-5 h-5 mx-2 dark:text-white" />
    </svelte:fragment>
    Projects
  </BreadcrumbItem>
  <BreadcrumbItem>
    <svelte:fragment slot="icon">
      <ChevronDoubleRightOutline class="w-5 h-5 mx-2 dark:text-white" />
    </svelte:fragment>
    Flowbite Svelte
  </BreadcrumbItem>
</Breadcrumb>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Breadcrumb styling

- Use the `class` prop to overwrite a class in the `nav` tag
- Use the `classOl` prop to overwrite a class in the `ol` tag.

### BreadcrumbItem styling

- Use the `class` prop to overwrite a class in the `li` tag
- Use the `classHome` prop to overwrite `homeClass`.
- Use the `classLink` prop to overwrite `linkClass`.
- Use the `classSpan` prop to overwrite `spanClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Breadcrumb](https://flowbite.com/docs/components/breadcrumb/)

<GitHubCompoLinks />
