<script>
  export let buttons = [
    {
      href: "/",
      name: "Profile",
    },
    {
      href: "/",
      name: "Settings",
    },
    {
      href: "/",
      name: "Messages",
    },
  ];
  let btnLength = buttons.length;
  let classFirst =
    "py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
  let classMiddle =
    "py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
  let classLast =
    "py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
</script>

<div class="inline-flex rounded-md shadow-sm">
  {#each buttons as { href, name }, i}
    {#if i === 0}
      <a {href} aria-current="page" class={classFirst}>
        <slot />
        {name}
      </a>
    {:else if i === btnLength - 1}
      <a {href} aria-current="page" class={classLast}>
        <slot />
        {name}
      </a>
    {:else}
      <a {href} aria-current="page" class={classMiddle}>
        <slot />
        {name}
      </a>
    {/if}
  {/each}
</div>
