---
layout: componentLayout
breadcrumb_title: ThemeSelector - Flowbite Svelte
title: ThemeSelector - Flowbite Svelte
component_title: ThemeSelector
dir: Pages
description: The ThemeSelector component provides an interactive dropdown interface for users to switch between different visual themes in your Flowbite Svelte application. It includes built-in support for multiple theme variants with different fonts, colors, and styling options.
---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, LlmLink } from '../../utils';
  import { A, P, Heading } from '$lib';
</script>

## Overview

The ThemeSelector component allows users to dynamically switch between different visual themes in your application. It comes with five pre-configured themes: Default, Minimal, Enterprise, Playful, and Mono. Each theme includes unique font families, color palettes, and styling variations.

## Features

- **5 Built-in Themes**: Default, Minimal, Enterprise, Playful, and Mono
- **Visual Preview**: Color swatches show each theme's palette at a glance
- **Persistent Selection**: Chosen theme is saved to localStorage
- **Smooth Transitions**: Themes load seamlessly without page reload
- **Font Integration**: Each theme includes its own Google Font
- **Reactive State**: Theme changes update all components automatically

## Basic Usage

Simply import and add the ThemeSelector component to your layout:

```svelte example hideOutput
<script lang="ts">
  import { ThemeSelector } from "flowbite-svelte";
</script>

<ThemeSelector />
```

The component will render a button with a palette icon and the current theme name. Clicking it reveals a dropdown with all available themes.

## Installation & Setup

### 1. Theme CSS Files

First, ensure your theme CSS files are available in your `static/themes` directory. Each theme should have its runtime CSS file:

```text
static/
  └── themes/
      ├── default-runtime.css
      ├── minimal-runtime.css
      ├── enterprise-runtime.css
      ├── playful-runtime.css
      └── mono-runtime.css
```

### 2. Component Import

Import the ThemeSelector component where you want it to appear (typically in your main layout):

```svelte
<script>
  import { ThemeSelector } from "flowbite-svelte";
</script>

<ThemeSelector />
```

### 3. Initial Theme Loading

The component automatically loads the saved theme from localStorage when mounted. If no theme is saved, it defaults to the "Default" theme.

## Built-in Themes

### Default Theme
- **Font**: Inter
- **Colors**: Gray and Blue palette
- **Style**: Clean and modern
- **Best for**: General-purpose applications

### Minimal Theme
- **Font**: Open Sans
- **Colors**: Stone tones
- **Style**: Simple and understated
- **Best for**: Content-focused applications

### Enterprise Theme
- **Font**: STIX Two Text
- **Colors**: Zinc and Cyan
- **Style**: Professional and formal
- **Best for**: Business applications

### Playful Theme
- **Font**: Shantell Sans
- **Colors**: Slate and Pink
- **Style**: Fun and energetic
- **Best for**: Creative applications

### Mono Theme
- **Font**: Google Sans Code
- **Colors**: Neutral and Indigo
- **Style**: Technical and precise
- **Best for**: Developer tools and documentation

## Programmatic Theme Control

You can programmatically change themes using the exported store functions:

```svelte
<script>
  import { loadTheme, getCurrentTheme, getSelectedTheme } from "flowbite-svelte";
  
  // Load a specific theme
  function switchToMinimal() {
    loadTheme("minimal");
  }
  
  // Get current theme ID
  const currentThemeId = getCurrentTheme(); // "default", "minimal", etc.
  
  // Get full theme object
  const themeObject = getSelectedTheme();
  // { id: "default", name: "Default", cssPath: "...", fontUrl: "...", colors: [...] }
</script>

<button onclick={switchToMinimal}>
  Switch to Minimal
</button>

<p>Current theme: {currentThemeId}</p>
```

## Custom Placement

The ThemeSelector can be placed anywhere in your application. Common placements include:

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
  <Heading tag="h3">Appearance Settings</Heading>
  <div class="space-y-4">
    <div>
      <label class="block mb-2">Theme</label>
      <ThemeSelector />
    </div>
  </div>
</Card>
```

## Theme Store API

### Functions

#### `loadTheme(themeId: ThemeId): void`

Loads and applies a theme by its ID.

```typescript
loadTheme("minimal"); // Loads the Minimal theme
```

**Parameters:**
- `themeId`: One of `"default"`, `"minimal"`, `"enterprise"`, `"playful"`, or `"mono"`

#### `getCurrentTheme(): string`

Returns the currently active theme ID.

```typescript
const current = getCurrentTheme(); // "default"
```

**Returns:** The theme ID as a string

#### `getSelectedTheme(): FlowbiteTheme | undefined`

Returns the full theme object for the current theme.

```typescript
const theme = getSelectedTheme();
// {
//   id: "default",
//   name: "Default",
//   cssPath: "/themes/default-runtime.css",
//   fontUrl: "https://fonts.googleapis.com/...",
//   colors: ["bg-gray-100", "bg-blue-50", ...]
// }
```

**Returns:** The theme configuration object or `undefined`

### Types

#### `FlowbiteTheme`

```typescript
interface FlowbiteTheme {
  id: ThemeId;
  name: string;
  cssPath: string;
  fontUrl: string;
  colors: string[];
}
```

#### `ThemeId`

```typescript
type ThemeId = "default" | "minimal" | "enterprise" | "playful" | "mono";
```

## Custom Themes

To add your own custom themes, you'll need to:

1. **Create theme configuration** in `themes.ts`:

```typescript
import type { FlowbiteTheme } from "flowbite-svelte";

export const customTheme: FlowbiteTheme = {
  id: "custom",
  name: "My Custom Theme",
  cssPath: "/themes/custom-runtime.css",
  fontUrl: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  colors: [
    "bg-purple-100",
    "bg-purple-300",
    "bg-purple-500",
    "bg-purple-700"
  ]
};
```

2. **Add to theme configs** array in the library source
3. **Create corresponding CSS file** in `static/themes/`

## Styling Customization

The ThemeSelector component uses Tailwind CSS classes and can be customized using the theme system:

```typescript
// In theme.ts
export const themeSelector = tv({
  slots: {
    button: "gap-2 rounded-sm ...",
    dropdown: "w-52 px-2",
    item: "mb-1 inline-flex ...",
    // ... more slots
  }
});
```

You can override these styles using the `class` prop or through the ThemeProvider.

## Browser Support

The ThemeSelector component uses:
- **localStorage**: For persisting theme selection
- **Dynamic link injection**: For loading theme CSS and fonts
- **Modern JavaScript**: ES6+ features

Supported browsers:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## Accessibility

The component includes proper ARIA attributes:

- `aria-label="Select Theme"` on the toggle button
- `aria-haspopup="true"` to indicate dropdown behavior
- `aria-expanded` updates based on dropdown state
- Keyboard navigation support through dropdown items

## Best Practices

1. **Place early in layout**: Add ThemeSelector to your main layout for consistency
2. **Combine with DarkMode**: Use alongside the DarkMode component for complete appearance control
3. **Test theme compatibility**: Ensure custom components work with all themes
4. **Provide fallbacks**: Design components to work even if theme CSS fails to load
5. **Consider performance**: Theme CSS files are loaded on-demand, not all upfront

## Common Patterns

### Theme with DarkMode

```svelte example hideOutput
<script>
  import { DarkMode, ThemeSelector } from "flowbite-svelte";
</script>

<div class="flex items-center gap-2">
  <DarkMode />
  <ThemeSelector />
</div>
```

### Theme Selector in Sidebar

```svelte example hideOutput
<script>
  import { Sidebar, SidebarGroup, SidebarItem, ThemeSelector } from "flowbite-svelte";
</script>

<Sidebar>
  <SidebarGroup>
    <SidebarItem label="Home" />
    <SidebarItem label="Settings" />
  </SidebarGroup>
  <div class="p-4 border-t">
    <ThemeSelector />
  </div>
</Sidebar>
```

### Conditional Theme Loading

```svelte example hideOutput
<script>
  import { ThemeSelector, getCurrentTheme } from "flowbite-svelte";
  import { onMount } from "svelte";
  
  let currentTheme = $state("");
  
  onMount(() => {
    currentTheme = getCurrentTheme();
  });
</script>

{#if currentTheme === "enterprise"}
  <div class="enterprise-specific-feature">
    Enterprise features enabled
  </div>
{/if}

<ThemeSelector />
```

## Troubleshooting

### Theme doesn't load on first visit

Make sure the initial theme CSS is loaded in your app's main CSS file or that your theme files are accessible in the `static/themes` directory.

### Theme persists across sessions unexpectedly

This is expected behavior. The component uses localStorage to remember the user's preference. Clear localStorage if you want to reset:

```javascript
localStorage.removeItem("flowbite-svelte-theme");
```

### Font doesn't change

Verify that:
1. Google Fonts URL is accessible
2. Font is properly loaded (check Network tab)
3. Browser supports the font format

### Custom theme not showing

Ensure:
1. Theme CSS file exists in `static/themes/`
2. Path in theme config is correct
3. Theme is added to the `themeConfigs` array

## Related Components

- <A href="/docs/components/darkmode">DarkMode</A> - Toggle between light and dark mode
- <A href="/docs/pages/theme-provider">ThemeProvider</A> - Advanced component-level theming
- <A href="/docs/pages/customization">Customization</A> - Learn about customizing Flowbite Svelte

## LLM Link

<LlmLink />
