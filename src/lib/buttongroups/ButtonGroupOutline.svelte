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
    "inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700";
  let classMiddle =
    "inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700";
  let classLast =
    "inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700";
</script>

<div class="inline-flex rounded-md shadow-sm">
  {#each buttons as { link, name, rel, icon }, i}
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
