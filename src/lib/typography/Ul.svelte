<script lang="ts">
  import classNames from 'classnames';

  export let list: 'disc' | 'none' | 'decimal' = 'disc';
  export let position: 'inside' | 'outside' = 'inside';
  export let ulClass: string = 'max-w-md text-gray-500 dark:text-gray-400';
  let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
  };
  let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
  };
  let classUl = classNames(ulClass, lists[list], positions[position], $$props.class);
  console.log('list', list);
</script>

<ul {...$$restProps} class={classUl} {list}>
  <slot />
</ul>
