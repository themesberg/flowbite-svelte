<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let olClass: string = 'sm:flex';

  let olCls: string = twMerge(olClass, $$props.class);
</script>

<ol class={olCls}>
  <slot />
</ol>

<!--
  @component
  ## Features
  [Go to Horizontal Timeline](https://flowbite-svelte.com/docs/components/timeline#Horizontal_Timeline)
  - Setup
  - Default timeline
  - Vertical Timeline
  - Horizontal Timeline
  - Activity Log
  - Grouped timeline
  ## Props
  @prop olClass: string = 'sm:flex';
  ## Example
  ```
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
-->
