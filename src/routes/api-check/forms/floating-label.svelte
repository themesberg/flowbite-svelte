<script>
  import { FloatingLabelInput, Helper } from "$lib";
</script>

<h1 class="my-4 text-3xl">Floating Label</h1>

<h2 class="my-4 text-2xl">Floating label examples</h2>

<div id="exampleWrapper" class="my-4 grid w-full items-end gap-6 rounded border p-4 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="floating_filled" name="floating_filled" type="text">Floating filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="floating_outlined" name="floating_outlined" type="text">Floating outlined</FloatingLabelInput>
  <FloatingLabelInput id="floating_standard" name="floating_standard" type="text">Floating standard</FloatingLabelInput>
</div>

<h2 class="my-4 text-2xl">Disabled state</h2>

<div id="exampleWrapper" class="my-4 grid w-full items-end gap-6 rounded border p-4 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="disabled_filled" name="disabled_filled" type="text" disabled>Disabled filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="disabled_outlined" name="disabled_outlined" type="text" disabled>Disabled outlined</FloatingLabelInput>
  <FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" disabled>Disabled standard</FloatingLabelInput>
</div>

<h2 class="my-4 text-2xl">Validation</h2>

<!-- Success messages -->
<div class="my-4 mb-6 grid items-end gap-6 rounded border p-4 md:grid-cols-3">
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

<h2 class="my-4 text-2xl">Sizes</h2>
<div class="my-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Helper text</h2>
<div class="my-4 rounded border p-4">
  <FloatingLabelInput variant="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text">Floating helper</FloatingLabelInput>
  <Helper class="pt-2">
    Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline">Community Guidelines</a>
    .
  </Helper>
</div>
