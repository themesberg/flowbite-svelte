<script lang="ts">
  export let tableBodyClass: string | undefined = undefined;
</script>

<tbody class={tableBodyClass}>
  <slot />
</tbody>

<!--
  @component
  ## Features
  [Go to Table](https://flowbite-svelte.com/docs/components/table)
  ## Props
  @prop tableBodyClass: string | undefined = undefined;
-->
