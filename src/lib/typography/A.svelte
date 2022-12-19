<script lang="ts">
  import classNames from 'classnames';

  export let href: string = '#';
  export let color: string = 'text-blue-600 dark:text-blue-500';
  export let aClass: string = 'inline-flex items-center hover:underline';
</script>

<a {...$$restProps} {href} class={classNames(aClass, color, $$props.class)}>
  <slot />
</a>
