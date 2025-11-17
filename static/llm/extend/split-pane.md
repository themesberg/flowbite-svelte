# Svelte Split Pane


## Setup

```svelte
<script lang="ts">
  import { SplitPane, Pane } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/split-pane) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/split-pane).


## Component data

### Divider

#### Types

[DividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2157)

#### Props

- direction
- index
- onMouseDown
- onTouchStart
- onKeyDown
- isDragging
- currentSize
- class: className: ""

### Pane

#### Types

[PaneProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2151)

#### Props

- children
- class: className: ""
- style: ""

### SplitPane

#### Types

[SplitPaneProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2137)

#### Props

- direction: "horizontal"
- minSize: 100
- responsive: true
- breakpoint: 768
- transition: transitionProp: true
- transitionDuration: 150
- keyboardStep: 2
- initialSizes
- onResize
- children
- class: className: ""

