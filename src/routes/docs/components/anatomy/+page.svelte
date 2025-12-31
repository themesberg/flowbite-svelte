<script lang="ts">
  import accordionAnatomy from "./accordion-anatomy.svg?raw";
</script>

<div class="anatomy-section">
  <h1 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Component Anatomy</h1>

  <section class="mb-12">
    <h2 class="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Accordion Anatomy</h2>

    <p class="mb-6 text-gray-700 dark:text-gray-300">
      The accordion component consists of multiple parts that can be styled individually using the
      <code class="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">data-part</code>
      attribute. Each part also has a
      <code class="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">data-scope</code>
      attribute for scoping styles.
    </p>

    <div class="mb-6 rounded-lg bg-gray-50 p-8 dark:bg-gray-900">
      {@html accordionAnatomy}
    </div>

    <div class="space-y-4">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Data Attributes</h3>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-100 text-xs uppercase dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3">Component</th>
              <th class="px-6 py-3">data-scope</th>
              <th class="px-6 py-3">data-part</th>
              <th class="px-6 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-gray-700">
              <td class="px-6 py-4 font-medium">Accordion</td>
              <td class="px-6 py-4"><code>accordion</code></td>
              <td class="px-6 py-4"><code>base</code></td>
              <td class="px-6 py-4">Root container element</td>
            </tr>
            <tr class="border-b dark:border-gray-700">
              <td class="px-6 py-4 font-medium">AccordionItem (h2)</td>
              <td class="px-6 py-4"><code>accordion</code></td>
              <td class="px-6 py-4"><code>base</code></td>
              <td class="px-6 py-4">Item wrapper element (heading)</td>
            </tr>
            <tr class="border-b dark:border-gray-700">
              <td class="px-6 py-4 font-medium">Button</td>
              <td class="px-6 py-4">-</td>
              <td class="px-6 py-4"><code>button</code></td>
              <td class="px-6 py-4">Toggle button for expanding/collapsing</td>
            </tr>
            <tr class="border-b dark:border-gray-700">
              <td class="px-6 py-4 font-medium">Content Wrapper</td>
              <td class="px-6 py-4">-</td>
              <td class="px-6 py-4"><code>content-wrapper</code></td>
              <td class="px-6 py-4">Wrapper around the content area</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium">Content</td>
              <td class="px-6 py-4">-</td>
              <td class="px-6 py-4"><code>content</code></td>
              <td class="px-6 py-4">Inner content area</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
      <h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Using Data Attributes for Styling</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">You can target specific parts of the accordion using CSS attribute selectors:</p>
      <pre class="overflow-x-auto rounded bg-gray-900 p-4 text-gray-100"><code>{`/* Target the accordion container */
[data-scope="accordion"][data-part="base"] {
  border: 2px solid blue;
}

/* Target all accordion item buttons */
[data-scope="accordion"] [data-part="button"] {
  font-weight: bold;
  color: purple;
}

/* Target the content wrapper */
[data-part="content-wrapper"] {
  padding: 1rem;
}

/* Target the content area */
[data-part="content"] {
  background-color: #f3f4f6;
}`}</code></pre>
    </div>
  </section>
</div>

<style>
  code {
    font-family: "Courier New", monospace;
    font-size: 0.875rem;
  }
</style>
