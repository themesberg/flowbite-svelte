<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput clearable variant="filled" id="clearable_filled" name="clearable_illed" type="text">Floating filled</FloatingLabelInput>
  <FloatingLabelInput clearable variant="outlined" id="clearable_outlined" name="clearable_outlined" type="text">Floating outlined</FloatingLabelInput>
  <FloatingLabelInput clearable id="clearable_standard" name="clearable_standard" type="text">Floating standard</FloatingLabelInput>
</div>