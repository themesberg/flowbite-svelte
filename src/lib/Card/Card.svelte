<script lang="ts">
  import classNames from 'classnames';
  export let horizontal: boolean = false;
  export let imgAlt: string = '';
  export let imgSrc: string = '';
</script>

<div
  class={classNames(
    'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
    {
      'flex-col': !horizontal,
      'flex-col md:max-w-xl md:flex-row': horizontal,
    },
    $$props.class
  )}
>
  {#if imgSrc}
    <img
      class={classNames({
        'rounded-t-lg': !horizontal,
        'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg': horizontal,
      })}
      src={imgSrc}
      alt={imgAlt ?? ''}
    />
  {/if}
  <div class="flex h-full flex-col justify-center gap-4 p-6">
    <slot />
  </div>
</div>
