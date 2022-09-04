<script lang="ts">
  import classNames from 'classnames';

  export let id: string;
  export let color: string = 'text-gray-500 dark:text-gray-400';
  export let secondaryClass: string = 'font-semibold';
</script>

<small {id} class={classNames(color, secondaryClass, $$props.class)}>
  <slot />
</small>
