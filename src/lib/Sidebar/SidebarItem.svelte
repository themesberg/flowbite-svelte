<script lang="ts">
  import { Badge } from '$lib';

  import classNames from 'classnames';
  import { getContext, type SvelteComponent } from 'svelte';
  import type { Writable } from 'svelte/store';
  import SidebarItemWrapper from './SidebarItemWrapper.svelte';

  export let active: boolean = false;
  export let icon: typeof SvelteComponent | null = null;
  export let label: string = '';
  export let href: string = '';
  export let labelColor: 'blue' | 'red' | 'green' | 'yellow' | 'gray' | 'indigo' | 'purple' | 'pink' = 'blue';

  const collapsed = getContext<Writable<boolean>>('collapsed');
</script>

<SidebarItemWrapper>
  <div slot="tooltip">
    <slot />
  </div>
  <a
    {...$$props}
    {href}
    class={classNames(
      'flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      {
        'bg-gray-100 dark:bg-gray-700': active,
        'group w-full pl-8 transition duration-75': !$collapsed && getContext('insideCollapse') === true,
      },
      $$props.class
    )}
  >
    {#if icon}
      <svelte:component
        this={icon}
        class={classNames(
          'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
          { 'text-gray-700 dark:text-gray-100': active }
        )}
      />
    {/if}
    {#if $collapsed !== true}
      <span class="ml-3 flex-1 whitespace-nowrap" data-testid="sidebar-item-content">
        <slot />
      </span>
    {/if}
    {#if $collapsed !== true && label}
      <Badge color={labelColor} data-testid="sidebar-item-label">
        {label}
      </Badge>
    {/if}
  </a>
</SidebarItemWrapper>
