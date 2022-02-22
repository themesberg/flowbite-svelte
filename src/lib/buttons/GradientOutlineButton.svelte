<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const handleClick = () => {
    dispatch("handleClick");
  };

  export let textSize = "text-sm";
  export let color = "purple2blue";
  export let name = "Read more";
  let btnClass;
  let spanClass;

  if (color === "purple2blue") {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  } else if (color === "cyan2blue") {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  } else if (color === "green2blue") {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  } else if (color === "purple2pink") {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  } else if (color === "pink2orange") {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  } else if (color === "teal2lime") {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  } else if (color === "red2yellow") {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  } else {
    btnClass = `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden ${textSize} font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800`;
    spanClass =
      "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0";
  }
</script>

<button class={btnClass}>
  <span class={spanClass} on:click={handleClick}>{name}</span>
</button>
