<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import Input from './Input.svelte';

  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let inputClass: string = 'border !p-0 dark:text-gray-400';
</script>

<Input {...$$restProps} class={twMerge(inputClass, $$props.class)} let:props>
  <input type="file" on:change on:keyup on:keydown on:keypress on:focus on:blur on:click on:mouseover on:mouseenter on:mouseleave on:paste bind:value bind:files {...props} />
</Input>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let value: string = '';
@prop export let files: FileList | undefined = undefined;
@prop export let inputClass: string = 'border !p-0 dark:text-gray-400';
-->
