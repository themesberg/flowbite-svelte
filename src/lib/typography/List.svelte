<script lang="ts">
  import type { HTMLAttributes, HTMLOlAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type ListProps = {
    tag?: 'ul' | 'ol' | 'dl';
    list?: 'disc' | 'none' | 'decimal' | undefined;
    position?: 'inside' | 'outside';
  };

  type ListAttributes<T extends EventTarget> = HTMLAttributes<T> & ListProps;

  type $$Props =
  | ListAttributes<HTMLUListElement>
  | (HTMLOlAttributes & ListProps)
  | ListAttributes<HTMLDListElement>;

  export let tag: $$Props['tag'] = 'ul';
  export let list: $$Props['list'] = undefined;
  export let position: NonNullable<$$Props['position']> = 'inside';

  let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
  };

  let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
  };

  let classList = twMerge(lists[list ?? (tag === 'ul' ? 'disc' : (tag === 'ol' ? 'decimal' : 'none'))], positions[position], $$props.class);
</script>

<svelte:element this={tag} {...$$restProps} class={classList}>
  <slot />
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tag: $$Props['tag'] = 'ul';
@prop export let list: $$Props['list'] = undefined;
@prop export let position: NonNullable<$$Props['position']> = 'inside';
-->
