<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Input from './Input.svelte';
  import { CloseButton } from "$lib";
  
  interface $$Props extends ComponentProps<Input> {
    files?: FileList | undefined;
    inputClass?: string;
    clearable?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }
  
  export let files: $$Props['files'] = undefined;
  export let inputClass: $$Props['inputClass'] = 'border p-0! dark:text-gray-400';
  export let clearable: $$Props['clearable'] = false;
  export let size: $$Props['size'] = 'md';
  const base: string= "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right p-2.5 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 text-sm rounded-lg border p-0! dark:text-gray-400";
  const wrapper: string = "relative w-full";
  const right: string = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5"

  const sizes: Record<string, string> = {
    sm: "text-xs ps-9 pe-9 p-2",
    md: "text-sm ps-10 pe-10 p-2.5",
    lg: "sm:text-base ps-11 pe-11 p-3" 
  }

  let fileInputRef: HTMLInputElement | undefined;
  const clearAll = () => {
    if (fileInputRef) {
      fileInputRef.value = "";
      files = undefined;
    }
  };
  $: hasFiles = files && files.length > 0;
  let inputCls = twMerge(base, sizes[size ?? 'md'], inputClass);
</script>

{#if clearable}
  <div class={wrapper}>
    <input type="file" on:change on:keyup on:keydown on:keypress on:focus on:blur on:click on:mouseover on:mouseenter on:mouseleave on:paste bind:files {...$$restProps} class={inputCls} bind:this={fileInputRef} />
    {#if hasFiles}
      <CloseButton on:click={clearAll} class={right} />
    {/if}
  </div>
{:else}
  <Input {...$$restProps} class={twMerge(inputClass, $$props.class)} let:props>
    <input type="file" on:change on:keyup on:keydown on:keypress on:focus on:blur on:click on:mouseover on:mouseenter on:mouseleave on:paste bind:files {...props} />
  </Input>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let files: $$Props['files'] = undefined;
@prop export let inputClass: $$Props['inputClass'] = 'border p-0! dark:text-gray-400';
@prop export let clearable: $$Props['clearable'] = false;
@prop export let size: $$Props['size'] = 'md';
-->
