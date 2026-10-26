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
