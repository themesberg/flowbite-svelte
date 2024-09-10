<script lang="ts">
  import { Button, Tooltip } from '$lib';
</script>

<div class="m-4 flex justify-center">
  <div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>
</div>
<div class="space-x-4 rtl:space-x-reverse">
  <Button id="ref-left">Left</Button>
  <Button id="ref-top">Top</Button>
  <Button id="ref-right">Right</Button>
</div>
<Tooltip reference="#ext-ref" color="emerald" triggeredBy="#ref-left" position="left" class="w-20 text-sm font-light">Tooltip content.</Tooltip>
<Tooltip reference="#ext-ref" color="cyan" triggeredBy="#ref-top" position="top" class="w-20 text-sm font-light">Tooltip content.</Tooltip>
<Tooltip reference="#ext-ref" color="pink" triggeredBy="#ref-right" position="right" class="w-20 text-sm font-light">Tooltip content.</Tooltip>
