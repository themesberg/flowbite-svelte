<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="basic-splitpane">
  <SplitPane responsive={false}>
    <Pane>
      <div data-testid="pane-1">Pane 1 Content</div>
    </Pane>
    <Pane>
      <div data-testid="pane-2">Pane 2 Content</div>
    </Pane>
  </SplitPane>
</div>
