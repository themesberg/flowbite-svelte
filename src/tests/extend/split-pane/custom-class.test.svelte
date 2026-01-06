<script lang="ts">
  import { SplitPane, Pane } from "$lib";
</script>

<div data-testid="custom-class-splitpane">
  <SplitPane class="custom-splitpane-class">
    <Pane class="custom-pane-class">
      <div data-testid="custom-pane-1">Custom Class Pane 1</div>
    </Pane>
    <Pane class="custom-pane-class">
      <div data-testid="custom-pane-2">Custom Class Pane 2</div>
    </Pane>
  </SplitPane>
</div>
