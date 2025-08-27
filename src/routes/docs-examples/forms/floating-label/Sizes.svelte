<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput size="small" variant="filled" id="small_filled" name="small_filled" type="text">Small filled</FloatingLabelInput>
  <FloatingLabelInput size="small" variant="outlined" id="small_outlined" name="small_outlined" type="text">Small outlined</FloatingLabelInput>
  <FloatingLabelInput size="small" id="small_standard" name="small_standard" type="text">Small standard</FloatingLabelInput>
</div>
<div class="grid items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="default_filled" name="default_filled" type="text">Default filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="default_outlined" name="default_outlined" type="text">Default outlined</FloatingLabelInput>
  <FloatingLabelInput id="default_standard" name="default_standard" type="text">Default standard</FloatingLabelInput>
</div>
