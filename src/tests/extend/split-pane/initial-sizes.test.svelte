<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="initial-sizes-splitpane">
  <SplitPane initialSizes={[70, 30]}>
    <Pane>
      <div data-testid="initial-pane-1">Initial Pane 1 (70%)</div>
    </Pane>
    <Pane>
      <div data-testid="initial-pane-2">Initial Pane 2 (30%)</div>
    </Pane>
  </SplitPane>
</div>
