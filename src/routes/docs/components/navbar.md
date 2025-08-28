---
layout: componentLayout
title: Svelte Navbar - Flowbite
breadcrumb_title: Svelte Navbar
component_title: Navbar
dir: Components
description: The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, Heading, P, A } from '$lib';
  const dirName = toKebabCase(component_title)
</script>

Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>
```

## Default navbar

Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.

By default, navbar content width is controlled by Tailwind class `container`. If you want your navbar to be full page width set the prop `fluid=true`.

```svelte example hideScript class="h-96 md:h-80"
{#include Default.svelte}
```

## Active class

Utilize the `href` prop within the `NavLi` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `NavUl` component:

```svelte example class="h-96 md:h-80"
{#include Active.svelte}
```

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:

```svelte example class="h-96 md:h-80"
{#include ActiveClass.svelte}
```

## respectMotionPreference

Controls whether the navbar dropdown respects the user's motion preferences set in their operating system or browser. When enabled (default), the navbar dropdown will automatically disable animations for users who have "Reduce motion" enabled in their system accessibility settings. This helps users with vestibular disorders, ADHD, or those who simply prefer fewer animations. It's recommended to keep this enabled (true) to ensure your navbar is accessible to users with motion sensitivities. Only disable if you have specific design requirements that require consistent animations for all users.

## Transitions

Use slide (default), fly, fade, or scale transtion.

### Fly transition

```svelte example class="h-96 md:h-80"
{#include Fly.svelte}
```

### Fade transition

```svelte example class="h-96 md:h-80"
{#include Fade.svelte}
```

### Scale transition

```svelte example class="h-96 md:h-80"
{#include Scale.svelte}
```

## closeOnClickOutside

Controls whether the navbar menu closes when clicking outside of it.

`Type: boolean | Default: true`

Set closeOnClickOutside to false to disable closing the menu when clicking outside the navbar. Useful for persistent menus or custom close behaviors.

```svelte example class="h-96 md:h-80"
{#include Close.svelte}
```

## Navbar with dropdown

This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.

```svelte example class="h-96 md:h-80"
{#include Dropdown.svelte}
```

## Navbar with search

Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.

```svelte example class="h-96 md:h-80"
{#include Search.svelte}
```

## Navbar with CTA button

Use the following navbar element to show a call to action button alongside the logo and page links.

```svelte example class="h-96 md:h-80"
{#include Cta.svelte}
```

## Sticky navbar

Use this example to keep the navbar positioned fixed to the top side as you scroll down the document page.

```svelte example class="p-2 sm:p-6 h-96 md:h-80 overflow-hidden"
{#include Sticky.svelte}
```

## User menu dropdown

Use this example to create a navigation bar with a user profile or button to toggle a dropdown menu.

```svelte example class="h-96 md:h-80"
{#include User.svelte}
```

## Solid background

Use this example to show a solid background for the navbar component instead of being transparent.

```svelte example class="h-96 md:h-80"
{#include Solid.svelte}
```

## Breakpoint

Use `breakpoint="sm" | "md" (default) | "lg" | "xl"` prop to change the breakpoint of navbar.

```svelte example class="h-96 md:h-80"
{#include Breakpoint.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Navbar](https://flowbite.com/docs/components/navbar/)

<GitHubCompoLinks />
