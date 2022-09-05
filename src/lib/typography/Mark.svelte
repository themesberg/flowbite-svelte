<script lang="ts">
  import classNames from 'classnames';

  export let color: string = 'text-white dark:bg-blue-500';
  export let bgColor: string = 'bg-blue-600';
  export let markClass: string = 'px-2 rounded';
</script>

<mark {...$$restProps} class={classNames(markClass, bgColor, color, $$props.class)}>
  <slot />
</mark>
