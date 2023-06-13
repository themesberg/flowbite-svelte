<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let padding: string = 'px-6 py-3';
</script>

<th
  {...$$restProps}
  class={twMerge(padding, $$props.class)}
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseenter
  on:mouseleave
  on:mouseover>
  <slot />
</th>

<!--
  @component
  ## Features
  [Go to Table](https://flowbite-svelte.com/docs/components/table)
  ## Props
  @prop padding: string = 'px-6 py-3';
  ## Event
  - on:click
  - on:focus
  - on:keydown
  - on:keypress
  - on:keyup
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
-->
