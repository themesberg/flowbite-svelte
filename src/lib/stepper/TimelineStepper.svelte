<script lang="ts">
  import { setContext } from "svelte";
  import { timelineStepper } from "./theme";
  import type { TimelineStepperProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, steps = [], class: className, classes, contentClass, ...restProps }: TimelineStepperProps = $props();

  const theme = getTheme("timelineStepper");

  setContext("stepperType", "timeline");

  const { base, item, circle } = $derived(timelineStepper());
</script>

<ol class={base({ class: clsx(theme?.base, className) })} {...restProps}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={item({ isLast: index === steps.length - 1, class: clsx(theme?.item, classes?.item) })}>
        <span class={circle({ status: step.status, class: clsx(theme?.circle, classes?.circle) })}>
          {#if step.status === "completed"}
            {#if step.icon}
              <step.icon class={clsx(step.iconClass) || "h-3.5 w-3.5"} />
            {:else}
              <svg class="h-3.5 w-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            {/if}
          {:else if step.icon}
            <step.icon class={clsx(step.iconClass) || "h-3.5 w-3.5"} />
          {:else}
            <svg class="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path
                d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
              />
            </svg>
          {/if}
        </span>
        <div class={clsx(contentClass)}>
          <h3 class="leading-tight font-medium">{step.label}</h3>
          {#if step.description}
            <p class="text-sm">{step.description}</p>
          {/if}
        </div>
      </li>
    {/each}
  {/if}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TimelineStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1657)
## Props
@prop children
@prop steps = []
@prop class: className
@prop classes
@prop contentClass
@prop ...restProps
-->
