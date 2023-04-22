<script lang="ts">
  export let divClass: string =
    'hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20';
</script>

<div class={divClass}>
  <slot />
</div>
