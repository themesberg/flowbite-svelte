---
layout: componentLayout
title: Svelte Sticky Banner - Flowbite
breadcrumb_title: Svelte Sticky Banner
component_title: Banner
dir: Components
description: Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    'docs/components/alert',
    'docs/components/toast',
    'docs/components/modal',
    'docs/components/navbar'
  ];
</script>

Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scrolls down the main content area.

Sticky banners are perfect for:
- **Marketing campaigns** and promotional announcements
- **Important updates** or system notifications
- **Cookie consent** notices and privacy disclosures
- **Newsletter signups** and lead generation
- **App download** prompts for mobile users
- **Time-sensitive offers** and limited-time deals

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

This example can be used to position the sticky banner to the bottom side of the page instead of the top side. Bottom banners are ideal for:
- **Cookie consent** notices (standard practice)
- **App install prompts** on mobile devices
- **Chat support** widgets or help options
- **Non-intrusive notifications** that don't block primary navigation

Bottom positioning is generally less intrusive and allows users to focus on main content while still being aware of the banner.

```svelte example class="flex flex-col relative"
{#include Bottom.svelte}
```

## Marketing CTA banner

Use this example to show a text message for announcement with a CTA link. This streamlined design focuses attention on the call-to-action, making it perfect for:
- **Sales promotions** with specific discount codes
- **Event announcements** with registration links
- **Product launches** with "Learn More" actions
- **Feature announcements** directing to documentation

Keep the message concise and the CTA clear to maximize conversion rates.

```svelte example class="flex flex-col relative"
{#include Cta.svelte}
```

## Newsletter sign-up banner

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

Newsletter banners are effective for:
- **Growing your email list** with minimal friction
- **Content marketing** campaigns
- **Blog subscriptions** and update notifications
- **Community building** initiatives

Best practices:
- Keep form fields minimal (usually just email)
- Clearly communicate the value of subscribing
- Include privacy reassurance
- Make the close button easily accessible

```svelte example class="flex flex-col relative"
{#include Newsletter.svelte}
```

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

Informational banners work well for:
- **System maintenance** announcements
- **Policy updates** requiring user attention
- **Security alerts** or important notifications
- **Multi-option decisions** (e.g., "Learn More" vs "Update Now")

The two-button layout provides users with choice, allowing them to take immediate action or learn more before deciding.

```svelte example class="flex flex-col relative"
{#include Informational.svelte}
```

## Transition

The `transition` and `params` props allow you to apply transition effects to components when they enter or leave the view. Svelte provides built-in transitions like `fly`, `slide`, `blur`, `fade`, and `scale`.

This example demonstrates a sliding transition using the slide transition from svelte/transition. Smooth transitions:
- Create a more polished, professional feel
- Reduce jarring sudden appearances
- Provide visual continuity
- Can be customized with duration and easing

Choose transitions that match your site's overall animation style and don't distract from the banner's message.

```svelte example class="flex flex-col relative"
{#include Transition.svelte}
```

## onclose

A reusable function that manages banner dismissal state with localStorage persistence using the onclose callback. It checks if the banner was previously dismissed on mount, provides two-way binding for the open state, and automatically saves dismissal to localStorage.

Use the following example for a reusable function that keeps announcement banners hidden after dismissal across page refreshes. This is essential for:
- **Cookie consent** banners (legal requirement)
- **One-time announcements** that shouldn't repeatedly bother users
- **Promotional messages** where user preference should be respected
- **Improving user experience** by not showing the same message repeatedly

Implementation tips:
- Use unique keys for different banners
- Consider time-based expiration for some banners
- Allow re-showing critical banners after significant updates
- Test across different browsers and private browsing modes

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

## Best Practices

When implementing sticky banners, consider these guidelines:

- **Respect User Choice**: Always include a dismiss option for non-critical banners
- **Prioritize Content**: Don't let banners dominate the viewport, especially on mobile
- **Timing Matters**: Consider delaying banner appearance slightly after page load
- **One at a Time**: Avoid showing multiple banners simultaneously
- **Mobile First**: Test banner layouts on small screens
- **Performance**: Ensure banners don't impact page load performance
- **Legal Compliance**: For cookie banners, follow regional regulations (GDPR, CCPA)
- **Clear Actions**: Make CTAs obvious and easy to click
- **A/B Testing**: Test different messages and designs for optimal conversion

## When to Use Banners vs. Other Components

- **Banner**: Site-wide announcements, marketing messages, persistent notifications
- **Alert**: Contextual feedback, form validation, inline messages
- **Toast**: Temporary feedback, success/error messages, auto-dismissing notifications
- **Modal**: Critical information requiring user action, complex forms, focused tasks

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Key Props

- `position`: Position banner at top or bottom of viewport (default: 'top')
- `dismissable`: Enable close button for dismissing banner (default: true)
- `transition`: Custom Svelte transition function for appear/disappear effects
- `params`: Parameters for the transition (duration, easing, etc.)
- `bannerType`: Style variant for different banner types
- `divClass`: Custom classes for the banner container

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Banner](https://flowbite.com/docs/components/banner/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
