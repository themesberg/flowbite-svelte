# ThemeProvider - Flowbite Svelte


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

## Notes

- If no theme is provided, the component will log a message to the console but won't break functionality.
- The theme configuration is passed through Svelte's context system, making it available to all child components.
- Each component will fall back to its default styling if no theme is provided for that specific component.
- Theme configurations are merged with default component styles, allowing for partial customization.
- Use nested ThemeProviders for section-specific styling while maintaining global themes.
