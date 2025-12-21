---
layout: componentLayout
title: Svelte Buttons - Flowbite
breadcrumb_title: Svelte Buttons
component_title: Buttons
dir: Components
description: Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
thumbnailSize: w-24
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, Seealso, LlmLink } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
 
  const relatedLinks = [
    '/docs/components/button-group',
    '/docs/utilities/close-button',
    '/docs/forms/radio#radiobutton',
    '/docs/forms/checkbox#checkboxbutton',
    '/docs/components/badge'
  ];
</script>

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

flowbite-svelte provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Setup

Import a button component in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>
```

## Default button

Use these default button styles with multiple colors to indicate an action or link within your website. Each color conveys different semantic meanings:

Choose colors that align with user expectations and provide clear visual hierarchy.

```svelte example class="flex flex-wrap gap-2" hideScript
{#include Default.svelte}
```

## Button with link

Using `href` creates a semantic `<a>` tag with button styling, providing proper browser behavior (right-click, open in new tab) and SEO benefits.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Link.svelte}
```

## Button pills

The button pills can be used as an alternative style by using fully rounded edges.

Pill buttons work especially well in modern web apps, social platforms, and consumer-facing products.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Pills.svelte}
```

## Shadow

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Shadow.svelte}
```

## Gradient monochrome

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

Use sparingly to maintain impact and avoid overwhelming users.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Monochrome.svelte}
```

## Gradient duotone

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.

Ideal for promotional content, featured actions, and creative industries.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Duotone.svelte}
```

## Gradient outline

This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.

Use for secondary CTAs that still need visual interest.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include GradientOutline.svelte}
```

## Colored shadows

These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.

Best for hero CTAs and primary actions where you want maximum visual impact.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Colored.svelte}
```

## Outline buttons

Use the following button styles to show the colors only for the border of the element. 

Outline buttons provide clear hierarchy while maintaining a clean, uncluttered interface.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Outline.svelte}
```

## Button sizes with icons

Use these examples if you want to use smaller or larger buttons.

Icons help users quickly identify button purpose and improve scannability.

```svelte example class="space-y-2" hideScript hideResponsiveButtons
{#include Sizes.svelte}
```

## Button with icon

Use the following examples to add a SVG icon inside the button either on the left or right side.

Position icons based on reading direction and action type (left for actions, right for navigation).

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include Icon.svelte}
```

## Button with label

This example can be used to show a notification count or helper text inside a button using the badge element.

Badges help users make informed decisions about clicking buttons.

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include Label.svelte}
```

## Icon buttons

Sometimes you need a button to indicate an action using only an icon. 

Always include accessible labels (aria-label) for screen readers even when text isn't visible.

```svelte example class="flex flex-wrap items-center gap-2" hideResponsiveButtons
{#include IconButton.svelte}
```

## Loader

Use the spinner components to indicate a loader animation inside buttons.

Always disable buttons during loading to prevent multiple submissions.

```svelte example class="flex flex-wrap justify-center gap-2" hideResponsiveButtons
{#include Loader.svelte}
```

## Disabled

You can add any additional button attributes. The following example shows adding the `disabled` attribute.

Use disabled states for conditional features, permission-based actions, or form validation feedback.

```svelte example class="flex justify-center gap-2" hideScript hideResponsiveButtons
{#include Disabled.svelte}
```

## Events

You can use `onclick` or any standard `on*` to listen to the event. 

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include Events.svelte}
```

## Loading State with Spinner

Use the `loading` prop to indicate a pending action (e.g. form submission). When `true`, the button is automatically disabled and shows a built-in spinner. This improves user feedback and prevents duplicate submissions.

This pattern is essential for any async operation triggered by a button.

```svelte example class="flex justify-center"
{#include Loading.svelte}
```

## Accessibility

The Button component follows accessibility best practices:

- **Keyboard Navigation**: All buttons are accessible using Tab and Enter/Space
- **Focus Indicators**: Clear focus states for keyboard users
- **ARIA Labels**: Use aria-label for icon-only buttons
- **Semantic HTML**: Uses `<button>` for actions, `<a>` for links
- **Disabled State**: Properly marked with disabled attribute and aria-disabled
- **Loading State**: Announces loading status to screen readers
- **Color Contrast**: All color variants meet WCAG contrast requirements
- **Touch Targets**: Minimum 44x44px for mobile usability

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Buttons](https://flowbite.com/docs/components/buttons/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
