<script lang="ts">
  import { setContext } from 'svelte';
  import { detailedstepper, detailedstepperitem, detailedstepperindicator, detailedsteppercontent } from '.';
  import { type DetailedStepperProps, type DetailedStep } from '$lib';

  let { children, steps = [], class: className }: DetailedStepperProps = $props();

  setContext('stepperType', 'detailed');

  const base = detailedstepper()
</script>

<ol class={base}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      <li class={detailedstepperitem({ status: step.status })}>
        <span class={detailedstepperindicator({ status: step.status })}>
          {#if step.status === 'completed' && step.icon}
            <step.icon class={step.iconClass}/>
          {:else if step.status === 'completed'}
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
          {:else}
            {step.id}
          {/if}
        </span>
        <span class={detailedsteppercontent()}>
          <h3 class="font-medium leading-tight">{step.label}</h3>
          {#if step.description}
            <p class="text-sm">{step.description}</p>
          {/if}
        </span>
      </li>
    {/each}
  {/if}
</ol>