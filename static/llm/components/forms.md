# Svelte Forms - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A, Heading } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The Input component allows you to change the input size, add disabled, helper text, and floating label.

## Input Sizes

User the size prop to change the input size. Choose one from `"md" | "sm" | "lg"`. The default size is `md`.

```svelte
{#include Sizes.svelte}
```

## Disabled

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte
{#include Disabled.svelte}
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte
{#include Helper.svelte}
```

## Input element with icon

With the Input component, you can add <A href="https://flowbite-svelte-icons.codewithshin.com/">Flowbite Svelte Icons</A> or <A href="https://svelte-svg-icons.codewithshin.com/" >other icon sets</A>.

```svelte
{#include Icon.svelte}
```

## Input element with addon

```svelte
{#include Addon.svelte}
```

## Form validation

Use the following example to apply validation styles for success and error messages.

```svelte
{#include Validation.svelte}
```

## Textarea

```svelte
{#include Textarea.svelte}
```

## Select input

Get started with the default example of a select input component to get a single option selection.

```svelte
{#include Select.svelte}
```

## MultiSelect

```svelte
{#include MultiSelect.svelte}
```

## Checkbox

```svelte
{#include Checkbox.svelte}
```

## Radio buttons

```svelte
{#include Radio.svelte}
```

## File upload

```svelte
{#include File.svelte}
```

## Toggle Switch

```svelte
{#include Toggle.svelte}
```

## References

- [Flowbite Forms](https://flowbite.com/docs/components/forms/)


