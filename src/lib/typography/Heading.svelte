<script lang="ts">
  import classNames from 'classnames';

  export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
  export let color: string = 'text-gray-900 dark:text-white';
  export let customSize: string = '';
  const textSizes = {
    h1: 'text-5xl font-extrabold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-bold',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold'
  };
</script>

<svelte:element
  this={tag}
  {...$$restProps}
  class={classNames(customSize ? customSize : textSizes[tag], color, 'w-full', $$props.class)}>
  <slot />
</svelte:element>
