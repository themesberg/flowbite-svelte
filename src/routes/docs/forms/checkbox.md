---
layout: componentLayout
title: Svelte Checkbox - Flowbite
breadcrumb_title: Svelte Checkbox
component_title: Checkbox
dir: Forms
description: Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
thumnailSize: w-72
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'

  const components = 'Checkbox, CheckboxButton'
</script>

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>
```

## Checkbox examples

Use this default example of a checbkox element in a checked, unchecked and indeterminate state.

```svelte example class="flex flex-col gap-4" hideScript
{#include Default.svelte}
```

## Disabled state

This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.

```svelte example class="flex flex-col gap-4" hideScript
{#include Disabled.svelte}
```

## Alternative syntax

If you need separate control over the label and the checkbox you can use the verbose syntax, but then you need to take care about aligning manually.

```svelte example class="flex flex-col gap-4"
{#include Alternative.svelte}
```

## Checkbox with a link

Use this example if you want to add an anchor link inside the label of the checkbox component.

```svelte example hideScript
{#include Link.svelte}
```

## Helper text

Get started with this example if you want to add a secondary helper text for the checkbox component.

```svelte example
{#include HelperText.svelte}
```

## Bordered

Use this example of a checkbox inside a card element to enable a larger area of clicking activation.

```svelte example hideScript
{#include Bordered.svelte}
```

## Checkbox list group

Use this example to show a list of checkbox items grouped inside a card.

```svelte example
{#include ListGroup.svelte}
```

You can use the internal loop to render a list of `CheckboxItem`s.

```svelte example
{#include ListGroup2.svelte}
```

## Horizontal list group

Use this example to show a list of checkbox items inside a card horizontally.

```svelte example hideScript
{#include Horizontal.svelte}
```

## Checkbox dropdown

Use this example to show a list of checkbox items inside a dropdown menu.

```svelte example class="flex justify-center items-start h-96"
{#include Dropdown.svelte}
```

## Inline layout

You can align the checkbox elements horizontally by using a wrapper tag and applying the flex class.

```svelte example hideScript
{#include Inline.svelte}
```

You can use the property `inline` as the alternative.

```svelte example hideScript
{#include Inline2.svelte}
```

## Colors

```svelte example hideResponsiveButtons
{#include Colors.svelte}
```

## CheckboxButton

The special case component - `CheckboxButton` - is the `Checkbox` with the [Button](/docs/components/buttons) look and feel. It can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Checkbox` for behaviour.

```svelte example class="space-y-4"
{#include CheckboxButton.svelte}
```

## Advanced layout

Use this example of an advanced layout of checkbox elements where the label parent element can be styled when the checkbox is checked.

```svelte example
{#include Advanced.svelte}
```

## Group variable

```svelte example
{#include Group.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Checkbox](https://flowbite.com/docs/forms/checkbox/)

<GitHubCompoLinks {components} dir="forms"/>
