<script lang="ts">
  import Frame from '$lib/utils/Frame.svelte';
  import type { FrameColor } from '$lib/utils/Frame.svelte';
  import { setContext, type Snippet } from 'svelte';
  import { writable } from 'svelte/store';
  import { twJoin, twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    end?: Snippet;
    embedded?: boolean;
    color?: FrameColor;
    class?: string | undefined | null;
  }

  let { children, end, color = 'default', embedded, class: className, ...restProps }: Props = $props();

  const separators = writable(false);
  setContext('toolbar', separators);

  let frameColor = embedded ? 'none' : color;

  let separatorsClass: string = twJoin($separators && 'sm:divide-x rtl:divide-x-reverse');

  let divClass: string = twMerge('flex justify-between items-center', !embedded && 'py-2 px-3', className);
</script>

<Frame {...restProps} class={divClass} color={frameColor} rounded={!embedded}>
  <Frame class="flex flex-wrap items-center {separatorsClass}" color={frameColor} rounded={!embedded}>
    {@render children()}
  </Frame>
  {#if end}
    {@render end()}
  {/if}
</Frame>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop end
@prop color = 'default'
@prop embedded
@prop class: className
@prop ...restProps
-->
