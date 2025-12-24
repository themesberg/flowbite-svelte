<script lang="ts">
  import { FloatingLabelInput } from "$lib";

  let value = $state("Clearable text");
</script>

<FloatingLabelInput bind:value clearable={true} id="test-clearable" name="test-clearable" type="text">Clearable Input</FloatingLabelInput>
