<script lang="ts">
  export let divOuterClass: string = 'relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg';
  export let headerType: 'search' | 'textbtn' | 'custom' = 'search';
  const divInnerClasses = {
    search:
      'flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4',
    textbtn:
      'flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4',
    custom: ''
  };
  export let divSlotClass: string =
    'flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3';
</script>

<div class={divOuterClass}>
  {#if headerType === 'search'}
    <div class={divInnerClasses[headerType]}>
      <slot name="search" />
      <div class={divSlotClass}>
        <slot />
      </div>
    </div>
  {:else}
    <div class={divInnerClasses[headerType]}>
      <slot />
    </div>
  {/if}
</div>
