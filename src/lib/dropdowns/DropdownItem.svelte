<script lang="ts">
  import classNames from 'classnames';

  export let defaultClass: string =
    'font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600';
  export let href: string | undefined = undefined;

  let liClass: string;
  $: liClass = classNames(defaultClass, href ? 'block' : 'w-full text-left', $$props.class);
</script>

<li>
  <svelte:element
    this={href ? 'a' : 'button'}
    {href}
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
</li>
