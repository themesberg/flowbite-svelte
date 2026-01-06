<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";
  import { callbackTestState } from "./callback-state";

  const items: ScrollSpyItem[] = [
    { id: "callback-section1", label: "Callback Section 1" },
    { id: "callback-section2", label: "Callback Section 2" }
  ];

  function handleActiveChange(itemId: string) {
    callbackTestState.activeId = itemId;
    callbackTestState.activeChangeCallCount++;
  }

  function handleNavigate(itemId: string) {
    callbackTestState.navigatedId = itemId;
    callbackTestState.navigateCallCount++;
  }
</script>

<ScrollSpy {items} onActiveChange={handleActiveChange} onNavigate={handleNavigate} data-testid="callback-scrollspy" />

<div id="callback-section1" data-testid="callback-section-1">Callback Section 1 Content</div>
<div id="callback-section2" data-testid="callback-section-2">Callback Section 2 Content</div>
