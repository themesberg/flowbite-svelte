<script lang="ts">
  import classNames from 'classnames';
  export let id: string = 'banner';
  export let divClass: string =
    'flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800';
</script>

<div {id} tabindex="-1" class={classNames(divClass, $$props.class)}>
  <slot />
</div>
