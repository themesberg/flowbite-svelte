<script lang="ts">
  import { setContext } from "svelte";
  import { detailedStepper, detailedStepperItem, detailedStepperIndicator } from ".";
  import { type DetailedStepperProps, cn } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], contentClass, classes, ...restrorps }: DetailedStepperProps = $props();

  const stepperTheme = getTheme("detailedStepper");
  const stepperItemTheme = getTheme("detailedStepperItem");
  const stepperIndicatorTheme = getTheme("detailedStepperIndicator");

  setContext("stepperType", "detailed");
</script>

<ol class={cn(detailedStepper(), clsx(classes?.detailedstepper), stepperTheme)} {...restrorps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={cn(detailedStepperItem({ status: step.status }), clsx(classes?.detailedstepperitem), stepperItemTheme)}>
        <span class={cn(detailedStepperIndicator({ status: step.status }), clsx(classes?.detailedstepperindicator), stepperIndicatorTheme)}>
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
[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1566)
## Props
@prop children
@prop steps = []
@prop contentClass
@prop classes
@prop ...restrorps
-->
