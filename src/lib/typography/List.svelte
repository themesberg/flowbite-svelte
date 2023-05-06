<script lang="ts">
  import classNames from 'classnames';

  export let tag: 'ul' | 'ol' | 'dl' = 'ul';
  export let list: 'disc' | 'none' | 'decimal' | undefined = undefined;
  export let position: 'inside' | 'outside' = 'inside';

  let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
  };

  let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
  };

  let classList = classNames(
    lists[list ?? (tag === 'ul' ? 'disc' : 'ol' ? 'decimal' : 'none')],
    positions[position],
    $$props.class
  );
</script>

<svelte:element this={tag} {...$$restProps} class={classList}>
  <slot />
</svelte:element>
