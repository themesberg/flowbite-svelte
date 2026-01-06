<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<SplitPane initialSizes={[70, 30]} data-testid="initial-sizes-splitpane">
  <Pane data-testid="initial-pane-1">
    <div>Initial Pane 1 (70%)</div>
  </Pane>
  <Pane data-testid="initial-pane-2">
    <div>Initial Pane 2 (30%)</div>
  </Pane>
</SplitPane>
