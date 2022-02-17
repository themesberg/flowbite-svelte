<script>
  // use blue (default), red, green, yellow, and gray
  export let color = "blue";
  export let alertId = "alert-additional-content-1";
  export let infoLink = false;
  export let closeBtn = false;
  let hidden = false;
  const handleHide = () => {
    hidden = !hidden;
  };

  let divClass;
  let svgClass;
  let slotClass;
  let buttonClass;

  if (color === "blue") {
    divClass = "p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200";
    svgClass = "mr-2 w-5 h-5 text-blue-700 dark:text-blue-800";
    slotClass = "mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800";
    buttonClass =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900";
  } else if (color === "gray") {
    divClass = "p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-200";
    svgClass = "mr-2 w-5 h-5 text-gray-700 dark:text-gray-800";
    slotClass = "mt-2 mb-4 text-sm text-gray-700 dark:text-gray-800";
    buttonClass =
      "text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-900";
  } else if (color === "red") {
    divClass = "p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200";
    svgClass = "mr-2 w-5 h-5 text-red-700 dark:text-red-800";
    slotClass = "mt-2 mb-4 text-sm text-red-700 dark:text-red-800";
    buttonClass =
      "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900";
  } else if (color === "yellow") {
    divClass = "p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200";
    svgClass = "mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800";
    slotClass = "mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800";
    buttonClass =
      "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900";
  } else if (color === "green") {
    divClass = "p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200";
    svgClass = "mr-2 w-5 h-5 text-green-700 dark:text-green-800";
    slotClass = "mt-2 mb-4 text-sm text-green-700 dark:text-green-800";
    buttonClass =
      "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900";
  } else if (color === "indigo") {
    divClass = "p-4 mb-4 bg-indigo-100 rounded-lg dark:bg-indigo-200";
    svgClass = "mr-2 w-5 h-5 text-indigo-700 dark:text-indigo-800";
    slotClass = "mt-2 mb-4 text-sm text-indigo-700 dark:text-indigo-800";
    buttonClass =
      "text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-indigo-800 dark:hover:bg-indigo-900";
  } else if (color === "purple") {
    divClass = "p-4 mb-4 bg-purple-100 rounded-lg dark:bg-purple-200";
    svgClass = "mr-2 w-5 h-5 text-purple-700 dark:text-purple-800";
    slotClass = "mt-2 mb-4 text-sm text-purple-700 dark:text-purple-800";
    buttonClass =
      "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-purple-800 dark:hover:bg-purple-900";
  } else if (color === "pink") {
    divClass = "p-4 mb-4 bg-pink-100 rounded-lg dark:bg-pink-200";
    svgClass = "mr-2 w-5 h-5 text-pink-700 dark:text-pink-800";
    slotClass = "mt-2 mb-4 text-sm text-pink-700 dark:text-pink-800";
    buttonClass =
      "text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-pink-800 dark:hover:bg-pink-900";
  } else {
    divClass = "p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200";
    svgClass = "mr-2 w-5 h-5 text-blue-700 dark:text-blue-800";
    slotClass = "mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800";
    buttonClass =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900";
  }
</script>

<div id={alertId} class:hidden class={divClass} role="alert">
  <div class="flex items-center">
    <svg
      class={svgClass}
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
  <div class={slotClass}>
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
        on:click={handleHide}
        type="button"
        class="text-{color}-700 bg-transparent border border-{color}-700 hover:bg-{color}-800 hover:text-white focus:ring-4 focus:ring-{color}-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-{color}-800 dark:text-{color}-800 dark:hover:text-white"
        aria-label="Close"
      >
        Dismiss
      </button>
    {/if}
  </div>
</div>
