---
layout: componentLayout
title: Svelte Alert - Flowbite
breadcrumb_title: Svelte Alert
component_title: Alert
dir: Components
description: Show contextual information to your users using alert elements based on Tailwind CSS
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  const dirName = toKebabCase(component_title);
</script>

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page. Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Set up

Import Alert and set variables in the script tag.

```svelte example hideOutput
<script>
  import { Alert } from "flowbite-svelte";
</script>
```

## Default alert

Use the following examples of alert components to show messages as feedback to your users.

```svelte example class="flex flex-col gap-4"
include Default.svelte}
```

## Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component with the following example.

```svelte example class="flex flex-col gap-4"
include Icon.svelte}
```

## Bordered alerts

Use this example to add a border accent to the alert component instead of just a plain background.

```svelte example class="flex flex-col gap-4"
include Bordered.svelte}
```

## Alerts with list

Use this example to show a list and a description inside an alert component.

```svelte example class="flex flex-col gap-4"
include AlertWithList.svelte}
```

## Dismissable alerts

Use the following alert elements that are also dismissable.

You can attach the `transition` and `params` prop to control the dissimal animation. By default `fade` svelte function is used. See the example below.

You can use `closeIcon` prop to override the default close button. See the last example.

```svelte example class="flex flex-col gap-4"
include Dismissable.svelte}
```

## Border accent

Use the following alert components with a border accent as an alternative style.

```svelte example class="flex flex-col gap-4"
include BorderAccent.svelte}
```

## Additional content

The following alert components can be used if you wish to disclose more information inside the element.

```svelte example class="flex flex-col gap-4"
include AdditionalContent.svelte}
```

## Custom color

Use `class` to add your custom colors classes.

```svelte example class="flex flex-col gap-4" hideScript
include CustomColor.svelte}
```

## Events

Use the `onclick` event with `dismissable` prop.

```svelte example class="flex flex-col gap-4"
include Event.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Alerts](https://flowbite.com/docs/components/alerts/)

<GitHubCompoLinks />
