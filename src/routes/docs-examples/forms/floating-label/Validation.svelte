<script lang="ts">
  import { FloatingLabelInput, Helper } from "flowbite-svelte";
</script>

<!-- Success messages -->
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput validation="success" variant="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text">Filled success</FloatingLabelInput>
    <Helper class="text-fg-success-strong mt-2 text-xs">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput validation="success" variant="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text">Outlined success</FloatingLabelInput>
    <Helper class="text-fg-success-strong mt-2 text-xs">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput validation="success" variant="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text">Standard success</FloatingLabelInput>
    <Helper class="text-fg-success-strong mt-2 text-xs">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
</div>

<!-- Error messages -->
<div class="grid items-end gap-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput validation="error" variant="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text">Filled error</FloatingLabelInput>
    <Helper class="text-fg-danger-strong mt-2 text-xs">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput validation="error" variant="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_error" type="text">Outlined error</FloatingLabelInput>
    <Helper class="text-fg-danger-strong mt-2 text-xs">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput validation="error" variant="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_error" type="text">Standard error</FloatingLabelInput>
    <Helper class="text-fg-danger-strong mt-2 text-xs">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
</div>
