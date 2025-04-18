<script lang="ts">
  let { children, ...restProps } = $props();
</script>

<div {...restProps}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
-->
