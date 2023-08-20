<script lang="ts">
  export let tableBodyClass: string | undefined = undefined;
</script>

<tbody class={tableBodyClass}>
  <slot />
</tbody>

<!--
@component
[Go to Popover](https://flowbite-svelte.com/)
## Props
@prop export let tableBodyClass: string | undefined = undefined;
-->
