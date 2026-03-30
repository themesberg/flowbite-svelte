<script lang="ts">
  import { Indicator } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator size="xl" color={i < 3 ? undefined : "neutral"} class={`z-10 shrink-0 ring-0 ring-buffer sm:ring-8 ${i < 3 ? "bg-brand" : "bg-neutral-tertiary"}`}>
          {#if i === 3}
            <CheckCircleSolid class="text-heading h-6 w-6" />
          {:else}
            <CheckCircleSolid class="text-white h-6 w-6" />
          {/if}
        </Indicator>
        {#if i < 3}
          <div class="flex h-0.5 w-full bg-base"></div>
        {/if}
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-heading">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator size="xl" color={i < 3 ? undefined : "neutral"} class={`z-10 shrink-0 ring-0 ring-buffer sm:ring-8 ${i < 3 ? "bg-brand-subtle" : "bg-neutral-tertiary"}`}>
          <Indicator color={i < 3 ? "warning" : "success"} />
        </Indicator>
        {#if i < 3}
          <div class="flex h-0.5 w-full bg-base"></div>
        {/if}
      </div>
      <div class="mt-3">
<h3 class="font-medium text-heading">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
