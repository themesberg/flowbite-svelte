<script>
  import Button from "../buttons/Button.svelte";
  export let title = "Work fast from anywhere";
  export let headColor = "gray";
  export let btns = [
    {
      size: "base",
      name: "Download it",
      type: "blue",
      link: "/about",
      rel: undefined,
      rounded: null,
    },
    {
      size: "base",
      name: "Get in on",
      type: "red-outline",
      link: "/#",
      rel: undefined,
      rounded: null,
    },
  ];
</script>

<div
  class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
>
  <h3 class="mb-2 text-3xl font-bold text-{headColor}-900 dark:text-white">
    {title}
  </h3>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
    <slot />
  </p>
  <div
    class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
  >
    {#each btns as { name, size, type, link, rel, rounded }}
      <a href={link} {rel}>
        <Button {name} {size} {type} {rounded} />
      </a>
    {/each}
  </div>
</div>
