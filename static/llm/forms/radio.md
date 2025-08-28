# Svelte Radio - Flowbite


The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.

## Setup

```svelte
<script lang="ts">
  import { Radio } from "flowbite-svelte";
</script>
```

## Radio examples

Use the default example of a radio component with the checked and unchecked state.

```svelte
{#include Default.svelte}
```

## Disabled state

Apply the `disabled` attribute to the radio component to disallow the selection for the user.

This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.

```svelte
{#include Disabled.svelte}
```

## Alternative syntax

If you need separate control over the label and the radio you can use the verbose syntax, but then you need to take care about aligning manually.

```svelte
{#include AlternativeSyntax.svelte}
```

## Radio with a link

Use this example if you want to add an anchor link inside the label of the radio component.

```svelte
{#include Link.svelte}
```

## Helper text

Get started with this example if you want to add a secondary helper text for the radio component.

```svelte
{#include HelperText.svelte}
```

## Bordered

Use this example of a radio inside a card element to enable a larger area of clicking activation.

```svelte
{#include Bordered.svelte}
```

## Radio list group

Use this example to show a list of radio items grouped inside a card.

```svelte
{#include ListGroup.svelte}
```

## Horizontal list group

Use this example to show a list of radio items inside a card horizontally.

```svelte
{#include Horizontal.svelte}
```

## Radio in dropdown

Here’s an example of a list group that you can use right away.

```svelte
{#include Dropdown.svelte}
```

## Inline layout

You can align the radio elements horizontally by using a wrapper tag and applying the flex class.

```svelte
{#include Inline.svelte}
```

You can use the property `inline` as the alternative.

```svelte
{#include Inline2.svelte}
```

## Colors

```svelte
{#include Colors.svelte}
```

## Advanced layout

Use this example of an advanced layout of radio elements where the label parent element can be styled when the radio is checked.

```svelte
{#include Advanced.svelte}
```

## RadioButton

The special case component - `RadioButton` - is the `Radio` with the [Button](/docs/components/buttons) look and feel. It can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Radio` for behaviour.

```svelte
{#include RadioButton.svelte}
```

## RadioButton style

Use `color` and `checkedClass` props to style the checked state:

```svelte
{#include RadioButtonStyle.svelte}
```

## Component data

### Radio

#### Types

[RadioProps<T>](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L814)

#### Props

- children
- "aria-describedby": ariaDescribedby
- inline: false
- labelClass
- color: "primary"
- custom: false
- group: $bindable<T>()
- value: $bindable<T>()
- class: className
- inputClass
- classes


## References

- [Flowbite Radio](https://flowbite.com/docs/forms/radio/)

<GitHubCompoLinks {components}/>
