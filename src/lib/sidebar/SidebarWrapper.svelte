<script lang="ts">
  let { children, ...restProps } = $props();
</script>

<div {...restProps}>
  {@render children?.()}
</div>

<!--
  @component
  [Go to docs](https://flowbite-svelte.com/)
  ## Props
  @prop export let divClass: $$Props['divClass'] = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded-sm dark:bg-gray-800';
  -->
