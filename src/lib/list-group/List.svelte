<script>
  export let lists = [
    {
      title: "Profile",
      icon: "",
      link: "/profile",
      rel: "",
    },
    {
      title: "Settings",
      icon: "",
      link: "/settings",
      rel: "",
    },
    {
      title: "Messages",
      icon: "",
      link: "/message",
      rel: "",
    },
    {
      title: "Download",
      icon: "",
      link: "/download",
      rel: "",
    },
  ];
  // let len = count($lists);
  // top rounded-t-lg border-b border-gray-200
  // middle border-b border-gray-200
  // bottom rounded-b-lg
  const common =
    "inline-flex relative items-center py-2 px-4 w-full text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white";
  const topClass = `${common} rounded-t-lg border-b border-gray-200`;
  const bottomClass = `${common} rounded-b-lg`;
  const middleClass = `${common} border-b border-gray-200`;
  let listClass;
</script>

<div
  class="w-48 text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
>
  {#each lists as { title, icon, link, rel }, i}
    {#if i === 0}
      <button type="button" class={topClass}>
        {#if icon}
          <svelte:component this={icon} className="h-4 w-4 mr-2" />
        {/if}
        {#if link}
          <a href={link} {rel}>{title}</a>
        {:else}
          {title} here
        {/if}
      </button>
    {:else if i === lists.length - 1}
      <button type="button" class={bottomClass}>
        {#if icon}
          <svelte:component this={icon} className="h-4 w-4 mr-2" />
        {/if}
        {#if link}
          <a href={link} {rel}>{title}</a>
        {:else}
          {title}
        {/if}
      </button>
    {:else}
      <button type="button" class={middleClass}>
        {#if icon}
          <svelte:component this={icon} className="h-4 w-4 mr-2" />
        {/if}
        {#if link}
          <a href={link} {rel}>{title}</a>
        {:else}
          {title}
        {/if}
      </button>
    {/if}
  {/each}
</div>
