<script lang="ts">
  import { setContext } from "svelte";
  import { detailedstepper, detailedstepperitem, detailedstepperindicator } from ".";
  import { type DetailedStepperProps } from "$lib";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";

  let { children, steps = [], contentClass, classes, ...restrorps }: DetailedStepperProps = $props();

  setContext("stepperType", "detailed");

  const base = detailedstepper();
</script>

<ol class={twMerge(base, clsx(classes?.detailedstepper))} {...restrorps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={twMerge(detailedstepperitem({ status: step.status }), clsx(classes?.detailedstepperitem))}>
        <span class={twMerge(detailedstepperindicator({ status: step.status }), clsx(classes?.detailedstepperindicator))}>
          {#if step.status === "completed" && step.icon}
            <step.icon class={clsx(step.iconClass)} />
          {:else}
            {step.id}
          {/if}
        </span>
        <span class={clsx(contentClass)}>
          <h3 class="leading-tight font-medium">{step.label}</h3>
          {#if step.description}
            <p class="text-sm">{step.description}</p>
          {/if}
        </span>
      </li>
    {/each}
  {/if}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1541)
## Props
@prop children
@prop steps = []
@prop contentClass
@prop classes
@prop ...restrorps
-->
