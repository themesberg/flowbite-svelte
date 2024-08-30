<script lang="ts">
  let { rtl = $bindable() }: { rtl: NotificationDirection | undefined } = $props();

  if (rtl === undefined && document.dir)
    /** @ts-ignore */
    rtl = document.dir;

  const transitions: Record<NotificationDirection, NotificationDirection> = {
    ltr: 'rtl',
    rtl: 'ltr',
    auto: 'rtl'
  };

  function toggle() {
    rtl = transitions[rtl ?? 'auto'];
  }
</script>

<button onclick={toggle} type="button" class="toggle-dark-state-example me-2 flex items-center rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary-600 dark:hover:text-white dark:focus:ring-gray-500">
  {#if rtl === 'rtl'}
    LTR
  {:else}
    RTL
  {/if}
  <span class="sr-only">Toggle direction</span>
</button>
