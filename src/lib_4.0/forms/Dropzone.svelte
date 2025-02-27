<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface DropzoneProps {
    value?: string;
    files?: FileList | undefined;
    defaultClass?: string;
  }

  type $$Props = DropzoneProps & HTMLInputAttributes;

  export let value: $$Props['value'] = '';
  export let files: $$Props['files'] = undefined;
  export let defaultClass: $$Props['defaultClass'] = 'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';

  let input: HTMLInputElement;

  function keydown(ev: KeyboardEvent) {
    if ([' ', 'Enter'].includes(ev.key)) {
      ev.preventDefault();
      input.click();
    }
  }

  function onClick(event: MouseEvent) {
    event.preventDefault();
    input.click();
  }
</script>

<button class={twMerge(defaultClass, $$props.class)} on:keydown={keydown} on:click={onClick} on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:dragenter on:dragleave on:dragover on:drop type="button">
  <slot />
</button>
<label class="hidden">
  <input {...$$restProps} bind:value bind:files bind:this={input} on:change on:click type="file" />
</label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let value: $$Props['value'] = '';
@prop export let files: $$Props['files'] = undefined;
@prop export let defaultClass: $$Props['defaultClass'] = 'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
-->
