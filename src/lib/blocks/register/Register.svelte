<script lang="ts">
  import classNames from 'classnames';
  export let href: string = '';
  export let aClass: string =
    'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
  export let divClass: string =
    'w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700';
</script>

{#if $$slots.top}
  <a {href} class={classNames(aClass, $$props.class)}>
    <slot name="top" />
  </a>
{/if}
<div class={classNames(divClass, $$props.classDiv)}>
  <slot />
</div>
