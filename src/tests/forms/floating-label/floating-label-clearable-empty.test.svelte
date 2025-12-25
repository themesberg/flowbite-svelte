<script lang="ts">
  import { FloatingLabelInput } from "$lib";

  let value = $state("");
</script>

<FloatingLabelInput bind:value clearable={true} id="test-clearable-empty" name="test-clearable-empty" type="text">Clearable Input</FloatingLabelInput>
