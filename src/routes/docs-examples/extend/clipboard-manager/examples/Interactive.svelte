<script lang="ts">
  import { ClipboardManager, type ClipboardItem } from "flowbite-svelte";
  let demoItems: ClipboardItem[] = [];
</script>

<!-- Live Interactive Demo -->
<section class="rounded-base p-6">
  <h2 class="mb-4 text-2xl font-semibold">🎮 Interactive Demo</h2>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <div class="rounded-base p-6">
      <h3 class="mb-3 font-semibold">📖 Select text here:</h3>
      <div class="prose prose-sm" id="demo-content">
        <p>
          <strong>Try selecting this text!</strong>
          Highlight any portion and watch the bubble menu appear above your selection.
        </p>
        <p>Here are some useful things to save:</p>
        <ul>
          <li>Email: support@company.com</li>
          <li>Phone: +1-555-0123</li>
          <li>
            Code: <code>npm install flowbite-svelte</code>
          </li>
          <li>Promo: SAVE25OFF</li>
        </ul>
        <blockquote>"The best interface is one that gets out of your way." - Design wisdom</blockquote>
      </div>
    </div>

    <div class="rounded-base p-6">
      <h3 class="mb-3 font-semibold">💾 Your saved items:</h3>
      <ClipboardManager items={demoItems} enableSelectionMenu={true} selectionTarget="#demo-content" placeholder="Or type here..." storageKey="interactive" />
    </div>
  </div>
</section>
