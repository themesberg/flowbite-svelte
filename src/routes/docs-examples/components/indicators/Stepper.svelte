<script lang="ts">
  import { Indicator } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator size="xl" color={i < 3 ? undefined : "neutral"} class={`ring-buffer z-10 shrink-0 ring-0 sm:ring-8 ${i < 3 ? "bg-brand" : "bg-neutral-tertiary"}`}>
          {#if i === 3}
            <CheckCircleSolid class="text-heading h-6 w-6" />
          {:else}
            <CheckCircleSolid class="h-6 w-6 text-white" />
          {/if}
        </Indicator>
        {#if i < 3}
          <div class="bg-base flex h-0.5 w-full"></div>
        {/if}
      </div>
      <div class="mt-3">
        <h3 class="text-heading font-medium">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator size="xl" color={i < 3 ? undefined : "neutral"} class={`ring-buffer z-10 shrink-0 ring-0 sm:ring-8 ${i < 3 ? "bg-brand-subtle" : "bg-neutral-tertiary"}`}>
          <Indicator color={i < 3 ? "warning" : "success"} />
        </Indicator>
        {#if i < 3}
          <div class="bg-base flex h-0.5 w-full"></div>
        {/if}
      </div>
      <div class="mt-3">
        <h3 class="text-heading font-medium">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
