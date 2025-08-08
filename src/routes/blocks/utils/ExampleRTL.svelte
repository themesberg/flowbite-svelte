<script lang="ts">
  type NotificationDirection = "ltr" | "rtl" | "auto";

  let { rtl = $bindable() }: { rtl?: NotificationDirection } = $props();

  if (rtl === undefined && document.dir) {
    rtl = document.dir as NotificationDirection;
  }

  const transitions: Record<NotificationDirection, NotificationDirection> = {
    ltr: "rtl",
    rtl: "ltr",
    auto: "rtl"
  };

  function toggle() {
    rtl = transitions[rtl ?? "auto"];
  }
</script>

<button onclick={toggle} type="button" class="hover:text-primary-700 me-2 flex items-center rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-gray-700 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-gray-300 focus:outline-hidden dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500">
  {#if rtl === "rtl"}
    LTR
  {:else}
    RTL
  {/if}
  <span class="sr-only">Toggle direction</span>
</button>
