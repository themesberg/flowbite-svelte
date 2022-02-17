<script>
  // use blue (default), red, green, yellow, and gray
  export let color = "blue";
  export let alertId = "alert-border-1";
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
    divClass =
      "flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-blue-700";
    slotClass = "ml-3 text-sm font-medium text-blue-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300";
  } else if (color === "gray") {
    divClass =
      "flex p-4 mb-4 bg-gray-100 border-t-4 border-gray-500 dark:bg-gray-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-gray-700";
    slotClass = "ml-3 text-sm font-medium text-gray-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300";
  } else if (color === "red") {
    divClass =
      "flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-red-700";
    slotClass = "ml-3 text-sm font-medium text-red-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300";
  } else if (color === "yellow") {
    divClass =
      "flex p-4 mb-4 bg-yellow-100 border-t-4 border-yellow-500 dark:bg-yellow-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-yellow-700";
    slotClass = "ml-3 text-sm font-medium text-yellow-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300";
  } else if (color === "green") {
    divClass =
      "flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-green-700";
    slotClass = "ml-3 text-sm font-medium text-green-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300";
  } else if (color === "indigo") {
    divClass =
      "flex p-4 mb-4 bg-indigo-100 border-t-4 border-indigo-500 dark:bg-indigo-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-indigo-700";
    slotClass = "ml-3 text-sm font-medium text-indigo-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-indigo-100 text-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-400 p-1.5 hover:bg-indigo-200 inline-flex h-8 w-8 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300";
  } else if (color === "purple") {
    divClass =
      "flex p-4 mb-4 bg-purple-100 border-t-4 border-purple-500 dark:bg-purple-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-purple-700";
    slotClass = "ml-3 text-sm font-medium text-purple-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-purple-100 text-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400 p-1.5 hover:bg-purple-200 inline-flex h-8 w-8 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300";
  } else if (color === "pink") {
    divClass =
      "flex p-4 mb-4 bg-pink-100 border-t-4 border-pink-500 dark:bg-pink-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-pink-700";
    slotClass = "ml-3 text-sm font-medium text-pink-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-pink-100 text-pink-500 rounded-lg focus:ring-2 focus:ring-pink-400 p-1.5 hover:bg-pink-200 inline-flex h-8 w-8 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300";
  } else {
    divClass =
      "flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200";
    svgClass = "flex-shrink-0 w-5 h-5 text-blue-700";
    slotClass = "ml-3 text-sm font-medium text-blue-700";
    buttonClass =
      "ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300";
  }
</script>

<div id={alertId} class:hidden class={divClass} role="alert">
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
  <div class={slotClass}>
    <slot />
  </div>
  {#if closeBtn}
    <button
      on:click={handleHide}
      type="button"
      class={buttonClass}
      aria-label="Close"
    >
      <span class="sr-only">Dismiss</span>
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
  {/if}
</div>
