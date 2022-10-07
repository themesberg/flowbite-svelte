<script lang="ts">
  export let home: boolean = false;
  export let href: string | undefined = undefined;
  export let linkClass: string =
    'ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white';
  export let spanClass: string = 'ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400';
  export let homeClass: string =
    'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white';
</script>

<li class="inline-flex items-center" {...$$restProps}>
  {#if home}
    <a class={homeClass} {href}>
      {#if $$slots.icon}
        <slot name="icon" />
      {:else}
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
      {/if}
      <slot />
    </a>
  {:else}
    {#if $$slots.icon}
      <slot name="icon" />
    {:else}
      <svg
        class="w-6 h-6 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd" /></svg>
    {/if}
    {#if href}
      <a class={linkClass} {href}>
        <slot />
      </a>
    {:else}
      <span class={spanClass}>
        <slot />
      </span>
    {/if}
  {/if}
</li>
