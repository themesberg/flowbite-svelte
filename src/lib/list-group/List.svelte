<script>
  export let lists = [
    {
      title: "Profile",
      icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
      link: "/profile",
      external: false,
    },
    {
      title: "Settings",
      icon: "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z",
      link: "/settings",
      external: false,
    },
    {
      title: "Messages",
      icon: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
      link: "/message",
      external: false,
    },
    {
      title: "Download",
      icon: "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
      link: "/download",
      external: false,
    },
  ];
  // let len = count($lists);
</script>

<div
  class="w-48 text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
>
  {#each lists as { title, icon, link, external }, i}
    {#if i === 0}
      <button
        type="button"
        class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        {#if icon}
          <svg
            class="mr-2 w-4 h-4 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path fill-rule="evenodd" d={icon} clip-rule="evenodd" /></svg
          >
        {/if}
        {#if link}
          {#if external}
            <a href={link} rel="external">{title}</a>
          {:else}
            <a href={link} rel="external">{title}</a>
          {/if}
        {:else}
          {title}
        {/if}
      </button>
    {:else if i === lists.length - 1}
      <button
        type="button"
        class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        {#if icon}
          <svg
            class="mr-2 w-4 h-4 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path fill-rule="evenodd" d={icon} clip-rule="evenodd" /></svg
          >
        {/if}
        {#if link}
          {#if external}
            <a href={link} rel="external">{title}</a>
          {:else}
            <a href={link} rel="external">{title}</a>
          {/if}
        {:else}
          {title}
        {/if}
      </button>
    {:else}
      <button
        type="button"
        class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        {#if icon}
          <svg
            class="mr-2 w-4 h-4 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path fill-rule="evenodd" d={icon} clip-rule="evenodd" /></svg
          >
        {/if}
        {#if link}
          {#if external}
            <a href={link} rel="external">{title}</a>
          {:else}
            <a href={link} rel="external">{title}</a>
          {/if}
        {:else}
          {title}
        {/if}
      </button>
    {/if}
  {/each}
</div>
