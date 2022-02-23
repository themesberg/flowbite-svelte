<script>
  export let textSize = "text-xs"; // text-sm
  export let name = "Read more";
  export let color = "blue";
  export let link = "/";

  let badgeClass;
  if (color === "blue") {
    badgeClass = `bg-blue-100 hover:bg-blue-200 text-blue-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300`;
  } else if (color === "gray") {
    badgeClass = `bg-gray-100 hover:bg-gray-200 text-gray-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300`;
  } else if (color === "red") {
    badgeClass = `bg-red-100 hover:bg-red-200 text-red-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 dark:hover:bg-red-300`;
  } else if (color === "green") {
    badgeClass = `bg-green-100 hover:bg-green-200 text-green-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 dark:hover:bg-green-300`;
  } else if (color === "yellow") {
    badgeClass = `bg-yellow-100 hover:bg-yellow-200 text-yellow-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 dark:hover:bg-yellow-300`;
  } else if (color === "indigo") {
    badgeClass = `bg-indigo-100 hover:bg-indigo-200 text-indigo-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800 dark:hover:bg-indigo-300`;
  } else if (color === "purple") {
    badgeClass = `bg-purple-100 hover:bg-purple-200 text-purple-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800 dark:hover:bg-purple-300`;
  } else if (color === "pink") {
    badgeClass = `bg-pink-100 hover:bg-pink-200 text-pink-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-800 dark:hover:bg-pink-300`;
  } else {
    badgeClass = `bg-blue-100 hover:bg-blue-200 text-blue-800 ${textSize} font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300`;
  }
</script>

<a href={link} class={badgeClass}>{name}</a>
