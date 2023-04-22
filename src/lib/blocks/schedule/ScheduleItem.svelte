<script lang="ts">
  export let divClass: string = 'flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center';
  export let pClass: string =
    'w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0';
  export let h3Class: string = 'text-lg font-semibold text-gray-900 dark:text-white';
  export let aClass: string = 'hover:underline';
  export let item = {
    time: '',
    href: '',
    title: ''
  };
</script>

<div class={divClass}>
  {#if item.time}
    <p class={pClass}>
      {item.time}
    </p>
  {/if}
  <h3 class={h3Class}>
    {#if item.href}
      <a href={item.href} class={aClass}>{item.title}</a>
    {:else}
      {item.title}
    {/if}
  </h3>
</div>
