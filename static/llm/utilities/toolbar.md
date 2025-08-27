# Svelte Toolbar - Flowbite


## Setup

```svelte
<script>
  import { Toolbar, ToolbarButton, ToolbarGroup } from "flowbite-svelte";
</script>
```

## Default toolbar

```svelte
include Default.svelte}
```

## Colored toolbars

```svelte
include Colored.svelte}
```

## Toolbar with groups

```svelte
include Groups.svelte}
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte
include Editor.svelte}
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte
include CommentBox.svelte}
```

## Component data

### Toolbar

#### Types

[ToolbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1130)

#### Props

- children
- end
- color
- embedded
- class: className
- classes

### ToolbarButton

#### Types

[ToolbarButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1136)

#### Props

- children
- color
- name
- "aria-label": ariaLabel
- size
- class: className

### ToolbarGroup

#### Types

[ToolbarGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1134)

#### Props

- children
- spacing
- padding
- position: "middle"
- class: className


### Toolbar styling

- Use the `class` prop to overwrite the `div` tag class.

### ToolbarButton styling

- Use the `class` prop to overwrite the `button` tag class.

### ToolbarGroup styling

- Use the `class` prop to overwrite `divClass`.

## Component data

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
