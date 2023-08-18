<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let divClass: string = 'max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6';
  let divCls: string = twMerge(divClass, $$props.class)
</script>

<div class="{divCls}">
  {#if $$slots.header}
    <slot name="header" />
  {/if}
  <slot />
  {#if $$slots.footer}
    <slot name="footer" />
  {/if}
</div>