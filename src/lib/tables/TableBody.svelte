<script lang="ts">
  export let tableBodyClass: string | undefined = undefined;
</script>

<tbody class={tableBodyClass}>
  <slot />
</tbody>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tableBodyClass: string | undefined = undefined;
-->
