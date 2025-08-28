---
layout: componentLayout
title: Svelte Forms - Flowbite
breadcrumb_title: Svelte Forms
component_title: Forms
dir: Components
description: Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite
thumnailSize: w-40
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A, Heading } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The Input component allows you to change the input size, add disabled, helper text, and floating label.

## Input Sizes

User the size prop to change the input size. Choose one from `"md" | "sm" | "lg"`. The default size is `md`.

```svelte example
{#include Sizes.svelte}
```

## Disabled

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte example
{#include Disabled.svelte}
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example
{#include Helper.svelte}
```

## Input element with icon

With the Input component, you can add <A href="https://flowbite-svelte-icons.codewithshin.com/">Flowbite Svelte Icons</A> or <A href="https://svelte-svg-icons.codewithshin.com/" >other icon sets</A>.

```svelte example
{#include Icon.svelte}
```

## Input element with addon

```svelte example
{#include Addon.svelte}
```

## Form validation

Use the following example to apply validation styles for success and error messages.

```svelte example
{#include Validation.svelte}
```

## Textarea

```svelte example
{#include Textarea.svelte}
```

## Select input

Get started with the default example of a select input component to get a single option selection.

```svelte example class="h-48"
{#include Select.svelte}
```

## MultiSelect

```svelte example class="h-96"
{#include MultiSelect.svelte}
```

## Checkbox

```svelte example class="flex flex-col gap-4"
{#include Checkbox.svelte}
```

## Radio buttons

```svelte example class="flex flex-col gap-4"
{#include Radio.svelte}
```

## File upload

```svelte example
{#include File.svelte}
```

## Toggle Switch

```svelte example class="flex flex-col gap-2"
{#include Toggle.svelte}
```

## References

- [Flowbite Forms](https://flowbite.com/docs/components/forms/)

<GitHubCompoLinks />
