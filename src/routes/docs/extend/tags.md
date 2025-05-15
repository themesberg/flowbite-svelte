---
layout: componentLayout
title: Svelte Tags
breadcrumb_title: Tags
component_title: Tags
dir: Extend
description: A customizable tag input component that allows users to enter multiple tags, with support for keyboard navigation and tag deletion.
---

<script>
  import {  TableProp, TableDefaultRow, CompoAttributesViewer, Seealso } from '../../utils'
  import { P, A } from '$lib'
  const dirName = "tags"
  const relatedLinks = ['/docs/forms/input-field','/docs/forms/floating-label', '/docs/extend/tags' ]
</script>

The Tags.svelte component is a flexible tag input field that lets users add and manage multiple tags. It supports adding tags with Enter, removing them with Backspace or close buttons, and offers customizable styling options. The component handles keyboard navigation and maintains a reactive array of tag values that can be bound to a parent component.

## Setup

Import the `Tags` component in a script tag.

```svelte example hideOutput
<script>
  import { Tags } from "flowbite-svelte";
</script>
```

## Example

```svelte example
<script lang="ts">
  import { Button, Tags } from "flowbite-svelte";
  let tags: string[] = $state([]);
  const handleClick = () => {
    alert(`Submitted: ${tags}`);
  };
</script>

<form>
  <Tags class="mt-5 mb-3" bind:value={tags} />
  {#if tags.length > 0}
    <pre>{JSON.stringify(tags, null, 2)}</pre>
  {/if}
  <Button onclick={handleClick}>Submit</Button>
</form>
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>