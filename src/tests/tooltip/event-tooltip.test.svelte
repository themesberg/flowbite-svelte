<script lang="ts" module>
  import type { TriggeredToggleEvent } from "$lib/types";

  export const testState = {
    beforeToggleCalled: false,
    eventReceived: null as TriggeredToggleEvent | null
  };
</script>

<script lang="ts">
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import type { TriggeredToggleEvent } from "$lib/types";

  function handleBeforeToggle(ev: TriggeredToggleEvent) {
    testState.beforeToggleCalled = true;
    testState.eventReceived = ev;
  }
</script>

<button data-testid="event-trigger">Trigger Event</button>
<Tooltip onbeforetoggle={handleBeforeToggle} data-testid="event-tooltip">
  Event tooltip
</Tooltip>
