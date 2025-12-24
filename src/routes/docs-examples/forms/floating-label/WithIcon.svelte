<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
  import { EnvelopeOutline } from "flowbite-svelte-icons";
</script>

<div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="floating_filled" name="floating_filled" type="text" classes={{ label: "inline-flex " }}>
    <EnvelopeOutline class="me-1.5 h-4 w-4" />Floating filled
  </FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="floating_outlined" name="floating_outlined" type="text" classes={{ label: "inline-flex " }}>
    <EnvelopeOutline class="me-1.5 h-4 w-4" />Floating outlined
  </FloatingLabelInput>
  <FloatingLabelInput id="floating_standard" name="floating_standard" type="text" classes={{ label: "inline-flex " }}><EnvelopeOutline class="me-1.5 h-4 w-4" />Floating standard</FloatingLabelInput>
</div>
