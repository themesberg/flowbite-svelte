<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="multi-pane-splitpane">
  <SplitPane>
    <Pane>
      <div data-testid="multi-pane-1">Multi Pane 1</div>
    </Pane>
    <Pane>
      <div data-testid="multi-pane-2">Multi Pane 2</div>
    </Pane>
    <Pane>
      <div data-testid="multi-pane-3">Multi Pane 3</div>
    </Pane>
  </SplitPane>
</div>
