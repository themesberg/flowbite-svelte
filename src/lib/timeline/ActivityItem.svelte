<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { ActivityType } from '../types';

  export let activities: ActivityType[];
  export let liClass: string = 'mb-10 ml-6';
  export let spanClass: string =
    'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900';
  export let imgClass: string = 'rounded-full shadow-lg';
  export let outerDivClass: string =
    'p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600';
  export let innerDivClass: string = 'justify-between items-center mb-3 sm:flex';
  export let timeClass: string = 'mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0';
  export let titleClass: string = 'text-sm font-normal text-gray-500 lex dark:text-gray-300';
  export let textClass: string =
    'p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300';

  let liCls: string = twMerge(liClass, $$props.classLi);
  let spanCls: string = twMerge(spanClass, $$props.classSpan);
  let imgCls: string = twMerge(imgClass, $$props.classImg);
  let outerDivCls: string = twMerge(outerDivClass, $$props.classOuterDiv);
  let innerDivCls: string = twMerge(innerDivClass, $$props.classInnerDiv);
  let timeCls: string = twMerge(timeClass, $$props.classTime);
  let titleCls: string = twMerge(titleClass, $$props.classTitle);
  let textCls: string = twMerge(textClass, $$props.classText);
</script>

{#each activities as { title, date, src, alt, text }}
  <li class={liCls}>
    <span class={spanCls}>
      <img class={imgCls} {src} {alt} />
    </span>
    <div class={outerDivCls}>
      <div class={innerDivCls}>
        <time class={timeCls}>{date}</time>
        <div class={titleCls}>
          {@html title}
        </div>
      </div>
      {#if text}
        <div class={textCls}>
          {@html text}
        </div>
      {/if}
    </div>
  </li>
{/each}

<!--
  @component
  ## Features
  [Go to Timeline Activity Log](https://flowbite-svelte.com/docs/components/timeline#Activity_Log)
  - Setup
  - Default timeline
  - Vertical Timeline
  - Horizontal Timeline
  - Activity Log
  - Grouped timeline
  ## Props
  @prop activities: ActivityType[];
  @prop liClass: string';
  @prop spanClass: string;
  @prop imgClass: string;
  @prop outerDivClass: string;
  @prop innerDivClass: string;
  @prop timeClass
  @prop titleClass
  @prop textClass
  ## Example
  ```
  <script>
    import { Activity, ActivityItem } from 'flowbite-svelte';
    let activities = [
      {
        title:
          'Bonnie moved <a href="/" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
        date: 'just now',
        alt: 'image alt here',
        src: '/images/profile-picture-2.webp'
      },
      {
        title: 'We don’t serve their kind here! What? Your droids. ',
        date: '2 hours ago',
        alt: 'image alt here',
        src: '/images/profile-picture-2.webp',
        text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
      },
      {
        title: 'They’ll have to wait outside. We don’t want them here. ',
        date: '1 day ago',
        alt: 'image alt here',
        src: '/images/profile-picture-3.webp'
      }
    ];
  </script>

  <Activity>
    <ActivityItem {activities} />
  </Activity>
  ```
-->
