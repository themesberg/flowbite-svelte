<script lang="ts">
  import type { HTMLLabelAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLLabelAttributes {
    color?: 'gray' | 'green' | 'red' | 'disabled';
    defaultClass?: string;
    show?: boolean;
  }

  export let color: NonNullable<$$Props['color']> = 'gray';
  export let defaultClass: $$Props['defaultClass'] = 'text-sm rtl:text-right font-medium block';
  export let show: $$Props['show'] = true;

  let node: HTMLLabelElement;

  const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500 grayscale contrast-50'
  };

  // function checkDisabled(node: HTMLLabelElement) {
  $: {
    const control: HTMLInputElement = node?.control as HTMLInputElement;
    color = control?.disabled ? 'disabled' : color;
  }

  $: labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
</script>

{#if show}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label bind:this={node} {...$$restProps} class={labelClass}><slot /></label>
{:else}
  <slot />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: NonNullable<$$Props['color']> = 'gray';
@prop export let defaultClass: $$Props['defaultClass'] = 'text-sm rtl:text-right font-medium block';
@prop export let show: $$Props['show'] = true;
-->
