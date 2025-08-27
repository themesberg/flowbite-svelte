<script>
  import { Label, Input } from "flowbite-svelte";
</script>

<div class="mb-6">
  <Label for="large-input" class="mb-2 block">Large input</Label>
  <Input id="large-input" size="lg" placeholder="Large input" />
</div>
<div class="mb-6">
  <Label for="default-input" class="mb-2 block">Default input</Label>
  <Input id="default-input" placeholder="Default input" />
</div>
<div class="mb-6">
  <Label for="small-input" class="mb-2 block">Small input</Label>
  <Input id="small-input" size="sm" placeholder="Small input" />
</div>
