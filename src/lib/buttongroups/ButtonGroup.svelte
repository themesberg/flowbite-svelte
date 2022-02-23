<script>
  export let buttons = [
    {
      name: "Profile",
      link: "/",
      rel: "",
      icon: "",
    },
    {
      name: "Settings",
      link: "/",
      rel: "",
      icon: "",
    },
    {
      name: "Messages",
      link: "/",
      rel: "",
      icon: "",
    },
  ];
  let btnLength = buttons.length;
  let classFirst =
    "inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
  let classMiddle =
    "inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
  let classLast =
    "inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
</script>

<div class="inline-flex rounded-md shadow-sm" role="group">
  {#each buttons as { name, icon, link, rel }, i}
    {#if i === 0}
      <button type="button" class={classFirst}>
        {#if icon}
          <svelte:component this={icon} className="h-4 w-4 mr-2" />
        {/if}
        {#if link}
          <a href={link} {rel}>{name}</a>
        {:else}
          {name}
        {/if}
      </button>
    {:else if i === btnLength - 1}
      <button type="button" class={classLast}>
        {#if icon}
          <svelte:component this={icon} className="h-4 w-4 mr-2" />
        {/if}
        {#if link}
          <a href={link} {rel}>{name}</a>
        {:else}
          {name}
        {/if}
      </button>
    {:else}
      <button type="button" class={classMiddle}>
        {#if icon}
          <svelte:component this={icon} className="h-4 w-4 mr-2" />
        {/if}
        {#if link}
          <a href={link} {rel}>{name}</a>
        {:else}
          {name}
        {/if}
      </button>
    {/if}
  {/each}
</div>
