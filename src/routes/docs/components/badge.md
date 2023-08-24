---
layout: componentLayout
title: Svelte Badge - Flowbite
breadcrumb_title: Svelte Badge
component_title: Badge
dir: Components
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
thumnailSize: w-28
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../../utils'
  import { P, A } from '$lib'
  import componentData1 from '../../component-data/Badge.json'
  const components = 'Badge'
</script>

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page.

## Setup

Import a badge component in the script tag.

```svelte example hideOutput
<script>
  import { Badge } from 'flowbite-svelte';
</script>
```

## Default badge

Use the following badge elements to indicate counts or labels inside or outside components.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Badge } from 'flowbite-svelte';
</script>

<Badge>Default</Badge>
<Badge color="dark">Dark</Badge>
<Badge color="red">Red</Badge>
<Badge color="green">Green</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
```

## Large badges

Use the `large` prop to create a large variant of the badges.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Badge } from 'flowbite-svelte';
</script>

<Badge large>Default</Badge>
<Badge large color="dark">Dark</Badge>
<Badge large color="red">Red</Badge>
<Badge large color="green">Green</Badge>
<Badge large color="yellow">Yellow</Badge>
<Badge large color="indigo">Indigo</Badge>
<Badge large color="purple">Purple</Badge>
<Badge large color="pink">Pink</Badge>
```

## Bordered badge

Use the `border` prop to add a border accent to the badge component.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Badge } from 'flowbite-svelte';
</script>

<Badge border>Default</Badge>
<Badge border color="dark">Dark</Badge>
<Badge border color="red">Red</Badge>
<Badge border color="green">Green</Badge>
<Badge border color="yellow">Yellow</Badge>
<Badge border color="indigo">Indigo</Badge>
<Badge border color="purple">Purple</Badge>
<Badge border color="pink">Pink</Badge>
```

## Pills badge

Use the `rounded` prop to make the corners even more rounded like pills for the badge component.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Badge } from 'flowbite-svelte';
</script>

<Badge rounded>Default</Badge>
<Badge rounded color="dark">Dark</Badge>
<Badge rounded color="red">Red</Badge>
<Badge rounded color="green">Green</Badge>
<Badge rounded color="yellow">Yellow</Badge>
<Badge rounded color="indigo">Indigo</Badge>
<Badge rounded color="purple">Purple</Badge>
<Badge rounded color="pink">Pink</Badge>
```

## Badges as links

You can also use badges as anchor elements to link to another page.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Badge } from 'flowbite-svelte';
</script>

<Badge href="/">Badge link</Badge>
<Badge href="/" large>Badge link</Badge>
<Badge href="/" border>Badge link</Badge>
<Badge href="/" rounded>Badge link</Badge>
```

## Badges with icon

You can also use SVG icons inside the badge elements.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Badge } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Badge color="dark" border>
  <Icon name="clock-solid" class="w-2.5 h-2.5 mr-1.5" />
  3 days ago
</Badge>
<Badge border>
  <Icon name="clock-solid" class="text-primary-800 dark:text-primary-400 w-2.5 h-2.5 mr-1.5" />
  2 minutes ago
</Badge>
```

## Notification badge

To achive the functionality of the notification badge, use the sibling [`Indicator`](/docs/components/indicators) component. Remember to add the `relative` class to parent element.

```svelte example class="flex flex-wrap gap-4"
<script>
  import { Button, Indicator } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Button class="relative" size="sm">
  <Icon name="envelope-solid" class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
</Button>

<Button class="relative" size="sm">
  <Icon name="envelope-solid" class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
</Button>

<Button class="relative" size="sm">
  <Icon name="envelope-solid" class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="dark" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
</Button>
```

## Button with badge

Use this example to add a badge inside a button component for a count indicator.

```svelte example class="flex flex-wrap gap-4"
<script>
  import { Badge, Button } from 'flowbite-svelte';
</script>

<Button>
  Messages
  <Badge rounded class="w-4 h-4 ml-2 p-0 font-semibold text-primary-800 bg-white dark:text-primary-800 dark:bg-white">2</Badge>
</Button>
```

## Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon.

```svelte example hideScript
<script>
  import { Badge } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Badge color="dark" rounded large class="!p-1 !font-semibold">
  <Icon name="check-outline" class="h-3 w-3" />
  <span class="sr-only">Icon description</span>
</Badge>
<Badge rounded large class="!p-1 !font-semibold">
  <Icon name="check-outline" class="h-3 w-3 text-primary-800 dark:text-primary-400" />
  <span class="sr-only">Icon description</span>
</Badge>
```

## Dismissable badges

Use the `dimissable` prop to dismiss the current badge.

```svelte example class="flex flex-wrap gap-4" hideScript
<script>
  import { Badge } from 'flowbite-svelte';
</script>

<Badge dismissable large>Default</Badge>
<Badge dismissable large color="dark">Dark</Badge>
<Badge dismissable large color="red">Red</Badge>
<Badge dismissable large color="green">Green</Badge>
<Badge dismissable large color="yellow">Yellow</Badge>
<Badge dismissable large color="indigo">Indigo</Badge>
<Badge dismissable large color="purple">Purple</Badge>
<Badge dismissable large color="pink">Pink</Badge>
```

Use the `close-button` slot to add your desired button. Don't forget to use the slot prop `close` to dismiss your badge.

```svelte example class="gap-4"
<script>
  import { Badge } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Badge dismissable>
  Default
  <button slot="close-button" let:close on:click={close} type="button" class="inline-flex items-center rounded-full p-0.5 my-0.5 ml-1.5 -mr-1.5 text-sm bg-primary-500 dark:bg-primary-400 text-white dark:text-primary-800 hover:bg-primary-900 hover:text-white dark:hover:bg-red-900 dark:hover:text-yellow-300" aria-label="Remove">
    <Icon name="close-circle-solid" class="h-4 w-4" />
    <span class="sr-only">Remove badge</span>
  </button>
</Badge>
```

A `dismiss` event will be dispatched during the dismissal, listen to it if needed.

```svelte example class="gap-4"
<script>
  import { Badge } from 'flowbite-svelte';

  function handleClose(event) {
    alert('Badge dismissed');
  }
</script>

<Badge dismissable large on:close={handleClose}>Default</Badge>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Badge styling

- Use the `class` prop to overwrite the default class.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Badge](https://flowbite.com/docs/components/badge/)
