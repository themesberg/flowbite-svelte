# Slot Naming Review Summary

## Overview
Reviewed and updated slot naming conventions for three components to align with the design system guidelines defined in `design-system.md`.

## Design System Principles Applied

### Key Guidelines
1. **Slot names use camelCase** (e.g., `leftTop`, `columnHeader`)
2. **HTML data attributes use kebab-case** (e.g., `data-part="left-top"`)
3. **Follow standard categories**:
   - Structural: `base`, `content`, `container`, `wrapper`, `body`, `list`, `item`
   - Interactive: `trigger`, `button`, `item`, `option`
   - Textual: `label`, `title`, `description`, `value`
   - Icon & media: `icon`, `avatar`, `image`, `badge`
   - State: `overlay`, `backdrop`, `indicator`, `separator`

---

## Changes Made

### 1. button-toggle (src/lib/extend/button-toggle/)

#### theme.ts
**Changed:**
- `text` → `label` (more semantic for textual parts)

**Updated slots:**
```typescript
slots: {
  button: "...",
  content: "...",
  label: "...",  // was: text
  icon: "..."
}

variants: {
  selected: {
    true: {
      label: "ml-5"  // was: text
    }
  }
}
```

#### ButtonToggle.svelte
**Updated destructuring:**
```typescript
const { button, content, label, icon } = $derived(buttonToggle(...));
```

**Updated usage:**
```svelte
<span class={label({ selected, class: clsx(theme?.label, styling?.label) })}>
```

---

### 2. clipboard-manager (src/lib/extend/clipboard-manager/)

#### theme.ts
**Changed:**
1. `emptyText` → `emptyMessage` (more semantic)
2. `emptySubtext` → `emptyDescription` (aligns with design system's "description" pattern)
3. `addToClipboard` → `addButton` (consistency with other button names)
4. `clearAll` → `clearButton` (consistency with other button names)

**Updated slots:**
```typescript
slots: {
  // ... other slots ...
  emptyMessage: "...",      // was: emptyText
  emptyDescription: "...",  // was: emptySubtext
  addButton: "...",         // was: addToClipboard
  clearButton: "...",       // was: clearAll
  // ... other slots ...
}
```

#### ClipboardManager.svelte
**Updated all occurrences:**
- `styles.addToClipboard()` → `styles.addButton()`
- `theme?.addToClipboard` → `theme?.addButton`
- `classes?.addToClipboard` → `classes?.addButton`
- `styles.clearAll()` → `styles.clearButton()`
- `theme?.clearAll` → `theme?.clearButton`
- `classes?.clearAll` → `classes?.clearButton`
- `styles.emptyText()` → `styles.emptyMessage()`
- `theme?.emptyText` → `theme?.emptyMessage`
- `classes?.emptyText` → `classes?.emptyMessage`
- `styles.emptySubtext()` → `styles.emptyDescription()`
- `theme?.emptySubtext` → `theme?.emptyDescription`
- `classes?.emptySubtext` → `classes?.emptyDescription`

---

### 3. command-palette (src/lib/extend/command-palette/)

#### theme.ts
**Changed:**
- `empty` → `emptyState` (matches design system pattern)

**Updated slots:**
```typescript
slots: {
  base: "...",
  search: "...",
  list: "...",
  item: "...",
  itemDescription: "...",
  emptyState: "...",  // was: empty
  footer: "...",
  kbd: "..."
}
```

#### CommandPalette.svelte
**Updated usage:**
```svelte
<div class={styles.emptyState({ class: clsx(theme?.emptyState, classes?.emptyState) })}>
```

---

## Rationale for Each Change

### button-toggle
- **`text` → `label`**: The design system categorizes this as a textual part, and "label" is the standard name for visible text labels, making it more semantic and consistent with other components.

### clipboard-manager
- **`emptyText` → `emptyMessage`**: "message" is more semantic and clearer about the purpose (conveying information).
- **`emptySubtext` → `emptyDescription`**: Aligns with design system's pattern for supporting text. "description" is the standard term across components.
- **`addToClipboard` → `addButton`**: Creates consistency with other button slot names (`actionButton`, `pinButton`, `deleteButton`). The button's function is clear from context.
- **`clearAll` → `clearButton`**: Same rationale as above - maintains consistent naming pattern for button slots.

### command-palette
- **`empty` → `emptyState`**: The design system specifically mentions "emptyState" as a common pattern. Using the full term makes the purpose clearer and aligns with clipboard-manager's `emptyState` slot.

---

## Type System Impact

No manual type updates required! The type system automatically inherits the slot names from theme.ts through:

```typescript
export type ComponentNameVariants = VariantProps<typeof componentName> & Classes<typeof componentName>;
```

The `Classes` utility type generates the proper TypeScript definitions from the slots object.

---

## Benefits of These Changes

1. **Consistency**: Slot names now follow the same semantic patterns across all components
2. **Clarity**: Names like `label` and `emptyMessage` are more descriptive of their purpose
3. **Maintainability**: Following design system conventions makes the codebase easier to understand
4. **Extensibility**: Standard naming makes it easier to add new slots that fit the pattern
5. **Documentation**: Slot names align with the documented design system, reducing confusion

---

## Design System Alignment Summary

| Component | Before | After | Design System Category |
|-----------|--------|-------|----------------------|
| ButtonToggle | `text` | `label` | Textual parts |
| ClipboardManager | `emptyText` | `emptyMessage` | Textual parts |
| ClipboardManager | `emptySubtext` | `emptyDescription` | Textual parts (supporting) |
| ClipboardManager | `addToClipboard` | `addButton` | Interactive parts |
| ClipboardManager | `clearAll` | `clearButton` | Interactive parts |
| CommandPalette | `empty` | `emptyState` | State / utility parts |

All changes now align with the five most common `data-part` categories defined in the design system.
