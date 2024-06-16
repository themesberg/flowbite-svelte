<script lang="ts">
  export let pClass: string = 'text-lg text-gray-600 dark:text-gray-400';
</script>

<p class={pClass}>
  <slot />
</p>
