<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const handleClick = () => {
    dispatch("handleClick");
  };

  export let rounded = false;
  export let textSize = "text-sm";
  export let name = "Read more";
  export let type = "blue";

  let paddings;
  if (textSize === "text-xs") {
    paddings = "py-2 px-3";
  } else if (textSize === "text-sm") {
    paddings = "py-2.5 px-5";
  } else if (textSize === "text-base") {
    paddings = "py-3 px-6";
  } else {
    paddings = "py-2.5 px-5";
  }
  let buttonClass;
  let round = rounded ? "rounded-full" : "rounded-lg";

  if (type === "blue") {
    buttonClass = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  } else if (type === "blue-outline") {
    buttonClass = `text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`;
  } else if (type === "dark") {
    buttonClass =
      buttonClass = `text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700`;
  } else if (type === "dark-outline") {
    buttonClass = `text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`;
  } else if (type === "light") {
    buttonClass = `text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800`;
  } else if (type === "green") {
    buttonClass = `text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`;
  } else if (type === "green-outline") {
    buttonClass = `text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800`;
  } else if (type === "red") {
    buttonClass = `text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`;
  } else if (type === "red-outline") {
    buttonClass = `text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`;
  } else if (type === "yellow") {
    buttonClass = `text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:focus:ring-yellow-900`;
  } else if (type === "yellow-outline") {
    buttonClass = `text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`;
  } else if (type === "purple") {
    buttonClass = `text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium ${round} ${textSize} ${paddings} text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`;
  } else if (type === "purple-outline") {
    buttonClass = `text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900`;
  } else {
    // blue
    buttonClass = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  }
</script>

<button type="button" class={buttonClass} on:click={handleClick}>{name}</button>
