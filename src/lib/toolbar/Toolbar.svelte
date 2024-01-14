<script lang="ts">
  import Frame from '$lib/utils/Frame.svelte';
  import { setContext, type ComponentProps } from 'svelte';
  import { writable } from 'svelte/store';
  import { twJoin, twMerge } from 'tailwind-merge';

  interface $$Props extends ComponentProps<Frame> {
    embedded?: boolean;
  }

  export let embedded: boolean = false;

  const separators = writable(false);
  setContext('toolbar', separators);

  let color: $$Props['color'];
  $: color = embedded ? 'none' : $$props.color;

  let separatorsClass: string;
  $: separatorsClass = twJoin($separators && 'sm:divide-x rtl:divide-x-reverse');

  let divClass: string;
  $: divClass = twMerge('flex justify-between items-center', !embedded && 'py-2 px-3', $$props.class);
</script>

<Frame {...$$restProps} class={divClass} {color} rounded={!embedded}>
  <Frame class="flex flex-wrap items-center {separatorsClass}" {color} rounded={!embedded}>
    <slot />
  </Frame>
  <slot name="end" />
</Frame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let embedded: boolean = false;
-->
