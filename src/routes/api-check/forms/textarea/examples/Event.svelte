<script>
  import { Textarea, Label } from "flowbite-svelte";
</script>

<Label for="textarea-id" class="mb-2">Your message</Label>
<Textarea
  clearable
  clearableOnClick={() => {
    alert("Clicked clear button!");
  }}
  class="textarea-event w-full"
  placeholder="Your message"
  rows={4}
  name="message"
/>