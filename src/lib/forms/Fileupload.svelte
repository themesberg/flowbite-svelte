<script lang="ts">
  import classNames from 'classnames';
  import Input from './Input.svelte';

  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let size: 'xs' | 'sm' | 'lg' = 'sm';
  export let inputClass: string = 'border !p-0 dark:text-gray-400';

  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    lg: 'text-lg'
  };
</script>

<Input {...$$restProps} class={classNames(inputClass, sizes[size], $$props.class)} let:props>
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
