<script lang="ts">
  import Input from './Input.svelte';
  export let size: 'sm' | 'md' | 'lg' = 'lg';
  export let placeholder: string = 'Search';

  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
</script>

<Input
  on:blur
  on:change
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:paste
  type="search"
  {placeholder}
  {size}
  {...$$restProps}
  class={$$props.class}>
  <svg
    slot="left"
    class={sizes[size]}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clip-rule="evenodd" />
  </svg>
  <slot slot="right" />
</Input>
