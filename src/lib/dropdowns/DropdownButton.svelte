<script>
  import { dropdownIdStore } from "./dropdownStores";

  export let id = "my-dropdown";
  export let label = "Dropdown button";

  let toggleDropdown = (dropdown) => {
    dropdownIdStore.update((id) => {
      console.log("id 1: ", id);
      id = dropdown.id;
      console.log("id 2: ", id);
    });
  };
</script>

<button
  {id}
  on:click={toggleDropdown({ id })}
  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
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
    /></svg
  ></button
>
