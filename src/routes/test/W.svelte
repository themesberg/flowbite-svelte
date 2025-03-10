<script>
  let { group = $bindable(), ...restProps } = $props();
</script>

<input type="checkbox" bind:group {...restProps} value="e" />
<input type="checkbox" bind:group {...restProps} value="f" />
