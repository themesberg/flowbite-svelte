<script lang="ts">
  interface Props {
    divclass?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';
  let { divclass }: Props = $props();
  let divCls: string = twMerge('animate-pulse', divclass);
</script>

<div role="status" class={divCls}>
  <div
    class="mx-auto mb-2.5 h-2.5 max-w-[640px] rounded-full bg-gray-300 dark:bg-gray-700"
  ></div>
  <div
    class="mx-auto h-2.5 max-w-[540px] rounded-full bg-gray-300 dark:bg-gray-700"
    ></div>
  <div class="mt-4 flex items-center justify-center">
    <svg
      class="me-2 h-10 w-10 text-gray-200 dark:text-gray-700"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <div class="me-3 h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-2 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop divclass
-->
