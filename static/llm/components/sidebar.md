# Svelte Sidebar - Flowbite


<script lang="ts">
  import { page } from '$app/state';
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The sidebar component can be used as a complementary element relative to the navbar shown on either the left or right side of the page used for the navigation on your web application, including menu items, multi-level dropdown items, call to actions elements, and more.

Disclaimer: this sidebar component is based on this <A class="text-primary-700" href="https://github.com/shinokada/svelte-sidebar" target="_blank" rel="noreferrer">sidebar menu</A> plugin.

## Setup

```svelte
<script lang="ts">
  import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte";
</script>
```

## Default sidebar

Use this example to show a responsive list of menu items inside the sidebar with icons and labels.

```svelte
{#include Default.svelte}
```

## Adding links and active class

Utilize the `href` prop within the `SidebarItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `Sidebar` component:

```svelte
{#include LinksAndActive.svelte}
```

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:

```svelte
{#include LinksAndActive2.svelte}
```

You can control icon class by changing the `class` prop in the `Icon` component.

## Always open

```svelte
{#include AlwaysOpen.svelte}
```

## Multi-level dropdown

Use this sidebar example to create multi-level menu items by using the SidebarDropdownWrapper and SidebarDropdownItem components.

```svelte
{#include MultiLevel.svelte}
```

You can change the icons using `arrowup` and `arrowdown` slots.

```svelte
{#include MultiLevel2.svelte}
```

## Content separator

Separate the content inside the sidebar component by applying a border separator to the SidebarGroup component.

```svelte
{#include Separator.svelte}
```

## CTA button

Use this example to add a CTA button inside the sidebar component and encourage your users to visit the dedicated page.

```svelte
{#include Cta.svelte}
```

## Logo branding

Show the logo of your brand and link back to the homepage from the top part of the sidebar.

```svelte
{#include Branding.svelte}
```

## Branding using children

The following example shows how to use children for your branding.

```svelte
{#include BrandingUsingChildren.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the sidebar. Press `ESC` to close it on a small screen.

## Close button

Use the following example to show a close button in the sidebar for a small screen.

```svelte
{#include CloseButton.svelte}
```

## Using object

You can use object for the sidebar items as the following example.

```svelte
{#include ObjectEx.svelte}
```

## Single selection

The following example shows to open only one dropdown when you click another dropdown menu.

```svelte
{#include Single.svelte}
```

## All open

To open all dropdown menus, set `isSingle={false}`.

```svelte
{#include AllOpen.svelte}
```

## Transition

You can add own transition by setting `transition` and `params` to `SidebarDropdownWrapper`.

```svelte
{#include Transition.svelte}
```

## Static positioning

```svelte
{#include Static.svelte}
```

## onclick handler on SidebarDropdownWrapper

```svelte
{#include OnClickHandler.svelte}
```

## Component data

### Sidebar

#### Types

[SidebarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1345)

#### Props

- children
- isOpen: false
- closeSidebar
- isSingle: true
- breakpoint: "md"
- alwaysOpen: false
- position: "fixed"
- activateClickOutside: true
- backdrop: true
- backdropClass
- transition: fly
- params
- divClass
- ariaLabel
- nonActiveClass
- activeClass
- activeUrl: ""
- class: className
- classes
- disableBreakpoints: false

### SidebarBrand

#### Types

[SidebarBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1382)

#### Props

- children
- site
- imgClass
- spanClass
- class: className
- classes

### SidebarButton

#### Types

[SidebarButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1364)

#### Props

- breakpoint: "md"
- class: className
- classes

### SidebarCta

#### Types

[SidebarCtaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1369)

#### Props

- children
- icon
- divClass
- spanClass
- label
- class: className
- classes

### SidebarDropdownWrapper

#### Types

[SidebarDropdownWrapperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1388)

#### Props

- children
- arrowup
- arrowdown
- icon
- isOpen: $bindable(false)
- btnClass
- label
- spanClass
- ulClass
- transition: slide
- params
- svgClass
- class: className
- classes
- onclick

### SidebarGroup

#### Types

[SidebarGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1405)

#### Props

- children
- class: className: "space-y-2"
- borderClass: "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"
- border: false

### SidebarItem

#### Types

[SidebarItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1411)

#### Props

- icon
- subtext
- href
- label
- spanClass: "ms-3"
- activeClass
- nonActiveClass
- aClass
- active
- class: className

### SidebarWrapper

#### Types

[HTMLAttributes<HTMLDivElement>](https://github.com/sveltejs/svelte/blob/main/packages/svelte/elements.d.ts)

#### Props

- children


## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/sidebar/)


