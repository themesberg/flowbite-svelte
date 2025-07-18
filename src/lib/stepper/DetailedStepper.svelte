<script lang="ts">
  import { setContext } from "svelte";
  import { detailedStepper, type DetailedStepperTheme } from ".";
  import { type DetailedStepperProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], contentClass, classes, ...restrorps }: DetailedStepperProps = $props();

  const theme = getTheme("detailedStepper");

  setContext("stepperType", "detailed");
</script>

<ol class={detailedStepper.stepper({ class: clsx((theme as DetailedStepperTheme)?.stepper, classes?.detailedstepper) })} {...restrorps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={detailedStepper.item({ status: step.status, class: clsx((theme as DetailedStepperTheme)?.item, classes?.detailedstepperitem) })}>
        <span class={detailedStepper.indicator({ status: step.status, class: clsx((theme as DetailedStepperTheme)?.indicator, classes?.detailedstepperindicator) })}>
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
[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1540)
## Props
@prop children
@prop steps = []
@prop contentClass
@prop classes
@prop ...restrorps
-->
