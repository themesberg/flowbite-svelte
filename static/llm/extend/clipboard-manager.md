# Svelte Clipboard Manager


## Setup

```svelte
<script lang="ts">
  import { ClipboardManager } from  'flowbite-svelte';
</script>
```

## Usage Examples

See [examples](/docs-examples/extend/clipboard-manager) and [code](https://github.com/themesberg/flowbite-svelte/tree/main/src/routes/docs-examples/extend/clipboard-manager).

## See also

<Seealso links={relatedLinks} />

## Component data

### ClipboardManager

#### Types

[ClipboardManagerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2265)

#### Props

- items: initialItems: []
- placeholder: "Type and save to clipboard"
- saveLabel: "Save"
- clearLabel: "Clear All"
- limit: 20
- saveToStorage: true
- toastDuration: 2000
- filterSensitive: true
- maxLength: 10000
- enableSelectionMenu: false
- selectionTarget: "body"
- showInput: true
- class: className: ""
- classes
- storageKey
- children
- emptyState
- open: $bindable()
- // If undefined
- renders inline; if defined
- renders as modal
    badgeProps: { color: "blue", class: "text-xs"

