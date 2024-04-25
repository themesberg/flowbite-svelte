---
layout: componentLayout
title: Svelte Timeline - Flowbite
breadcrumb_title: Svelte Timeline
component_title: Timeline
dir: Components
description: Get started with the responsive timeline component to show data in a chronological order with support for multiple styles, sizes, and variants
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more.

## Setup

```svelte example hideOutput
<script>
  import { Timeline, TimelineItem, Activity, ActivityItem, Group, GroupItem } from 'flowbite-svelte';
</script>
```

## Default timeline

```svelte example
<script>
  import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Timeline>
  <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
  </TimelineItem>
</Timeline>
```

## Vertical Timeline

Use this vertical timeline component with icons and badges to show a more advanced set of data.

```svelte example
<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';
  import { CalendarWeekSolid } from 'flowbite-svelte-icons';
</script>

<Timeline order="vertical">
  <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
    <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
      </span>
    </svelte:fragment>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
    <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
      </span>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
    <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
      </span>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
  </TimelineItem>
</Timeline>
```

## Horizontal Timeline

Use this horizontally aligned timeline component to show a series of data in a chronological order.

```svelte example
<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';
  import { CalendarWeekSolid } from 'flowbite-svelte-icons';
</script>

<Timeline order="horizontal">
  <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
    <svelte:fragment slot="icon">
      <div class="flex items-center">
        <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
    <svelte:fragment slot="icon">
      <div class="flex items-center">
        <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
    <svelte:fragment slot="icon">
      <div class="flex items-center">
        <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
</Timeline>
```

## Activity Log

This component can be used to show the timline of a user’s activity history inside your application by using an avatar, datetime, description, and links to specific pages.

<Badge large>Warning: the ActivityItem title and text are using @html.</Badge>

```svelte example
<script>
  import { Activity, ActivityItem } from 'flowbite-svelte';
  let activities = [
    {
      title: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: 'just now',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp'
    },
    {
      title: 'We don’t serve their kind here! What? Your droids. ',
      date: '2 hours ago',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp',
      text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
    },
    {
      title: 'They’ll have to wait outside. We don’t want them here. ',
      date: '1 day ago',
      alt: 'image alt here',
      src: '/images/profile-picture-3.webp'
    }
  ];
</script>

<Activity>
  <ActivityItem {activities} />
</Activity>
```

## Grouped timeline

Use this component to group multiple data entries inside a single date and show elements like the avatar, title, description, tag and link to a relevant page.

<Badge large>Warning: the GroupItem title is using @html.</Badge>

```svelte example
<script>
  import { Group, GroupItem } from 'flowbite-svelte';
  let groupTimelines = [
    {
      title: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: '/images/profile-picture-1.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      title: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
      src: '/images/profile-picture-2.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
</script>

<Group date="January 13th, 2022">
  <GroupItem timelines={groupTimelines} />
</Group>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Timeline styling

- Use the `class` prop to overwrite the `ol` tag class.

### TimelineItem styling

- Use the `classLi` prop to overwrite the `li` tag class.
- Use the `classDiv` prop to overwrite the `div` tag class.
- Use the `classTime` prop to overwrite the `time` tag class.

### Activity styling

- Use the `class` prop to overwrite `olClass`.

### ActivityItem styling

- Use the `classLi` prop to overwrite `liClass`.
- Use the `classSpan` prop to overwrite `spanClass`.
- Use the `classImg` prop to overwrite `imgClass`.
- Use the `classOuterDiv` prop to overwrite `outerDivClass`.
- Use the `classInnerDiv` prop to overwrite `innerDivClass`.
- Use the `classTime` prop to overwrite `timeClass`.
- Use the `classTitle` prop to overwrite `titleClass`.
- Use the `classText` prop to overwrite `textClass`.

### Group styling

- Use the `classDiv` prop to overwrite `divClass`.
- Use the `classTime` prop to overwrite `timeClass`.
- Use the `classOl` prop to overwrite `olClass`.

### GroupItem styling

- Use the `classA` prop to overwrite `aClass`.
- Use the `classImg` prop to overwrite `imgClass`.
- Use the `classDiv` prop to overwrite `divClass`.
- Use the `classTitle` prop to overwrite `titleClass`.
- Use the `classSpan` prop to overwrite `spanClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Timeline](https://flowbite.com/docs/components/timeline/)

<GitHubCompoLinks />
