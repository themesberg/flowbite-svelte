<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const handleClick = () => {
    dispatch("handleClick");
  };

  export let textSize = "text-sm";
  export let color = "blue";
  export let name = "Read more";
  let btnClass;

  if (color === "blue") {
    btnClass = `text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "green") {
    btnClass = `text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "cyan") {
    btnClass = `text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "teal") {
    btnClass = `text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "lime") {
    btnClass = `text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "red") {
    btnClass = `text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "pink") {
    btnClass = `text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "purple") {
    btnClass = `text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else {
    btnClass = `text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  }
</script>

<button type="button" class={btnClass} on:click={handleClick}>{name}</button>
