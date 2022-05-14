<script lang="ts">
  import classNames from 'classnames';
  import { getContext, setContext, type SvelteComponent } from 'svelte';
  import { HiChevronDownOutline, HiMenuOutline } from 'svelte-icons/hi';
  import type { Writable } from 'svelte/store';
  import SidebarItemWrapper from './SidebarItemWrapper.svelte';

  export let open: boolean = false;
  export let icon: typeof SvelteComponent | null = HiMenuOutline;
  export let label: string = '';

  setContext('insideCollapse', true);
  const collapsed = getContext<Writable<boolean>>('collapsed');
</script>

<SidebarItemWrapper>
  <div slot="tooltip">
    {label}
  </div>
  <button
    {...$$props}
    class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    data-testid="sidebar-collapse-button"
    on:click={() => (open = !open)}
    type="button"
  >
    {#if icon}
      <svelte:component
        this={icon}
        class={classNames(
          'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
          { 'text-gray-900': open }
        )}
      />
    {/if}
    {#if $collapsed === true}
      <span class="sr-only">{label}</span>
    {:else}
      <span class="ml-3 flex-1 whitespace-nowrap text-left">{label}</span>
      <HiChevronDownOutline class="h-5 w-5" />
    {/if}
  </button>
  <ul
    class={classNames('space-y-2 py-2', {
      hidden: !open,
    })}
    data-testid="sidebar-collapse"
  >
    <slot />
  </ul>
</SidebarItemWrapper>
