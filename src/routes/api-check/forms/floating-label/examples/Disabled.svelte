<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="disabled_filled" name="disabled_filled" type="text" disabled>Disabled filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="disabled_outlined" name="disabled_outlined" type="text" disabled>Disabled outlined</FloatingLabelInput>
  <FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" disabled>Disabled standard</FloatingLabelInput>
</div>