<script>
  export let tabs = [
    {
      name: "Profile",
      selected: true,
      link: "/#",
    },
    {
      name: "Dashboard",
      selected: false,
      link: "/#",
    },
    {
      name: "Settings",
      selected: false,
      link: "/#",
    },
    {
      name: "Contacts",
      selected: false,
      link: "/#",
    },
  ];
</script>

<ul class="flex flex-wrap">
  {#each tabs as { name, selected, link }}
    <li class="mr-2">
      <a
        class="{selected
          ? 'active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg'
          : 'inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'} "
        href={link}
        rel="external">{name}</a
      >
    </li>
  {/each}
</ul>
