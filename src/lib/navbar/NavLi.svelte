<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import type { NavbarLiType } from './NavUl.svelte';

  export let href: string = '';
  export let active: boolean = false;
  export let activeClass: string | undefined = undefined;
  export let nonActiveClass: string | undefined = undefined;

  const context = getContext<NavbarLiType>('navbar') ?? {};

  let liClass: string;
  $: liClass = classNames(
    'block py-2 pr-4 pl-3 md:p-0 rounded md:border-0',
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
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
