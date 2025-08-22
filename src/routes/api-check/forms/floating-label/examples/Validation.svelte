<script lang="ts">
  import { FloatingLabelInput, Helper } from "flowbite-svelte";
</script>


<!-- Success messages -->
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="green" variant="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text">Filled success</FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" variant="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text">Outlined success</FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" variant="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text">Standard success</FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
</div>
<!-- Error messages -->
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="red" variant="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text">Filled error</FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" variant="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text">Outlined error</FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" variant="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text">Standard error</FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
</div>