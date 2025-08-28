# Svelte Sticky Banner - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scroll down the main content area.

Explore the following examples based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive element supporting dark mode.

## Setup

```svelte
<script lang="ts">
  import { Banner } from "flowbite-svelte";
</script>
```

## Default sticky banner

Use this example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.

```svelte
{#include Default.svelte}
```

## Bottom banner position

This example can be used to position the sticky banner to the bottom side of the page instead of the top side.

```svelte
{#include Bottom.svelte}
```

## Marketing CTA banner

Use this example to show a text message for announcement with a CTA link.

```svelte
{#include Cta.svelte}
```

## Newsletter sign-up banner

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

```svelte
{#include Newsletter.svelte}
```

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

```svelte
{#include Informational.svelte}
```

## Transition

The `transition` and `params` props allow you to apply transition effects to components when they enter or leave the view. Svelte provides built-in transitions like `fly`, `slide`, `blur-sm`, `fade`, and `scale`.

This example demonstrates a sliding transition using the slide transition from svelte/transition:

```svelte
{#include Transition.svelte}
```

## Component data

### Banner

#### Types

[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L228)

#### Props

- children
- header
- open: $bindable(true)
- dismissable: true
- color: "gray"
- type
- class: className
- classes
- innerClass
- transition: fade
- params
- closeClass


## References

- [Flowbite Banner](https://flowbite.com/docs/components/banner/)


