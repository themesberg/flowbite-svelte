<script lang="ts">
  import { setContext } from 'svelte';
  import { breadcrumbstepper, breadcrumbstepperitem, breadcrumbstepperindicator } from '.';
  import { type BreadcrumbStepperProps, type BreadcrumbStep } from '$lib';

  let { children, steps = [], class: className }: BreadcrumbStepperProps = $props();

  setContext('stepperType', 'breadcrumb');

  const base = breadcrumbstepper()
</script>

<ol class={base}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={breadcrumbstepperitem({ 
        status: step.status,
        hasChevron: index < steps.length - 1 
      })}>
        <span class={breadcrumbstepperindicator({ status: step.status })}>
          {#if step.status === 'completed' && step.icon}
            <step.icon class={step.iconClass || "w-3 h-3"} />
          {:else if step.status === 'completed'}
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
          {:else}
            {step.id}
          {/if}
        </span>
        
        {step.label}
        
        {#if step.shortLabel}
          <span class="hidden sm:inline-flex sm:ms-2">{step.shortLabel}</span>
        {/if}
        
        {#if index < steps.length - 1}
          <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
          </svg>
        {/if}
      </li>
    {/each}
  {/if}
</ol>