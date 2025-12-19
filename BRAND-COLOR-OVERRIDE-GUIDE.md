# Overriding Flowbite Brand Colors with Primary Colors

## What We Did

We overrode all Flowbite's brand-related colors (which default to blue) with your primary colors (orange/fuchsia).

## How It Works

### 1. Light Mode Override

In your `@theme` block in `app.css`, we added:

```css
@theme {
  /* Your existing primary colors */
  --color-primary-50: #fff5f2;
  --color-primary-100: #fff1ee;
  --color-primary-200: #ffe4de;
  /* ... etc */
  
  /* Override Flowbite brand colors with primary colors */
  --color-brand-softer: var(--color-primary-50);
  --color-brand-soft: var(--color-primary-100);
  --color-brand: var(--color-primary-700);
  --color-brand-medium: var(--color-primary-200);
  --color-brand-strong: var(--color-primary-800);

  /* Override brand foreground (text) colors */
  --color-fg-brand-subtle: var(--color-primary-200);
  --color-fg-brand: var(--color-primary-700);
  --color-fg-brand-strong: var(--color-primary-900);

  /* Override brand border colors */
  --color-brand-subtle: var(--color-primary-200);
  --color-brand-light: var(--color-primary-600);
}
```

### 2. Dark Mode Override

In `@layer base`, we added:

```css
.dark {
  --color-brand-softer: var(--color-primary-900);
  --color-brand-soft: var(--color-primary-800);
  --color-brand: var(--color-primary-600);
  --color-brand-medium: var(--color-primary-800);
  --color-brand-strong: var(--color-primary-700);

  --color-fg-brand-subtle: var(--color-primary-200);
  --color-fg-brand: var(--color-primary-500);
  --color-fg-brand-strong: var(--color-primary-400);

  --color-brand-subtle: var(--color-primary-800);
  --color-brand-light: var(--color-primary-600);
}
```

## What This Affects

All Flowbite components that use brand colors will now use your orange/fuchsia primary colors:

### Background Colors
- `bg-brand-softer` → Light orange (#fff5f2)
- `bg-brand-soft` → Lighter orange (#fff1ee)
- `bg-brand` → Main orange (#eb4f27)
- `bg-brand-medium` → Medium orange (#ffe4de)
- `bg-brand-strong` → Dark orange (#cc4522)

### Text Colors
- `text-brand` → Orange text
- `text-fg-brand` → Orange text (semantic)
- `text-fg-brand-subtle` → Light orange text
- `text-fg-brand-strong` → Dark orange text

### Border Colors
- `border-brand` → Orange border
- `border-brand-subtle` → Light orange border
- `ring-brand-subtle` → Orange ring/outline

### Components Affected
- **Buttons** with brand color variants
- **Badges** with brand color
- **Alerts** with brand styling
- **Forms** (focus states use brand color)
- **Links** with brand color
- **Navigation** active states
- **Any component** using `color="brand"` or similar props

## Testing

### Test Your Test Page

Update `/src/routes/testdir/flowbite/+page.svelte` to test brand colors:

```svelte
<h2>Brand Colors (should be orange now!)</h2>
<div class="flex flex-wrap gap-4">
  <div class="h-24 w-24 bg-brand-softer">brand-softer</div>
  <div class="h-24 w-24 bg-brand-soft">brand-soft</div>
  <div class="h-24 w-24 bg-brand text-white">brand</div>
  <div class="h-24 w-24 bg-brand-medium">brand-medium</div>
  <div class="h-24 w-24 bg-brand-strong text-white">brand-strong</div>
</div>

<h2>Brand Text Colors</h2>
<p class="text-fg-brand-subtle text-2xl">Light brand text</p>
<p class="text-fg-brand text-2xl">Normal brand text</p>
<p class="text-fg-brand-strong text-2xl">Strong brand text</p>

<h2>Components with Brand Color</h2>
<Button color="brand">Brand Button</Button>
<Badge color="brand">Brand Badge</Badge>
```

### Test Dark Mode

Toggle dark mode and verify the brand colors adjust appropriately (darker shades in dark mode).

## Color Mapping Reference

### Light Mode
| Flowbite Brand | → | Your Primary | Hex |
|----------------|---|--------------|-----|
| brand-softer | → | primary-50 | #fff5f2 |
| brand-soft | → | primary-100 | #fff1ee |
| brand | → | primary-700 | #eb4f27 |
| brand-medium | → | primary-200 | #ffe4de |
| brand-strong | → | primary-800 | #cc4522 |

### Dark Mode
| Flowbite Brand | → | Your Primary | Hex |
|----------------|---|--------------|-----|
| brand-softer | → | primary-900 | #a5371b |
| brand-soft | → | primary-800 | #cc4522 |
| brand | → | primary-600 | #ef562f |
| brand-medium | → | primary-800 | #cc4522 |
| brand-strong | → | primary-700 | #eb4f27 |

## Why This Works

1. **CSS Variable Override**: By redefining `--color-brand-*` variables in your `@theme`, you override Flowbite's default blue values
2. **Plugin Still Works**: The `plugin-utilities.js` generates utilities that reference these variables
3. **No Component Changes**: All Flowbite components automatically use your new colors
4. **Cascading**: Later `@theme` definitions override earlier ones (yours comes after Flowbite's import)

## Advanced: Multiple Brand Variations

If you want different brand colors in different contexts, you could create classes:

```css
@layer components {
  .brand-primary {
    --color-brand: var(--color-primary-700);
    --color-brand-soft: var(--color-primary-100);
    /* etc */
  }
  
  .brand-secondary {
    --color-brand: var(--color-secondary-700);
    --color-brand-soft: var(--color-secondary-100);
    /* etc */
  }
}
```

Then apply them:

```svelte
<div class="brand-primary">
  <Button color="brand">Primary Brand Button</Button>
</div>

<div class="brand-secondary">
  <Button color="brand">Secondary Brand Button</Button>
</div>
```

## Reverting to Original Blue

If you want to go back to Flowbite's default blue brand colors, simply remove these overrides from your `@theme` and `.dark` sections.

## Summary

✅ **All brand colors now use your orange/fuchsia primary palette**  
✅ **Works in both light and dark mode**  
✅ **No component code changes needed**  
✅ **All existing Flowbite components automatically updated**
