<script>
  // use blue (default), red, green, yellow, and gray
  export let color = "blue";
  export let alertId = "alert-additional-content-1";
  export let infoLink = false;
  export let closeBtn = false;
</script>

<div
  id={alertId}
  class="p-4 mb-4 bg-{color}-100 rounded-lg dark:bg-{color}-200"
  role="alert"
>
  <div class="flex items-center">
    <svg
      class="mr-2 w-5 h-5 text-{color}-700 dark:text-{color}-800"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      /></svg
    >
    <h3 class="text-lg font-medium text-{color}-700 dark:text-{color}-800">
      <slot name="header">No header was provided</slot>
    </h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-{color}-700 dark:text-{color}-800">
    <slot>No content was provided.</slot>
  </div>
  <div class="flex">
    {#if infoLink}
      <button
        type="button"
        class="text-white bg-{color}-700 hover:bg-{color}-800 focus:ring-4 focus:ring-{color}-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-{color}-800 dark:hover:bg-{color}-900"
      >
        <svg
          class="-ml-0.5 mr-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path
            fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          /></svg
        >
        <a href={infoLink} rel="external">View more</a>
      </button>
    {/if}
    {#if closeBtn}
      <button
        type="button"
        class="text-{color}-700 bg-transparent border border-{color}-700 hover:bg-{color}-800 hover:text-white focus:ring-4 focus:ring-{color}-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-{color}-800 dark:text-{color}-800 dark:hover:text-white"
        data-collapse-toggle={alertId}
        aria-label="Close"
      >
        Dismiss
      </button>
    {/if}
  </div>
</div>
