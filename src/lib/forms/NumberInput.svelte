<script lang="ts">
  import Input from './Input.svelte';

  export let value: number = 0;
</script>

<Input let:props {...$$restProps}>
  <input {...props} type="number" bind:value />
</Input>
