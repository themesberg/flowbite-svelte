# Svelte Tags


The Tags.svelte component is a flexible tag input field that lets users add and manage multiple tags. It supports adding tags with Enter, removing them with Backspace or close buttons, and offers customizable styling options. The component handles keyboard navigation and maintains a reactive array of tag values that can be bound to a parent component.

## Setup

Import the `Tags` component in a script tag.

```svelte
<script lang="ts">
  import { Tags } from "flowbite-svelte";
</script>
```

## Example

```svelte
{#include Default.svelte}
```

## Additional Props

- `unique` (boolean, default: `false`): Prevents duplicate tags from being added if set to true.

- `availableTags` (string[], default: `[]`): Defines a list of allowed tags that users can select from or type.

- `showHelper` (boolean, default: `false`): Displays real-time validation messages based on user input and tag constraints.

- `showAvailableTags` (boolean, default: `false`): Shows a static list of all available tags.

- `allowNewTags` (boolean, default: `true`): Allows users to create and add custom tags not included in availableTags when true.

```svelte
{#include AdditionalProps.svelte}
```

## See also

- [Input field](https://flowbite-svelte.com/llm/forms/input-field.md)
- [Floating label](https://flowbite-svelte.com/llm/forms/floating-label.md)
- [Tags](https://flowbite-svelte.com/llm/extend/tags.md)

## Component data

### Tags

#### Types

[TagsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L895)

#### Props

- value: $bindable([])
- placeholder: "Enter tags"
- class: className
- classes
- itemClass
- spanClass
- closeClass
- inputClass
- closeBtnSize: "xs"
- unique: false
- availableTags: []
- showHelper: false
- showAvailableTags: false
- allowNewTags: true

