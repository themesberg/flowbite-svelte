<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<SplitPane direction="vertical" data-testid="vertical-splitpane">
  <Pane data-testid="vertical-pane-1">
    <div>Vertical Pane 1</div>
  </Pane>
  <Pane data-testid="vertical-pane-2">
    <div>Vertical Pane 2</div>
  </Pane>
</SplitPane>
