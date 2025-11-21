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

The alert component can be used to provide important information to your users such as success or error messages, warnings, or highlighted information that complements the normal flow of content on a page. Alerts are perfect for displaying feedback after form submissions, system notifications, or drawing attention to critical information.

It also includes dismissable alerts which can be hidden by users by clicking on the close icon, allowing for a cleaner interface once the message has been acknowledged.

## Set up

Import Alert and set variables in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>
```

## Default alert

Use the following examples of alert components to show messages as feedback to your users. Each color variant conveys different semantic meanings:

- **Info** (blue): General information or tips
- **Danger** (red): Errors or critical warnings
- **Success** (green): Successful operations or confirmations
- **Warning** (yellow): Caution messages or important notices
- **Dark** (gray): Neutral information or less critical messages

```svelte example class="flex flex-col gap-4"
{#include Default.svelte}
```

## Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component. Icons help users quickly identify the type of message and improve visual scanning, especially useful in applications with multiple alerts.

```svelte example class="flex flex-col gap-4"
{#include Icon.svelte}
```

## Bordered alerts

Use this example to add a border accent to the alert component instead of just a plain background. Bordered alerts provide a more subtle appearance while still maintaining clear visual distinction, making them ideal for less intrusive notifications.

```svelte example class="flex flex-col gap-4"
{#include Bordered.svelte}
```

## Alerts with list

Use this example to show a list and a description inside an alert component. This is particularly useful for displaying:

- Multiple error messages from form validation
- Step-by-step instructions or requirements
- Lists of affected items or changes
- Grouped information that requires user attention

```svelte example class="flex flex-col gap-4"
{#include AlertWithList.svelte}
```

## Dismissable alerts

Use the following alert elements that are also dismissable. Dismissable alerts are useful for temporary messages that users can acknowledge and remove from view, such as cookie notices, promotional banners, or one-time tips.

You can attach the `transition` and `params` prop to control the dismissal animation. By default the `fade` Svelte transition function is used. You can customize the animation with different transition types (slide, blur, fly) and parameters (duration, easing).

You can use the `closeIcon` snippet to override the default close button with your own custom icon or element. See the last example below.

```svelte example class="flex flex-col gap-4"
{#include Dismissable.svelte}
```

## Border accent

Use the following alert components with a border accent as an alternative style. The left border accent provides a clean, modern look that draws attention without being overwhelming, perfect for sidebars or embedded notifications.

```svelte example class="flex flex-col gap-4"
{#include BorderAccent.svelte}
```

## Additional content

The following alert components can be used if you wish to disclose more information inside the element. This pattern is useful for:

- Expandable help text or documentation
- Detailed error explanations with suggested solutions
- Rich content with links and formatting
- Multi-paragraph announcements or updates

```svelte example class="flex flex-col gap-4"
{#include AdditionalContent.svelte}
```

## Custom color

Use the `class` prop to add your custom color classes and create alerts that match your brand or design system. You can combine Tailwind CSS background, border, and text color utilities to achieve any desired appearance.

```svelte example class="flex flex-col gap-4" hideScript
{#include CustomColor.svelte}
```

## Events

Use the `onclick` event with the `dismissable` prop to handle user interactions when the alert is dismissed. This allows you to:

- Track which alerts users are dismissing
- Save dismissal state to prevent showing the same alert again
- Trigger other actions when an alert is closed
- Log analytics events

```svelte example class="flex flex-col gap-4"
{#include Event.svelte}
```

## Accessibility

The Alert component follows accessibility best practices:

- **ARIA Roles**: Alerts use appropriate ARIA roles to announce important messages to screen readers
- **Color Independence**: Never rely on color alone to convey meaning; always include text or icons
- **Keyboard Navigation**: Dismissable alerts can be closed using keyboard interactions
- **Focus Management**: When dismissing alerts, focus is properly managed to maintain usability

## Best Practices

When using alerts, consider these guidelines:

- **Be Concise**: Keep alert messages brief and actionable
- **Use Appropriately**: Don't overuse alerts as they can overwhelm users
- **Provide Context**: Include enough information for users to understand and act
- **Allow Dismissal**: For non-critical alerts, enable dismissal to reduce clutter
- **Position Wisely**: Place alerts where they're most relevant to the action or content

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Key Props

- `color`: Set the alert color variant (info, danger, success, warning, dark)
- `dismissable`: Enable close button for dismissing the alert
- `border`: Add border styling
- `rounded`: Control border radius
- `transition`: Custom Svelte transition function (default: fade)
- `params`: Parameters for the transition (duration, easing, etc.)

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Alerts](https://flowbite.com/docs/components/alerts/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
