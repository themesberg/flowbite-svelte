# Version 2 Migration Guide

## transition and transitionParams

v2 introduced breaking prop renames
- transitionType → transition 
- params → transitionParams

### Affected Components 
- Accordion 
- Alert 
- Avatar
- Badge 
- Banner
- Popover
- Sidebar
- SidebarDropdownWrapper
- Toast

### Migration Example

**Before (v1):**
```svelte
<Accordion transitionType={slide} />
<Toast params={{ duration: 300 }} />
```

**After (v2):**
```svelte
<Accordion transition={slide} />
<Toast transitionParams={{ duration: 300 }} />
```

## Order of styling 
The component classes have the highest precedence.

Theme provider -> context classes (if exists) -> classes


## Tags

The legacy `forms/tags` Tags component is removed. `flowbite-svelte/Tags.svelte` now resolves to the `extend/tags` component.

The per-part class props and `closeBtnSize` are no longer read. Use `classes` slots and `closeButtonProps` instead.

| Before (v1) | After (v2) |
| --- | --- |
| `itemClass` | `classes={{ item: "..." }}` |
| `spanClass` | `classes={{ label: "..." }} ` |
| `closeClass` | `classes={{ close: "..." }}` |
| `inputClass` | `classes={{ input: "..." }}` |
| `closeBtnSize="xs"` | `closeButtonProps={{ size: "xs" }}` |

**Before (v1):**
```svelte
<Tags bind:value itemClass="bg-blue-100" closeBtnSize="sm" />
```

**After (v2):**
```svelte
<Tags bind:value classes={{ item: "bg-blue-100" }} closeButtonProps={{ size: "sm" }} />
```

Default styles also changed (wrapper layout, item and input spacing, new `inputWrapper`, `option` and `list` slots for the suggestion dropdown), so check the look after upgrading.
