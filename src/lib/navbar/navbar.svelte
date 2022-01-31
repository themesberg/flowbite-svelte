<script>
  export let sitename = "Svelte Flow";
  export let textSize = "base";
  export let logoSrc = "/images/logo.png";
  export let menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Buttons",
      link: "/buttons",
    },
    {
      name: "Cards",
      link: "/cards",
    },
    {
      name: "List Group",
      link: "/list-group",
    },
    {
      name: "Modals",
      link: "/modals",
    },
    {
      name: "Navbar",
      link: "/navbar",
    },
    {
      name: "Tabs",
      link: "/tabs",
    },
  ];
</script>

<nav
  class="px-2 mt-8 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
>
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex">
      <img src={logoSrc} alt="" />
      <span
        class="self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white"
        >{sitename}</span
      >
    </a>
    <button
      data-collapse-toggle="mobile-menu"
      type="button"
      class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
      aria-controls="mobile-menu-2"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <img src={logoSrc} alt="" />
    </button>
    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul
        class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
      >
        {#each menus as { name, link }}
          <li>
            <a
              href={link}
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-{textSize}"
              >{name}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
