<script lang="ts">
  export let tableBodyClass: string | undefined = undefined;
</script>

<tbody class={tableBodyClass}>
  <slot />
</tbody>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let tableBodyClass: string | undefined = undefined;
-->
