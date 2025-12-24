---
layout: componentLayout
title: Svelte Alert - Flowbite
breadcrumb_title: Svelte Alert
component_title: Alert
dir: Components
description: Show contextual information to your users using alert elements based on Tailwind CSS
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  const dirName = toKebabCase(component_title);
  const relatedLinks = [
    '/docs/components/toast',
    '/docs/components/modal',
    '/docs/components/banner',
    '/docs/components/badge'
  ];
</script>

The alert component provides contextual feedback messages for user actions. Use alerts for success messages, errors, warnings, and informational content.

## Set up

```svelte example hideOutput
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>
```

## Default alert

Use semantic color variants to convey meaning:

- **brand**: General information or tips
- **danger**: Errors or critical warnings  
- **success**: Successful operations
- **warning**: Caution messages
- **dark**: Neutral information

```svelte example class="flex flex-col gap-4"
{#include Default.svelte}
```

## Alerts with icon

Include descriptive icons to improve visual scanning and quick identification.

```svelte example class="flex flex-col gap-4"
{#include Icon.svelte}
```

## Bordered alerts

Add border accents for a more subtle appearance while maintaining visual distinction.

```svelte example class="flex flex-col gap-4"
{#include Bordered.svelte}
```

## Alerts with list

Display lists for multiple error messages, instructions, or grouped information.

```svelte example class="flex flex-col gap-4"
{#include AlertWithList.svelte}
```

## Dismissable alerts

Enable dismissal for temporary messages like notices or one-time tips. Customize the animation using the `transition` and `params` props. Use the `closeIcon` snippet to override the default close button.

```svelte example class="flex flex-col gap-4"
{#include Dismissable.svelte}
```

## Border accent

Use left border accents for a clean, modern look ideal for sidebars or embedded notifications.

```svelte example class="flex flex-col gap-4"
{#include BorderAccent.svelte}
```

## Additional content

Include expandable content for help text, detailed explanations, or rich content with links.

```svelte example class="flex flex-col gap-4"
{#include AdditionalContent.svelte}
```

## Custom color

Use the `class` prop with `color="none"` to create fully custom-styled alerts. The `closeColor` prop allows independent control of the close button styling, letting you mix custom alert colors with predefined close button colors or use `closeColor="none"` for complete customization.

```svelte example class="flex flex-col gap-4"
{#include CustomColor.svelte}
```

## Events

Handle dismissal interactions with the `onclick` event to track dismissals, save state, or trigger actions.

```svelte example class="flex flex-col gap-4"
{#include Event.svelte}
```

## Accessibility

- Uses ARIA roles to announce messages to screen readers
- Never relies on color alone—always includes text or icons
- Dismissable alerts support keyboard interactions
- Proper focus management when dismissing

## See also

<Seealso links={relatedLinks} />

## Component data

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Alerts](https://flowbite.com/docs/components/alerts/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
