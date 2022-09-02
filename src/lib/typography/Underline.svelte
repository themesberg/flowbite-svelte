<script lang="ts">
  import classNames from 'classnames';
  export let underlineClass: string =
    'underline decoration-8 decoration-blue-400 dark:decoration-blue-600';
</script>

<span class={classNames(underlineClass, $$props.class)}>
  <slot />
</span>
