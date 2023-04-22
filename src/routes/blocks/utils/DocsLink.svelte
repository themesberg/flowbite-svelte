<script lang="ts">
  import classNames from 'classnames';
  import BookOpen from './icons/BookOpen.svelte';
  export let page: string = '';
  const href = `https://flowbite-svelte-blocks.pages.dev/${page}`;
</script>

<div class={classNames('flex justify-between items-center my-2', $$props.class)}>
  <a
    {href}
    {...$$restProps}
    rel="noopener nofollow noreferrer"
    class="flex items-center py-2 px-4 mr-3 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  >
    <BookOpen class="mr-2 h-5 w-5" />
    Read Docs
  </a>
</div>
