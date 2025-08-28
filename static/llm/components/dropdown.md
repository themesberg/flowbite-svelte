# Svelte Dropdown - Flowbite


The dropdown component can be used to show a list of menu items when clicking on an element such as a button and hiding it when clicking outside of the triggering element.

## Setup

```svelte
<script>
  import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from "flowbite-svelte";
</script>
```

## Examples

If you want to show a dropdown menu when clicking on an element add the `Dropdown` and `DropdownItem` components.

```svelte
{#include Default.svelte}
```

## Adding links and active class

Utilize the `href` prop within the `DropdownItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `Dropdown` component:

```svelte
{#include Links.svelte}
```

To change the active class, use the `activeClass` prop:

```svelte
{#include Active.svelte}
```

## Dropdown divider

You can use the `DropdownDivider` component to add separate elements inside the dropdown menu. Note that you have a natural divider between main content of the `Dropdown` and its header and footer.

```svelte
{#include Divider.svelte}
```

## Dropdown header

Use this example to show extra information outside of the list of menu items inside the dropdown.

```svelte
{#include Header.svelte}
```

## Multi-level dropdown

Use this example to enable multi-level dropdown menus by adding stacked elements inside of each other.

```svelte
{#include Multilevel.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the dropdown. Press `ESC` to close it.

## Programatic open/close

When you want to control your dropdown open status via javascript code you can bind to `open` property.

```svelte
{#include Programatic.svelte}
```

## Dropdown with checkbox

Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.

```svelte
{#include Checkbox.svelte}
```

### Background hover

Use this example to update the background color of a menu item when using a list of checkbox elements.

```svelte
{#include CheckboxBackground.svelte}
```

### Helper text

Add an extra helper text to each checkbox element inside the dropdown menu list with this example.

```svelte
{#include CheckboxHelper.svelte}
```

## Dropdown with radio

Add multiple radio elements inside your dropdown menu to enable more advanced input interaction.

```svelte
{#include Radio.svelte}
```

### Background hover

Use this example to update the background color of a menu item when using a list of radio elements.

```svelte
{#include RadioBackground.svelte}
```

### Helper text

Add an extra helper text to each radio element inside the dropdown menu list with this example.

```svelte
{#include RadioHelper.svelte}
```

## Dropdown with toggle switch

Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.

```svelte
{#include Toggle.svelte}
```

## Dropdown navbar

<p>You can also use the dropdown element inside a navigation bar and add a second level of navigation hierarchy, but make sure to use Navbar components.</p>

```svelte
{#include Navbar.svelte}
```

## Dropdown with scrolling

This example can be used when you want to show a long list of items that won’t affect the height of the dropdown menu by enabling a scrolling behaviour.

```svelte
{#include Scrolling.svelte}
```

## Dropdown with search

Use this example if you want to add a search bar inside the dropdown menu to be able to filter through a long list of menu items with scrolling behaviour.

```svelte
{#include Search.svelte}
```

## Menu icon

Use the menu icon trigger element on components such as cards as an alternative element to the button.

```svelte
{#include Menu.svelte}
```

## Notification bell

Use this example to show a list of notifications inside your application by providing more detailed information such as the user avatar, content and time of notification triggered by a notification bell icon.

```svelte
{#include Notification.svelte}
```

## User avatar

This example can be used to show a list of menu items and options when a user is logged into your application.

```svelte
{#include User.svelte}
```

## Avatar with name

Use this example to also show the name or email of the user next to the avatar for the dropdown menu.

```svelte
{#include Avatar.svelte}
```

## Sizes

<p>The dropdown menus work with buttons of all sizes including smaller or larger ones.</p>

```svelte
{#include Sizes.svelte}
```

## Placement

You can also use the `placement={top|right|bottom|left}` options to choose the placement of the dropdown menu. By default the positioning is set to the bottom side of the button.

```svelte
{#include Placement.svelte}
```

## Double placement

As dropdown is implemented using the [Floating UI](https://floating-ui.com) library, placement can be further specified by using the `Placement` type defined in [Floating UI docs](https://floating-ui.com/docs/computePosition#placement)

```svelte
{#include Double.svelte}
```

## Transition

Since the `Dropdown` component extends `Popper`, it also supports the `transition` and `transitionParams` props for customizing animations.

```svelte
{#include Transition.svelte}
```

## Events

`DropdownItem` renders to link or button or div wrapped with `<li/>` element depending whether you supplied the `href` or `onclick` property.

```svelte
{#include Events.svelte}
```

## Component data

### Dropdown

#### Types

[DropdownProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L596)

#### Props

- children
- simple: false
- placement: "bottom"
- offset: 2
- class: className
- activeUrl: ""
- isOpen: $bindable(false)

### DropdownDivider

#### Types

[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L602)

#### Props

- class: className

### DropdownGroup

#### Types

[DropdownGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L618)

#### Props

- children
- class: className

### DropdownHeader

#### Types

[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L604)

#### Props

- children
- class: className

### DropdownItem

#### Types

[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L610)

#### Props

- aClass
- children
- activeClass
- liClass
- classes
- class: className


## References

- [Flowbite Dropdown](https://flowbite.com/docs/components/drawer/)


