<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string =
    'grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2';
</script>

<div class={classNames(divClass, $$props.class)}>
  <slot />
</div>
