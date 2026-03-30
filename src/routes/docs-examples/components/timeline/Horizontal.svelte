<script lang="ts">
  import { Timeline, TimelineItem } from "flowbite-svelte";
  import { CalendarWeekSolid } from "flowbite-svelte-icons";
</script>

<Timeline order="horizontal">
  <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
    {#snippet orientationSlot()}
      <div class="flex items-center">
        <div class="bg-brand-softer ring-buffer z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 sm:ring-8">
          <CalendarWeekSolid class="text-fg-brand-strong h-4 w-4" />
        </div>
        <div class="bg-neutral-quaternary hidden h-px w-full sm:flex"></div>
      </div>
    {/snippet}
    <p class="text-body text-base font-normal">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
    {#snippet orientationSlot()}
      <div class="flex items-center">
        <div class="bg-brand-softer ring-buffer z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 sm:ring-8">
          <CalendarWeekSolid class="text-fg-brand-strong h-4 w-4" />
        </div>
        <div class="bg-neutral-quaternary hidden h-px w-full sm:flex"></div>
      </div>
    {/snippet}
    <p class="text-body text-base font-normal">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
    {#snippet orientationSlot()}
      <div class="flex items-center">
        <div class="bg-brand-softer ring-buffer z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 sm:ring-8">
          <CalendarWeekSolid class="text-fg-brand-strong h-4 w-4" />
        </div>
        <div class="bg-neutral-quaternary hidden h-px w-full sm:flex"></div>
      </div>
    {/snippet}
    <p class="text-body text-base font-normal">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
</Timeline>
