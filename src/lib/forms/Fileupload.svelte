<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import Input from './Input.svelte';

  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let inputClass: string = 'border !p-0 dark:text-gray-400';
</script>

<Input {...$$restProps} class={twMerge(inputClass, $$props.class)} let:props>
  <input
    type="file"
    on:change
    on:keyup
    on:keydown
    on:keypress
    on:focus
    on:blur
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    bind:value
    bind:files
    {...props} />
</Input>

<!--
  @component
  ## Feature
  [Go to File Input](https://flowbite-svelte.com/docs/forms/file-input)
  ## Props
  @prop value: string = '';
  @prop files: FileList | undefined = undefined;
  @prop inputClass: string = 'border !p-0 dark:text-gray-400';
  ## Event
  - on:change
  - on:keyup
  - on:keydown
  - on:keypress
  - on:focus
  - on:blur
  - on:click
  - on:mouseover
  - on:mouseenter
  - on:mouseleave
  - on:paste
  ## Example
  ```
  <script>
    import { Fileupload, Label } from 'flowbite-svelte'
    let value;
  </script>

  <Label class="space-y-2 mb-2">
    <span>Upload file</span>
    <Fileupload bind:value/>
  </Label>
  <Label>File: {value }</Label>
  ```
-->
