# Svelte Alert - Flowbite


The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page. Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Set up

Import Alert and set variables in the script tag.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>
```

## Default alert

Use the following examples of alert components to show messages as feedback to your users.

```svelte
{#include Default.svelte}
```

## Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component with the following example.

```svelte
{#include Icon.svelte}
```

## Bordered alerts

Use this example to add a border accent to the alert component instead of just a plain background.

```svelte
{#include Bordered.svelte}
```

## Alerts with list

Use this example to show a list and a description inside an alert component.

```svelte
{#include AlertWithList.svelte}
```

## Dismissable alerts

Use the following alert elements that are also dismissable.

You can attach the `transition` and `params` prop to control the dissimal animation. By default `fade` svelte function is used. See the example below.

You can use `closeIcon` prop to override the default close button. See the last example.

```svelte
{#include Dismissable.svelte}
```

## Border accent

Use the following alert components with a border accent as an alternative style.

```svelte
{#include BorderAccent.svelte}
```

## Additional content

The following alert components can be used if you wish to disclose more information inside the element.

```svelte
{#include AdditionalContent.svelte}
```

## Custom color

Use `class` to add your custom colors classes.

```svelte
{#include CustomColor.svelte}
```

## Events

Use the `onclick` event with `dismissable` prop.

```svelte
{#include Event.svelte}
```

## Component data

### Alert

#### Types

[AlertProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L191)

#### Props

- children
- icon
- alertStatus: $bindable(true)
- closeIcon: CloseIcon
- color: "primary"
- rounded: true
- border
- class: className
- dismissable
- transition: fade
- params


## References

- [Flowbite Alerts](https://flowbite.com/docs/components/alerts/)


