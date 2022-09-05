<script lang="ts">
  import classNames from 'classnames';

  export let divClass: string = 'grid';
  export let cols: string = 'grid-cols-1 sm:grid-cols-2';
  export let gap: number;
  let classDiv = classNames(divClass, 'gap-' + String(gap), cols);
</script>

<div {...$$restProps} class={classDiv}>
  <slot />
</div>
