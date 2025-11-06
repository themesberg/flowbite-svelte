<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/scroll-spy/ScrollSpy.svelte";

  const navigationItems: ScrollSpyItem[] = [
    { id: "introduction", label: "Introduction" },
    { id: "installation", label: "Installation" },
    { id: "basic-usage", label: "Basic Usage" },
    { id: "features", label: "Features" },
    { id: "props", label: "Props" },
    { id: "accessibility", label: "Accessibility" }
  ];

  let currentSection = $state("introduction");

  function handleActiveChange(itemId: string) {
    // console.log("Active section changed to:", itemId);
    currentSection = itemId;
  }

  function handleNavigate(itemId: string) {
    // console.log("Navigated to:", itemId);
    currentSection = itemId;
  }
  $inspect('Current section: ',currentSection);
</script>

<div class="dark:bg-gray-900">
  <!-- ScrollSpy Navigation -->
  <ScrollSpy items={navigationItems} offset={80} sticky={true} smoothScroll={true} onActiveChange={handleActiveChange} onNavigate={handleNavigate} />

  <!-- Main Content -->
  <main class="container mx-auto px-4 py-8">
    <!-- Introduction Section -->
    <section id="introduction" class="py-16">
      <h1 class="mb-6 text-4xl font-bold text-gray-900 dark:text-white">ScrollSpy Component</h1>
      <p class="mb-4 text-lg text-gray-700 dark:text-gray-300">A powerful and accessible navigation component...</p>
    </section>

    <!-- Installation Section -->
    <section id="installation" class="border-t border-gray-200 py-16 dark:border-gray-700">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Installation</h2>
      <!-- content -->
    </section>

    <!-- Basic Usage Section -->
    <section id="basic-usage" class="pt-20 pb-16">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Basic Usage</h2>
      <p class="mb-6 text-gray-700 dark:text-gray-300">The simplest way to use ScrollSpy is to provide an array of navigation items:</p>
      <div class="mb-6 rounded-lg bg-gray-800 p-6">
        <pre class="text-sm text-green-400"><code>&lt;script&gt;
  import &#123; ScrollSpy &#125; from 'flowbite-svelte';
  
  const items = [
    &#123; id: 'section-1', label: 'Section 1' &#125;,
    &#123; id: 'section-2', label: 'Section 2' &#125;,
    &#123; id: 'section-3', label: 'Section 3' &#125;
  ];
&lt;/script&gt;

&lt;ScrollSpy &#123;items&#125; /&gt;

&lt;section id="section-1"&gt;...&lt;/section&gt;
&lt;section id="section-2"&gt;...&lt;/section&gt;
&lt;section id="section-3"&gt;...&lt;/section&gt;</code></pre>
      </div>
      <div class="rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <p class="text-yellow-800 dark:text-yellow-200">
          <strong>Note:</strong>
          Make sure each section has an
          <code>id</code>
          attribute that matches the
          <code>id</code>
           in your items array.
        </p>
      </div>
    </section>

    <!-- Advanced Features Section -->
    <section id="features" class="pt-20 pb-16">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Features</h2>

      <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Custom Positioning</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">You can position the navigation on the top, left, or right:</p>
      <div class="mb-8 rounded-lg bg-gray-800 p-6">
        <pre class="text-sm text-green-400"><code>&lt;ScrollSpy items=&#123;items&#125; position="left" /&gt;</code></pre>
      </div>

      <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Offset for Fixed Headers</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">
        If you have a fixed header, use the <code>offset</code>
         prop to adjust when sections are considered "active":
      </p>
      <div class="mb-8 rounded-lg bg-gray-800 p-6">
        <pre class="text-sm text-green-400"><code>&lt;ScrollSpy items=&#123;items&#125; offset=&#123;80&#125; /&gt;</code></pre>
      </div>

      <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Custom Active Styling</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">Customize the appearance of active navigation items:</p>
      <div class="rounded-lg bg-gray-800 p-6">
        <pre class="text-sm text-green-400"><code>&lt;ScrollSpy
  items=&#123;items&#125;
  activeClass="text-purple-600 border-purple-600 font-bold"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Props Section -->
    <section id="props" class="pt-20 pb-16">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Props Reference</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left">
          <thead>
            <tr class="border-b border-gray-300 dark:border-gray-700">
              <th class="px-4 py-3 font-semibold text-gray-900 dark:text-white">Prop</th>
              <th class="px-4 py-3 font-semibold text-gray-900 dark:text-white">Type</th>
              <th class="px-4 py-3 font-semibold text-gray-900 dark:text-white">Default</th>
              <th class="px-4 py-3 font-semibold text-gray-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 dark:text-gray-300">
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">items</td>
              <td class="px-4 py-3 font-mono text-sm">ScrollSpyItem[]</td>
              <td class="px-4 py-3">required</td>
              <td class="px-4 py-3">Array of navigation items</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">position</td>
              <td class="px-4 py-3 font-mono text-sm">'top'|'left'|'right'</td>
              <td class="px-4 py-3">'top'</td>
              <td class="px-4 py-3">Position of the navigation bar</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">offset</td>
              <td class="px-4 py-3 font-mono text-sm">number</td>
              <td class="px-4 py-3">0</td>
              <td class="px-4 py-3">Offset in pixels from top for active section calculation</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">threshold</td>
              <td class="px-4 py-3 font-mono text-sm">number</td>
              <td class="px-4 py-3">0.5</td>
              <td class="px-4 py-3">Intersection observer threshold (0-1)</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">sticky</td>
              <td class="px-4 py-3 font-mono text-sm">boolean</td>
              <td class="px-4 py-3">true</td>
              <td class="px-4 py-3">Enable sticky positioning</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">activeClass</td>
              <td class="px-4 py-3 font-mono text-sm">string</td>
              <td class="px-4 py-3">''</td>
              <td class="px-4 py-3">Custom Tailwind classes for active items</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">class</td>
              <td class="px-4 py-3 font-mono text-sm">string</td>
              <td class="px-4 py-3">''</td>
              <td class="px-4 py-3">Custom Tailwind classes for the nav container</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">smoothScroll</td>
              <td class="px-4 py-3 font-mono text-sm">boolean</td>
              <td class="px-4 py-3">true</td>
              <td class="px-4 py-3">Enable smooth scroll behavior</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">onActiveChange</td>
              <td class="px-4 py-3 font-mono text-sm">(id: string) => void</td>
              <td class="px-4 py-3">undefined</td>
              <td class="px-4 py-3">Callback when active section changes</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-800">
              <td class="px-4 py-3 font-mono text-sm">onNavigate</td>
              <td class="px-4 py-3 font-mono text-sm">(id: string) => void</td>
              <td class="px-4 py-3">undefined</td>
              <td class="px-4 py-3">Callback when navigation item is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Accessibility Section -->
    <section id="accessibility" class="pt-20 pb-16">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Accessibility</h2>
      <p class="mb-6 text-gray-700 dark:text-gray-300">The ScrollSpy component is built with accessibility in mind:</p>
      <ul class="space-y-4 text-gray-700 dark:text-gray-300">
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Keyboard Navigation:</strong>
             All navigation items are fully keyboard accessible with Tab and Enter/Space keys
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>ARIA Labels:</strong>
             Proper semantic HTML with aria-current for active sections
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Focus Indicators:</strong>
             Clear focus rings for keyboard users
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Screen Reader Support:</strong>
             Navigation structure is announced correctly to screen readers
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Color Contrast:</strong>
             Default styles meet WCAG AA standards
          </span>
        </li>
      </ul>

      <div class="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 class="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">Best Practices</h3>
        <ul class="space-y-2 text-green-800 dark:text-green-200">
          <li>• Use descriptive labels for navigation items</li>
          <li>• Ensure sufficient color contrast when customizing styles</li>
          <li>• Test with keyboard navigation and screen readers</li>
          <li>• Provide meaningful section headings</li>
        </ul>
      </div>
    </section>
  </main>
</div>
