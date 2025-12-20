---
layout: componentLayout
title: Svelte Button Group - Flowbite
breadcrumb_title: Svelte Button Group
component_title: Button group
dir: Components
description: Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, Seealso, LlmLink } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = 'buttongroup'
  const relatedLinks = [
    '/docs/extend/button-toggle',
    '/docs/components/buttons',
    '/docs/components/list-group',
    '/docs/forms/radio#radiobutton',
    '/docs/forms/checkbox#checkboxbutton'
  ];
</script>

The button group component from flowbite-svelte can be used to stack together multiple buttons and links inside a single element.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>
```

## Default

Use the following code to stack together buttons into a single group. Grouped buttons provide visual cohesion and make it clear that actions are related. The first and last buttons have rounded corners while middle buttons have square edges, creating a unified appearance.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Default.svelte}
```

## Disabled

Disable individual buttons within a group to indicate unavailable actions while maintaining the group's visual integrity. 

Disabled buttons should remain visible to maintain predictable UI layout and help users understand all available options, even if temporarily unavailable.

```svelte example class="flex justify-center space-x-4" hideScript hideResponsiveButtons
{#include Disabled.svelte}
```

## More examples

Multiple button group variations demonstrating different color schemes and styles.

Choose color combinations that maintain sufficient contrast and clearly communicate the relationship between grouped buttons.

```svelte example class="flex flex-col flex-wrap gap-4" hideResponsiveButtons
{#include More.svelte}
```

## Button group as links

You can also use the button group component as links.

Using semantic `<a>` tags instead of buttons improves SEO and provides native browser navigation features like "open in new tab" and proper link handling.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Links.svelte}
```

## Group buttons with icons

You can also use SVG icons inside the grouped buttons.

```svelte example class="flex justify-center"
{#include Icons.svelte}
```

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

Outline style maintains button hierarchy while keeping the interface feeling lighter and less cluttered.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Outline.svelte}
```

## Outline with icon

Combine outline styling with icons for a refined, modern appearance. 

The outline style with icons strikes a balance between clarity and subtlety, making it ideal for frequently accessed controls that shouldn't dominate the interface.

```svelte example class="flex justify-center"
{#include OutlineIcon.svelte}
```

## Events

You can add the `onclick` event to the `Button` component.

Each button in a group can have its own event handler, enabling sophisticated interaction patterns while maintaining visual cohesion.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Event.svelte}
```

## Accessibility

The Button Group component follows accessibility best practices:

- **Keyboard Navigation**: All buttons are keyboard accessible using Tab and Enter/Space
- **Focus Indicators**: Clear focus states show which button is selected
- **ARIA Roles**: Use appropriate ARIA roles for button groups (like `role="group"`)
- **Label Association**: Ensure all buttons have clear, descriptive labels
- **Touch Targets**: Maintain minimum 44x44px target size for mobile
- **Semantic HTML**: Use `<button>` for actions, `<a>` for navigation
- **Screen Readers**: Button text or aria-labels are properly announced

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Button Group](https://flowbite.com/docs/components/button-group/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
