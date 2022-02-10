<script>
  export let link;
  export let rel;
  export let img;
  export let btnName = "Read more";
  export let btnColor = "blue";
  export let header =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
</script>

<div
  class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  {#if img}
    <a href={link} {rel}>
      <img class="rounded-t-lg" src={img} alt="" />
    </a>
  {/if}
  <div class="p-5">
    {#if link}
      <a href={link} {rel}>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {header}
        </h5>
      </a>
    {:else}
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {header}
      </h5>
    {/if}

    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      <slot />
    </p>
    {#if link}
      <a
        href={link}
        {rel}
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-{btnColor}-700 rounded-lg hover:bg-{btnColor}-800 focus:ring-4 focus:ring-{btnColor}-300 dark:bg-{btnColor}-600 dark:hover:bg-{btnColor}-700 dark:focus:ring-{btnColor}-800"
      >
        {btnName}
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </a>
    {/if}
  </div>
</div>
