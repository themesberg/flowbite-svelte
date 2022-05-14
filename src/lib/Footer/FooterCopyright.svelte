<script lang="ts">
  import classNames from 'classnames';

  export let year: number = new Date().getFullYear();
  export let href: string = '';
  export let by: string = '';
</script>

<span class={classNames('text-sm text-gray-500 dark:text-gray-400 sm:text-center', $$props.class)}>
  &copy; {year}
  {#if href}
    <a {href} class="ml-1 hover:underline">
      {by}
    </a>
  {:else}
    <span class="ml-1">{by}</span>
  {/if}
  . All Rights Reserved.
</span>
