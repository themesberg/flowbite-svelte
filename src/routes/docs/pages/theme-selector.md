---
layout: componentLayout
breadcrumb_title: ThemeSelector - Flowbite Svelte
title: ThemeSelector - Flowbite Svelte
component_title: ThemeSelector
dir: Pages
description: An interactive dropdown component that lets users switch between different visual themes in your Flowbite Svelte application. Includes five pre-configured themes with unique fonts and color palettes.
---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, LlmLink } from '../../utils';
  import { A, P, Heading } from '$lib';
</script>

## Overview

The ThemeSelector component provides dynamic theme switching with five built-in themes: Default, Minimal, Enterprise, Playful, and Mono. Each theme includes unique typography, color palettes, and styling that persists across sessions.

## Basic Usage

Import and add the component to your layout:

```svelte example hideOutput
<script lang="ts">
  import { ThemeSelector } from "flowbite-svelte";
</script>

<ThemeSelector />
```

The component automatically loads the saved theme from localStorage and defaults to the Default theme on first visit.

## Built-in Themes

| Theme          | Font             | Colors           | Best For              |
| -------------- | ---------------- | ---------------- | --------------------- |
| **Default**    | Inter            | Gray & Blue      | General applications  |
| **Minimal**    | Open Sans        | Stone tones      | Content-focused apps  |
| **Enterprise** | STIX Two Text    | Zinc & Cyan      | Business applications |
| **Playful**    | Shantell Sans    | Slate & Pink     | Creative applications |
| **Mono**       | Google Sans Code | Neutral & Indigo | Developer tools       |

## Programmatic Control

Control themes programmatically using the exported functions:

```svelte
<script>
  import { loadTheme, getCurrentTheme, getSelectedTheme } from "flowbite-svelte";
  
  // Switch to a specific theme
  function switchTheme() {
    loadTheme("minimal");
    currentTheme = getCurrentTheme();
  }

  // Switch to a custom/static theme (second arg must be true)
  function switchCustomTheme() {
    loadTheme("mytheme", true);
    currentTheme = getCurrentTheme();
  }
  
  // Get current theme ID
  let currentTheme = $state(getCurrentTheme()); // "default", "minimal", etc.
  
  // Get full theme object (only defined for built-in themes)
  const theme = getSelectedTheme();
  // { id: "default", name: "Default", cssPath: "...", fontUrl: "...", colors: [...] }
</script>

<button onclick={switchTheme}>Switch to Minimal</button>
<p>Current: {currentTheme}</p>
```

## Common Placements

### Navigation Bar

```svelte example hideOutput
<script>
  import { Navbar, NavBrand, NavUl, NavLi, DarkMode, ThemeSelector } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">My App</NavBrand>
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
  <div class="flex items-center gap-2">
    <DarkMode />
    <ThemeSelector />
  </div>
</Navbar>
```

### Settings Panel

```svelte example hideOutput
<script>
  import { Card, Heading, ThemeSelector } from "flowbite-svelte";
</script>

<Card>
  <Heading tag="h3">Appearance</Heading>
  <div class="space-y-4">
    <div>
      <p class="block mb-2">Theme</p>
      <ThemeSelector />
    </div>
  </div>
</Card>
```

## Creating Custom Themes

You can add custom themes without modifying the library by placing CSS files in your project's `static/themes/` directory and listing them in a manifest.

### 1. Add a theme CSS file

Create a runtime theme file in `static/themes/` using `:root` for light mode and `.dark` for dark mode overrides. Keep this separate from the library `src/lib/theme-selector/themes/*.css` files, which are for build-time theme registration.

```css
/* static/themes/mytheme.css */
:root {
  --color-brand: var(--color-green-700);
  --color-brand-soft: var(--color-green-100);
  /* ... other token overrides ... */
}

.dark {
  --color-brand: var(--color-green-600);
  /* ... dark mode overrides ... */
}
```

### 2. Add a manifest file

Create `static/themes/manifest.json` listing all themes to display in the selector. Every entry in this manifest is loaded at runtime from `static/themes/<id>.css`, including built-in ids like `"default"`. If you include a built-in theme here, copy its runtime CSS into `static/themes/` as well. Custom themes can be objects:

```json
[
  "default",
  "minimal",
  "enterprise",
  "playful",
  "mono",
  {
    "id": "mytheme",
    "colors": [
      "bg-gray-100 dark:bg-gray-700",
      "bg-green-50 dark:bg-green-900",
      "bg-green-200 dark:bg-green-800",
      "bg-green-700 dark:bg-green-700"
    ]
  }
]
```

The four `colors` values are Tailwind utility classes for the four color swatches shown in the dropdown (background → lightest brand → mid brand → strong brand). You can also add an optional `"name"` field to override the auto-capitalized display name.

### 3. Add the component

`loadFromStatic` defaults to `true`, so `ThemeSelector` automatically fetches `/themes/manifest.json` on mount — no extra prop needed:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import { ThemeSelector } from "flowbite-svelte";
</script>

<header>
  <ThemeSelector />
</header>
```

If you want to force the bundled theme list (ignoring the manifest), pass `loadFromStatic={false}`:

```svelte
<ThemeSelector loadFromStatic={false} />
```

In your `src/routes/layout.css` (or equivalent), import a theme CSS file for build-time Tailwind token registration. You have two options:

**Option A — import directly from the library** (no customization, path may vary by project structure):

```css
@import "../../node_modules/flowbite-svelte/src/lib/theme-selector/themes/default.css";
```

**Option B — copy to your project and customize** (recommended if you want to change brand colors):

```css
@import "../../static/styles/mydefault.css";
```

If your manifest includes a built-in theme id, also create `static/themes/<id>.css` for it. Separately, copy the build-time token file from the library as a starting point:

```sh
cp node_modules/flowbite-svelte/src/lib/theme-selector/themes/default.css static/styles/mydefault.css
```

Then edit `static/styles/mydefault.css` to set your own `--color-primary-*` values inside `@theme {}`. This controls what Tailwind utility classes like `bg-primary-500` resolve to at build time.

## API Reference

### Functions

**`loadTheme(themeId: string, loadFromStatic?: boolean): void`**

Loads and applies a theme by ID. When `loadFromStatic` is `true`, loads from `/themes/${themeId}.css`.

```typescript
loadTheme("minimal");
loadTheme("mytheme", true);
```

**`getCurrentTheme(): string`**

Returns the active theme ID.

```typescript
const current = getCurrentTheme(); // "default"
```

**`getSelectedTheme(): FlowbiteTheme | undefined`**

Returns the full theme configuration object. Only defined for built-in themes; returns `undefined` for custom static themes.

```typescript
const theme = getSelectedTheme();
```

### Types

```typescript
type ThemeId = "default" | "minimal" | "enterprise" | "playful" | "mono";

interface FlowbiteTheme {
  id: ThemeId;
  name: string;
  cssPath: string;
  fontUrl: string;
  colors: string[];
}
```

## Accessibility

The component includes proper ARIA attributes and keyboard navigation:

- `aria-label="Select Theme"` on toggle button
- `aria-haspopup="true"` and `aria-expanded` for dropdown state
- Full keyboard navigation support

## Browser Support

Requires modern browsers with localStorage and ES6+ support:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## Best Practices

1. **Place in main layout** for consistent availability across your app
2. **Combine with DarkMode** component for complete appearance control
3. **Test theme compatibility** with your custom components
4. **Clear localStorage** to reset: `localStorage.removeItem("flowbite-svelte-theme")`

## Related Components

- <A href="/docs/components/darkmode">DarkMode</A> - Toggle between light and dark mode
- <A href="/docs/pages/customization">Customization</A> - Learn about customizing Flowbite Svelte

## LLM Link

<LlmLink />
