# Svelte Command Palette


## Setup

```svelte
<script lang="ts">
  import { CommandPalette } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/command-palette) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/command-palette).


## Component data

### CommandPalette

#### Types

[CommandPaletteProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2199)

#### Props

- open: $bindable(false)
- items: []
- placeholder: "Type a command or search keywords ..."
- emptyMessage: "No results found."
- shortcutKey: "k"
- vim: false
- "aria-labelledby": ariaLabelledby
- class: className
- classes

