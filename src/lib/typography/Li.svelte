<script lang="ts">
  import classNames from 'classnames';

  export let icon: boolean = false;
  export let liClass: string = '';
  let classLi: string = classNames(liClass, icon && 'flex items-center', $$props.class);
</script>

<li {...$$restProps} class={classLi}>
  <slot />
</li>
