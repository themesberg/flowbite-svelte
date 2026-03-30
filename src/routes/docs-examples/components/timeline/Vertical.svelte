<script lang="ts">
  import { Timeline, TimelineItem } from "flowbite-svelte";
  import { CalendarWeekSolid } from "flowbite-svelte-icons";
</script>

<Timeline order="vertical">
  <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
    {#snippet orientationSlot()}
      <span class="bg-brand-softer ring-buffer absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8">
        <CalendarWeekSolid class="text-fg-brand-strong h-4 w-4" />
      </span>
    {/snippet}
    <p class="text-body mb-4 pl-4 text-base font-normal">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
    {#snippet orientationSlot()}
      <span class="bg-brand-softer ring-buffer absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8">
        <CalendarWeekSolid class="text-fg-brand-strong h-4 w-4" />
      </span>
    {/snippet}
    <p class="text-body pl-4 text-base font-normal">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
    {#snippet orientationSlot()}
      <span class="bg-brand-softer ring-buffer absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8">
        <CalendarWeekSolid class="text-fg-brand-strong h-4 w-4" />
      </span>
    {/snippet}
    <p class="text-body pl-4 text-base font-normal">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
  </TimelineItem>
</Timeline>
