<script lang="ts">
  import {ClipboardManager} from '$lib';
  import type { ClipboardItem } from '$lib/clipboard-manager/ClipboardManager.svelte';

  // Example 1: Basic usage
  const basicExample = `<ClipboardManager />`;

  // Example 2: With custom props
  const customPropsExample = `<ClipboardManager 
  placeholder="Enter your text here..."
  saveLabel="Add"
  clearLabel="Remove All"
  limit={10}
  maxLength={5000}
  toastDuration={3000}
/>`;

  // Example 3: With initial items
  const initialItemsExample = `<script>
  import ClipboardManager from './ClipboardManager.svelte';
  
  let items = [
    { id: 1, text: "hello@example.com", pinned: true, timestamp: Date.now() },
    { id: 2, text: "🚀 Check this out!", pinned: false, timestamp: Date.now() - 60000 }
  ];
<\/script>

<ClipboardManager {items} />`;

  // Example 4: Disable persistence
  const noPersistExample = `<ClipboardManager persist={false} />`;

  // Example 5: Disable sensitive data filtering
  const noFilterExample = `<ClipboardManager filterSensitive={false} />`;

  // Example 6: Custom empty state
  const customEmptyExample = `<ClipboardManager>
  {#snippet empty()}
    <div class="text-center py-8">
      <p class="text-lg font-semibold">Your clipboard is empty</p>
      <p class="text-sm text-gray-500">Save something to get started!</p>
    </div>
  {/snippet}
</ClipboardManager>`;

  // Example 7: Custom item rendering
  const customItemExample = `<ClipboardManager>
  {#snippet children({ item, copyItem, deleteItem, togglePin })}
    <div class="border rounded p-3 flex justify-between items-center">
      <div>
        <strong>{item.text.slice(0, 50)}</strong>
        {#if item.pinned}
          <span class="ml-2 text-xs bg-blue-100 px-2 py-1 rounded">★ Pinned</span>
        {/if}
      </div>
      <div class="flex gap-2">
        <button onclick={() => copyItem(item)} class="px-3 py-1 bg-blue-500 text-white rounded">
          Copy
        </button>
        <button onclick={() => togglePin(item.id)} class="px-3 py-1 bg-gray-200 rounded">
          {item.pinned ? 'Unpin' : 'Pin'}
        </button>
        <button onclick={() => deleteItem(item.id)} class="px-3 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  {/snippet}
</ClipboardManager>`;

  // For live demo
  let demoItems: ClipboardItem[] = [
    { id: 1, text: "support@company.com", pinned: true, timestamp: Date.now() - 3600000 },
    { id: 2, text: "https://github.com/username/repo", pinned: false, timestamp: Date.now() - 300000 },
    { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", pinned: false, timestamp: Date.now() - 60000 }
  ];
</script>

<div class="max-w-6xl mx-auto p-6 space-y-8">
  <div class="space-y-2">
    <h1 class="text-3xl font-bold">ClipboardManager Component</h1>
    <p class="text-gray-600">A Svelte 5 component for managing clipboard history with pinning, search, and persistence.</p>
  </div>

  <!-- Live Demo -->
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold">Live Demo</h2>
    <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
      <ClipboardManager items={demoItems} />
    </div>
  </section>

  <!-- Examples -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Usage Examples</h2>

    <!-- Example 1 -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">1. Basic Usage</h3>
      <p class="text-sm text-gray-600">Simplest form with all default settings</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{basicExample}</code></pre>
    </div>

    <!-- Example 2 -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">2. Custom Props</h3>
      <p class="text-sm text-gray-600">Customize labels, limits, and behavior</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{customPropsExample}</code></pre>
    </div>

    <!-- Example 3 -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">3. With Initial Items</h3>
      <p class="text-sm text-gray-600">Pre-populate the clipboard with existing items</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{initialItemsExample}</code></pre>
    </div>

    <!-- Example 4 -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">4. Disable Persistence</h3>
      <p class="text-sm text-gray-600">Don't save to localStorage (memory only)</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{noPersistExample}</code></pre>
    </div>

    <!-- Example 5 -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">5. Disable Sensitive Data Filtering</h3>
      <p class="text-sm text-gray-600">Allow saving passwords, credit cards, API keys</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{noFilterExample}</code></pre>
    </div>

    <!-- Example 6 -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">6. Custom Empty State</h3>
      <p class="text-sm text-gray-600">Customize what shows when no items exist</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{customEmptyExample}</code></pre>
    </div>

    <!-- Example 7 -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">7. Custom Item Rendering</h3>
      <p class="text-sm text-gray-600">Full control over how each item is displayed</p>
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{customItemExample}</code></pre>
    </div>
  </section>

  <!-- Props Table -->
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold">Props</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full border border-gray-300">
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
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">items</span></td>
            <td class="border border-gray-300 px-4 py-2">ClipboardItem[]</td>
            <td class="border border-gray-300 px-4 py-2">[]</td>
            <td class="border border-gray-300 px-4 py-2">Initial clipboard items</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">placeholder</span></td>
            <td class="border border-gray-300 px-4 py-2">string</td>
            <td class="border border-gray-300 px-4 py-2">"Type and save to clipboard"</td>
            <td class="border border-gray-300 px-4 py-2">Input placeholder text</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">saveLabel</span></td>
            <td class="border border-gray-300 px-4 py-2">string</td>
            <td class="border border-gray-300 px-4 py-2">"Save"</td>
            <td class="border border-gray-300 px-4 py-2">Save button label</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">clearLabel</span></td>
            <td class="border border-gray-300 px-4 py-2">string</td>
            <td class="border border-gray-300 px-4 py-2">"Clear All"</td>
            <td class="border border-gray-300 px-4 py-2">Clear all button label</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">limit</span></td>
            <td class="border border-gray-300 px-4 py-2">number</td>
            <td class="border border-gray-300 px-4 py-2">20</td>
            <td class="border border-gray-300 px-4 py-2">Maximum number of items to store</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">persist</span></td>
            <td class="border border-gray-300 px-4 py-2">boolean</td>
            <td class="border border-gray-300 px-4 py-2">true</td>
            <td class="border border-gray-300 px-4 py-2">Save items to localStorage</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">toastDuration</span></td>
            <td class="border border-gray-300 px-4 py-2">number</td>
            <td class="border border-gray-300 px-4 py-2">2000</td>
            <td class="border border-gray-300 px-4 py-2">Toast display duration (ms)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">filterSensitive</span></td>
            <td class="border border-gray-300 px-4 py-2">boolean</td>
            <td class="border border-gray-300 px-4 py-2">true</td>
            <td class="border border-gray-300 px-4 py-2">Block sensitive data (passwords, credit cards)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">maxLength</span></td>
            <td class="border border-gray-300 px-4 py-2">number</td>
            <td class="border border-gray-300 px-4 py-2">10000</td>
            <td class="border border-gray-300 px-4 py-2">Maximum characters per item</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2"><span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">class</span></td>
            <td class="border border-gray-300 px-4 py-2">string</td>
            <td class="border border-gray-300 px-4 py-2">""</td>
            <td class="border border-gray-300 px-4 py-2">Additional CSS classes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Snippets -->
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold">Snippets</h2>
    <div class="space-y-4">
      <div class="border border-gray-300 rounded-lg p-4">
        <h3 class="font-semibold mb-2">children</h3>
        <p class="text-sm text-gray-600 mb-2">Custom rendering for each clipboard item</p>
        <p class="text-sm"><strong>Props:</strong> <span class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">{'{ item, copyItem, deleteItem, togglePin }'}</span></p>
      </div>
      <div class="border border-gray-300 rounded-lg p-4">
        <h3 class="font-semibold mb-2">empty</h3>
        <p class="text-sm text-gray-600 mb-2">Custom empty state when no items exist</p>
        <p class="text-sm"><strong>Props:</strong> none</p>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="space-y-4">
    <h2 class="text-2xl font-semibold">Features</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">Pin frequently used items</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">Real-time search/filter</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">Duplicate detection</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">Sensitive data filtering</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">localStorage persistence</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">Relative timestamps</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">Dark mode support</span>
      </li>
      <li class="flex items-start gap-2">
        <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm">Keyboard shortcut (Enter to save)</span>
      </li>
    </ul>
  </section>
</div>