<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let title: string;
  export let date: string;
  export let liClass: string = 'mb-10 ml-6';
  export let spanClass: string = 'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900';
  export let h3Class: string = 'flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white';
  export let timeClass: string = 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500';

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
      <svg width="20" height="20" class="text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
      </svg>
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
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let title: string;
@prop export let date: string;
@prop export let liClass: string = 'mb-10 ml-6';
@prop export let spanClass: string = 'flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900';
@prop export let h3Class: string = 'flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white';
@prop export let timeClass: string = 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500';
-->
