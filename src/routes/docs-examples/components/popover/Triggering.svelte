<script lang="ts">
  import { Popover, Button } from "flowbite-svelte";
</script>

<Button id="hover">Hover popover</Button>
<Button id="click">Click popover</Button>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#hover" trigger="hover">And here's some amazing content. It's very engaging. Right?</Popover>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#click" trigger="click">And here's some amazing content. It's very engaging. Right?</Popover>
