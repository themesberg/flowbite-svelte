<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="responsive-splitpane">
  <SplitPane responsive={true} breakpoint={768}>
    <Pane>
      <div data-testid="responsive-pane-1">Responsive Pane 1</div>
    </Pane>
    <Pane>
      <div data-testid="responsive-pane-2">Responsive Pane 2</div>
    </Pane>
  </SplitPane>
</div>
