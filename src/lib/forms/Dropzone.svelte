<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let defaultClass: string =
    'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';

  let input: HTMLInputElement;

  function keydown(ev: KeyboardEvent) {
    if ([' ', 'Enter'].includes(ev.key)) {
      ev.preventDefault();
      input.click();
    }
  }
</script>

<button
  class={twMerge(defaultClass, $$props.class)}
  on:keydown={keydown}
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:dragenter
  on:dragleave
  on:dragover
  on:drop>
  <label class="flex flex-col items-center" tabIndex="0">
    <slot />
    <input
      {...$$restProps}
      bind:value
      bind:files
      bind:this={input}
      on:change
      on:click
      type="file"
      class="hidden" />
  </label>
</button>

<!--
  @component
  ## Feature
  [Go to File Input](https://flowbite-svelte.com/docs/forms/file-input)
  ## Props
  @prop value: string = '';
  @prop files: FileList | undefined = undefined;
  @prop defaultClass: string = 'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
  ## Event
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  - on:dragenter
  - on:dragleave
  - on:dragover
  - on:drop
  ## Example
  ```
  <script>
    import { Dropzone } from 'flowbite-svelte'
  </script>
  
  <Dropzone id='dropzone'>
    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
  </Dropzone>
  ```
-->
