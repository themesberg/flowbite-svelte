---
layout: componentLayout
title: Svelte Accordion - Flowbite
breadcrumb_title: Svelte Accordion
component_title: Accordion
dir: Components
description: Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from 'flowbite-svelte'; 
  const dirName = toKebabCase(component_title)
</script>

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the “Frequently Asked Questions” section of a website or page when you can show questions and answers for each child element.

## Setup

```svelte example hideOutput
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>
```

## Default accordion

Accordion uses the single selection mode by default i.e. it collapses every other child element when expanding a one.

To prevent that behavior set `multiple` property to `true`.

```svelte example
{#include Default.svelte}
```

## Always open

Use the `open` prop to make an item open on mount.

```svelte example
{#include Open.svelte}
```

## Color option

You can control the look and feel of `AccordionItems` by overwriting the `activeClass` and `inactiveClass` properties. You can define them in `Accordion` so that they will apply to all children or set them individually on each `AccordionItem`.

```svelte example
{#include Color.svelte}
```

## Flush accordion

Use `flush` prop to remove the rounded borders.

```svelte example
{#include Flush.svelte}
```

## Arrow style

Use the `arrowup` and `arrowdown` snippets to set up and down icons.

```svelte example
{#include ArrowStyle.svelte}
```

## Icon Accordion

Use `header` snippet to add your icon and title.

```svelte example
{#include Icon.svelte}
```

## Multiple mode

Use `multiple` to open all accordion items.

```svelte example
{#include MultipleMode.svelte}
```

Another example how to use the `multiple` option together with expand all behavior.

```svelte example class="space-y-4"
{#include MultipleMode2.svelte}
```

## Custom transitions

The default transition of `AccordionItem`s is <A href="https://svelte.dev/docs#run-time-svelte-transition-slide">slide</A>. Use the `transitionType` and `transitionParams` prop to make custom transitions.

```svelte example
{#include Transitions.svelte}
```

## Nesting accordions

Accordions can be nested. All of the mentioned options are supported.

```svelte example hideScript
{#include Nesting.svelte}
```

## Using Svelte’s snapshot to preserve the input

Use the following example to preserve the input value. First fill out the form, navigate to a different page, and then use your browser’s back button. You’ll notice that your input is preserved automatically.

```svelte example hideOutput
{#include Snapshot.svelte}
```

## Using transitionType="none"

When you set transitionType="none" on an Accordion or an AccordionItem, it disables Svelte transitions completely and instead uses CSS display properties (block/hidden) to show or hide content. It prevents Svelte from completely destroying and recreating components when toggling the accordion.

```svelte example class="h-96 space-y-4"
{#include TransitionNone.svelte}
```

## Breakpoints

Control when accordion items are open or closed based on screen size using Flowbite Svelte's responsive utilities.

### Basic Usage

Simple Media Query opens accordion item on medium screens and larger:

```svelte example
{#include BpBasic.svelte}
```

### Using Breakpoints Object

Access multiple breakpoints with a single hook:

```svelte example
{#include BpObject.svelte}
```

### Advanced Patterns

Current Breakpoint Display show the current breakpoint in your UI:

```svelte example
{#include BpAdvanced.svelte}
```

### Range-Based Opening

Open accordion only within specific screen size ranges:

```svelte example
{#include BpRange.svelte}
```

### Complex examples

```svelte example class="space-y-4"
{#include BpComplex.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName} />

## References

- [Flowbite Accordion](https://flowbite.com/docs/components/accordion/)

<GitHubCompoLinks />
