---
layout: componentLayout
title: Svelte Tags
breadcrumb_title: Tags
component_title: Tags
dir: Extend
description: A customizable tag input component that allows users to enter multiple tags, with support for keyboard navigation and tag deletion.
---

<script lang="ts">
  import {  TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const components = 'Tags'
  const dirName = "forms/tags"
  const relatedLinks = ['/docs/forms/input-field','/docs/forms/floating-label', '/docs/extend/tags' ]
</script>

The Tags.svelte component is a flexible tag input field that lets users add and manage multiple tags. It supports adding tags with Enter, removing them with Backspace or close buttons, and offers customizable styling options. The component handles keyboard navigation and maintains a reactive array of tag values that can be bound to a parent component.

## Setup

Import the `Tags` component in a script tag.

```svelte example hideOutput
<script lang="ts">
  import { Tags } from "flowbite-svelte";
</script>
```

## Example

```svelte example
{#include Default.svelte}
```

## Input Props

```svelte example
{#include InputProps.svelte}
```

## Disabled

Use `disabled` to the `Tags` component.

```svelte example class="h-40"
{#include Disabled.svelte}
```

## Additional Props

- `unique` (boolean, default: `false`): Prevents duplicate tags from being added if set to true.

- `availableTags` (string[], default: `[]`): Defines a list of allowed tags that users can select from or type.

- `showHelper` (boolean, default: `false`): Displays real-time validation messages based on user input and tag constraints.

- `showAvailableTags` (boolean, default: `false`): Shows a static list of all available tags.

- `allowNewTags` (boolean, default: `true`): Allows users to create and add custom tags not included in availableTags when true.

```svelte example class="h-96"
{#include AdditionalProps.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />