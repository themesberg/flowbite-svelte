<script lang="ts">
  import { Popover, Button, type PopoverProps } from "flowbite-svelte";
  let placement = $state("bottom");

  function onbeforetoggle(ev: Event) {
    const trigger = (ev as { trigger?: { id?: string } }).trigger;
    if (trigger?.id) {
      placement = trigger.id.replace("placement-", "");
    }
  }
</script>

<Button id="placement-top">Top popover</Button>
<div class="space-x-4 rtl:space-x-reverse">
  <Button id="placement-left">Left popover</Button>
  <Button id="placement-right">Right popover</Button>
</div>
<Button id="placement-bottom">Bottom popover</Button>
<Popover triggeredBy="[id^='placement-']" placement={placement as PopoverProps["placement"]} class="w-64 text-sm font-light " title="Popover {placement}" {onbeforetoggle}>
  And here's some amazing content. It's very engaging. Right?
</Popover>
