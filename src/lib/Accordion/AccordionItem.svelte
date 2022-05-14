<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import { HiChevronDownOutline } from 'svelte-icons/hi';

  export let open: boolean = false;

  const flush = getContext<boolean>('flush');
</script>

<button
  data-testid="accordion-title-element"
  type="button"
  class={classNames(
    'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg',
    'py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
    {
      'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800': !flush,
      'text-gray-900 dark:text-white': open,
      'bg-gray-100 dark:bg-gray-800': open && !flush,
    }
  )}
  on:click={() => (open = !open)}
>
  <h2>
    <slot name="title" />
  </h2>
  <HiChevronDownOutline className={classNames('h-6 w-6 shrink-0', { 'rotate-180': open })} />
</button>

{#if open}
  <div
    {...$$props}
    class={classNames('first:rounded-t-lg py-5 px-5 last:rounded-b-lg dark:bg-gray-900', $$props.class)}
  >
    <slot />
  </div>
{/if}
