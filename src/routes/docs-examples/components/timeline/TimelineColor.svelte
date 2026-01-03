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

    <TimelineItem title={appointment.title} date={appointment.date} color={itemColor} isLast={isLastItem} dateFormat="full-date" classes={{ title: "ml-4" }} datePrefix="Released on">
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
