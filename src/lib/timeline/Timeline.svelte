<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';
  export let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' = 'default';

  setContext('order', order);
  let olClasses = {
    group: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
    horizontal: 'sm:flex',
    activity: 'relative border-l border-gray-200 dark:border-gray-700',
    vertical: 'relative border-l border-gray-200 dark:border-gray-700',
    default: 'relative border-l border-gray-200 dark:border-gray-700'
  };
</script>

<ol class={twMerge(olClasses[order], $$props.class)}>
  <slot />
</ol>

<!--
  @component
  ## Features
  [Go to Timeline](https://flowbite-svelte.com/docs/components/timeline#Default_timeline)
  - Setup
  - Default timeline
  - Vertical Timeline
  - Horizontal Timeline
  - Activity Log
  - Grouped timeline
  ## Props
  @prop customClass: string = '';
  @prop order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' | 'custom' = 'default';
  ## Example
  ```
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
  
-->
