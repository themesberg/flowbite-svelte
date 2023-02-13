<script lang="ts">
  import Wrapper from '$lib/utils/Wrapper.svelte';
  import classNames from 'classnames';

  export let defaultClass: string =
    'font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
  export let href: string | undefined = undefined;

  let liClass: string;
  $: liClass = classNames(defaultClass, href ? 'block' : 'w-full text-left', $$props.class);

  let wrap: boolean = true;
  function init(node: HTMLElement) {
    wrap = node.parentElement?.tagName === 'UL';
  }
</script>

<Wrapper tag="li" show={wrap} use={init}>
  <svelte:element
    this={href ? 'a' : 'button'}
    {href}
    type={href ? undefined : 'button'}
    {...$$restProps}
    class={liClass}
    on:click
    on:change
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave>
    <slot />
  </svelte:element>
</Wrapper>
