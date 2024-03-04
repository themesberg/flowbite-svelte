<script lang="ts">
  interface Props{
    children?: any;
    class?: string | undefined;
  }
  let { children, class: className, ...attributes } = $props<Props>();
  // export let tableBodyClass: string | undefined = undefined;
</script>

<tbody class={className} {...attributes}>
  {@render children()}
</tbody>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:class?: string | undefined;
-->
