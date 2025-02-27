<script lang="ts">
  import type { HTMLOlAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLOlAttributes {
    divClass?: string;
    timeClass?: string;
    date?: Date | string;
    olClass?: string;
    classDiv?: string;
    classTime?: string;
    classOl?: string;
  }

  export let divClass: $$Props['divClass'] = 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700';
  export let timeClass: $$Props['timeClass'] = 'text-lg font-semibold text-gray-900 dark:text-white';
  export let date: $$Props['date'] = '';
  export let olClass: $$Props['olClass'] = 'mt-3 divide-y divider-gray-200 dark:divide-gray-700';
  export let classDiv: $$Props['classDiv'] = '';
  export let classTime: $$Props['classTime'] = '';
  export let classOl: $$Props['classOl'] = '';
  
  let divCls: string = twMerge(divClass, classDiv);
  let timeCls: string = twMerge(timeClass, classTime);
  let olCls: string = twMerge(olClass, classOl);
</script>

<div class={divCls}>
  <time class={timeCls}>{date}</time>
  <ol {...$$restProps} class={olCls}>
    <slot />
  </ol>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700';
@prop export let timeClass: $$Props['timeClass'] = 'text-lg font-semibold text-gray-900 dark:text-white';
@prop export let date: $$Props['date'] = '';
@prop export let olClass: $$Props['olClass'] = 'mt-3 divide-y divider-gray-200 dark:divide-gray-700';
@prop export let classDiv: $$Props['classDiv'] = '';
@prop export let classTime: $$Props['classTime'] = '';
@prop export let classOl: $$Props['classOl'] = '';
-->
