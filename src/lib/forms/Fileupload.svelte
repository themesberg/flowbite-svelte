<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Input from './Input.svelte';
  
  interface $$Props extends ComponentProps<Input> {
    files?: FileList | undefined;
    inputClass?: string;
  }
  
  export let files: $$Props['files'] = undefined;
  export let inputClass: $$Props['inputClass'] = 'border !p-0 dark:text-gray-400';
</script>

<Input {...$$restProps} class={twMerge(inputClass, $$props.class)} let:props>
  <input type="file" on:change on:keyup on:keydown on:keypress on:focus on:blur on:click on:mouseover on:mouseenter on:mouseleave on:paste bind:files {...props} />
</Input>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let files: $$Props['files'] = undefined;
@prop export let inputClass: $$Props['inputClass'] = 'border !p-0 dark:text-gray-400';
-->
