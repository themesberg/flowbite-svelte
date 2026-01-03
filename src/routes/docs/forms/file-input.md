---
layout: componentLayout
title: Svelte File Input - Flowbite
breadcrumb_title: Svelte File Input
component_title: Fileupload
dir: Forms
description: Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes
thumbnailSize: w-48
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { Table } from '$lib'

  const migration = [
    {v1: "close", v2: "closeIcon"},
    {v1: "svg", v2: "closeIcon" }
  ]
  const components = 'Fileupload'
</script>

The file input component can be used to upload one or more files from the device storage of the user available in multiple sizes, styles, variants and support for dark mode.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Fileupload } from "flowbite-svelte";
</script>
```

## Helper text

```svelte example
{#include HelperText.svelte}
```

## Clearable and multiple files

```svelte example
{#include Clearable.svelte}
```

## Disabled

```svelte example
{#include Disabled.svelte}
```

## Sizes

```svelte example
{#include Sizes.svelte}
```

## Events

Add `clearable` and `clearableOnClick` props.

```svelte example
{#include Events.svelte}
```

## Accessing Fileupload Element with elementRef

```svelte example
{#include ElementRef.svelte}
```

## Dropzone

```svelte example
{#include Dropzone.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## Migration Guide
### Fileupload
The following `tailwind-variants` slot names have been renamed.
If you were previously using the old slot names, please update them to the new ones shown below.

<Table items={migration} hoverable={true}/>

## References

- [Flowbite File Input](https://flowbite.com/docs/forms/file-input/)

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
