<script>
  import { Textarea, Label } from "flowbite-svelte";
</script>

<Label for="textarea-id" class="mb-2">Your message</Label>
<Textarea clearable id="textarea-clearable" placeholder="Your message" rows={4} name="message" class="w-full" />