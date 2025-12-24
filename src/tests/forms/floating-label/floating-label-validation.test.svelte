<script lang="ts">
  import { FloatingLabelInput } from "$lib";
</script>

<div class="space-y-4">
  <FloatingLabelInput validation="none" id="test-none" name="test-none" type="text">None Validation</FloatingLabelInput>
  <FloatingLabelInput validation="success" id="test-success" name="test-success" type="text">Success Validation</FloatingLabelInput>
  <FloatingLabelInput validation="error" id="test-error" name="test-error" type="text">Error Validation</FloatingLabelInput>
</div>
