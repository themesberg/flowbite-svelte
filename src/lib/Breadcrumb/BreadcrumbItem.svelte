<script lang="ts">
  import { HiChevronRightOutline } from 'svelte-icons/hi';
  import type { SvelteComponent } from 'svelte';

  export let icon: typeof SvelteComponent | null = null;
</script>

<li class="group flex items-center" {...$$props}>
  <HiChevronRightOutline
    aria-hidden="true"
    class="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2"
    data-testid="breadcrumb-separator"
  />
  {#if $$props.href}
    <a
      class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      data-testid="breadcrumb-item"
      href={$$props.href}
    >
      {#if icon}
        <svelte:component this={icon} aria-hidden="true" class="mr-2 h-4 w-4" />
      {/if}
      <slot />
    </a>
  {:else}
    <span class="flex items-center text-sm font-medium text-gray-400 dark:text-gray-500" data-testid="breadcrumb-item">
      {#if icon}
        <svelte:component this={icon} aria-hidden="true" class="mr-2 h-4 w-4" />
      {/if}
      <slot />
    </span>
  {/if}
</li>
