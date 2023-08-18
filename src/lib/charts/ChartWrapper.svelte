<script lang="ts">
  export let divClass: string = 'max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6';
</script>

<div class="{divClass}">
  {#if $$slots.header}
    <slot name="header" />
  {/if}
  <slot />
  {#if $$slots.footer}
    <slot name="footer" />
  {/if}
</div>