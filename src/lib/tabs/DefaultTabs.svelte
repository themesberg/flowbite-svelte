<script>
  export let tabs = [
    {
      name: "Profile",
      active: true,
      link: "/#",
    },
    {
      name: "Dashboard",
      active: false,
      link: "/#",
    },
    {
      name: "Settings",
      active: false,
      link: "/#",
    },
    {
      name: "Contacts",
      active: false,
      link: "/#",
    },
  ];
</script>

<ul class="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
  {#each tabs as { name, active, link }}
    <li class="mr-2">
      <a
        href={link}
        aria-current="page"
        class={active
          ? "inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          : "  inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 "}
        >{name}</a
      >
    </li>{/each}
</ul>
