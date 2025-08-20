<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy="#disable-arrow">Tooltip content</Tooltip>