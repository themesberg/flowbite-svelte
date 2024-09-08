<script lang="ts">
  import { Group, GroupItem, Activity, ActivityItem, Timeline, TimelineItem, Button } from '$lib';
  import { ArrowRightOutline, CalendarWeekSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'timeline';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let activities = [
    {
      name: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: 'just now',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp'
    },
    {
      name: 'We don’t serve their kind here! What? Your droids. ',
      date: '2 hours ago',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp',
      activity: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
    },
    {
      name: 'They’ll have to wait outside. We don’t want them here. ',
      date: '1 day ago',
      alt: 'image alt here',
      src: '/images/profile-picture-3.webp'
    }
  ];

  let groupTimelines = [
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: '/images/profile-picture-1.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
      src: '/images/profile-picture-2.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
</script>

<H1>Timeline</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default timeline</H2>
<CodeWrapper>
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
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/default-timeline.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Vertical timeline</H2>
<CodeWrapper>
  <Timeline order="vertical">
    <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
      {#snippet orientationSlot()}
        <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
          <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
        </span>
      {/snippet}
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
      {#snippet orientationSlot()}
        <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
          <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
        </span>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
      {#snippet orientationSlot()}
        <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
          <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
        </span>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </TimelineItem>
  </Timeline>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/vertical-timeline.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal Timeline</H2>
<CodeWrapper>
  <Timeline order="horizontal">
    <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
      {#snippet orientationSlot()}
        <div class="flex items-center">
          <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
            <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
          </div>
          <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
        </div>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
      {#snippet orientationSlot()}
        <div class="flex items-center">
          <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
            <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
          </div>
          <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
        </div>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
    <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
      {#snippet orientationSlot()}
        <div class="flex items-center">
          <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">
            <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
          </div>
          <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
        </div>
      {/snippet}
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
    </TimelineItem>
  </Timeline>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/horizontal-timeline.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Activity Log</H2>
<CodeWrapper>
  <Activity>
    <ActivityItem {activities} />
  </Activity>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/activity-log.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Grouped timeline</H2>
<CodeWrapper>
  <Group date="January 13th, 2022">
    <GroupItem timelines={groupTimelines} />
  </Group>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/grouped-timeline.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
