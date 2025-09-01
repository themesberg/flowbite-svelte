---
layout: componentLayout
title: Svelte Breadcrumb - Flowbite
breadcrumb_title: Svelte Breadcrumb
component_title: Breadcrumb
dir: Components
description: Show the location of the current page in a hierarchical structure using the breadcrumb components
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>
```

## Default Breadcrumb

Use the following breadcrumb example to show the hierarchical structure of pages.

```svelte example hideScript
{#include Default.svelte}
```

## Solid Breadcrumb

You can alternatively also use the breadcrumb components with a solid background.

```svelte example hideScript
{#include Solid.svelte}
```

## Icons

Use the `icon` snippet to change icons.

```svelte example
{#include Icons.svelte}
```

## Class and olClass

```svelte example
{#include Class.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Breadcrumb](https://flowbite.com/docs/components/breadcrumb/)

## GitHub Links

<GitHubCompoLinks />

## Machine-Readable LLM Files

<LlmLink />
