<script lang="ts">
  import { Input, Label } from "flowbite-svelte";
</script>

<Label class="space-y-2">
  <div>Small icon input</div>
  <Input type="email" placeholder="Small input" size="sm" />
</Label>

<Label class="space-y-2">
  <div>Default icon input</div>
  <Input type="email" placeholder="Default input" size="md" />
</Label>

<Label class="space-y-2">
  <div>Large icon input</div>
  <Input type="email" placeholder="Large input" size="lg" />
</Label>