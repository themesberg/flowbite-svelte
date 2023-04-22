<script lang="ts">
  export let title: string = '';
  export let subtitle: string = '';
  export let headerDivClass: string = 'max-w-2xl mx-auto text-center';
  export let h2Class: string =
    'text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white';
  export let subtitleClass: string =
    'mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400';
  export let bodyDivClasss: string =
    'grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3';
</script>

<div class={headerDivClass}>
  <h2 class={h2Class}>
    {title}
  </h2>
  {#if subtitle}
    <p class={subtitleClass}>
      {subtitle}
    </p>
  {/if}
</div>

<div class={bodyDivClasss}>
  <slot />
</div>
