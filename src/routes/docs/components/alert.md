---
layout: componentLayout
title: Svelte Alert - Flowbite
breadcrumb_title: Svelte Alert
component_title: Alert
dir: Components
description: Show contextual information to your users using alert elements based on Tailwind CSS
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer, DocBadgeList } from '../../utils'
  const components = 'Alert, Frame'
</script>

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page. Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Set up

Import Alert and set variables in the script tag.

```svelte example hideOutput
<script>
  import { Alert } from 'flowbite-svelte';
</script>
```

## Default alert

Use the following examples of alert components to show messages as feedback to your users.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert } from 'flowbite-svelte';
</script>

<Alert>
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="blue">
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component with the following example.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Alert>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="blue">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Bordered alerts

Use this example to add a border accent to the alert component instead of just a plain background.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Alert border>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="blue">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="red">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="green">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="yellow">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="dark">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Alerts with list

Use this example to show a list and a description inside an alert component.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert, Li, List } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Alert class="!items-start">
  <span slot="icon">
    <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
    <span class="sr-only">Info</span>
  </span>
  <p class="font-medium">Ensure that these requirements are met:</p>
  <ul class="mt-1.5 ml-4 list-disc list-inside">
    <li>At least 10 characters (and up to 100 characters)</li>
    <li>At least one lowercase character</li>
    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
  </ul>
</Alert>
<Alert color="blue" class="!items-start">
  <span slot="icon">
    <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
    <span class="sr-only">Info</span>
  </span>
  <p class="font-medium">Ensure that these requirements are met:</p>
  <List class="mt-1.5 ml-4">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</Alert>
```

## Dismissable alerts

Use the following alert elements that are also dismissable.

As `Alert` inhertits from the `Frame` component you can attach the `transition` and `params` prop to control the dissimal animation. By default `fade` svelte function is used. See the example below.

You can use `slot="close"` to override the default close button. That slot exposes `close` function that makes the alert dismissed when triggered. See the last example.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert, Button } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  import { fly } from 'svelte/transition';
</script>

<Alert dismissable>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  A simple default alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="blue" dismissable>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="red" dismissable>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="green" dismissable>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="yellow" dismissable transition={fly} params={{ x: 200 }}>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  An alert with non default animation - fly away.
</Alert>
<Alert color="dark" dismissable>
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  An alert with the custom dismissal button.
  <Button slot="close-button" size="xs" let:close on:click={close} class="ml-auto">Dissmiss</Button>
</Alert>
```

## Border accent

Use the following alert components with a border accent as an alternative style.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Alert rounded={false} class="border-t-4">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red" rounded={false} class="border-t-4">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green" rounded={false} class="border-t-4">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow" rounded={false} class="border-t-4">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark" rounded={false} class="border-t-4 flex-row-reverse">
  <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Additional content

The following alert components can be used if you wish to disclose more information inside the element.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert, Button } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Alert>
  <div class="flex items-center gap-3">
    <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
    <span class="text-lg font-medium">This is a info alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <div class="flex gap-2">
    <Button size="xs"><Icon name="eye-solid" class="w-4 h-4 mr-2" />View more</Button>
    <Button size="xs" outline class="dark:!text-primary-800">Go to Home</Button>
  </div>
</Alert>
<Alert color="green">
  <div class="flex items-center gap-3">
    <Icon name="info-circle-solid" slot="icon" class="w-4 h-4" />
    <span class="text-lg font-medium">This is a info alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <div class="flex gap-2">
    <Button size="xs" color="green"><Icon name="eye-solid" class="w-4 h-4 mr-2" />View more</Button>
    <Button size="xs" outline color="green" class="dark:text-green-800">Go to Home</Button>
  </div>
</Alert>
```

## Custom color

Use `color='none'` to disable coloring. Then use `class` to add your custom colors classes.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import { Alert } from 'flowbite-svelte';
</script>

<Alert color="none" class="bg-sky-500 text-white">Your content</Alert>
```

## Events

Use the `close` event with `dismissable` prop.

```svelte example class="flex flex-col gap-4"
<script>
  import { Alert } from 'flowbite-svelte';
  const closeAlert = () => {
    alert('Clicked closeAlert.');
  };
</script>

<Alert dismissable on:close={closeAlert}>Close me</Alert>
```

## Component data

### Alert styling

- Use the `class` prop to overwrite `defaultClass`.

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Alerts](https://flowbite.com/docs/components/alerts/)
