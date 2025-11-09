<script lang="ts">
  import {ClipboardManager} from '$lib';
  import type { ClipboardItem } from '$lib/types';

  
  // Example 1: Basic with selection menu
  const example1 = `<ClipboardManager enableSelectionMenu={true} />`;

  // Example 2: Target specific content area
  const example2 = `<div id="article-content">
  <p>Your article content here...</p>
  <p>Users can select any text to save it.</p>
</div>

<ClipboardManager 
  enableSelectionMenu={true}
  selectionTarget="#article-content"
/>`;

  // Example 3: Documentation site
  const example3 = `<script>
  import { ClipboardManager } from 'flowbite-svelte';
  
  let items = [
    { id: 1, text: "npm install package", pinned: true, timestamp: Date.now() }
  ];
<\/script>

<div class="docs-layout">
  <!-- Documentation content -->
  <div class="prose" id="docs-content">
    <h1>API Documentation</h1>
    <p>Select any code snippet or command to save it.</p>
    <code>git clone https://github.com/repo.git</code>
  </div>

  <!-- Sidebar with clipboard -->
  <aside class="sidebar">
    <ClipboardManager 
      {items}
      enableSelectionMenu={true}
      selectionTarget="#docs-content"
      placeholder="Or paste a command..."
      limit={30}
    />
  </aside>
</div>`;

  // Example 4: Blog/Article reader
  const example4 = `<script>
  import { ClipboardManager } from 'flowbite-svelte';
<\/script>

<article class="max-w-4xl mx-auto">
  <div id="article-body" class="prose">
    <h1>How to Build Better UIs</h1>
    <p>Select any quote or insight to save for later...</p>
    <!-- Article content -->
  </div>
</article>

<!-- Floating clipboard panel -->
<div class="fixed right-4 top-20 w-80">
  <ClipboardManager 
    enableSelectionMenu={true}
    selectionTarget="#article-body"
    saveLabel="Add"
    clearLabel="Clear All"
  />
</div>`;

  // Example 5: Email client
  const example5 = `<script>
  import { ClipboardManager } from 'flowbite-svelte';
  
  // Pre-load canned responses
  let responses = [
    { id: 1, text: "Thank you for contacting us!", pinned: true, timestamp: Date.now() },
    { id: 2, text: "Your order has been shipped.", pinned: true, timestamp: Date.now() - 1000 }
  ];
<\/script>

<div class="email-compose">
  <div id="email-body">
    <textarea placeholder="Compose email..."></textarea>
  </div>

  <aside>
    <h3>Quick Responses</h3>
    <ClipboardManager 
      items={responses}
      enableSelectionMenu={true}
      selectionTarget="#email-body"
      placeholder="Save new response..."
    />
  </aside>
</div>`;

  // Example 6: Learning platform
  const example6 = `<script>
  import { ClipboardManager } from 'flowbite-svelte';
<\/script>

<div class="lesson-layout">
  <!-- Lesson content -->
  <div id="lesson" class="lesson-content">
    <h2>JavaScript Variables</h2>
    <p>Select important concepts to remember:</p>
    <ul>
      <li>let creates block-scoped variables</li>
      <li>const creates read-only references</li>
      <li>var creates function-scoped variables</li>
    </ul>
  </div>

  <!-- Student notes -->
  <div class="notes-panel">
    <h3>My Notes</h3>
    <ClipboardManager 
      enableSelectionMenu={true}
      selectionTarget="#lesson"
      placeholder="Add your own notes..."
      persist={true}
    />
  </div>
</div>`;

  // Example 7: Code editor with snippets
  const example7 = `<script>
  import { ClipboardManager } from 'flowbite-svelte';
  
  let snippets = [
    { id: 1, text: "console.log()", pinned: true, timestamp: Date.now() },
    { id: 2, text: "async function", pinned: true, timestamp: Date.now() }
  ];
<\/script>

<div class="editor-layout">
  <div id="code-editor">
    <pre><code>// Your code here</code></pre>
  </div>

  <div class="snippets-sidebar">
    <ClipboardManager 
      items={snippets}
      enableSelectionMenu={true}
      selectionTarget="#code-editor"
      placeholder="Save code snippet..."
      maxLength={5000}
      filterSensitive={false}
    />
  </div>
</div>`;

  // Example 8: Multi-area selection
  const example8 = `<script>
  import { ClipboardManager } from 'flowbite-svelte';
<\/script>

<!-- Multiple content areas -->
<div class="selectable-area" id="content1">
  <p>Content area 1</p>
</div>

<div class="selectable-area" id="content2">
  <p>Content area 2</p>
</div>

<!-- Single clipboard for both areas -->
<ClipboardManager 
  enableSelectionMenu={true}
  selectionTarget=".selectable-area"
/>`;

  // Example 9: Disable manual input, selection only
  const example9 = `<ClipboardManager 
  enableSelectionMenu={true}
  selectionTarget="#content"
>
  {#snippet children({ item, copyItem, deleteItem, togglePin })}
    <!-- Only show saved items, no input box -->
    <div class="saved-item">
      <p>{item.text}</p>
      <button onclick={() => copyItem(item)}>Copy</button>
      <button onclick={() => deleteItem(item.id)}>Delete</button>
    </div>
  {/snippet}
</ClipboardManager>`;

  // Example 10: Custom empty state for selection
  const example10 = `<ClipboardManager 
  enableSelectionMenu={true}
  selectionTarget="#article"
>
  {#snippet empty()}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">👆</div>
      <h3 class="text-lg font-semibold mb-2">
        No saved items yet
      </h3>
      <p class="text-sm text-gray-600">
        Highlight any text in the article above<br>
        and click "Save to Clipboard" to get started
      </p>
    </div>
  {/snippet}
</ClipboardManager>`;

  // For live demo
  let demoItems: ClipboardItem[] = [];
</script>

<div class="max-w-7xl mx-auto p-6 space-y-8">
  <div class="space-y-2">
    <h1 class="text-3xl font-bold">ClipboardManager - Selection Menu Usage</h1>
    <p class="text-gray-600">Real-world examples showing how to use the selection bubble menu feature</p>
  </div>

  <!-- Live Interactive Demo -->
  <section class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
    <h2 class="text-2xl font-semibold mb-4">🎮 Interactive Demo</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-6">
        <h3 class="font-semibold mb-3">📖 Select text here:</h3>
        <div class="prose prose-sm" id="demo-content">
          <p>
            <strong>Try selecting this text!</strong> Highlight any portion and watch 
            the bubble menu appear above your selection.
          </p>
          <p>
            Here are some useful things to save:
          </p>
          <ul>
            <li>Email: support@company.com</li>
            <li>Phone: +1-555-0123</li>
            <li>Code: <code>npm install flowbite-svelte</code></li>
            <li>Promo: SAVE25OFF</li>
          </ul>
          <blockquote>
            "The best interface is one that gets out of your way." - Design wisdom
          </blockquote>
        </div>
      </div>
      
      <div class="bg-white rounded-lg p-6">
        <h3 class="font-semibold mb-3">💾 Your saved items:</h3>
        <ClipboardManager 
          items={demoItems}
          enableSelectionMenu={true}
          selectionTarget="#demo-content"
          placeholder="Or type here..."
        />
      </div>
    </div>
  </section>

  <!-- Usage Examples -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">📚 Usage Examples</h2>

    <!-- Example 1 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Basic</span>
        <h3 class="text-lg font-semibold">1. Enable Selection Menu</h3>
      </div>
      <p class="text-sm text-gray-600">Simplest setup - enable selection on entire page</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example1}</code></pre>
    </div>

    <!-- Example 2 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Targeted</span>
        <h3 class="text-lg font-semibold">2. Target Specific Area</h3>
      </div>
      <p class="text-sm text-gray-600">Limit selection menu to specific content area using CSS selector</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example2}</code></pre>
    </div>

    <!-- Example 3 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">Documentation</span>
        <h3 class="text-lg font-semibold">3. Documentation Site</h3>
      </div>
      <p class="text-sm text-gray-600">Perfect for docs where users need to save commands, code snippets, or API examples</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example3}</code></pre>
    </div>

    <!-- Example 4 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">Content</span>
        <h3 class="text-lg font-semibold">4. Blog/Article Reader</h3>
      </div>
      <p class="text-sm text-gray-600">Let readers save quotes, insights, or key points while reading</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example4}</code></pre>
    </div>

    <!-- Example 5 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">Support</span>
        <h3 class="text-lg font-semibold">5. Email Client / Support Dashboard</h3>
      </div>
      <p class="text-sm text-gray-600">Quick responses with ability to save new ones from actual emails</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example5}</code></pre>
    </div>

    <!-- Example 6 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">Education</span>
        <h3 class="text-lg font-semibold">6. Learning Platform</h3>
      </div>
      <p class="text-sm text-gray-600">Students can highlight key concepts and save them as study notes</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example6}</code></pre>
    </div>

    <!-- Example 7 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">Developer</span>
        <h3 class="text-lg font-semibold">7. Code Editor with Snippets</h3>
      </div>
      <p class="text-sm text-gray-600">Save frequently used code patterns directly from the editor</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example7}</code></pre>
    </div>

    <!-- Example 8 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded">Advanced</span>
        <h3 class="text-lg font-semibold">8. Multiple Content Areas</h3>
      </div>
      <p class="text-sm text-gray-600">Use class selector to enable selection across multiple elements</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example8}</code></pre>
    </div>

    <!-- Example 9 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Selection Only</span>
        <h3 class="text-lg font-semibold">9. No Manual Input</h3>
      </div>
      <p class="text-sm text-gray-600">Hide the input box and use only selection menu with custom rendering</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example9}</code></pre>
    </div>

    <!-- Example 10 -->
    <div class="bg-white rounded-lg shadow p-6 space-y-3">
      <div class="flex items-center gap-3">
        <span class="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">Custom</span>
        <h3 class="text-lg font-semibold">10. Custom Empty State</h3>
      </div>
      <p class="text-sm text-gray-600">Provide clear instructions for first-time users</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{example10}</code></pre>
    </div>
  </section>

  <!-- Props Reference -->
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold">⚙️ New Props for Selection Menu</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full border border-gray-300 bg-white rounded-lg">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Prop</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Default</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">enableSelectionMenu</span></td>
            <td class="border border-gray-300 px-4 py-2">boolean</td>
            <td class="border border-gray-300 px-4 py-2">false</td>
            <td class="border border-gray-300 px-4 py-2">Enable bubble menu on text selection</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">selectionTarget</span></td>
            <td class="border border-gray-300 px-4 py-2">string</td>
            <td class="border border-gray-300 px-4 py-2">"body"</td>
            <td class="border border-gray-300 px-4 py-2">CSS selector for where selection menu works</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Best Practices -->
  <section class="bg-white rounded-lg shadow p-6 space-y-4">
    <h2 class="text-2xl font-semibold">💡 Best Practices</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="border-l-4 border-green-500 pl-4">
        <h3 class="font-semibold text-green-900 mb-2">✅ Do</h3>
        <ul class="text-sm space-y-1 text-gray-700">
          <li>• Target specific content areas</li>
          <li>• Use for text-heavy interfaces</li>
          <li>• Combine with manual input option</li>
          <li>• Show clear visual feedback</li>
          <li>• Test on mobile/touch devices</li>
        </ul>
      </div>
      <div class="border-l-4 border-red-500 pl-4">
        <h3 class="font-semibold text-red-900 mb-2">❌ Don't</h3>
        <ul class="text-sm space-y-1 text-gray-700">
          <li>• Enable on form inputs</li>
          <li>• Use for tiny text snippets</li>
          <li>• Forget mobile considerations</li>
          <li>• Overwhelm with too many features</li>
          <li>• Target entire page unnecessarily</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Comparison -->
  <section class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
    <h2 class="text-2xl font-semibold mb-4">🔄 Selection Menu vs Manual Input</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-4">
        <h3 class="font-semibold mb-3 flex items-center gap-2">
          <span class="text-2xl">👆</span>
          Selection Menu
        </h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>Faster for existing content</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>No context switching</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>Natural workflow</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>Works on mobile</span>
          </li>
        </ul>
      </div>
      <div class="bg-white rounded-lg p-4">
        <h3 class="font-semibold mb-3 flex items-center gap-2">
          <span class="text-2xl">⌨️</span>
          Manual Input
        </h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>Create new snippets</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>Edit before saving</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>Paste from external sources</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500">✓</span>
            <span>More control</span>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-sm text-gray-600 mt-4 text-center">
      💡 <strong>Pro tip:</strong> Enable both for maximum flexibility!
    </p>
  </section>
</div>