<script lang="ts">
  import {SplitPane, Pane} from '$lib';
  
  let sizes = $state<number[]>([]);
  let basicContainerWidth = $state<number>(0);
  let basicContainerElement: HTMLDivElement;
  
  function handleBasicResize(newSizes: number[]) {
    sizes = newSizes;
    updateBasicContainerWidth();
  }

  function updateBasicContainerWidth() {
    if (basicContainerElement) {
      basicContainerWidth = basicContainerElement.offsetWidth;
    }
  }

  $effect(() => {
    if (basicContainerElement) {
      updateBasicContainerWidth();
      window.addEventListener('resize', updateBasicContainerWidth);
      return () => window.removeEventListener('resize', updateBasicContainerWidth);
    }
  });

  function getPixels(percent: number, width: number): number {
    return Math.round((percent / 100) * width);
  }
</script>

<!-- Example 1: Basic Horizontal Split -->
<div class="demo-section">
  <h2 class="text-xl font-bold mb-4">Basic Horizontal Split</h2>
  {#if sizes.length > 0 && basicContainerWidth > 0}
    <div class="mb-2 text-sm text-gray-600">
      <strong>Container width:</strong> {basicContainerWidth}px
      <span class="ml-4"><strong>Current sizes:</strong></span>
      <span class="ml-2">
        Left: {sizes[0].toFixed(1)}% ({getPixels(sizes[0], basicContainerWidth)}px)
      </span>
      <span class="ml-3">
        Right: {sizes[1].toFixed(1)}% ({getPixels(sizes[1], basicContainerWidth)}px)
      </span>
    </div>
  {/if}
  <div class="h-screen border rounded" bind:this={basicContainerElement}>
    <SplitPane responsive={false} minSize={600} onResize={handleBasicResize}>
      {#snippet children()}
        <Pane>
          <div class="p-4 bg-blue-50 h-full">
            <h3 class="font-semibold">Left Pane</h3>
            <p>This is the left pane content. Drag the divider to resize!</p>
            {#if sizes.length > 0 && basicContainerWidth > 0}
              <div class="mt-4 p-2 bg-white rounded border text-xs font-mono">
                Width: {sizes[0].toFixed(2)}% = {getPixels(sizes[0], basicContainerWidth)}px
              </div>
            {/if}
          </div>
        </Pane>
        
        <Pane>
          <div class="p-4 bg-green-50 h-full">
            <h3 class="font-semibold">Right Pane</h3>
            <p>This is the right pane content.</p>
            {#if sizes.length > 0 && basicContainerWidth > 0}
              <div class="mt-4 p-2 bg-white rounded border text-xs font-mono">
                Width: {sizes[1].toFixed(2)}% = {getPixels(sizes[1], basicContainerWidth)}px
              </div>
            {/if}
          </div>
        </Pane>
      {/snippet}
    </SplitPane>
  </div>
</div>