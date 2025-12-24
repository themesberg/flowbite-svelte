<script lang="ts">
  import { FloatingLabelInput } from "$lib";

  let value = $state("Initial value");
</script>

<div>
  <FloatingLabelInput bind:value id="test-value" name="test-value" type="text">Value Binding</FloatingLabelInput>
  <div data-testid="value-display">{value}</div>
</div>
