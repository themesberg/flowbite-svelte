<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string =
    'w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
  <slot />
</div>
