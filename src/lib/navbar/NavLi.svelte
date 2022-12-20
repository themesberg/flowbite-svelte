<script lang="ts">
  import classNames from 'classnames';

  export let href: string = '';
  export let active: boolean = false;
  export let activeClass: string =
    'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent';
  export let nonActiveClass: string =
    'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

  let liClass: string;
  $: liClass = classNames(
    'block py-2 pr-4 pl-3 md:p-0 rounded md:border-0',
    active ? activeClass : nonActiveClass,
    $$props.class
  );
</script>

<li>
  <svelte:element
    this={href ? 'a' : 'div'}
    {href}
    {...$$restProps}
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
    class={liClass}>
    <slot />
  </svelte:element>
</li>
