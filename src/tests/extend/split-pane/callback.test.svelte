<script lang="ts">
  import { SplitPane, Pane } from "$lib";
  import { callbackTestState } from "./callback-state";

  function handleResize(sizes: number[]) {
    callbackTestState.lastSizes = sizes;
    callbackTestState.callCount++;
  }
</script>

<div data-testid="callback-splitpane">
  <SplitPane onResize={handleResize}>
    <Pane>
      <div data-testid="callback-pane-1">Callback Pane 1</div>
    </Pane>
    <Pane>
      <div data-testid="callback-pane-2">Callback Pane 2</div>
    </Pane>
  </SplitPane>
</div>
