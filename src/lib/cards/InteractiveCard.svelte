<script>
  export let dropdownLinks = [
    {
      href: "/",
      name: "Name 1",
    },
    {
      href: "about",
      name: "About",
    },
    {
      href: "profile",
      name: "Profile",
    },
  ];
  export let img = {
    src: "",
    alt: "",
  };
  export let header = "Lorem ipsum";
  export let content = "Proin efficitur purus felis.";
  export let btnColor1 = "blue";
  export let link1 = { href: "", title: "" };
  export let link2 = { href: "", title: "" };
</script>

<div
  class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex justify-end px-4 pt-4">
    <button
      id="dropdownButton"
      data-dropdown-toggle="dropdown"
      class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
      type="button"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        /></svg
      >
    </button>

    <div
      id="dropdown"
      class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul class="py-1" aria-labelledby="dropdownButton">
        {#each dropdownLinks as link}
          <li>
            <a
              href={link.href}
              rel="external"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >{link.name}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="flex flex-col items-center pb-10">
    <img
      class="mb-3 w-24 h-24 rounded-full shadow-lg"
      src={img.src}
      alt={img.alt}
    />
    <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      {header}
    </h3>
    <span class="text-sm text-gray-500 dark:text-gray-400">{content}</span>
    <div class="flex mt-4 space-x-3 lg:mt-6">
      {#if link1.href}
        <a
          href={link1.href}
          rel="external"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-{btnColor1}-700 rounded-lg hover:bg-{btnColor1}-800 focus:ring-4 focus:ring-{btnColor1}-300 dark:bg-{btnColor1}-600 dark:hover:bg-{btnColor1}-700 dark:focus:ring-{btnColor1}-800"
          >{link1.title}</a
        >
      {/if}
      {#if link2.href}
        <a
          href={link2.href}
          rel="external"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
          >{link2.title}</a
        >
      {/if}
    </div>
  </div>
</div>
