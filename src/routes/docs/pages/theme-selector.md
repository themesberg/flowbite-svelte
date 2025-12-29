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
  }
  
  // Get current theme ID
  let currentTheme = $state("");
  $effect(() => {
    currentTheme = getCurrentTheme(); // "default", "minimal", etc.
  });
  
  // Get full theme object
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

## API Reference

### Functions

**`loadTheme(themeId: ThemeId): void`**

Loads and applies a theme by ID.

```typescript
loadTheme("minimal");
```

**`getCurrentTheme(): string`**

Returns the active theme ID.

```typescript
const current = getCurrentTheme(); // "default"
```

**`getSelectedTheme(): FlowbiteTheme | undefined`**

Returns the full theme configuration object.

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

## Creating Custom Themes

To add custom themes, modify the library's `themes.ts` file:

```typescript
// Import your CSS file as a URL
import customCss from './themes/custom-runtime.css?url';

export const themeConfigs = [
  // ... existing themes
  {
    id: "custom",
    name: "My Custom Theme",
    cssPath: customCss, // Vite handles the URL
    fontUrl: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    colors: [
      "bg-purple-100 dark:bg-purple-700",
      "bg-purple-300 dark:bg-purple-800",
      "bg-purple-500 dark:bg-purple-600",
      "bg-purple-700 dark:bg-purple-500"
    ]
  }
] as const;
```

The `?url` import suffix tells Vite to process the CSS file and return a proper URL. Your CSS files stay in the library's source directory—no need for users to copy files to a `static` folder.

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
