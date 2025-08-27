<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<FloatingLabelInput
  clearable
  clearableOnClick={() => {
    alert("Clicked clear button");
  }}
  variant="filled"
  id="event_filled"
  name="event_illed"
  type="text"
>
  Floating filled
</FloatingLabelInput>
