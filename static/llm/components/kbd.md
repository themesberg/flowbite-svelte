# Svelte KBD (Keyboard) - Flowbite


The KBD (Keyboard) component can be used to indicate a textual user input from the keyboard inside other elements such as in text, tables, cards, and more.

## Setup

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
</script>
```

## Default KBD

Here’s a list of KBD components that you can use inside any other element.

```svelte
{#include Default.svelte}
```

## KBD inside text

Use this example by nesting an inline KBD component inside a paragraph.

```svelte
{#include Text.svelte}
```

## KBD inside table

The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.

```svelte
{#include Table.svelte}
```

## Arrow keys

Use this example to show arrow keys inside the KBD styled element.

```svelte
{#include Arrow.svelte}
```

## Letter keys

Use this example if you need to show a key from the latin alphabet

```svelte
{#include Letter.svelte}
```

## Number keys

Use this example to show a key inside a KBD component from the english numeral system.

```svelte
{#include Number.svelte}
```

## Function keys

This example can be used to denote function keys inside the KBD component.

```svelte
{#include Function.svelte}
```

## Component data

### Kbd

#### Types

[KbdProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1009)

#### Props

- children
- class: className


## References

- [Flowbite KBD (Keyboard)](https://flowbite.com/docs/components/kbd/)


