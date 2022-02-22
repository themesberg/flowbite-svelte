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

  if (color === "purple2blue") {
    btnClass = `text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "cyan2blue") {
    btnClass = `text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "green2blue") {
    btnClass = `text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "purple2pink") {
    btnClass = `text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "pink2orange") {
    btnClass = `text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "teal2lime") {
    btnClass = `text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`;
  } else if (color === "red2yellow") {
    btnClass = `text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  } else {
    btnClass = `text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg ${textSize} px-5 py-2.5 text-center mr-2 mb-2`;
  }
</script>

<button type="button" class={btnClass} on:click={handleClick}>{name}</button>
