<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="vertical-splitpane">
  <SplitPane direction="vertical" responsive={false}>
    <Pane>
      <div data-testid="vertical-pane-1">Vertical Pane 1</div>
    </Pane>
    <Pane>
      <div data-testid="vertical-pane-2">Vertical Pane 2</div>
    </Pane>
  </SplitPane>
</div>
