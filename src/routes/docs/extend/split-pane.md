---
layout: componentLayout
title: Svelte Split Pane
breadcrumb_title: Split Pane
component_title: Split Pane
dir: Extend
description: AAA.

---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  import {SplitPane, Pane} from '$lib';
  
  let sizes = [];
  
  function handleResize(newSizes: number[]) {
    sizes = newSizes;
    console.log('Pane sizes:', newSizes);
  }

  const components = 'SplitPane, Pane'
  // const relatedLinks = [''];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { SplitPane, Pane } from  'flowbite-svelte';
</script>
```

## Usage Example 1


<!-- Example 1: Basic Horizontal Split -->
<div class="demo-section">
  <h2 class="text-xl font-bold mb-4">Basic Horizontal Split</h2>
  <div class="h-96 border rounded">
    <SplitPane responsive={false}>
      {#snippet children()}
        <Pane>
          <div class="p-4 bg-blue-50 h-full">
            <h3 class="font-semibold">Left Pane</h3>
            <p>This is the left pane content. Drag the divider to resize!</p>
          </div>
        </Pane>
        
        <Pane>
          <div class="p-4 bg-green-50 h-full">
            <h3 class="font-semibold">Right Pane</h3>
            <p>This is the right pane content.</p>
          </div>
        </Pane>
      {/snippet}
    </SplitPane>
  </div>
</div>

<!-- Example 2: Vertical Split with Custom Sizes -->
<div class="demo-section">
  <h2 class="text-xl font-bold mb-4">Vertical Split (30/70)</h2>
  <div class="h-96 border rounded">
    <SplitPane 
      direction="vertical" 
      initialSizes={[30, 70]}
      minSize={50}
      responsive={false}
    >
      {#snippet children()}
        <Pane>
          <div class="p-4 bg-purple-50 h-full">
            <h3 class="font-semibold">Top Pane (30%)</h3>
            <p>Tab to the divider and use arrow keys (↑/↓) for keyboard control.</p>
          </div>
        </Pane>
        
        <Pane>
          <div class="p-4 bg-yellow-50 h-full">
            <h3 class="font-semibold">Bottom Pane (70%)</h3>
            <p>Press Enter or Space on divider to reset to equal sizes.</p>
          </div>
        </Pane>
      {/snippet}
    </SplitPane>
  </div>
</div>


<!-- Example 3: Three Panes -->
<div class="demo-section">
  <h2 class="text-xl font-bold mb-4">Three Panes</h2>
  <div class="h-96 border rounded">
    <SplitPane minSize={80} responsive={false}>
      {#snippet children()}
        <Pane>
          <div class="p-4 bg-red-50 h-full">
            <h3 class="font-semibold">Pane 1</h3>
            <p>First pane</p>
          </div>
        </Pane>
        
        <Pane>
          <div class="p-4 bg-blue-50 h-full">
            <h3 class="font-semibold">Pane 2</h3>
            <p>Middle pane</p>
          </div>
        </Pane>
        
        <Pane>
          <div class="p-4 bg-green-50 h-full">
            <h3 class="font-semibold">Pane 3</h3>
            <p>Last pane</p>
          </div>
        </Pane>
      {/snippet}
    </SplitPane>
  </div>
</div>


<!-- Example 4: Responsive with Callback -->
<div class="demo-section">
  <h2 class="text-xl font-bold mb-4">Responsive (switches to vertical on mobile)</h2>
  <div class="mb-2 text-sm text-gray-600">
    {#if sizes.length > 0}
      Current sizes: {sizes.map(s => s.toFixed(1) + '%').join(' / ')}
    {/if}
  </div>
  <div class="h-96 border rounded">
    <SplitPane 
      responsive={true}
      breakpoint={768}
      onResize={handleResize}
    >
      {#snippet children()}
        <Pane>
          <div class="p-4 bg-indigo-50 h-full">
            <h3 class="font-semibold">Pane A</h3>
            <p>Resize your browser window to see the layout change from horizontal to vertical at 768px.</p>
          </div>
        </Pane>
        
        <Pane>
          <div class="p-4 bg-pink-50 h-full">
            <h3 class="font-semibold">Pane B</h3>
            <p>The onResize callback tracks size changes shown above.</p>
          </div>
        </Pane>
      {/snippet}
    </SplitPane>
  </div>
</div>


<!-- Example 5: Nested Split Panes -->
<div class="demo-section">
  <h2 class="text-xl font-bold mb-4">Nested Split Panes</h2>
  <div class="h-96 border rounded">
    <SplitPane responsive={false}>
      {#snippet children()}
        <Pane>
          <div class="p-4 bg-gray-50 h-full">
            <h3 class="font-semibold">Sidebar</h3>
            <p>Navigation or tools</p>
          </div>
        </Pane>
        
        <Pane>
          <SplitPane direction="vertical" transition={false} responsive={false}>
            {#snippet children()}
              <Pane>
                <div class="p-4 bg-blue-50 h-full">
                  <h3 class="font-semibold">Top Content</h3>
                  <p>Main content area</p>
                </div>
              </Pane>
              
              <Pane>
                <div class="p-4 bg-green-50 h-full">
                  <h3 class="font-semibold">Bottom Content</h3>
                  <p>Footer or additional info</p>
                </div>
              </Pane>
            {/snippet}
          </SplitPane>
        </Pane>
      {/snippet}
    </SplitPane>
  </div>
</div>

<!-- Example 6: With Max Size -->
<div class="demo-section">
  <h2 class="text-xl font-bold mb-4">With Min/Max Constraints</h2>
  <div class="h-96 border rounded">
    <SplitPane 
      minSize={100} 
      maxSize={400}
      initialSizes={[25, 75]}
      responsive={false}
    >
      {#snippet children()}
        <Pane>
          <div class="p-4 bg-orange-50 h-full">
            <h3 class="font-semibold">Constrained Pane</h3>
            <p class="text-sm mt-2">This pane has:</p>
            <ul class="text-sm list-disc ml-5">
              <li>Min size: 100px</li>
              <li>Max size: 400px</li>
            </ul>
          </div>
        </Pane>
        
        <Pane>
          <div class="p-4 bg-teal-50 h-full">
            <h3 class="font-semibold">Flexible Pane</h3>
            <p>This pane takes up the remaining space.</p>
          </div>
        </Pane>
      {/snippet}
    </SplitPane>
  </div>
</div>



<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: #f5f5f5;
  }
  
  .demo-section {
    padding: 2rem;
    margin-bottom: 2rem;
    background: white;
  }
</style>