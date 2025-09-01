---
layout: componentLayout
title: Svelte Toasts - Flowbite
breadcrumb_title: Svelte Toast Notification
component_title: Toast
dir: Components
description: Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Toast } from "flowbite-svelte";
</script>
```

## Default toast

Use this simple toast component with an icon, message, and dismissable close button to show alert messages to your website visitors.

```svelte example class="flex justify-center h-28"
{#include Default.svelte}
```

## Colors

Use the `color` prop to easily change the colors of the icons. Set the `color` prop to `undefined` and use the `class` prop to customize your desired icon styles.

Usually, green, red, and orange are used to show success, danger, or warning alert messages to your users. See the first three examples below.

```svelte example class="flex flex-col items-center gap-4 h-[750px]"
{#include Colors.svelte}
```

## Simple toast

This component can be used to show simple messages and notifications without the use of a close button.

```svelte example class="flex justify-center"
{#include Simple.svelte}
```

## Icons

For the right positioning of the icon use: `{#snippet icon()}...{/snippet}`.

You can use any [icon components](/icons).

```svelte example class="flex flex-col items-center gap-4 h-52"
{#include Icons.svelte}
```

## Autohide example

```svelte example class="flex justify-center"
{#include Autohide.svelte}
```

## Transitions

You can use one of <A href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank" rel="noreferrer" >Svelte/easing</A>.

```svelte example class="flex flex-col items-center gap-4 h-80"
{#include Transitions.svelte}
```

### Blur examples

```svelte example class="flex flex-col items-center gap-4 h-52"
{#include Blur.svelte}
```

### Fly examples

```svelte example class="flex flex-col items-center gap-4 h-52"
{#include Fly.svelte}
```

## Undo button

Use this toast component to also show an “undo” button to reverse the action of the user.

```svelte example class="flex justify-center" hideScript
{#include Undo.svelte}
```

## Advanced examples

If the toast content grows to multiple lines we need to switch off the `items-center` alignment. Notice how the examples below achieve that by setting `align={flase}` property.

### Toast message

This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

```svelte example class="flex justify-center"
{#include Toast.svelte}
```

### Push notification

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

```svelte example class="flex justify-center"
{#include Push.svelte}
```

### Interactive toast

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

<p class="italic">This is an example with the icon and extra content at the same time.</p>

```svelte example class="flex justify-center"
{#include Interactive.svelte}
```

## Positioning

Use the position property to position these toast components relative to the main content wrapper element from your document.

```svelte example hideScript
{#include Positioning.svelte}
```

## Events

You can use `onclose` to execute custom logic when the toast is closed.

```svelte example hideScript
{#include Events.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Toast](https://flowbite.com/docs/components/toast/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
