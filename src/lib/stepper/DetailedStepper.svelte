<script lang="ts">
  import { setContext } from "svelte";
  import { detailedStepper, type DetailedStepperTheme } from ".";
  import { type DetailedStepperProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], contentClass, class: className, classes, ...restrorps }: DetailedStepperProps = $props();

  const theme = getTheme("detailedStepper");

  setContext("stepperType", "detailed");

  const { base, item, indicator } = $derived(detailedStepper());
</script>

<ol class={base({ class: clsx((theme as DetailedStepperTheme)?.base, className) })} {...restrorps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={item({ status: step.status, class: clsx((theme as DetailedStepperTheme)?.item, classes?.item) })}>
        <span class={indicator({ status: step.status, class: clsx((theme as DetailedStepperTheme)?.indicator, classes?.indicator) })}>
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
[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1565)
## Props
@prop children
@prop steps = []
@prop contentClass
@prop class: className
@prop classes
@prop ...restrorps
-->
