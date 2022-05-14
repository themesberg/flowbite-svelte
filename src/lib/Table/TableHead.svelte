<script lang="ts">
  import classNames from 'classnames';
</script>

<thead
  {...$$props}
  class={classNames('bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400', $$props.class)}
>
  <tr>
    <slot />
  </tr>
</thead>
