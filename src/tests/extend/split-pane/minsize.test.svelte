<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="minsize-splitpane">
  <SplitPane minSize={150}>
    <Pane>
      <div data-testid="minsize-pane-1">MinSize Pane 1</div>
    </Pane>
    <Pane>
      <div data-testid="minsize-pane-2">MinSize Pane 2</div>
    </Pane>
  </SplitPane>
</div>
