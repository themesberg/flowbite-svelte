<script lang="ts">
  import classNames from 'classnames';
</script>

<td {...$$props} class={classNames('px-6 py-4', $$props.class)}>
  <slot />
</td>
