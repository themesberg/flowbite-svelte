<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import type { Action } from 'svelte/action';
  import { twMerge } from 'tailwind-merge';
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface $$Props extends HTMLAnchorAttributes {
    action?: Action<HTMLElement, any>;
    params?: any;
    href?: string;
    color?: string;
    aClass?: string;
  }

  export let action: NonNullable<$$Props['action']> = () => {};
  export let params: $$Props['params'] = {};
  export let href: $$Props['href'] = '#';
  export let color: $$Props['color'] = 'text-primary-600 dark:text-primary-500';
  export let aClass: $$Props['aClass'] = 'inline-flex items-center hover:underline';
</script>

<a {...$$restProps} {href} use:action={params} class={twMerge(aClass, color, $$props.class)} on:click>
  <slot />
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let action: NonNullable<$$Props['action']> = () => {};
@prop export let params: $$Props['params'] = {};
@prop export let href: $$Props['href'] = '#';
@prop export let color: $$Props['color'] = 'text-primary-600 dark:text-primary-500';
@prop export let aClass: $$Props['aClass'] = 'inline-flex items-center hover:underline';
-->
