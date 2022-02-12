<script>
  import { dropdownIdStore } from "./dropdownStores";
  export let id = "my-dropdown";

  dropdownIdStore.subscribe((value) => {
    console.log("dropdownIdStore: ", value);
  });

  export let items = [
    {
      link: "",
      label: "Dashboard",
    },
    {
      link: "",
      label: "Settings",
    },
    {
      link: "",
      label: "Sign out",
    },
  ];
</script>

<div
  {id}
  class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
>
  <ul class="py-1" aria-labelledby="dropdownButton">
    {#each items as { link, label }}
      <li>
        <a
          href={link}
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >{label}</a
        >
      </li>
    {/each}
  </ul>
</div>
