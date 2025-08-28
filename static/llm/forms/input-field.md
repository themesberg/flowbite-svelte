# Svelte Input Fields - Flowbite


The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Setup

```svelte
<script lang="ts">
  import { Input, Label, Helper } from "flowbite-svelte";
</script>
```

## Input Fields

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

```svelte
{#include Default.svelte}
```

## Clearable

This example shows how to create an input field where the user can remove the
text with one click.

```svelte
{#include Clearable.svelte}
```

## Event

```svelte
{#include Event.svelte}
```

## Event Handlers

Use lowercase event handlers: `oninput`, `onfocus`, `onblur`, `onkeydown`.

**Migration**: `OnInput`, `onFocus`, `onBlur`, and `onKeydown` will be **deprecated** from version v1.8.0.

```svelte
{#include EventHandlers.svelte}
```

## Accessing Input Element with elementRef

```svelte
{#include ElementRef.svelte}
```

## Combobox

```svelte
{#include Combobox.svelte}
```

## Combobox with Icon

```svelte
{#include ComboboxIcon.svelte}
```

## Input Sizes

Use the following examples to apply a small, default or large size for the input fields.

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

```svelte
{#include Sizes.svelte}
```

## Disabled State

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte
{#include Disabled.svelte}
```

## Validation

Use the following example to apply validation styles for success and error messages.

```svelte
{#include Validation.svelte}
```

## Input with Icon

```svelte
{#include Icon.svelte}
```

## Input Group

This example can be used to add a descriptive icon or additional text inside the input field.

```svelte
{#include Group.svelte}
```

## Icon Click Handler

This example shows how to add `onclick` event handler to the icon in `Input`. By clicking an icon, it toggles icon and `type`:

```svelte
{#include IconClickHandler.svelte}
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte
{#include HelperText.svelte}
```

## Number input

By default the `Input` component binds the `value` as `string`. If you need a variable bound as `number` you need to use a specialised version of `Input` called `NumberInput`.

```svelte
{#include Number.svelte}
```

## Search input

```svelte
{#include Search.svelte}
```

## Dropdown

Use this example to show a dropdown menu right next to the input field.

```svelte
{#include Dropdown.svelte}
```

## Advanced usage

If you need a full control over `input` HTML element while still re-using the Flowbite formatting, you can put the `input` element as a default slot. The example below is in fact the implementation of the above mentioned `NumberInput`.

```svelte
{#include Advanced.svelte}
```

## Using Svelte's snapshot to preserve the input

```svelte
{#include Snapshot.svelte}
```

## See also

- [Input field](https://flowbite-svelte.com/llm/forms/input-field.md)
- [Floating label](https://flowbite-svelte.com/llm/forms/floating-label.md)
- [Tags](https://flowbite-svelte.com/llm/extend/tags.md)

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Input Field](https://flowbite.com/docs/forms/input-field/)

<GitHubCompoLinks {components}/>
