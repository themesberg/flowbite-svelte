<script>
  import { Dropdown } from "$lib/index";

  let items = [
    {
      link: "/",
      label: "My Dashboard",
    },
    {
      link: "/",
      label: "My Settings",
    },
    {
      link: "/",
      label: "Sign out",
    },
  ];
</script>

<div
  class="container rounded-xl h-52 my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Dropdown {items} label="My dropdown" color="red" />
</div>
<div
  class="container rounded-xl h-56 my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Dropdown />
</div>

<div
  class="container rounded-xl h-72 my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Dropdown {items}>
    <div slot="header">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncat">name@flowbite.com</span>
    </div>
  </Dropdown>
</div>
