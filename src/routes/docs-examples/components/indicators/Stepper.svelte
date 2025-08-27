<script>
  import { Indicator } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator size="xl" color={i < 3 ? undefined : "gray"} class={`z-10 shrink-0 ring-0 ring-white sm:ring-8 ${i < 3 ? "bg-primary-200 dark:bg-primary-900" : "dark:bg-gray-700 dark:ring-gray-900"}`}>
          {#if i === 3}
            <CheckCircleSolid class="h-6 w-6 text-gray-800 dark:text-gray-300" />
          {:else}
            <CheckCircleSolid class="text-primary-600 dark:text-primary-300 h-6 w-6" />
          {/if}
        </Indicator>
        {#if i < 3}
          <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
        {/if}
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator size="xl" color={i < 3 ? undefined : "gray"} class={`z-10 shrink-0 ring-0 ring-white sm:ring-8 ${i < 3 ? "bg-primary-200 dark:bg-primary-900" : "dark:bg-gray-700 dark:ring-gray-900"}`}>
          <Indicator color={i < 3 ? "orange" : "secondary"} class={i === 3 ? "dark:bg-gray-300!" : ""} />
        </Indicator>
        {#if i < 3}
          <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
        {/if}
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
