---
layout: componentLayout
title: Svelte Sidebar - Flowbite
breadcrumb_title: Svelte Sidebar
component_title: Sidebar
dir: Components
description: Use the sidebar component to show a list of menu items and multi-level dropdown items on either side of the page to navigate on your website
thumbnailSize: w-72
---

<script lang="ts">
  import { page } from '$app/state';
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The sidebar component can be used as a complementary element relative to the navbar shown on either the left or right side of the page used for the navigation on your web application, including menu items, multi-level dropdown items, call to actions elements, and more.

Disclaimer: this sidebar component is based on this <A class="text-primary-700" href="https://github.com/shinokada/svelte-sidebar" target="_blank" rel="noreferrer">sidebar menu</A> plugin.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte";
</script>
```

## Default sidebar

Use this example to show a responsive list of menu items inside the sidebar with icons and labels.

```svelte example
{#include Default.svelte}
```

## Adding links and active class

Utilize the `href` prop within the `SidebarItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `Sidebar` component:

```svelte example
{#include LinksAndActive.svelte}
```

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:

```svelte example
{#include LinksAndActive2.svelte}
```

You can control icon class by changing the `class` prop in the `Icon` component.

## Always open

```svelte example
{#include AlwaysOpen.svelte}
```

## Multi-level dropdown

Use this sidebar example to create multi-level menu items by using the SidebarDropdownWrapper and SidebarDropdownItem components.

```svelte example
{#include MultiLevel.svelte}
```

You can change the icons using `arrowup` and `arrowdown` slots.

```svelte example
{#include MultiLevel2.svelte}
```

## Content separator

Separate the content inside the sidebar component by applying a border separator to the SidebarGroup component.

```svelte example
{#include Separator.svelte}
```

## CTA button

Use this example to add a CTA button inside the sidebar component and encourage your users to visit the dedicated page.

```svelte example class="h-[500px]"
{#include Cta.svelte}
```

## Logo branding

Show the logo of your brand and link back to the homepage from the top part of the sidebar.

```svelte example
{#include Branding.svelte}
```

## Branding using children

The following example shows how to use children for your branding.

```svelte example
{#include BrandingUsingChildren.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the sidebar. Press `ESC` to close it on a small screen.

## Close button

Use the following example to show a close button in the sidebar for a small screen.

```svelte example
{#include CloseButton.svelte}
```

## Using object

You can use object for the sidebar items as the following example.

```svelte example
{#include ObjectEx.svelte}
```

## Single selection

The following example shows to open only one dropdown when you click another dropdown menu.

```svelte example
{#include Single.svelte}
```

## All open

To open all dropdown menus, set `isSingle={false}`.

```svelte example class="h-[500px]"
{#include AllOpen.svelte}
```

## Transition

You can add own transition by setting `transition` and `params` to `SidebarDropdownWrapper`.

```svelte example
{#include Transition.svelte}
```

## Static positioning

```svelte example
{#include Static.svelte}
```

## onclick handler on SidebarDropdownWrapper

```svelte example
{#include OnClickHandler.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/sidebar/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
