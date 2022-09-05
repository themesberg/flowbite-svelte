<script lang="ts">
  import classNames from 'classnames';

  export let tag: 'dt' | 'dd';
  export let dtClass: string = 'text-gray-500 md:text-lg dark:text-gray-400';
  export let ddClass: string = 'text-lg font-semibold';

  let classDesc = classNames(tag === 'dt' ? dtClass : ddClass, $$props.class);
</script>

<svelte:element this={tag} {...$$restProps} class={classDesc}>
  <slot />
</svelte:element>
