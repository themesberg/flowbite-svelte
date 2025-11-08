<script lang="ts">
  import { setContext } from "svelte";
  import { stepper } from "./theme";
  import type { StepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], class: className, classes, ...restProps }: StepperProps = $props();

  const theme = getTheme("stepper");

  setContext("stepperType", "stepper");

  const { base, item, content } = $derived(stepper());
</script>

<ol {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li
        class={item({
          status: step.status,
          isLast: index === steps.length - 1,
          class: clsx(theme?.item, classes?.item)
        })}
      >
        <span
          class={content({
            status: step.status,
            isLast: index === steps.length - 1,
            class: clsx(theme?.content, classes?.content)
          })}
        >
          {#if step.status === "completed"}
            {#if step.icon}
              <step.icon class={clsx(step.iconClass) || "me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"} />
            {:else}
              <svg class="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            {/if}
          {:else}
            <span class="me-2">{step.id || index + 1}</span>
          {/if}
          {step.label}
          {#if step.description}
            <span class={clsx(step.descriptionClass) || "hidden sm:ms-2 sm:inline-flex"}>{step.description}</span>
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
[StepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1585)
## Props
@prop children
@prop steps = []
@prop class: className
@prop classes
@prop ...restProps
-->
