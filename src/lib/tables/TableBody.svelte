<script lang="ts">
  export let tableBodyClass: string | undefined = undefined;
</script>

<tbody class={tableBodyClass}>
  <slot />
</tbody>
