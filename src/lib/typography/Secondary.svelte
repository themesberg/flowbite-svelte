<script lang="ts">
  import classNames from 'classnames';

  export let color: string = 'text-gray-500 dark:text-gray-400';
  export let secondaryClass: string = 'font-semibold';
</script>

<small {...$$restProps} class={classNames(color, secondaryClass, $$props.class)}>
  <slot />
</small>
