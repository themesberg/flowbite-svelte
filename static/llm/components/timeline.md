# Svelte Timeline - Flowbite


The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more.

## Setup

```svelte
<script lang="ts">
  import { Timeline, TimelineItem, Activity, ActivityItem, Group, GroupItem } from "flowbite-svelte";
</script>
```

## Default timeline

The default has no icon slot. If you prefer to have icons, use `order='vertical'` or `order='horizontal'`.

```svelte
<script lang="ts">
  import { Timeline, TimelineItem, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Timeline>
  <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
    </p>
    <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
    </p>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
  </TimelineItem>
</Timeline>
```

## Vertical Timeline

Use this vertical timeline component with icons and badges to show a more advanced set of data.

```svelte
<script lang="ts">
  import { Timeline, TimelineItem } from "flowbite-svelte";
  import { CalendarWeekSolid } from "flowbite-svelte-icons";
</script>

<Timeline order="vertical">
  <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
    {#snippet orientationSlot()}
      <span class="bg-primary-200 dark:bg-primary-900 absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
        <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
      </span>
    {/snippet}
    <p class="mb-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
    </p>
  </TimelineItem>
  <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
    {#snippet orientationSlot()}
      <span class="bg-primary-200 dark:bg-primary-900 absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
        <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
      </span>
    {/snippet}
    <p class="pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
      All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
    </p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
    {#snippet orientationSlot()}
      <span class="bg-primary-200 dark:bg-primary-900 absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
        <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
      </span>
    {/snippet}
    <p class="pl-4 text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
  </TimelineItem>
</Timeline>
```

## Horizontal Timeline

Use this horizontally aligned timeline component to show a series of data in a chronological order.

```svelte
<script lang="ts">
  import { Timeline, TimelineItem } from "flowbite-svelte";
  import { CalendarWeekSolid } from "flowbite-svelte-icons";
</script>

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
```

## TimelineItem color depends on state 

Use the following example to add different colors depends on state (past, current, future, etc.) to the timeline:

```svelte
<script lang="ts">
  import { Timeline, TimelineItem, P } from "flowbite-svelte";
  import { CalendarWeekSolid, CheckCircleSolid, ClockSolid } from "flowbite-svelte-icons";
  import dayjs from "dayjs";

  const pastDate = dayjs().subtract(3, "day").hour(14).minute(0).second(0).format("YYYY-MM-DDTHH:mm:ss");
  const currentDate = dayjs().hour(10).minute(0).second(0).format("YYYY-MM-DDTHH:mm:ss");
  const futureDate = dayjs().add(3, "day").hour(15).minute(30).second(0).format("YYYY-MM-DDTHH:mm:ss");
  const futureDate2 = dayjs().add(5, "day").hour(15).minute(30).second(0).format("YYYY-MM-DDTHH:mm:ss");

  const appointments = [
    {
      id: 1,
      title: "Team Meeting",
      date: pastDate,
      status: "completed",
      description: "Weekly team sync and project updates"
    },
    {
      id: 2,
      title: "Client Presentation",
      date: currentDate,
      status: "in-progress",
      description: "Present Q3 results to stakeholders"
    },
    {
      id: 3,
      title: "Product Demo",
      date: futureDate,
      status: "upcoming",
      description: "Demo new features to potential customers"
    },
    {
      id: 4,
      title: "Code Review",
      date: futureDate2,
      status: "upcoming",
      description: "Review pull requests and discuss architecture"
    }
  ];

  const releases = [
    {
      title: "Flowbite Library v1.0.0",
      date: "Released on December 2nd, 2021",
      status: "completed",
      description: "Get started with dozens of web components and interactive elements."
    },
    {
      title: "Flowbite Library v1.2.0",
      date: "Released on December 23rd, 2021",
      status: "completed",
      description: "Added new components and improved accessibility."
    },
    {
      title: "Flowbite Library v2.0.0",
      date: "Coming Q1 2025",
      status: "upcoming",
      description: "Major overhaul with new design system and features."
    }
  ];

  function getColorForStatus(status: string) {
    switch (status) {
      case "completed":
        return "green";
      case "in-progress":
        return "orange";
      case "upcoming":
        return "blue";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  }

  function getIconForStatus(status: string) {
    switch (status) {
      case "completed":
        return CheckCircleSolid;
      case "in-progress":
        return ClockSolid;
      default:
        return CalendarWeekSolid;
    }
  }

  function getConnectorColor(status: string) {
    switch (status) {
      case "completed":
        return "bg-green-200 dark:bg-green-700";
      case "in-progress":
        return "bg-orange-200 dark:bg-orange-700";
      case "upcoming":
        return "bg-blue-200 dark:bg-blue-700";
      default:
        return "bg-gray-200 dark:bg-gray-700";
    }
  }
</script>

<P class="my-4 text-xl font-semibold">Example 1</P>

<Timeline order="vertical">
  {#each appointments as appointment, index}
    {@const isLastItem = index === appointments.length - 1}
    {@const itemColor = getColorForStatus(appointment.status)}
    {@const IconComponent = getIconForStatus(appointment.status)}

    <TimelineItem title={appointment.title} date={appointment.date} color={itemColor} isLast={isLastItem} dateFormat="full-date" classes={{ h3: "ml-4" }} datePrefix="Released on">
      {#snippet orientationSlot()}
        <span
          class="absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900 {appointment.status === 'completed'
            ? 'bg-green-200 dark:bg-green-900'
            : appointment.status === 'in-progress'
              ? 'bg-orange-200 dark:bg-orange-900'
              : appointment.status === 'upcoming'
                ? 'bg-blue-200 dark:bg-blue-900'
                : 'bg-gray-200 dark:bg-gray-900'}"
        >
          <IconComponent
            class="h-4 w-4 {appointment.status === 'completed'
              ? 'text-green-600 dark:text-green-400'
              : appointment.status === 'in-progress'
                ? 'text-orange-600 dark:text-orange-400'
                : appointment.status === 'upcoming'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400'}"
          />
        </span>
      {/snippet}
      <div class="pl-4">
        <p class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
          {appointment.description}
        </p>
        <span
          class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium {appointment.status === 'completed'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            : appointment.status === 'in-progress'
              ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
              : appointment.status === 'upcoming'
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'}"
        >
          {appointment.status.replace("-", " ")}
        </span>
      </div>
    </TimelineItem>
  {/each}
</Timeline>

<P class="my-4 text-xl font-semibold">Example 2</P>
<Timeline order="vertical" class="mt-8">
  <TimelineItem title="Past Event" date={pastDate} color="green" dateFormat="full-date" datePrefix="Released on">
    <p class="pl-4 text-sm text-gray-500 dark:text-gray-400">This event has already happened</p>
  </TimelineItem>

  <TimelineItem title="Current Event" date={currentDate} color="orange" dateFormat="full-date" datePrefix="Released on">
    <p class="pl-4 text-sm text-gray-500 dark:text-gray-400">This event is happening now</p>
  </TimelineItem>

  <TimelineItem title="Future Event" date={futureDate} color="blue" isLast={true} dateFormat="full-date" datePrefix="Released on">
    <p class="pl-4 text-sm text-gray-500 dark:text-gray-400">This event will happen in the future</p>
  </TimelineItem>
</Timeline>

<P class="my-4 text-xl font-semibold">Example 3</P>
<Timeline order="horizontal">
  {#each releases as release, index}
    {@const isLastItem = index === releases.length - 1}
    {@const itemColor = getColorForStatus(release.status)}
    {@const connectorColor = getConnectorColor(release.status)}

    <TimelineItem title={release.title} date={release.date} color={itemColor} isLast={isLastItem} datePrefix="Released on">
      {#snippet orientationSlot()}
        <div class="flex items-center">
          <div
            class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 {release.status === 'completed'
              ? 'bg-green-200 dark:bg-green-900'
              : release.status === 'in-progress'
                ? 'bg-orange-200 dark:bg-orange-900'
                : release.status === 'upcoming'
                  ? 'bg-blue-200 dark:bg-blue-900'
                  : 'bg-gray-200 dark:bg-gray-900'}"
          >
            <CalendarWeekSolid
              class="h-4 w-4 {release.status === 'completed'
                ? 'text-green-600 dark:text-green-400'
                : release.status === 'in-progress'
                  ? 'text-orange-600 dark:text-orange-400'
                  : release.status === 'upcoming'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400'}"
            />
          </div>
          {#if !isLastItem}
            <div class="hidden h-0.5 w-full sm:flex {connectorColor}"></div>
          {/if}
        </div>
      {/snippet}

      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        {release.description}
      </p>

      <span
        class="mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium {release.status === 'completed'
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
          : release.status === 'in-progress'
            ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
            : release.status === 'upcoming'
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'}"
      >
        {release.status.replace("-", " ")}
      </span>
    </TimelineItem>
  {/each}
</Timeline>

<P class="my-4 text-xl font-semibold">Example 4</P>
<Timeline order="horizontal" class="mt-8">
  <TimelineItem title="Past Release" color="green" date={pastDate}>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">This version was released successfully</p>
  </TimelineItem>

  <TimelineItem title="Current Development" color="orange" date={currentDate}>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">This version is currently in development</p>
  </TimelineItem>

  <TimelineItem title="Future Release" color="blue" isLast={true} date={futureDate}>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">This version is planned for the future</p>
  </TimelineItem>
</Timeline>
```

## Activity Log

This component can be used to show the timline of a user’s activity history inside your application by using an avatar, datetime, description, and links to specific pages.

<Badge large>Warning: the ActivityItem title and text are using @html.</Badge>

```svelte
<script lang="ts">
  import { Activity, ActivityItem } from "flowbite-svelte";
  let activities = [
    {
      title:
        'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: "just now",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp"
    },
    {
      title: "We don’t serve their kind here! What? Your droids. ",
      date: "2 hours ago",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp",
      text: "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. "
    },
    {
      title: "They’ll have to wait outside. We don’t want them here. ",
      date: "1 day ago",
      alt: "image alt here",
      src: "/images/profile-picture-3.webp"
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

```svelte
<script lang="ts">
  import { Group, GroupItem } from "flowbite-svelte";
  let groupTimelines = [
    {
      title:
        '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
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

<Group date="January 13th, 2022">
  <GroupItem timelines={groupTimelines} />
</Group>
```

## Component data

### Activity

#### Types

[ActivityProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1808)

#### Props

- children
- class: className

### ActivityItem

#### Types

[ActivityItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1812)

#### Props

- activities
- liClass
- spanClass
- imgClass
- outerDivClass
- innerDivClass
- timeClass
- titleClass
- textClass
- class: className
- classes

### Group

#### Types

[GroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1824)

#### Props

- children
- divClass
- timeClass
- date
- olClass
- class: className
- classes

### GroupItem

#### Types

[GroupItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1832)

#### Props

- timelines
- aClass
- imgClass
- divClass
- titleClass
- spanClass
- class: className
- classes

### Timeline

#### Types

[TimelineProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1852)

#### Props

- children
- order: "default"
- class: className

### TimelineItem

#### Types

[TimelineItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1859)

#### Props

- children
- orientationSlot
- title
- date
- dateFormat: "month-year"
- color: "primary"
- isLast: false
- svgClass
- liClass
- divClass
- timeClass
- h3Class
- connectorClass
- datePrefix
- class: className
- classes


## References

- [Flowbite Timeline](https://flowbite.com/docs/components/timeline/)
