# Svelte Toggle (Switch) - Flowbite

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Setup

```svelte
<script>
  import { Toggle } from "flowbite-svelte";
</script>
```

## Toggle examples

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte
{#include Default.svelte}
```

## Colors

```svelte
{#include Colors.svelte}
```

## Sizes

```svelte
{#include Sizes.svelte}
```

## Label for off state

```svelte
{#include Label.svelte}
```

## Disabled

```svelte
{#include Disabled.svelte}
```

## Component data

### Toggle

#### Types

[ToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L971)

#### Props

- children
- size: "default"
- value
- checked: $bindable()
- disabled
- color: "primary"
- class: className
- classes
- inputClass
- spanClass
- offLabel

## References

- [Flowbite Switch (Toggle)](https://flowbite.com/docs/forms/toggle/)

<GitHubCompoLinks {components}/>
