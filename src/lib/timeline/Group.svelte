<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string =
    'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700';
  export let timeClass: string = 'text-lg font-semibold text-gray-900 dark:text-white';
  export let date: Date | string;
  export let olClass: string = 'mt-3 divide-y divider-gray-200 dark:divide-gray-700';
  let divCls: string = twMerge(divClass, $$props.classDiv);
  let timeCls: string = twMerge(timeClass, $$props.classTime);
  let olCls: string = twMerge(olClass, $$props.classOl);
</script>

<div class={divCls}>
  <time class={timeCls}>{date}</time>
  <ol class={olCls}>
    <slot />
  </ol>
</div>

<!--
  @component
  ## Features
  [Go to Grouped Timeline](https://flowbite-svelte.com/docs/components/timeline#Grouped_timeline)
  - Setup
  - Default timeline
  - Vertical Timeline
  - Horizontal Timeline
  - Activity Log
  - Grouped timeline
  ## Props
  @prop divClass: string;
  @prop timeClass: string;
  @prop date: Date | string;
  @prop olClass: string;
  ## Example
  ```
  <script>
    import { Group, GroupItem } from 'flowbite-svelte';
    let groupTimelines = [
      {
        title:
          '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
        src: '/images/profile-picture-1.webp',
        alt: 'alt here',
        href: '/',
        isPrivate: true,
        comment: '"I wanted to share a webinar zeroheight."'
      },
      {
        title:
          '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
        src: '/images/profile-picture-2.webp',
        alt: 'alt here',
        href: '/',
        isPrivate: true,
        comment: '"I wanted to share a webinar zeroheight."'
      }
    ];
  </script>

  <Group date="January 13th, 2022">
    <GroupItem timelines={groupTimelines} />
  </Group>
  ```
  
-->
