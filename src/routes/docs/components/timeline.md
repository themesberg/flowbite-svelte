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
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { Button, P, A } from '$lib'
  import { props as items1 }  from '../../props/Timeline.json'
  import { props as items2 }  from '../../props/TimelineItem.json'
  import { props as items3 }  from '../../props/TimelineItemVertical.json'
  import { props as items4 }  from '../../props/TimelineHorizontal.json'
  import { props as items5 }  from '../../props/TimelineItemHorizontal.json'
  import { props as items6 }  from '../../props/Activity.json'
  import { props as items7 }  from '../../props/ActivityItem.json'
  import { props as items8 }  from '../../props/Group.json'
  import { props as items9 }  from '../../props/GroupItem.json'
</script>



The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more.

## Setup

```svelte example hideOutput
<script>
  import { Timeline, TimelineItem, TimelineItemVertical, TimelineItemHorizontal, TimelineHorizontal, Activity, ActivityItem, Group, GroupItem } from 'flowbite-svelte';
</script>
```

## Default timeline

```svelte example
<script>
  import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
</script>

<Timeline>
  <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
      and pre-order E-commerce & Marketing pages.
    </p>
    <Button color="alternative"
      >Learn more<svg
        class="ml-2 w-3 h-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd" /></svg
      ></Button>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      All of the pages and components are first designed in Figma and we keep a parity between the
      two versions even as we update the project.
    </p>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      Get started with dozens of web components and interactive elements built on top of Tailwind
      CSS.
    </p>
  </TimelineItem>
</Timeline>
```

## Vertical Timeline

Use this vertical timeline component with icons and badges to show a more advanced set of data.

```svelte example
<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';
</script>

<Timeline order="vertical">
  <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
    <svelte:fragment slot="icon">
      <span
        class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd" /></svg>
      </span>
    </svelte:fragment>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
      and pre-order E-commerce & Marketing pages.
    </p>
  </TimelineItem>
  <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
    <svelte:fragment slot="icon">
      <span
        class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd" /></svg>
      </span>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      All of the pages and components are first designed in Figma and we keep a parity between the
      two versions even as we update the project.
    </p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
    <svelte:fragment slot="icon">
      <span
        class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd" /></svg>
      </span>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      Get started with dozens of web components and interactive elements built on top of Tailwind
      CSS.
    </p>
  </TimelineItem>
</Timeline>
```

## Horizontal Timeline

Use this horizontally aligned timeline component to show a series of data in a chronological order.

```svelte example
<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';
</script>

<Timeline order="horizontal">
  <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
    <svelte:fragment slot="icon">
        <div class="flex items-center">
          <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      Get started with dozens of web components and interactive elements.
    </p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
    <svelte:fragment slot="icon">
        <div class="flex items-center">
          <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      Get started with dozens of web components and interactive elements.
    </p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
    <svelte:fragment slot="icon">
        <div class="flex items-center">
          <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      Get started with dozens of web components and interactive elements.
    </p>
  </TimelineItem>
</Timeline>
```

## Activity Log

This component can be used to show the timline of a user’s activity history inside your application by using an avatar, datetime, description, and links to specific pages.

```svelte example
<script>
  import { Activity, ActivityItem } from 'flowbite-svelte';
  let activities = [
    {
      title:
        'Bonnie moved <a href="/" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
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

```svelte example
<script>
  import { Group, GroupItem } from 'flowbite-svelte';
  let groupTimelines = [
    {
      title:
        '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: '/images/profile-picture-1.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      title:
        '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
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

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Timeline

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

### TimelineItem

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### TimelineItemVertical

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### TimelineHorizontal

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### TimelineItemHorizontal

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### Activity

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

### ActivityItem

<TableProp>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

### Group

<TableProp>
  <TableDefaultRow items={items8} rowState='hover' />
</TableProp>

### GroupItem

<TableProp>
  <TableDefaultRow items={items9} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/timeline/" target="_blank" rel="noreferrer" class="link"
    >Flowbite timeline</A
  >
</P>