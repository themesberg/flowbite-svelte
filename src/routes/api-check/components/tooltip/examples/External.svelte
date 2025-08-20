<script lang="ts">
  import { Tooltip, Button } from "flowbite-svelte";
  import type { Placement } from "@floating-ui/utils";
  let placement: Placement = "top";
  function onbeforetoggle(ev: Event) {
    const trigger = (ev as any).trigger;
    if (trigger?.id) {
      placement = trigger.id.replace("ref-", "");
    }
  }
</script>

<div id="ext-ref" class="rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>
<div class="space-x-4 rtl:space-x-reverse">
  <Button id="ref-left">Left</Button>
  <Button id="ref-top">Top</Button>
  <Button id="ref-right">Right</Button>
</div>
<Tooltip reference="#ext-ref" triggeredBy="[id^='ref-']" {placement} {onbeforetoggle} class="w-64 text-sm font-light">And here's some amazing content. It's very engaging. Right?</Tooltip>