# Svelte Speed Dial - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A, Alert } from '$lib'  
  const dirName = toKebabCase(component_title)
</script>

Get started with the speed dial component to show a list of buttons or menu items positioned relative to the body in either corner as a quick way to allow certains actions to be made by your users.

## Default speed dial

To initialize a speed dial component you need to wrap the trigger element and the list of items inside an element and use the data-dial-init data attribute on it.

You can use any elment as `SpeedDial` trigger (see the [Custom main button](#custom-main-button) example), but for convenience `SpeedDialTrigger` element is used in the below examples.

<Alert>

**Note!** Default class for speed dial was `fixed end-6 bottom-6`. Now no positioning is set by default.

</Alert>

```svelte
{#include Default.svelte}
```

## Colors

The Speed Dial components accommodate color options ("red" | "lime" | "green" | "teal" | "cyan" | "blue" | "purple" | "pink" | undefined), gradient, shadow, and outline styles. For further information, please refer to **[the Button component](https://flowbite-svelte.com/components/button)** documentation.

```svelte
{#include Colors.svelte}
```

## Square speed dial

Use this example to make the trigger button’s style square instead of a full circle. As `SpeedDialButton` is an instance of `Button` we use the `pill` property to achevie the effect.

```svelte
{#include Square.svelte}
```

## Text inside button

This example can be used to show the descriptive text inside the button instead of a tooltip.

```svelte
{#include TextInside.svelte}
```

## Text outside button

Use this example to show the text of each button outside of the speed dial as an alternative style.

```svelte
{#include TextOutside.svelte}
```

## Dropdown menu

This example can be used to show a list of menu items instead of buttons when activating the speed dial.

```svelte
{#include Dropdown.svelte}
```

## Alternative menu

This example can be used to show an alternative style when showing a list of menu items.

```svelte
{#include Alternative.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the speed dial. Press `ESC` to close it.

## Alignment - Position

Align the speed dial menu items by using property `placement="top|right|left|bottom"`.

Control the main button position using the flexbox utility classes from Tailwind CSS through property `class`.

```svelte
{#include Position.svelte}
```

## Transition

Since the `SpeedDial` component extends `Popper`, it also supports the `transition` and `transitionParams` props for customizing animations.

```svelte
{#include Transition.svelte}
```

## Triggering

Use the `trigger="click|hover"` attribute of the speed dial component to set which type of action should activate the speed dial: click or hover.

The default trigger type is hover for each speed dial component.

```svelte
{#include Triggering.svelte}
```

The default trigger type is hover for each speed dial component.

## Custom main button

You can change the main button to any element you want.

```svelte
{#include Custom.svelte}
```

## Component data

### SpeedDial

#### Types

[SpeedDialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1485)

#### Props

- children
- popperClass
- placement: "top"
- pill: true
- tooltip: "left"
- trigger: "hover"
- textOutside: false
- class: className
- classes
- isOpen: $bindable(false)

### SpeedDialButton

#### Types

[SpeedDialButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1500)

#### Props

- children
- name: ""
- color: "light"
- tooltip: _tooltip
- pill: context.pill
- textOutside: context.textOutside
- textClass
- class: className
- classes

### SpeedDialTrigger

#### Types

[SpeedDialTriggerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1483)

#### Props

- children
- name: "Open actions menu"
- gradient: false
- icon
- pill: true
- color
- class: className


## References

- [Flowbite Speed Dial](https://flowbite.com/docs/components/speed-dial/)


