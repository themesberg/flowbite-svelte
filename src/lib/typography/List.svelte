<script lang="ts">
  import classNames from 'classnames';

  export let tag: 'ul' | 'ol' = 'ul';
  export let list: 'disc' | 'none' | 'decimal' = 'disc';
  export let position: 'inside' | 'outside' = 'inside';
  export let color: string = 'text-gray-500 dark:text-gray-400';
  export let olClass: string = 'list-decimal list-inside';
  export let ulClass: string = 'max-w-md  ';

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
    color,
    tag === 'ul' ? ulClass : olClass,
    lists[list],
    positions[position],
    $$props.class
  );
</script>

<svelte:element this={tag} class={classList}>
  <slot />
</svelte:element>
