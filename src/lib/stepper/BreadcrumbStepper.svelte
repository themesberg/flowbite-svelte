<script lang="ts">
  import { setContext } from "svelte";
  import { breadcrumbStepper, type BreadcrumbStepperTheme } from ".";
  import clsx from "clsx";
  import { type BreadcrumbStepperProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], classes, ...restProps }: BreadcrumbStepperProps = $props();

  const theme = getTheme("breadcrumbStepper");

  setContext("stepperType", "breadcrumb");

  const base = breadcrumbStepper.stepper({ class: clsx((theme as BreadcrumbStepperTheme)?.stepper) });
</script>

<ol class={base} {...restProps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li
        class={breadcrumbStepper.item({
          status: step.status,
          hasChevron: index < steps.length - 1,
          class: clsx((theme as BreadcrumbStepperTheme)?.item)
        })}
      >
        <span class={breadcrumbStepper.indicator({ status: step.status, class: clsx((theme as BreadcrumbStepperTheme)?.indicator) })}>
          {#if step.status === "completed" && step.icon}
            <step.icon class={step.iconClass || "h-3 w-3"} />
          {:else}
            {step.id}
          {/if}
        </span>

        {step.label}

        {#if step.shortLabel}
          <span class="hidden sm:ms-2 sm:inline-flex">{step.shortLabel}</span>
        {/if}

        {#if index < steps.length - 1}
          <svg class="ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
          </svg>
        {/if}
      </li>
    {/each}
  {/if}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BreadcrumbStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1582)
## Props
@prop children
@prop steps = []
@prop classes
@prop ...restProps
-->
