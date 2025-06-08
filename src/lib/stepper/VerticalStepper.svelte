<script lang="ts">
  import { setContext } from 'svelte';
  import { verticalstepper, verticalstepperitem, verticalsteppercard, verticalsteppercontent } from '.';
  import { type VerticalStepperProps, type VerticalStep } from '$lib';

  let { children, steps = [], class: className }: VerticalStepperProps = $props();

  setContext('stepperType', 'vertical');

  const base = verticalstepper()
</script>

<ol class={base}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={verticalstepperitem()}>
        <div class={verticalsteppercard({ status: step.status })} role="alert">
          <div class={verticalsteppercontent()}>
            <span class="sr-only">{step.label}</span>
            <h3 class="font-medium">{step.id}. {step.label}</h3>
            
            {#if step.status === 'completed'}
              {#if step.icon}
                <svelte:component this={step.icon} class={step.iconClass || "w-4 h-4"} />
              {:else}
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
              {/if}
            {:else if step.status === 'current'}
              {#if step.icon}
                <svelte:component this={step.icon} class={step.iconClass || "w-4 h-4"} />
              {:else}
                <svg class="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              {/if}
            {/if}
          </div>
        </div>
      </li>
    {/each}
  {/if}
</ol>