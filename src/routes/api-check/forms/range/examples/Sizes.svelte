<script>
  import { Range, Label } from "flowbite-svelte";
</script>

<Label>Small range</Label>
<Range id="small-range" size="sm" value={50} />
<Label>Default range</Label>
<Range id="default-range" size="md" value={50} />
<Label>Large range</Label>
<Range id="large-range" size="lg" value={50} />
