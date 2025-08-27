# Svelte Number Input - Flowbite

The number input component can be used to introduce numeric values inside a form such as for a quantity field, a ZIP code, a phone number, your credit card number, and more.

## Default number input

Use this component to set a number value inside a form field by applying the type="number" attribute.

```svelte
{#include Default.svelte}
```

## ZIP code input

Use this example with an icon and helper text to set a ZIP code value inside a form field by also applying the pattern attribute to validate the input using a regular expression for a 5 digit number.

```svelte
{#include Zip.svelte}
```

## Phone number

Use this example to set a phone number inside a form field and a dropdown menu to select the country code.

```svelte
{#include Phone.svelte}
```

## Control buttons

Use this example with control buttons to increment and decrement the value inside the input field.

```svelte
{#include Control.svelte}
```

## Control buttons with icon

Use this example to also add an icon inside the input field to improve the user experience.

```svelte
{#include ControlIcon.svelte}
```

## Counter input

Use this example as an alternative style to the control buttons example above.

```svelte
{#include Counter.svelte}
```

## See also

- [Input field](https://flowbite-svelte.com/llm/forms/input-field.md)
- [Floating label](https://flowbite-svelte.com/llm/forms/floating-label.md)
- [Tags](https://flowbite-svelte.com/llm/extend/tags.md)
