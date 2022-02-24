<script>
  export let label = "Dropdown button";
  export let rounded = false;
  export let textSize = "text-sm";
  export let color = "blue";

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

  let toggleHidden = true;

  const handleToggle = () => {
    console.log("toggle clicked.");
    toggleHidden = !toggleHidden;
  };

  export let items = [
    {
      link: "/",
      label: "Dashboard",
    },
    {
      link: "/",
      label: "Settings",
      divider: true,
    },
    {
      link: "/",
      label: "Sign out",
    },
  ];
  if (color === "blue") {
    buttonClass = `inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  } else if (color === "blue-outline") {
    buttonClass = `inline-flex items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`;
  } else if (color === "dark") {
    buttonClass =
      buttonClass = `inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700`;
  } else if (color === "dark-outline") {
    buttonClass = `inline-flex items-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`;
  } else if (color === "light") {
    buttonClass = `inline-flex items-center text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800`;
  } else if (color === "green") {
    buttonClass = `inline-flex items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`;
  } else if (color === "green-outline") {
    buttonClass = `inline-flex items-center text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800`;
  } else if (color === "red") {
    buttonClass = `inline-flex items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`;
  } else if (color === "red-outline") {
    buttonClass = `inline-flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900`;
  } else if (color === "yellow") {
    buttonClass = `inline-flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:focus:ring-yellow-900`;
  } else if (color === "yellow-outline") {
    buttonClass = `inline-flex items-center text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900`;
  } else if (color === "purple") {
    buttonClass = `inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium ${round} ${textSize} ${paddings} text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`;
  } else if (color === "purple-outline") {
    buttonClass = `inline-flex items-center text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg ${textSize} ${paddings} text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900`;
  } else {
    // blue
    buttonClass = `inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium ${round} ${textSize} ${paddings} text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  }
</script>

<button on:click={handleToggle} class={buttonClass} type="button"
  >{label}
  <svg
    class="ml-2 w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</button>

<div
  class:hidden={toggleHidden}
  class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
>
  {#if $$slots.header}
    <div class="py-3 px-4 text-gray-900 dark:text-white">
      <slot name="header" />
    </div>
  {/if}
  <ul class="py-1" aria-labelledby="dropdownButton">
    {#each items as { link, label, divider }}
      <li
        class:border-b={divider}
        class:border-gray-100={divider}
        class:dark:border-gray-500={divider}
      >
        <a
          href={link}
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >{label}</a
        >
      </li>
    {/each}
  </ul>
</div>
