<script>
  import { Timeline, TimelineItem, Activity, ActivityItem, Group, GroupItem, Button, Badge } from "$lib";
  import { ArrowRightOutline, CalendarWeekSolid } from "flowbite-svelte-icons";

  let activities = [
    {
      title: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: "just now",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp"
    },
    {
      title: "We don't serve their kind here! What? Your droids. ",
      date: "2 hours ago",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp",
      text: "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. "
    },
    {
      title: "They'll have to wait outside. We don't want them here. ",
      date: "1 day ago",
      alt: "image alt here",
      src: "/images/profile-picture-3.webp"
    }
  ];

  let groupTimelines = [
    {
      title: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: "/images/profile-picture-1.webp",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      title: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
      src: "/images/profile-picture-2.webp",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
</script>

<h1 class="my-4 text-3xl">Timeline</h1>

<p>The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more.</p>

<h2 class="my-4 text-2xl">Default timeline</h2>

<div class="border rounded p-8 my-4">
  <Timeline>
    <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
      <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
    </TimelineItem>
    <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </TimelineItem>
    <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </TimelineItem>
  </Timeline>
</div>

<h2 class="my-4 text-2xl">Vertical Timeline</h2>

<div class="border rounded p-8 my-4">
  <Timeline order="vertical">
    <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
      {#snippet orientationSlot()}
        <span class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
          <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
        </span>
      {/snippet}
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
      {#snippet orientationSlot()}
        <span class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
          <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
        </span>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
      {#snippet orientationSlot()}
        <span class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
          <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
        </span>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </TimelineItem>
  </Timeline>
</div>

<h2 class="my-4 text-2xl">Horizontal Timeline</h2>

<div class="border rounded p-8 my-4">
  <Timeline order="horizontal">
    <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
      {#snippet orientationSlot()}
        <div class="flex items-center">
          <div class="bg-primary-200 dark:bg-primary-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900">
            <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
          </div>
          <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
        </div>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
      {#snippet orientationSlot()}
        <div class="flex items-center">
          <div class="bg-primary-200 dark:bg-primary-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900">
            <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
          </div>
          <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
        </div>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
      {#snippet orientationSlot()}
        <div class="flex items-center">
          <div class="bg-primary-200 dark:bg-primary-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900">
            <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
          </div>
          <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
        </div>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
  </Timeline>
</div>

<h2 class="my-4 text-2xl">Activity Log</h2>

<div class="border rounded p-8 my-4">
  <Activity>
    <ActivityItem {activities} />
  </Activity>
</div>

<h2 class="my-4 text-2xl">Grouped timeline</h2>

<div class="border rounded p-8 my-4">
  <Group date="January 13th, 2022">
    <GroupItem timelines={groupTimelines} />
  </Group>
</div>

