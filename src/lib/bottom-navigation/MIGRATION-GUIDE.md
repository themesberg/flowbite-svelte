# BottomNavItem Class Migration Summary

## Key Insights

### 1. The `Classes<T>` Type Intentionally Omits "base"

The `Classes` utility type in `themeUtils.ts` is defined as:

```typescript
type Slots<T extends { slots: Record<string, unknown> }> = Omit<T["slots"], "base">;
export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};
```

This means:
- **`class` prop** = for the base element (button/anchor)
- **`classes` prop** = for all other slots (span, inner, etc.)

### 2. BottomNavItemVariants Already Includes Classes

Since `BottomNavItemVariants` extends `Classes<typeof bottomNavItem>`, you don't need to manually add:
```typescript
classes?: Partial<{
  base?: ClassValue;
  span?: ClassValue;
}>;
```

It's already provided! And it will only have `span`, not `base`.

### 3. Recommended Type Updates

```typescript
// In types.ts

export type BottomNavItemProps = BottomNavItemVariants &
  AnchorButtonAttributes & {
    children: Snippet;
    btnName?: string;
    activeClass?: ClassValue;
    /** @deprecated Use `class` prop instead */
    btnClass?: ClassValue;
    /** @deprecated Use `classes.span` instead */
    spanClass?: ClassValue;
    active?: boolean;
    // No need to add classes - it's already in BottomNavItemVariants!
  };

export interface BottomNavContextType {
  activeClass?: string | null;
  activeUrl?: string;
  navType?: BottomNavVariants["navType"];
  classes?: Partial<{
    span?: ClassValue; // Only non-base slots
  }>;
}
```

### 4. Component Implementation

```svelte
<script lang="ts">
  let { 
    children, 
    btnName, 
    appBtnPosition = "middle", 
    activeClass, 
    class: className, 
    classes,  // From BottomNavItemVariants, only has { span?: ClassValue }
    active: manualActive,
    btnClass,  // Deprecated
    spanClass, // Deprecated
    ...restProps 
  }: BottomNavItemProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("bottomNavItem"));
  const context = getBottomNavContext();

  function getCommonClass() {
    // For base element: theme -> className (or btnClass for backwards compat)
    return base({ 
      class: clsx(
        theme?.base,
        className ?? btnClass, // btnClass is fallback for backwards compatibility
        isActive && (activeClass ?? context?.activeClass)
      ) 
    });
  }

  function getSpanClass() {
    // For span element: theme -> context -> classes.span (or spanClass for backwards compat)
    return span({ 
      class: clsx(
        theme?.span,
        context?.classes?.span,
        styling?.span ?? spanClass, // spanClass is fallback for backwards compatibility
        isActive && (activeClass ?? context?.activeClass)
      ) 
    });
  }
</script>
```

## Migration Path for Users

### Old Way (Deprecated)
```svelte
<BottomNavItem btnClass="custom-btn" spanClass="custom-span" />
```

### New Way
```svelte
<BottomNavItem class="custom-btn" classes={{ span: "custom-span" }} />
```

## Answers to Your Questions

### Q: Do we need to add `classes` to BottomNavItemProps?
**A: No!** It's already included via `BottomNavItemVariants` which extends `Classes<typeof bottomNavItem>`.

### Q: Should we move btnClass and spanClass to classes?
**A: Yes, but gradually:**
1. Mark `btnClass` and `spanClass` as deprecated
2. Support both old and new props for backwards compatibility
3. In a future major version, remove the deprecated props

### Q: Should activeClass be in classes?
**A: No.** `activeClass` is about **state** (active/inactive), not structure. It should remain a separate prop because:
- It's applied conditionally based on active state
- It's conceptually different from structural styling
- It may apply to multiple elements (button + span)

### Q: What about context.classes.base?
**A: Remove it.** The context should only pass non-base classes. The base element should be styled via:
1. Theme classes
2. Component's `class` prop
3. Context doesn't pass base classes to items

## Final Type Definitions

```typescript
// Only non-base slots in context
export interface BottomNavContextType {
  activeClass?: string | null;
  activeUrl?: string;
  navType?: BottomNavVariants["navType"];
  classes?: Partial<{
    span?: ClassValue;
  }>;
}

// No manual classes definition needed
export type BottomNavItemProps = BottomNavItemVariants &
  AnchorButtonAttributes & {
    children: Snippet;
    btnName?: string;
    activeClass?: ClassValue;
    /** @deprecated Use `class` prop instead */
    btnClass?: ClassValue;
    /** @deprecated Use `classes.span` instead */
    spanClass?: ClassValue;
    active?: boolean;
  };
```
