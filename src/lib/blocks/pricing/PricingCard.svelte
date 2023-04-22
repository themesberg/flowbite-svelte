<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string =
    'flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
  <slot />
</div>
