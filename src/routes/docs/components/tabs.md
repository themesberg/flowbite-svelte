---
layout: componentLayout
title: Svelte Tabs - Flowbite
breadcrumb_title: Svelte Tabs
component_title: Tabs
dir: Components
description: Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Setup

```svelte example hideOutput
<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>
```

## Default tabs

Use the following default tabs component example to show a dynamic content in your webpage.

<p class="my-2"></p>

If your tab title is a simple string set the `title` property on `TabItem`, otherwise when more control is needed overwrite the `title` slot.

<p class="my-2"></p>

The last tab in that example shows not only how to show a disabled tab, but how to use the `title` slot entry as well.

```svelte example
<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs>
  <TabItem open title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Users">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Dashboard">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem disabled>
    <span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Disabled:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Tabs with underline

You can control the style of tabs component by settings the `activeClasses` and `inactiveClasses` on the `TabItem` elements. See the `Custom style` section below for more details.

<p class="my-2"></p>

However tabs component comes with several pre-defined styles that are accessible to you by setting the `tabStyle` property. This will set the `activeClasses` and `inactiveClasses` properties for you.

<p class="my-2"></p>

Use the `tabStyle="underline"` to achieve this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

```svelte example
<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs tabStyle="underline">
  <TabItem open title="Profile">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Dashboard">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem title="Users">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem disabled>
    <span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Disabled:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Tabs with icons

This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs. Use icon components for a simple syntax. See <a href="/icons">Icons</a> for more details.

```svelte example
<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid } from 'flowbite-svelte-icons';
</script>

<Tabs tabStyle="underline">
  <TabItem open>
    <div slot="title" class="flex items-center gap-2">
      <UserCircleSolid size="md" />
      Profile
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
      <GridSolid size="md" />
      Dashboard
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
      <AdjustmentsVerticalSolid size="md" />
      Settings
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
      <ClipboardSolid size="md" />
      Contacts
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Contacts:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Pills tabs

If you want to use pills as a style for the tabs component use `tabStyle="pill"`.

```svelte example
<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs tabStyle="pill">
  <TabItem open>
    <span slot="title">Profile</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="title">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="title">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="title">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Full width tabs

If you want to show the tabs on the full width relative to the parent element use `tabStyle="full"` prop.

```svelte example
<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs tabStyle="full" defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow-sm dark:divide-gray-700">
  <TabItem class="w-full" open>
    <span slot="title">Profile</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    <span slot="title">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    <span slot="title">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem class="w-full">
    <span slot="title">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Components in tab contents

You can add other components to the `TabItem` component. Here we are adding a timeline component in the tab 1:

```svelte example class="h-auto"
<script>
  import { Tabs, TabItem, Timeline, TimelineItem, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Tabs>
  <TabItem open>
    <span slot="title">Profile</span>
    <Timeline>
      <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <Button color="alternative">
          Learn more
          <ArrowRightOutline class="ms-2 w-5 h-5" />
        </Button>
      </TimelineItem>
      <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
      </TimelineItem>
      <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </TimelineItem>
    </Timeline>
  </TabItem>
  <TabItem>
    <span slot="title">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Dashboard:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="title">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="title">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Users:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

## Custom style

To get a custom look and feel for the `Tabs` component, set `activeClasses` and `inactiveClasses` properties either on the `Tabs` component or on the individual `TabItem` components.

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### TabItem styling

- Use the `class` prop to overwrite the `li` tag class.

### Tabs styling

- Use the `class` prop to overwrite `defaultClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Tabs](https://flowbite.com/docs/components/tabs/)

<GitHubCompoLinks />
