<script lang="ts">
  import { Table } from "$lib";
  import { clipboardManagerProps } from "./clipboardManagerProps";

  import { List, Li, P, Heading } from "$lib";
  import HighlightCompo from "../../../utils/HighlightCompo.svelte";
  import CodeWrapper from "../../../utils/CodeWrapper.svelte";
  import * as ExampleComponents from "./examples";

  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;
</script>

<div class="mx-auto max-w-7xl space-y-8 p-6">
  <div class="space-y-2">
    <Heading tag="h1" class="my-4 text-4xl">Clipboard Manager</Heading>
    <P>Real-world examples showing how to use the selection bubble menu feature</P>
  </div>

  <CodeWrapper class="max-w-7xl">
    <ExampleComponents.Interactive />
    {#snippet codeblock()}
      <HighlightCompo codeLang="ts" code={exampleModules["./examples/Interactive.svelte"] as string} class="max-w-7xl bg-white" />
    {/snippet}
  </CodeWrapper>

  <!-- Usage Examples -->
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">📚 Usage Examples</h2>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">Basic</span>
        <Heading tag="h3" class="text-lg font-semibold">Enable Selection Menu</Heading>
      </div>
      <P class="text-sm">Simplest setup - enable selection on entire page</P>
      <HighlightCompo codeLang="ts" code={exampleModules["./examples/EnableSelectionMenu.svelte"] as string} class="max-w-7xl bg-white" />
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">Targeted</span>
        <Heading tag="h3" class="my-4 text-lg font-semibold">Target Specific Area</Heading>
      </div>
      <P class="text-sm">
        Limit selection menu to specific content area using CSS selector using <code class="text-primary-700 font-bold">selectionTarget</code>
        prop.
      </P>
      <P class="text-sm">
        Use <code class="text-primary-700 font-bold">enableSelectionMenu</code>
        to show selection bubble menu.
      </P>
      <CodeWrapper class="max-w-7xl">
        <ExampleComponents.TargetSpecific />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/TargetSpecific.svelte"] as string} class="max-w-7xl bg-white" />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">Modal</span>
        <Heading tag="h3" class="my-4 text-lg font-semibold">Modal</Heading>
      </div>
      <P class="text-sm">Display the clipboard manager in a modal dialog. Select any text in the paragraph to save it using the selection bubble menu.</P>
      <P class="text-sm">
        Set <code class="text-primary-700 font-bold">storageKey</code>
        to customize the localStorage key name.
      </P>
      <CodeWrapper class="max-w-7xl">
        <ExampleComponents.WithModal />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/WithModal.svelte"] as string} class="max-w-7xl bg-white" />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800">Documentation</span>
        <Heading tag="h3" class="text-lg font-semibold">Documentation Site</Heading>
      </div>
      <P class="text-sm">Perfect for docs where users need to save commands, code snippets, or API examples</P>
      <P class="text-sm">
        Use <code class="text-primary-700 font-bold">items</code>
        prop to set initial value. Use
        <code class="text-primary-700 font-bold">limit</code>
        prop to set max items to store.
      </P>
      <CodeWrapper class="max-w-7xl">
        <ExampleComponents.DocumentationSite />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/DocumentationSite.svelte"] as string} class="max-w-7xl bg-white" />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-800">Content</span>
        <Heading tag="h3" class="text-lg font-semibold">Blog/Article Reader</Heading>
      </div>
      <P class="text-sm">Let readers save quotes, insights, or key points while reading</P>
      <P class="text-sm">
        Use <code class="text-primary-700 font-bold">saveLabel</code>
        and
        <code class="text-primary-700 font-bold">clearLabel</code>
        to change labels.
      </P>
      <CodeWrapper class="max-w-7xl">
        <ExampleComponents.BlogReader />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/BlogReader.svelte"] as string} class="max-w-7xl bg-white" />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-pink-100 px-2.5 py-0.5 text-xs font-semibold text-pink-800">Support</span>
        <Heading tag="h3" class="text-lg font-semibold">Email Client / Support Dashboard</Heading>
      </div>
      <P class="text-sm">Quick responses with ability to save new ones from actual emails</P>
      <CodeWrapper class="max-w-7xl">
        <ExampleComponents.EmailClient />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/EmailClient.svelte"] as string} class="max-w-7xl bg-white" />
        {/snippet}
      </CodeWrapper>
    </div>

    <!-- Example 6 -->
    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">localStorage</span>
        <Heading tag="h3" class="text-lg font-semibold">Save to Store</Heading>
      </div>
      <P class="text-sm">
        The <code class="text-primary-700">saveToStorage</code>
        prop controls whether the clipboard items are saved to localStorage so they survive page refreshes and browser sessions.
      </P>

      <Heading tag="h3" class="text-md my-4">
        When <code class="text-primary-700">saveToStorage={true}</code>
        (default):
      </Heading>
      <List>
        <Li>Items are automatically saved to localStorage whenever they change</Li>
        <Li>When you reload the page, all your clipboard items are restored</Li>
        <Li>Data persists across browser sessions</Li>
      </List>

      <Heading tag="h3" class="text-md my-4">
        When <code class="text-primary-700">saveToStorage={false}</code>
        :
      </Heading>
      <List>
        <Li>Items only exist in memory during the current session</Li>
        <Li>Refreshing the page clears all clipboard items</Li>
        <Li>Data is lost when you close the tab</Li>
      </List>

      <CodeWrapper>
        <ExampleComponents.SaveToStorage />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/SaveToStorage.svelte"] as string} />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800">Developer</span>
        <Heading tag="h3" class="text-lg font-semibold">Code Editor with Snippets</Heading>
      </div>
      <P class="text-sm">Save frequently used code patterns directly from the editor.</P>
      <P class="text-sm">
        Use <code class="text-primary-700">filterSensitive={false}</code>
         to unblock sensitive data such as password pattern, api token pattern, etc.
      </P>
      <CodeWrapper>
        <ExampleComponents.CodeEditor />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/CodeEditor.svelte"] as string} />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800">Advanced</span>
        <Heading tag="h3" class="text-lg font-semibold">Multiple Content Areas</Heading>
      </div>
      <P class="text-sm">Use class selector to enable selection across multiple elements</P>
      <CodeWrapper>
        <ExampleComponents.MultipleContent />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/MultipleContent.svelte"] as string} />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">Selection Only</span>
        <Heading tag="h3" class="text-lg font-semibold">No Manual Input</Heading>
      </div>
      <P class="text-sm">Use <code class="text-primary-700">showInput={false}</code> to hide the input box and use only selection menu with custom rendering</P>
      <CodeWrapper>
        <ExampleComponents.NoManualInput />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/NoManualInput.svelte"] as string} />
        {/snippet}
      </CodeWrapper>
    </div>

    <div class="space-y-3 rounded-lg p-6 shadow">
      <div class="flex items-center gap-3">
        <span class="rounded bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800">Custom</span>
        <Heading tag="h3" class="text-lg font-semibold">Custom Empty State</Heading>
      </div>
      <P class="text-sm">Provide clear instructions for first-time users</P>
      <CodeWrapper>
        <ExampleComponents.CustomEmptyState />
        {#snippet codeblock()}
          <HighlightCompo codeLang="ts" code={exampleModules["./examples/CustomEmptyState.svelte"] as string} />
        {/snippet}
      </CodeWrapper>
    </div>
  </section>

  <section class="space-y-4 rounded-lg p-6 shadow">
    <h2 class="text-2xl font-semibold">💡 Best Practices</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="border-l-4 border-green-500 pl-4">
        <Heading tag="h3" class="mb-2 font-semibold text-green-900">✅ Do</Heading>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>• Target specific content areas</li>
          <li>• Use for text-heavy interfaces</li>
          <li>• Combine with manual input option</li>
          <li>• Show clear visual feedback</li>
          <li>• Test on mobile/touch devices</li>
        </ul>
      </div>
      <div class="border-l-4 border-red-500 pl-4">
        <Heading tag="h3" class="mb-2 font-semibold text-red-900">❌ Don't</Heading>
        <ul class="space-y-1 text-sm text-gray-700">
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
  <section class="rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6">
    <h2 class="mb-4 text-2xl font-semibold">🔄 Selection Menu vs Manual Input</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="rounded-lg p-4">
        <Heading tag="h3" class="mb-3 flex items-center gap-2 font-semibold">
          <span class="text-2xl">👆</span>
          Selection Menu
        </Heading>
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
      <div class="rounded-lg p-4">
        <Heading tag="h3" class="mb-3 flex items-center gap-2 font-semibold">
          <span class="text-2xl">⌨️</span>
          Manual Input
        </Heading>
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
    <p class="mt-4 text-center text-sm text-gray-600">
      💡 <strong>Pro tip:</strong>
      Enable both for maximum flexibility!
    </p>
  </section>

  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Props</h2>
    <Table items={clipboardManagerProps} hoverable />
  </section>
</div>
