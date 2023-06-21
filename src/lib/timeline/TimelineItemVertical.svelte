<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let title: string;
  export let date: string;
  export let liClass: string = 'mb-10 ml-6';
  export let spanClass: string =
    'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900';
  export let h3Class: string = 'flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white';
  export let timeClass: string =
    'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500';

  let liCls: string = twMerge(liClass, $$props.classLi);
  let spanCls: string = twMerge(spanClass, $$props.classSpan);
  let h3Cls: string = twMerge(h3Class, $$props.classH3);
  let timeCls: string = twMerge(timeClass, $$props.classTime);
</script>

<li class={liCls}>
  <span class={spanCls}>
    {#if $$slots.icon}
      <slot name="icon" />
    {:else}
      <svg
        width="20"
        height="20"
        class="text-blue-600 dark:text-blue-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd" /></svg>
    {/if}
  </span>

  <h3 class={h3Cls}>
    {title}
  </h3>
  <time class={timeCls}>{date}</time>
  <slot />
</li>

<!--
  @component
  ## Features
  [Go to Vertical Timeline](https://flowbite-svelte.com/docs/components/timeline#Vertical_Timeline)
  - Setup
  - Default timeline
  - Vertical Timeline
  - Horizontal Timeline
  - Activity Log
  - Grouped timeline
  ## Props
  @prop title: string;
  @prop date: string;
  @prop liClass: string;
  @prop spanClass: string;
  @prop h3Class: string;
  @prop timeClass: string;
  ## Example
  ```
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
  
-->
