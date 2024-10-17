<script lang="ts">
  type NotificationDirection = 'ltr' | 'rtl' | 'auto';

  export let rtl: NotificationDirection | undefined = undefined;

  if (rtl === undefined && document.dir) {
    rtl = document.dir as NotificationDirection;
  }

  const transitions: Record<NotificationDirection, NotificationDirection> = {
    ltr: 'rtl',
    rtl: 'ltr',
    auto: 'rtl'
  };

  function toggle() {
    rtl = transitions[rtl ?? 'auto'];
  }
</script>

<button on:click={toggle} type="button" class="flex items-center p-2 me-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
  {#if rtl === 'rtl'}
    LTR
  {:else}
    RTL
  {/if}
  <span class="sr-only">Toggle direction</span>
</button>
