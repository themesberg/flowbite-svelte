---
layout: componentLayout
title: Svelte KBD (Keyboard) - Flowbite
breadcrumb_title: Svelte KBD (Keyboard)
component_title: KBD
dir: Components
description: Use the KBD component as an inline element to denote textual user input from the keyboard inside paragraphs, tables, and other components
thumnailSize: w-40
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The KBD (Keyboard) component can be used to indicate a textual user input from the keyboard inside other elements such as in text, tables, cards, and more.

## Setup

```svelte example hideOutput
<script>
  import { Kbd } from "flowbite-svelte";
</script>
```

## Default KBD

Here’s a list of KBD components that you can use inside any other element.

```svelte example hideScript hideResponsiveButtons
{#include Default.svelte}
```

## KBD inside text

Use this example by nesting an inline KBD component inside a paragraph.

```svelte example hideScript hideResponsiveButtons
{#include Text.svelte}
```

## KBD inside table

The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.

```svelte example hideResponsiveButtons
{#include Table.svelte}
```

## Arrow keys

Use this example to show arrow keys inside the KBD styled element.

```svelte example hideResponsiveButtons
{#include Arrow.svelte}
```

## Letter keys

Use this example if you need to show a key from the latin alphabet

```svelte example hideScript hideResponsiveButtons
{#include Letter.svelte}
```

## Number keys

Use this example to show a key inside a KBD component from the english numeral system.

```svelte example hideScript hideResponsiveButtons
{#include Number.svelte}
```

## Function keys

This example can be used to denote function keys inside the KBD component.

```svelte example hideScript hideResponsiveButtons
{#include Function.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite KBD (Keyboard)](https://flowbite.com/docs/components/kbd/)

<GitHubCompoLinks />
