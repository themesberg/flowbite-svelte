<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let icon: boolean = false;
  export let divClass: string = 'inline-flex items-center justify-center w-full';
  export let hrClass: string = 'h-px my-8 bg-gray-200 border-0 dark:bg-gray-700';
  export let iconDivClass: string = 'absolute left-1/2 px-4 bg-white -translate-x-1/2 ';
  export let textSpanClass: string = 'absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 ';
  export let innerDivClass: string = 'absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900';

  let horizontalCls: string = twMerge(hrClass, $$props.classHr);
  let divCls = twMerge(divClass, $$slots && 'relative', $$props.classDiv);
  let innerDivCls = twMerge(innerDivClass, icon ? iconDivClass : textSpanClass, $$props.classInnerDiv);
</script>

{#if $$slots.default}
  <div {...$$restProps} class={divCls}>
    <hr class={horizontalCls} />
    <div class={innerDivCls}>
      <slot />
    </div>
  </div>
{:else}
  <hr class={horizontalCls} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let icon: boolean = false;
@prop export let divClass: string = 'inline-flex items-center justify-center w-full';
@prop export let hrClass: string = 'h-px my-8 bg-gray-200 border-0 dark:bg-gray-700';
@prop export let iconDivClass: string = 'absolute left-1/2 px-4 bg-white -translate-x-1/2 ';
@prop export let textSpanClass: string = 'absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 ';
@prop export let innerDivClass: string = 'absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900';
-->
