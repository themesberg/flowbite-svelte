<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string = 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700';
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
  [Go to Grouped Timeline](https://flowbite-svelte.com/docs/components/timeline#Grouped_timeline)
  ## Props
  @prop divClass: string;
  @prop timeClass: string;
  @prop date: Date | string;
  @prop olClass: string;
-->
