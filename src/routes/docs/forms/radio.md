---
layout: componentLayout
title: Svelte Radio - Flowbite
breadcrumb_title: Svelte Radio
component_title: Radio
dir: Forms
description: Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors
thumnailSize: w-72
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'

  const components = 'Radio, RadioButton, Label, Helper'
</script>

The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.

## Setup

```svelte example hideOutput
<script>
  import { Radio } from "flowbite-svelte";
</script>
```

## Radio examples

Use the default example of a radio component with the checked and unchecked state.

```svelte example class="flex flex-col gap-4"
include Default.svelte}
```

## Disabled state

Apply the `disabled` attribute to the radio component to disallow the selection for the user.

This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.

```svelte example class="flex flex-col gap-4"
include Disabled.svelte}
```

## Alternative syntax

If you need separate control over the label and the radio you can use the verbose syntax, but then you need to take care about aligning manually.

```svelte example class="flex flex-col gap-4"
include AlternativeSyntax.svelte}
```

## Radio with a link

Use this example if you want to add an anchor link inside the label of the radio component.

```svelte example hideScript
include Link.svelte}
```

## Helper text

Get started with this example if you want to add a secondary helper text for the radio component.

```svelte example
include HelperText.svelte}
```

## Bordered

Use this example of a radio inside a card element to enable a larger area of clicking activation.

```svelte example
include Bordered.svelte}
```

## Radio list group

Use this example to show a list of radio items grouped inside a card.

```svelte example
include ListGroup.svelte}
```

## Horizontal list group

Use this example to show a list of radio items inside a card horizontally.

```svelte example
include Horizontal.svelte}
```

## Radio in dropdown

Here’s an example of a list group that you can use right away.

```svelte example class="flex justify-center items-start h-80"
include Dropdown.svelte}
```

## Inline layout

You can align the radio elements horizontally by using a wrapper tag and applying the flex class.

```svelte example
include Inline.svelte}
```

You can use the property `inline` as the alternative.

```svelte example
include Inline2.svelte}
```

## Colors

```svelte example hideResponsiveButtons
include Colors.svelte}
```

## Advanced layout

Use this example of an advanced layout of radio elements where the label parent element can be styled when the radio is checked.

```svelte example
include Advanced.svelte}
```

## RadioButton

The special case component - `RadioButton` - is the `Radio` with the [Button](/docs/components/buttons) look and feel. It can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Radio` for behaviour.

```svelte example class="space-y-4"
include RadioButton.svelte}
```

## RadioButton style

Use `color` and `checkedClass` props to style the checked state:

```svelte example
include RadioButtonStyle.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Radio](https://flowbite.com/docs/forms/radio/)

<GitHubCompoLinks {components}/>
