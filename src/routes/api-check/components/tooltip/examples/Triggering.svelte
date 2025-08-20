<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button id="hover">Tooltip hover</Button>
<Button id="click">Tooltip click</Button>
<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>