<script>
  import { content } from "tailwindcss/stubs/defaultConfig.stub";

  export let tabId = "myTab";
  export let tabs = [
    {
      name: "Profile",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Dashboard",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Settings",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Contacts",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
</script>

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
  <ul
    class="flex flex-wrap -mb-px"
    id={tabId}
    data-tabs-toggle="#{tabId}Content"
    role="tablist"
  >
    {#each tabs as { name }}
      <li class="mr-2" role="presentation">
        <button
          class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
          id="{name}-tab"
          data-tabs-target="#{name}"
          type="button"
          role="tab"
          aria-controls={name}
          aria-selected="true">{name}</button
        >
      </li>
    {/each}
  </ul>
</div>
<div id="{tabId}Content">
  {#each tabs as { name, content }}
    <div
      class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
      id={name}
      role="tabpanel"
      aria-labelledby="{name}-tab"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {content}
      </p>
    </div>
  {/each}
</div>
