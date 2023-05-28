<script lang="ts">
  import classNames from 'classnames';

  export let divWrapperClass: string = 'p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900';
  export let divClass: string = 'flex items-center mb-3';
  export let spanClass: string =
    'bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900';
  export let label: string = '';
</script>

<div {...$$restProps} id="dropdown-cta" class={classNames(divWrapperClass, $$props.class)} role="alert">
  <div class={divClass}>
    <span class={spanClass}>{label}</span>
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </div>
  <slot />
</div>

<!--
  @component
  ## Features
  [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
  ## Props

  ## Example
  ```
  <script>
    import { SidebarCta } from 'flowbite-svelte';
  </script>

  <SidebarCta label="Beta">
    <svelte:fragment slot="icon">
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
        data-collapse-toggle="dropdown-cta"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </svelte:fragment>
    <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
      Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
      limited time in your profile.
    </p>
    <a
      class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      href="/">Turn new navigation off</a
    >
  </SidebarCta>

  ```
  
-->
