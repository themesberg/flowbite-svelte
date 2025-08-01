<script>
  import { Label, Input, Helper } from "flowbite-svelte";
</script>

<div class="mb-6">
  <Label for="success" color="green" class="mb-2 block">Your name</Label>
  <Input id="success" color="green" placeholder="Success input" />
  <Helper class="mt-2" color="green">
    <span class="font-medium">Well done!</span>
    Some success message.
  </Helper>
</div>
<div class="mb-6">
  <Label for="error" color="red" class="mb-2 block">Your name</Label>
  <Input id="error" color="red" placeholder="Error input" />
  <Helper class="mt-2" color="red">
    <span class="font-medium">Not so well done!</span>
    Some error message.
  </Helper>
</div>
