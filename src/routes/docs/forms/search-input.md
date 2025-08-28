---
layout: componentLayout
title: Svelte Search Input - Flowbite
breadcrumb_title: Svelte Search Input
component_title: Search Input
dir: Forms
description: Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import componentData1 from '../../component-data/Search.json'
  const components = 'Search'
</script>

The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS.

You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Search } from "flowbite-svelte";
</script>
```

## Search bar example

```svelte example class="flex flex-col gap-4"
{#include Default.svelte}
```

## Search input with clearable

Use the simplest form of a search input component with an icon and a search button next to the text field.

```svelte example class="flex flex-col gap-4"
{#include Clearable.svelte}
```

## Event

```svelte example
{#include Event.svelte}
```

## Accessing Search Element with elementRef

```svelte example
{#include ElementRef.svelte}
```

## Search with dropdown

Use this search component with a dropdown to let your users select a category in which they would like the search query to be targeted in.

```svelte example class="flex flex-col gap-4 h-72"
{#include Dropdown.svelte}
```

## Location search

Use this example where you can select a country in which you want to search for an address or city.

```svelte example class="flex flex-col gap-4 h-72"
{#include Location.svelte}
```

## Voice Search

Get started with this example if you would like to enable voice search for your website and users.

```svelte example class="space-y-4"
{#include Voice.svelte}
```

## Example

```svelte example class="space-y-4"
{#include Example.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Search Input](https://flowbite.com/docs/forms/search-input/)

<GitHubCompoLinks {components}/>
