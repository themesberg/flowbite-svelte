<script lang="ts">
  import { Popover, Button } from "flowbite-svelte";
</script>

<Button id="arrow">Default popover</Button>
<Popover arrow={false} class="w-64 text-sm font-light" title="Popover title" triggeredBy="#arrow">And here's some amazing content. It's very engaging. Right?</Popover>
