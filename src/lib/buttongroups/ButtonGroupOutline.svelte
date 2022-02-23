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
    "py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700";
  let classMiddle =
    "py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700";
  let classLast =
    "py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700";
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
