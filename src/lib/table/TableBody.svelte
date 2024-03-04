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