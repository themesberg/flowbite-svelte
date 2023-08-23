<script lang="ts">
  // import type { TimelineItemHorizontalType } from '../types';
  // export let timelineItems: TimelineItemHorizontalType[];
  import { twMerge } from 'tailwind-merge';
  export let title: string;
  export let date: string;
  export let href: string;
  export let text: string;
  export let liClass: string = 'relative mb-6 sm:mb-0';
  export let divClass: string = 'flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0';
  export let h3Class: string = 'text-lg font-semibold text-gray-900 dark:text-white';
  export let timeClass: string = 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500';
  export let pClass: string = 'text-base font-normal text-gray-500 dark:text-gray-400';
  export let aClass: string = 'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700';
  export let linkname: string;
  export let icon: string;
  let liCls: string = twMerge(liClass, $$props.classLi);
  let divCls: string = twMerge(divClass, $$props.classDiv);
  let h3Cls: string = twMerge(h3Class, $$props.classH3);
  let timeCls: string = twMerge(timeClass, $$props.classTime);
  let pCls: string = twMerge(pClass, $$props.classP);
  let aCls: string = twMerge(aClass, $$props.classA);
</script>

<li class={liCls}>
  <div class="flex items-center">
    <div class={divCls}>
      {#if icon}
        {@html icon}
      {:else}
        <svg class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
      {/if}
    </div>
    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
  </div>
  <div class="mt-3 sm:pr-8">
    <h3 class={h3Cls}>{title}</h3>
    <time class={timeCls}>{date}</time>
    <p class={pCls}>
      {text}
    </p>
  </div>
  {#if href}
    <a {href} class={aCls}>
      {linkname}
      <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let timelineItems: TimelineItemHorizontalType[];
@prop export let title: string;
@prop export let date: string;
@prop export let href: string;
@prop export let text: string;
@prop export let liClass: string = 'relative mb-6 sm:mb-0';
@prop export let divClass: string = 'flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0';
@prop export let h3Class: string = 'text-lg font-semibold text-gray-900 dark:text-white';
@prop export let timeClass: string = 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500';
@prop export let pClass: string = 'text-base font-normal text-gray-500 dark:text-gray-400';
@prop export let aClass: string = 'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700';
@prop export let linkname: string;
@prop export let icon: string;
-->
