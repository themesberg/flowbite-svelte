<script lang="ts">
  import classNames from 'classnames';
  export let classSpan: string = classNames(
    'font-semibold text-gray-900 dark:text-white',
    $$props.class
  );
</script>

<span class={classSpan}>
  <slot />
</span>
