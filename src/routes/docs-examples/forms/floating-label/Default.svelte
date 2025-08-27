<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="floating_filled" name="floating_filled" type="text">Floating filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="floating_outlined" name="floating_outlined" type="text">Floating outlined</FloatingLabelInput>
  <FloatingLabelInput id="floating_standard" name="floating_standard" type="text">Floating standard</FloatingLabelInput>
</div>
