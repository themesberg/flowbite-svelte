<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { ActivityType } from '../types';

  interface $$Props {
    activities: ActivityType[];
    liClass?: string;
    spanClass?: string;
    imgClass?: string;
    outerDivClass?: string;
    innerDivClass?: string;
    timeClass?: string;
    titleClass?: string;
    textClass?: string;
    classLi?: string;
    classSpan?: string;
    classImg?: string;
    classOuterDiv?: string;
    classInnerDiv?: string;
    classTime?: string;
    classTitle?: string;
    classText?: string;
  }

  export let activities: $$Props['activities'] = [];
  export let liClass: $$Props['liClass'] = 'mb-10 ms-6';
  export let spanClass: $$Props['spanClass'] = 'flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900';
  export let imgClass: $$Props['imgClass'] = 'rounded-full shadow-lg';
  export let outerDivClass: $$Props['outerDivClass'] = 'p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600';
  export let innerDivClass: $$Props['innerDivClass'] = 'justify-between items-center mb-3 sm:flex';
  export let timeClass: $$Props['timeClass'] = 'mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0';
  export let titleClass: $$Props['titleClass'] = 'text-sm font-normal text-gray-500 lex dark:text-gray-300';
  export let textClass: $$Props['textClass'] = 'p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300';
  export let classLi: $$Props['classLi'] = '';
  export let classSpan: $$Props['classSpan'] = '';
  export let classImg: $$Props['classImg'] = '';
  export let classOuterDiv: $$Props['classOuterDiv'] = '';
  export let classInnerDiv: $$Props['classInnerDiv'] = '';
  export let classTime: $$Props['classTime'] = '';
  export let classTitle: $$Props['classTitle'] = '';
  export let classText: $$Props['classText'] = '';

  let liCls: string = twMerge(liClass, classLi);
  let spanCls: string = twMerge(spanClass, classSpan);
  let imgCls: string = twMerge(imgClass, classImg);
  let outerDivCls: string = twMerge(outerDivClass, classOuterDiv);
  let innerDivCls: string = twMerge(innerDivClass, classInnerDiv);
  let timeCls: string = twMerge(timeClass, classTime);
  let titleCls: string = twMerge(titleClass, classTitle);
  let textCls: string = twMerge(textClass, classText);
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
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activities: $$Props['activities'] = [];
@prop export let liClass: $$Props['liClass'] = 'mb-10 ms-6';
@prop export let spanClass: $$Props['spanClass'] = 'flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900';
@prop export let imgClass: $$Props['imgClass'] = 'rounded-full shadow-lg';
@prop export let outerDivClass: $$Props['outerDivClass'] = 'p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600';
@prop export let innerDivClass: $$Props['innerDivClass'] = 'justify-between items-center mb-3 sm:flex';
@prop export let timeClass: $$Props['timeClass'] = 'mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0';
@prop export let titleClass: $$Props['titleClass'] = 'text-sm font-normal text-gray-500 lex dark:text-gray-300';
@prop export let textClass: $$Props['textClass'] = 'p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300';
@prop export let classLi: $$Props['classLi'] = '';
@prop export let classSpan: $$Props['classSpan'] = '';
@prop export let classImg: $$Props['classImg'] = '';
@prop export let classOuterDiv: $$Props['classOuterDiv'] = '';
@prop export let classInnerDiv: $$Props['classInnerDiv'] = '';
@prop export let classTime: $$Props['classTime'] = '';
@prop export let classTitle: $$Props['classTitle'] = '';
@prop export let classText: $$Props['classText'] = '';
-->
