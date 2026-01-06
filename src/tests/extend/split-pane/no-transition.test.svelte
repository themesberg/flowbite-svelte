<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="no-transition-splitpane">
  <SplitPane transition={false}>
    <Pane>
      <div data-testid="no-transition-pane-1">No Transition Pane 1</div>
    </Pane>
    <Pane>
      <div data-testid="no-transition-pane-2">No Transition Pane 2</div>
    </Pane>
  </SplitPane>
</div>
