<script>
  import {Dropdown, DropdownDivider, DropdownItem, uiHelpers }  from "$lib";

  let dropdown = uiHelpers();

let isOpen = $state(false);
let toggle = dropdown.toggle;
let close = dropdown.close;

$effect(() => {
  // this can be done adding nav.navStatus directly to DOM element
  // without using effect
  isOpen = dropdown.isOpen;
});
$inspect('dropdown: ', isOpen)
</script>

<button onclick={toggle} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>


<Dropdown {isOpen}>
  {#snippet header()}
    <div>Bonnie Green</div>
    <div class="font-medium truncate">name@flowbite.com</div>
  {/snippet}
  {#snippet children()}
  <DropdownItem href="/">Dashboard</DropdownItem>
  <DropdownItem href="/nav">Navbar</DropdownItem>
  <DropdownItem href="/footer">Footer</DropdownItem>
  <DropdownDivider />
  <DropdownItem href="/dropdown">Dropdown</DropdownItem>
  {/snippet}
  {#snippet footer()}
  <div class="py-2">
    <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
  </div>
  {/snippet}
</Dropdown>