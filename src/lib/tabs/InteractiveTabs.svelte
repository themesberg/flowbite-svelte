<script>
  // import { handleTabs } from "./handleTabs";
  export let tabId = "myTab";

  export let activeTabValue = 1;
  const handleClick = (tabValue) => () => (activeTabValue = tabValue);

  export let tabs = [
    {
      lavel: "Profile",
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      lavel: "Dashboard",
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      lavel: "Settings",
      id: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Contacts",
      id: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
</script>

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
  <ul class="flex flex-wrap -mb-px" id={tabId} role="tablist">
    {#each tabs as { label, selected, id }}
      <li class="mr-2" role="presentation" class:active={activeTabValue === id}>
        <button
          on:click={handleClick(id)}
          class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
          id="{label}-tab"
          type="button"
          role="tab"
          aria-controls={label}
          aria-selected={selected}>{label}</button
        >
      </li>
    {/each}
  </ul>
</div>
<div id="{tabId}Content">
  {#each tabs as { label, content, id }}
    {#if activeTabValue === id}
      <div
        class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
        id={label}
        role="tabpanel"
        aria-labelledby="{label}-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {content}
        </p>
      </div>
    {/if}
  {/each}
</div>
