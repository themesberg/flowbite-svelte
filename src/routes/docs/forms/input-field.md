---
layout: componentLayout
title: Svelte Input Fields - Flowbite
breadcrumb_title: Svelte Input Fields
component_title: Input Field
dir: Forms
description: Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types
---

<script lang="ts">
  import { TableProp, TableDefaultRow,  CompoAttributesViewer, GitHubCompoLinks, Seealso, LlmLink } from '../../utils'
  import { A } from '$lib'

  const components = 'Input, InputAddon'
  const relatedLinks = ['/docs/forms/floating-label', '/docs/extend/tags' ]
</script>

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Input, Label, Helper } from "flowbite-svelte";
</script>
```

## Input Fields

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

```svelte example
{#include Default.svelte}
```

## Clearable

This example shows how to create an input field where the user can remove the
text with one click.

```svelte example
{#include Clearable.svelte}
```

## Event

```svelte example
{#include Event.svelte}
```

## Event Handlers

Use lowercase event handlers: `oninput`, `onfocus`, `onblur`, `onkeydown`.

**Migration**: `OnInput`, `onFocus`, `onBlur`, and `onKeydown` will be **deprecated** from version v1.8.0.

```svelte example
{#include EventHandlers.svelte}
```

## Accessing Input Element with elementRef

```svelte example class="flex justify-center" hideResponsiveButtons
{#include ElementRef.svelte}
```

## Combobox

```svelte example class="h-96 space-y-20"
{#include Combobox.svelte}
```

## Combobox with Icon

```svelte example class="h-80"
{#include ComboboxIcon.svelte}
```

## Input Sizes

Use the following examples to apply a small, default or large size for the input fields.

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

```svelte example hideScript class="space-y-6"
{#include Sizes.svelte}
```

## Disabled State

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte example hideScript
{#include Disabled.svelte}
```

## Validation

Use the following example to apply validation styles for success and error messages.

```svelte example
{#include Validation.svelte}
```

## Input with Icon

```svelte example class="space-y-6"
{#include Icon.svelte}
```

## Input Group

This example can be used to add a descriptive icon or additional text inside the input field.

```svelte example class="space-y-6"
{#include Group.svelte}
```

## Icon Click Handler

This example shows how to add `onclick` event handler to the icon in `Input`. By clicking an icon, it toggles icon and `type`:

```svelte example class="gap-6"
{#include IconClickHandler.svelte}
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example
{#include HelperText.svelte}
```

## Number input

By default the `Input` component binds the `value` as `string`. If you need a variable bound as `number` you need to use a specialised version of `Input` called `NumberInput`.

```svelte example
{#include Number.svelte}
```

## Search input

```svelte example
{#include Search.svelte}
```

## Dropdown

Use this example to show a dropdown menu right next to the input field.

```svelte example class="h-64"
{#include Dropdown.svelte}
```

## Advanced usage

If you need a full control over `input` HTML element while still re-using the Flowbite formatting, you can put the `input` element as a default slot. The example below is in fact the implementation of the above mentioned `NumberInput`.

```svelte example class="gap-4"
{#include Advanced.svelte}
```

## Using Svelte's snapshot to preserve the input

```svelte example class="h-auto"
{#include Snapshot.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Input Field](https://flowbite.com/docs/forms/input-field/)

## GitHub Links

<GitHubCompoLinks {components} />

## LLM Link

<LlmLink />
