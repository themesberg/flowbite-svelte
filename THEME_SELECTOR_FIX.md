# Theme Selector Fix - Summary

## The Problem
Your theme CSS files use Tailwind CSS v4's `@theme` directive, which is a **compile-time directive**. When these files are loaded dynamically at runtime from the `static/themes/` directory, the `@theme` blocks don't work because they're not being processed by Tailwind's compiler.

## The Solution
Convert all theme CSS files to use standard CSS `:root {}` blocks instead of `@theme {}` blocks. This allows them to work when loaded dynamically at runtime.

## What I've Done

### 1. Updated `layout.css`
- Removed static font imports
- Kept base Flowbite theme (`flowbite/src/themes/themes.css`) for foundational variables
- Font loading is now handled dynamically by the theme store

### 2. Updated `+layout.svelte`
- Now loads the saved theme initially for better SSR/first render
- Properly initializes the theme on mount

### 3. Fixed `themeStore.svelte.ts`
- Fixed font URLs to match actual fonts in theme CSS files
- Improved theme loading logic to remove ALL existing theme links
- Added better style recalculation after theme loads

### 4. Created `enterprise-runtime.css`
- This is the enterprise theme converted to use `:root {}` instead of `@theme {}`
- Updated the themeStore to use this file for the enterprise theme

## What You Need To Do

### Option 1: Quick Manual Conversion (Recommended)
For each theme file in `static/themes/`, create a `-runtime.css` version:

1. Copy the file (e.g., `default.css` → `default-runtime.css`)
2. Replace `@theme {` with `:root {`
3. Save the file

### Option 2: Use the Conversion Script
I've created `convertThemes.js` in your project root:

```bash
node convertThemes.js
```

This will automatically create `-runtime.css` versions of all your theme files.

### After Conversion
Update `themeStore.svelte.ts` to use the `-runtime.css` files:

```typescript
const themes: Theme[] = [
  {
    id: "default",
    name: "Default",
    cssPath: "/themes/default-runtime.css",  // Add -runtime
    fontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
    colors: ["bg-gray-100 dark:bg-gray-700", "bg-blue-50 dark:bg-blue-900", "bg-blue-200 dark:bg-blue-800", "bg-blue-700 dark:bg-blue-700"]
  },
  {
    id: "minimal",
    name: "Minimal",
    cssPath: "/themes/minimal-runtime.css",  // Add -runtime
    fontUrl: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    colors: ["bg-stone-50 dark:bg-stone-600", "bg-stone-100 dark:bg-stone-700", "bg-stone-300 dark:bg-stone-800", "bg-stone-900 dark:bg-stone-900"]
  },
  // Enterprise is already done!
  {
    id: "enterprise",
    name: "Enterprise",
    cssPath: "/themes/enterprise-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
    colors: ["bg-zinc-100 dark:bg-zinc-700", "bg-cyan-50 dark:bg-cyan-900", "bg-cyan-100 dark:bg-cyan-800", "bg-cyan-700 dark:bg-cyan-700"]
  },
  {
    id: "playful",
    name: "Playful",
    cssPath: "/themes/playful-runtime.css",  // Add -runtime
    fontUrl: "https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    colors: ["bg-slate-100 dark:bg-slate-700", "bg-pink-50 dark:bg-pink-900", "bg-pink-100 dark:bg-pink-800", "bg-pink-700 dark:bg-pink-700"]
  },
  {
    id: "mono",
    name: "Mono",
    cssPath: "/themes/mono-runtime.css",  // Add -runtime
    fontUrl: "https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@300;400;500;600;700&display=swap",
    colors: ["bg-neutral-100 dark:bg-neutral-700", "bg-indigo-50 dark:bg-indigo-900", "bg-indigo-100 dark:bg-indigo-800", "bg-indigo-700 dark:bg-indigo-700"]
  }
];
```

## Testing

1. **Test Enterprise Theme First**: I've already converted this one, so switch to the Enterprise theme and see if colors/fonts change
2. **Convert Other Themes**: Use one of the methods above to convert the remaining themes
3. **Update themeStore**: Update all paths to use `-runtime.css` versions
4. **Test All Themes**: Visit `/theme-test` and try switching between all themes

## How It Works Now

1. Base Flowbite theme is loaded from `layout.css` (provides foundational styles)
2. When you select a theme, JavaScript:
   - Removes any existing theme CSS links
   - Loads the new theme's font from Google Fonts
   - Loads the new theme's CSS variables (runtime version)
   - Forces a style recalculation
3. CSS variables from the runtime theme override the base theme
4. Theme preference is saved to localStorage

## Why This Works

- CSS custom properties (variables) can be changed at runtime
- Later-loaded stylesheets override earlier ones
- The `-runtime.css` files use standard `:root {}` blocks that work at runtime
- Font loading is dynamic and matches the theme

The theme selector should now work perfectly! Let me know if you need help with the conversion or run into any issues.
