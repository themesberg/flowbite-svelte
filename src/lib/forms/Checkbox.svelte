<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import type { FormColorType } from '../types';
  import { labelClass, inputClass } from './Radio.svelte';
  import Label from './Label.svelte';
  import type { CheckboxItem } from '../types';

  interface $$Props extends HTMLInputAttributes {
    color?: FormColorType;
    custom?: boolean;
    inline?: boolean;
    group?: string[];
    choices?: CheckboxItem[];
    value?: string | number;
    checked?: boolean;
    spacing?: string;
    groupLabelClass?: string;
    groupInputClass?: string;
    class?: string;
    required?: boolean;
  }

  export let color: NonNullable<$$Props['color']> = 'primary';
  export let custom: NonNullable<$$Props['custom']> = false;
  export let inline: NonNullable<$$Props['inline']> = false;
  export let group: $$Props['group'] = [];
  export let choices: NonNullable<$$Props['choices']> = [];
  export let value: $$Props['value'] = 'on';
  export let checked: $$Props['checked'] = undefined;
  export let spacing: NonNullable<$$Props['spacing']> = $$slots.default ? 'me-2' : '';
  export let groupLabelClass: NonNullable<$$Props['groupLabelClass']> = '';
  export let groupInputClass: NonNullable<$$Props['groupInputClass']> = '';
  
  // tinted if put in component having its own background
  let background: boolean = getContext('background');
  // group example is from https://svelte.dev/repl/faabda4cabd544bd858a8a8abd0095f5?version=3.12.1
</script>
{#if choices.length > 0}
  {#each choices as {value, label}, i}
    <Label class={labelClass(inline, groupLabelClass)} show={$$slots.default} for={`checkbox-${i}`}>{ label }
      <input id={`checkbox-${i}`} type="checkbox" value={ value } bind:group {...$$restProps}  class={inputClass(custom, color, true, background, spacing, groupInputClass)} />
      <slot />
    </Label>
  {/each}
{:else}
<Label class={labelClass(inline, $$props.class)} show={$$slots.default}>
  <input type="checkbox" bind:checked on:keyup on:keydown on:keypress on:focus on:blur on:click on:mouseover on:mouseenter on:mouseleave on:paste on:change {value} {...$$restProps} class={inputClass(custom, color, true, background, spacing, $$slots.default || $$props.class)} />
  <slot />
</Label>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: NonNullable<$$Props['color']> = 'primary';
@prop export let custom: NonNullable<$$Props['custom']> = false;
@prop export let inline: NonNullable<$$Props['inline']> = false;
@prop export let group: $$Props['group'] = [];
@prop export let choices: NonNullable<$$Props['choices']> = [];
@prop export let value: $$Props['value'] = 'on';
@prop export let checked: $$Props['checked'] = undefined;
@prop export let spacing: NonNullable<$$Props['spacing']> = $$slots.default ? 'me-2' : '';
@prop export let groupLabelClass: NonNullable<$$Props['groupLabelClass']> = '';
@prop export let groupInputClass: NonNullable<$$Props['groupInputClass']> = '';
-->
