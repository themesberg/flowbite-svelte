# ThemeProvider - Flowbite Svelte


## How It Works

ThemeProvider uses Svelte's context API to pass theme configurations to child components. The theme is reactive - when you change the `theme` prop, all child components automatically re-render with the new theme values.

## Basic Usage

Wrap your components with ThemeProvider and pass a theme configuration object:

```svelte
<script lang="ts">
  import { ThemeProvider, Button, Card } from "flowbite-svelte";

  const theme = {
    button: {
      base: "w-48 bg-purple-500"
    },
    card: {
      base: "bg-red-200 w-72"
    }
  };
</script>

<ThemeProvider {theme}>
  <Button>Themed Button</Button>
  <Card href="/cards" class="my-4 p-4 sm:p-6 md:p-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
    <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </Card>
</ThemeProvider>
```

## Theme Configuration

The theme configuration object allows you to customize individual components. Each component key corresponds to a Flowbite-Svelte component, and the value defines the styling overrides.

## Component Theme Structure

Different components have different theme structures. Here are some examples:

### Simple String Themes

Some components accept a simple string for their theme:

```js
const theme = {
  accordion: "w-96 text-green-500",
  alert: "bg-green-500 text-white",
  avatar: "bg-blue-50 text-green-700"
};
```

### Object-Based Themes

More complex components use object-based themes with multiple properties:

```js
const theme = {
  button: {
    base: "w-48",
    outline: "border-2 border-purple-500",
    shadow: "shadow-lg"
  },
  card: {
    base: "bg-red-50 w-72",
    image: "rounded-t-lg"
  },
  badge: {
    base: "bg-purple-400 text-white"
  }
};
```

## Naming Convention

The ThemeProvider follows a consistent naming convention for theme objects and types:

### Theme Object Names

Theme object names use the component name with the first letter in lowercase:

```md
Accordion.svelte → accordion
AccordionItem.svelte → accordionItem
BottomNav.svelte → bottomNav
BottomNavItem.svelte → bottomNavItem
BreadcrumbItem.svelte → breadcrumbItem
ButtonGroup.svelte → buttonGroup
GradientButton.svelte → gradientButton
```

### Type Names

Type names use the component name followed by "Theme":

```md
Accordion.svelte → AccordionTheme
AccordionItem.svelte → AccordionItemTheme
BottomNav.svelte → BottomNavTheme
BottomNavItem.svelte → BottomNavItemTheme
BreadcrumbItem.svelte → BreadcrumbItemTheme
ButtonGroup.svelte → ButtonGroupTheme
GradientButton.svelte → GradientButtonTheme
```

## Theme Types

Import and use the specific theme types for better development experience and error catching.

```js
import type {
  ThemeConfig,
  AccordionTheme,
  ButtonTheme,
  CardTheme.
  // ...
} from "flowbite-svelte";
```

## Nested ThemeProvider and Component Classes

You can nest ThemeProvider components to apply different themes to different sections of your application. Child ThemeProviders will override the parent themes for their specific scope.

Component classes, when defined directly on a component, will always take precedence over any styles provided by ThemeProviders, whether from parent or nested providers. This allows for granular control and specific styling adjustments at the component level, even when a global or scoped theme is in effect.

```svelte
<script lang="ts">
  import { ThemeProvider, Card, Heading, P } from "flowbite-svelte";

  const theme1a = {
    card: {
      base: "bg-blue-50 border-blue-200 p-4"
    },
    heading: "text-3xl text-blue-500",
    p: "text-blue-500 text-lg"
  };

  const theme1b = {
    heading: "text-lg text-purple-600 font-bold"
  };

  const theme1c = {
    p: "text-gray-600 italic text-md"
  };
</script>

<ThemeProvider theme={theme1a}>
  <Heading tag="h1">Blue Heading</Heading>
  <P>Card example</P>
  <Card href="/cards">
    <ThemeProvider theme={theme1b}>
      <Heading tag="h2">Purple Heading</Heading>
      <Heading tag="h3" class="text-green-400">Green heading</Heading>
    </ThemeProvider>
    <ThemeProvider theme={theme1c}>
      <P>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</P>
    </ThemeProvider>
  </Card>
</ThemeProvider>
```

This allows for granular control over theming in different parts of your component tree.

## Reactive Theme

```svelte
<script lang="ts">
  import { ThemeProvider, Button, Card, Alert } from "flowbite-svelte";

  type ThemeColor = "purple" | "green" | "blue" | "red";

  let selectedColor = $state<ThemeColor>("purple");
  let buttonWidth = $state("w-48");

  // Make themes a derived value so it reacts to buttonWidth changes
  const themes = $derived({
    purple: {
      button: { base: `${buttonWidth} bg-purple-500 hover:bg-purple-600` },
      card: { base: "bg-purple-100 w-72" }
    },
    green: {
      button: { base: `${buttonWidth} bg-green-500 hover:bg-green-600` },
      card: { base: "bg-green-100 w-72" }
    },
    blue: {
      button: { base: `${buttonWidth} bg-blue-500 hover:bg-blue-600` },
      card: { base: "bg-blue-100 w-72" }
    },
    red: {
      button: { base: `${buttonWidth} bg-red-500 hover:bg-red-600` },
      card: { base: "bg-red-100 w-72" }
    }
  });

  const currentTheme = $derived(themes[selectedColor]);

  const colors: ThemeColor[] = ["purple", "green", "blue", "red"];
  const colorClasses: Record<ThemeColor, string> = {
    purple: "bg-purple-700",
    green: "bg-green-700",
    blue: "bg-blue-700",
    red: "bg-red-700"
  };

  const widthOptions = ["w-32", "w-48", "w-64"] as const;
  const widthLabels: Record<string, string> = {
    "w-32": "Small (w-32)",
    "w-48": "Medium (w-48)",
    "w-64": "Large (w-64)"
  };
</script>

<div class="mx-auto max-w-4xl p-8">
  <h1 class="mb-6 text-3xl font-bold">ThemeProvider Reactivity Test</h1>

  <Alert class="mb-6">
    <span class="font-medium">Testing Instructions:</span>
    <ul class="mt-2 list-inside list-disc">
      <li>Click different color buttons to change the theme</li>
      <li>Toggle button width to see reactive updates</li>
      <li>Both button and card should update immediately</li>
    </ul>
  </Alert>

  <div class="mb-6 space-y-4">
    <div>
      <p class="mb-2 text-sm font-semibold">Color Theme:</p>
      <div class="flex flex-wrap gap-2">
        {#each colors as color}
          <button
            class="rounded px-4 py-2 capitalize transition-colors {selectedColor === color ? `${colorClasses[color]} text-white` : 'bg-gray-200 hover:bg-gray-300'}"
            onclick={() => (selectedColor = color)}
          >
            {color}
          </button>
        {/each}
      </div>
    </div>

    <div>
      <p class="mb-2 text-sm font-semibold">Button Width:</p>
      <div class="flex gap-2">
        {#each widthOptions as width}
          <button class="rounded px-4 py-2 {buttonWidth === width ? 'bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300'}" onclick={() => (buttonWidth = width)}>
            {widthLabels[width]}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <div class="mb-4 rounded border bg-gray-50 p-4">
    <p class="text-sm">
      <strong>Current State:</strong>
      <br />
      Color:
      <span class="font-mono text-blue-600">{selectedColor}</span>
      <br />
      Button Width:
      <span class="font-mono text-blue-600">{buttonWidth}</span>
    </p>
  </div>

  <ThemeProvider theme={currentTheme}>
    <div class="space-y-6">
      <div>
        <h3 class="mb-2 text-lg font-semibold">Themed Button:</h3>
        <Button>Click Me!</Button>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-semibold">Themed Card:</h3>
        <Card class="p-6">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reactive Theme Card</h5>
          <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">
            This card's background should change reactively when you select different color themes above. The button should also update its color and width based on your selections.
          </p>
          <p class="mt-4 text-sm text-gray-600">If you see the colors and sizes changing instantly, the ThemeProvider reactivity is working correctly! 🎉</p>
        </Card>
      </div>
    </div>
  </ThemeProvider>
</div>
```

## Notes

- The theme configuration is passed through Svelte's context system, making it available to all child components.
- Each component will fall back to its default styling if no theme is provided for that specific component.
- Theme configurations are merged with default component styles, allowing for partial customization.
- Use nested ThemeProviders for section-specific styling while maintaining global themes.

## Dynamic Theme Switching

Theme changes are reactive. Simply update the `theme` prop and components will automatically re-render:

```svelte
<script>
  let isDark = $state(false);
  
  const lightTheme = {
    button: { base: "bg-blue-500" },
    card: { base: "bg-white" }
  };
  
  const darkTheme = {
    button: { base: "bg-gray-700" },
    card: { base: "bg-gray-800" }
  };
  
  let currentTheme = $derived(isDark ? darkTheme : lightTheme);
</script>

<button onclick={() => isDark = !isDark}>
  Toggle Theme
</button>

<ThemeProvider theme={currentTheme}>
  <Button>Themed Button</Button>
  <Card>Themed Card</Card>
</ThemeProvider>
```

Components inside ThemeProvider will automatically update when `currentTheme` changes.
