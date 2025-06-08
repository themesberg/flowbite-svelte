<script lang="ts">
  import { setContext } from 'svelte';
  import { stepper, stepperitem, stepperspan, steppericon, steppertext } from '.';
  import { twMerge } from 'tailwind-merge';
  import clsx from 'clsx';

  import { type StepperProps, type Step } from '$lib';

  let { children, steps = [], stepperType = "default", class: className }: StepperProps = $props();

  setContext('stepperType', stepperType);

  const base = stepper({type: stepperType})
</script>

<ol class={base}>
  {#if children}
    {@render children()}
  {:else if steps}
    {#each steps as step, index}
      {#if stepperType === "progress"}
        <li class={stepperitem({ 
          type: 'progress',
          status: step.status,
          progressConnector: index < steps.length - 1 ? step.status : undefined
        })}>
          <span class={stepperspan({ 
            type: 'progress',
            progressBackground: step.status
          })}>
            {#if step.icon}
              <step.icon class={step.iconClass}/>
            {:else if step.status === 'completed'}
              <svg class={steppericon({ type: 'progress', iconType: 'progressCheckmark' })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
            {:else}
              <!-- Default icons for current/pending steps if no custom icon provided -->
              <svg class={steppericon({ type: 'progress', iconType: 'progressIcon' })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
              </svg>
            {/if}
          </span>
        </li>
      {:else}
        <!-- Default stepper type -->
        <li class={stepperitem({ 
          type: 'default',
          status: step.status,
          defaultConnector: index < steps.length - 1
        })}>
          <span class={stepperspan({ 
            type: 'default',
            status: index === steps.length - 1 ? 'final' : step.status,
            separator: index < steps.length - 1
          })}>
            {#if step.status === 'completed'}
              {#if step.icon}
                <div class={steppericon({ type: 'default', iconType: 'checkmark' })}>
                  <step.icon />
                </div>
              {:else}
                <svg class={steppericon({ type: 'default', iconType: 'checkmark' })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
              {/if}
            {:else}
              <span class={steppericon({ type: 'default', iconType: 'number' })}>{step.id}</span>
            {/if}
            
            {step.label}
            {#if step.shortLabel}
              <span class="hidden sm:inline-flex sm:ms-2">{step.shortLabel}</span>
            {/if}
          </span>
        </li>
      {/if}
    {/each}
  {/if}
</ol>