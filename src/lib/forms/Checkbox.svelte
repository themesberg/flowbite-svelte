<script lang="ts">
  import { getContext } from 'svelte';
  import type { FormColorType } from '../types';
  import { labelClass, inputClass } from './Radio.svelte';
  import Label from './Label.svelte';
  import type { CheckboxItem } from '../types';

  // properties forwarding
  export let name: string | undefined = undefined;
  export let color: FormColorType = 'primary';
  export let custom: boolean = false;
  export let inline: boolean = false;
  export let group: string[] = [];
  export let choices: CheckboxItem[] = [];
  export let value: string | number = 'on';
  export let checked: boolean | undefined = undefined;
  export let spacing: string = $$slots.default ? 'me-2' : '';
  export let groupLabelClass: string = '';
  export let groupInputClass: string = '';
  

  // tinted if put in component having its own background
  let background: boolean = getContext('background');
  // group example is from https://svelte.dev/repl/faabda4cabd544bd858a8a8abd0095f5?version=3.12.1
</script>
{#if choices.length > 0}
  {#each choices as {value, label}, i}
    <Label class={labelClass(inline, groupLabelClass)} show={$$slots.default} for={`checkbox-${i}`}>{ label }
      <input {name} id={`checkbox-${i}`} type="checkbox" value={ value } bind:group {...$$restProps}  class={inputClass(custom, color, true, background, spacing, groupInputClass)} />
      <slot />
    </Label>
  {/each}
{:else}
<Label class={labelClass(inline, $$props.class)} show={$$slots.default}>
  <input {name} type="checkbox" bind:checked on:keyup on:keydown on:keypress on:focus on:blur on:click on:mouseover on:mouseenter on:mouseleave on:paste on:change {value} {...$$restProps} class={inputClass(custom, color, true, background, spacing, $$slots.default || $$props.class)} />
  <slot />
</Label>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let name: string | undefined = undefined;
@prop export let color: FormColorType = 'primary';
@prop export let custom: boolean = false;
@prop export let inline: boolean = false;
@prop export let group: string[] = [];
@prop export let choices: CheckboxItem[] = [];
@prop export let value: string | number = 'on';
@prop export let checked: boolean | undefined = undefined;
@prop export let spacing: string = $$slots.default ? 'me-2' : '';
@prop export let groupLabelClass: string = '';
@prop export let groupInputClass: string = '';
-->
