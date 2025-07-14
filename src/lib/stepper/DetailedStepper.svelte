<script lang="ts">
  import { setContext } from "svelte";
  import { detailedStepper, type DetailedStepperTheme } from ".";
  import { type DetailedStepperProps, cn } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], contentClass, classes, ...restrorps }: DetailedStepperProps = $props();

  const theme = getTheme("detailedStepper");

  setContext("stepperType", "detailed");
</script>

<ol class={cn(detailedStepper.stepper(), clsx(classes?.detailedstepper), (theme as DetailedStepperTheme)?.stepper)} {...restrorps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={cn(detailedStepper.item({ status: step.status }), clsx(classes?.detailedstepperitem), (theme as DetailedStepperTheme)?.item)}>
        <span class={cn(detailedStepper.indicator({ status: step.status }), clsx(classes?.detailedstepperindicator), (theme as DetailedStepperTheme)?.indicator)}>
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