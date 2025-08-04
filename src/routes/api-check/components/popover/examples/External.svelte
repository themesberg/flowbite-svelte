<script>
  import { Popover, Button } from "flowbite-svelte";
</script>

<div id="ext-ref" class="my-4 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>
<div class="space-x-4 rtl:space-x-reverse">
  <Button id="ref-1">Left</Button>
  <Button id="ref-2">Top</Button>
  <Button id="ref-3">Right</Button>
</div>
<Popover reference="#ext-ref" triggeredBy="#ref-1" class="w-64 text-sm font-light " placement="left" title="Placement: Left">And here's some amazing content. It's very engaging. Right?</Popover>
<Popover reference="#ext-ref" triggeredBy="#ref-2" class="w-64 text-sm font-light " placement="top" title="Placement: Top">And here's some amazing content. It's very engaging. Right?</Popover>
<Popover reference="#ext-ref" triggeredBy="#ref-3" class="w-64 text-sm font-light " placement="right" title="Placement: Right">And here's some amazing content. It's very engaging. Right?</Popover>