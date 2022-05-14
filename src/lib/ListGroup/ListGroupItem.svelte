<script lang="ts">
  import classNames from 'classnames';
  import type { SvelteComponent } from 'svelte';

  export let href: string = '';
  export let icon: typeof SvelteComponent | null = null;
  export let active: boolean = false;

  $: className = classNames(
    'flex w-full items-center cursor-pointer border-b border-gray-200 py-2 px-4 first:rounded-t-lg last:rounded-b-lg last:border-b-0 dark:border-gray-600',
    {
      'bg-blue-700 text-white dark:bg-gray-800': active,
      'hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500':
        !active,
    },
    $$props.class
  );
</script>

{#if href}
  <button class={classNames('text-left', className)} data-testid="list-group-item" type="button">
    {#if icon}
      <svelte:component this={icon} class="mr-2 h-4 w-4 fill-current" />
    {/if}
    <slot />
  </button>
{:else}
  <a class={className} data-testid="list-group-item" {href}>
    {#if icon}
      <svelte:component this={icon} class="mr-2 h-4 w-4 fill-current" />
    {/if}
    <slot />
  </a>
{/if}
