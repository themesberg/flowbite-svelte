<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  export let title: string = '';
  export let date: string = '';
  export let svgClass: string = 'w-3 h-3 text-primary-600 dark:text-primary-400';

  let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' = 'default';
  order = getContext('order');
  const liClasses = {
    default: 'mb-10 ml-4',
    vertical: 'mb-10 ml-6',
    horizontal: 'relative mb-6 sm:mb-0',
    activity: 'mb-10 ml-6',
    group: ''
  };

  const divClasses = {
    default:
      'absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700',
    vertical:
      'flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900',
    horizontal: 'flex items-center',
    activity:
      'flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900',
    group: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700'
  };

  const timeClasses = {
    default: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
    vertical: 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
    horizontal: 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
    activity: 'mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0',
    group: 'text-lg font-semibold text-gray-900 dark:text-white'
  };

  let liCls: string = twMerge(liClasses[order], $$props.classLi);
  let divCls: string = twMerge(divClasses[order], $$props.classDiv);
  let timeCls: string = twMerge(timeClasses[order], $$props.classTime);
  const h3Cls = twMerge(
    order === 'vertical'
      ? 'flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'
      : 'text-lg font-semibold text-gray-900 dark:text-white',
    $$props.classH3
  );
</script>

<li class={liCls}>
  {#if order === 'default'}
    <div class={divCls} />
    {#if date}
      <time class={timeCls}>{date}</time>
    {/if}
    {#if title}
      <h3 class={h3Cls}>
        {title}
      </h3>
    {/if}
    <slot />
  {:else if order === 'vertical'}
    <div class={divCls} />
    {#if $$slots.icon}
      <slot name="icon" />
    {:else}
      <svg
        aria-hidden="true"
        class={svgClass}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd" /></svg>
    {/if}
    {#if title}
      <h3 class={h3Cls}>
        {title}
      </h3>
    {/if}
    {#if date}
      <time class={timeCls}>{date}</time>
    {/if}
    <slot />
  {:else if order === 'horizontal'}
    <div class={divCls} />
    {#if $$slots.icon}
      <slot name="icon" />
    {:else}
      <svg
        aria-hidden="true"
        class={svgClass}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd" /></svg>
    {/if}
    {#if title}
      <h3 class={h3Cls}>
        {title}
      </h3>
    {/if}
    {#if date}
      <time class={timeCls}>{date}</time>
    {/if}
    <slot />
  {:else}
    <div class={divCls} />
    {#if $$slots.icon}
      <slot name="icon" />
    {:else}
      <svg
        aria-hidden="true"
        class={svgClass}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd" /></svg>
    {/if}
    {#if title}
      <h3 class={h3Cls}>
        {title}
      </h3>
    {/if}
    {#if date}
      <time class={timeCls}>{date}</time>
    {/if}
    <slot />
  {/if}
</li>

<!--
  @component
  ## Features
  [Go to Timeline](https://flowbite-svelte.com/docs/components/timeline)
  - Setup
  - Default timeline
  - Vertical Timeline
  - Horizontal Timeline
  - Activity Log
  - Grouped timeline
  ## Props
  @prop title: string = '';
  @prop date: string = '';
  @prop svgCl
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
