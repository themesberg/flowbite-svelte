---
layout: componentLayout
title: Svelte Sticky Banner - Flowbite
breadcrumb_title: Svelte Sticky Banner
component_title: Banner
dir: Components
description: Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    '/docs/components/alert',
    '/docs/components/toast',
    '/docs/components/modal',
    '/docs/components/navbar'
  ];
</script>

Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scrolls down the main content area.

Explore the following examples based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive element supporting dark mode.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Banner } from "flowbite-svelte";
</script>
```

## Default sticky banner

Use this example to show a text message for announcement with a CTA link, an icon element, and a close button to dismiss the banner. This is the most common banner pattern, providing essential information with a clear action.

The close button allows users to dismiss the banner, improving user experience by giving them control over the interface.

```svelte example class="flex flex-col relative"
{#include Default.svelte}
```

## Bottom banner position

This example can be used to position the sticky banner to the bottom side of the page instead of the top side. 

Bottom positioning is generally less intrusive and allows users to focus on main content while still being aware of the banner.

```svelte example class="flex flex-col relative"
{#include Bottom.svelte}
```

## Marketing CTA banner

Use this example to show a text message for announcement with a CTA link. This streamlined design focuses attention on the call-to-action.

Keep the message concise and the CTA clear to maximize conversion rates.

```svelte example class="flex flex-col relative"
{#include Cta.svelte}
```

## Newsletter sign-up banner

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

```svelte example class="flex flex-col relative"
{#include Newsletter.svelte}
```

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

The two-button layout provides users with choice, allowing them to take immediate action or learn more before deciding.

```svelte example class="flex flex-col relative"
{#include Informational.svelte}
```

## Transition

The `transition` and `params` props allow you to apply transition effects to components when they enter or leave the view. Svelte provides built-in transitions like `fly`, `slide`, `blur`, `fade`, and `scale`.

This example demonstrates a sliding transition using the slide transition from svelte/transition.

Choose transitions that match your site's overall animation style and don't distract from the banner's message.

```svelte example class="flex flex-col relative"
{#include Transition.svelte}
```

## onclose

A reusable function that manages banner dismissal state with localStorage persistence using the onclose callback. It checks if the banner was previously dismissed on mount, provides two-way binding for the open state, and automatically saves dismissal to localStorage.

Use the following example for a reusable function that keeps announcement banners hidden after dismissal across page refreshes. 

```svelte example class="h-48"
{#include Onclose.svelte}
```

## Accessibility

The Banner component follows accessibility best practices:

- **Keyboard Navigation**: Close buttons are fully keyboard accessible
- **Focus Management**: Proper focus indicators for interactive elements
- **Screen Readers**: Appropriate ARIA labels and roles for announcements
- **Dismissible**: Always provide a way to close banners
- **Non-Intrusive**: Banners should not trap focus or prevent page interaction
- **Color Contrast**: Text and buttons meet WCAG contrast requirements

## When to Use Banners vs. Other Components

- **Banner**: Site-wide announcements, marketing messages, persistent notifications
- **Alert**: Contextual feedback, form validation, inline messages
- **Toast**: Temporary feedback, success/error messages, auto-dismissing notifications
- **Modal**: Critical information requiring user action, complex forms, focused tasks

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Banner](https://flowbite.com/docs/components/banner/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
