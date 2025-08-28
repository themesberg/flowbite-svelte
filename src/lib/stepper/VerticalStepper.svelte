<script lang="ts">
  import { setContext } from "svelte";
  import { verticalStepper } from ".";
  import { type VerticalStepperProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], liClass, class: className, classes, ...restProps }: VerticalStepperProps = $props();

  const theme = getTheme("verticalStepper");

  setContext("stepperType", "vertical");

  const { base, card, content } = $derived(verticalStepper());
</script>

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={clsx(liClass)}>
        <div class={card({ status: step.status, class: clsx(theme?.card, classes?.card) })} role="alert">
          <div class={content({ class: clsx(theme?.content, classes?.content) })}>
            <span class="sr-only">{step.label}</span>
            <h3 class="font-medium">{step.id}. {step.label}</h3>
            {#if step.status === "completed"}
              {#if step.icon}
                <step.icon class={step.iconClass || "h-4 w-4"} />
              {:else}
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
              {/if}
            {:else if step.status === "current"}
              {#if step.icon}
                <step.icon class={step.iconClass || "h-4 w-4"} />
              {:else}
                <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              {/if}
            {/if}
          </div>
        </div>
      </li>
    {/each}
  {/if}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[VerticalStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1582)
## Props
@prop children
@prop steps = []
@prop liClass
@prop class: className
@prop classes
@prop ...restProps
-->
