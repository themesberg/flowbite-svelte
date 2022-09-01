<script lang="ts">
  import classNames from 'classnames';
  export let list: 'disc' | 'none' | 'decimal' = 'disc';
  export let position: 'inside' | 'outside' = 'inside';
  export let olClass: string = 'list-decimal list-inside';
  let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
  };
  let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
  };
  let classOl = classNames(olClass, lists[list], positions[position], $$props.class);
</script>

<ol class={classOl}>
  <slot />
</ol>
