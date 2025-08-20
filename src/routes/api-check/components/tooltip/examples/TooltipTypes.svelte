<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button>Light tooltip</Button>
<Tooltip type="light">Tooltip content</Tooltip>
<Button>Default tooltip</Button>
<Tooltip type="auto">Tooltip content</Tooltip>
<Button>Dark tooltip</Button>
<Tooltip type="dark">Tooltip content</Tooltip>