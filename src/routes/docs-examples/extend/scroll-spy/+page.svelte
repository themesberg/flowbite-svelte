<script lang="ts">
  import { ScrollSpy, Radio, P, Heading, Alert } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";
  import { HighlightSvelte } from 'svelte-rune-highlight';
  import 'highlight.js/styles/github-dark.css';

  const exampleModules = import.meta.glob('./md/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  const navigationItems: ScrollSpyItem[] = [
    { id: "introduction", label: "Introduction" },
    { id: "installation", label: "Installation" },
    { id: "basic-usage", label: "Basic Usage" },
    { id: "features", label: "Features" },
    { id: "props", label: "Props" },
    { id: "accessibility", label: "Accessibility" }
  ];

  const TOP_OFFSET = 80;
  const SIDE_OFFSET = 20;
  let isFlex = $state(false);
  let position = $state<"top" | "left" | "right">("top");
  let offsetValue = $state(80);
  let isSticky = $state(true);

  const handleStickyToggle = () => {
    // if position is top, set isSticky to true, else set to true
    isSticky = position === "top" ? true : true;
  };

  const handleFlexToggle = () => {
    // if position is top, set no flex, else set flex
    isFlex = position !== "top" ? true : false;
  };

  const handleOffsetChange = () => {
    offsetValue = position === "top" ? TOP_OFFSET : SIDE_OFFSET;
  };

  const handlePositionChange = (newPosition: "top" | "left" | "right") => {
    position = newPosition;
    handleFlexToggle();
    handleOffsetChange();
    handleStickyToggle();
  };

  const mainMarginClass = $derived(position === "left" ? "ml-64" : position === "right" ? "mr-64" : "");

</script>

<div class="{isFlex ? 'flex' : ''} dark:bg-gray-900">
  <!-- ScrollSpy Navigation -->
  <ScrollSpy items={navigationItems} {position} offset={offsetValue} sticky={isSticky} smoothScroll={true} />

  <!-- Main Content -->
  <main class="container mx-auto px-4 pb-8 {mainMarginClass}">
    <!-- Radio buttons to change position -->
    <div class="my-4 flex p-2">
      <P class="me-2 font-semibold text-xl">
        Position:
      </P>
      <div class="flex gap-3">
        <Radio bind:group={position} value="top" onchange={() => handlePositionChange("top")}>Top</Radio>
        <Radio bind:group={position} value="left" onchange={() => handlePositionChange("left")}>Left</Radio>
        <Radio bind:group={position} value="right" onchange={() => handlePositionChange("right")}>Right</Radio>
      </div>
    </div>
    <!-- Introduction Section -->
    <section id="introduction" class="p-4">
      <Heading tag="h1" class="text-4xl" >ScrollSpy Component</Heading>
      <P class="mb-4 text-lg">A navigation component that tracks scroll position and highlights the currently visible section. Supports smooth scrolling, sticky positioning, custom scroll containers, offset handling, and active state callbacks for building interactive page or documentation navigation.</P>
      
    </section>

    <!-- Installation Section -->
    <section id="installation" class="border-t border-gray-200 px-4 py-8 dark:border-gray-700">
      <Heading tag="h2" class="mb-6 text-3xl font-bold">Installation</Heading>
      <P>Install the required packages:</P>
      <HighlightSvelte code={exampleModules['./md/installation.md'] as string} langtag --langtag-color="orange" class="mb-4"/>
      <P>This installs `flowbite-svelte` (Svelte components) and `flowbite` as development dependencies.</P>
    </section>

    <!-- Basic Usage Section -->
    <section id="basic-usage" class="px-4 pb-16">
      <Heading tag="h2" class="mb-6 text-3xl font-bold">Basic Usage</Heading>
      <P class="mb-6 text-gray-700 dark:text-gray-300">The simplest way to use ScrollSpy is to provide an array of navigation items:</P>
      <HighlightSvelte code={exampleModules['./md/usage.md'] as string} langtag --langtag-color="orange" class="mb-4"/>
      <Alert color="red" class="p-6 text-md">
        <strong>Note:</strong>
        Make sure each section has an
        <code>id</code>
        attribute that matches the
        <code>id</code>
        in your items array.
      </Alert>
    </section>

    <!-- Advanced Features Section -->
    <section id="features" class="px-4 pb-16">
      <Heading tag="h2" class="mb-6 text-3xl font-bold">Features</Heading>

      <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Custom Positioning</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">You can position the navigation on the top, left, or right:</p>
      <HighlightSvelte code={exampleModules['./md/position.md'] as string} langtag --langtag-color="orange" class="mb-4"/>

      <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Offset for Fixed Headers</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">
        If you have a fixed header, use the <code>offset</code>
        prop to adjust when sections are considered "active":
      </p>
      <HighlightSvelte code={exampleModules['./md/offset.md'] as string} langtag --langtag-color="orange" class="mb-4"/>

      <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">Custom Active Styling</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">Customize the appearance of active navigation items:</p>
      <HighlightSvelte code={exampleModules['./md/style.md'] as string} langtag --langtag-color="orange" class="mb-4"/>
    </section>

    <!-- Props Section -->
    <section id="props" class="px-4 pb-16">
      <Heading tag="h2" class="mb-6 text-3xl font-bold">Props Reference</Heading>
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
    <section id="accessibility" class="px-4 pb-16">
      <Heading tag="h2" class="mb-6 text-3xl font-bold">Accessibility</Heading>
      <p class="mb-6 text-gray-700 dark:text-gray-300">The ScrollSpy component is built with accessibility in mind:</p>
      <ul class="space-y-4 text-gray-700 dark:text-gray-300">
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Keyboard Navigation:</strong>
            Navigation items are fully keyboard accessible using Tab and Enter/Space
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>ARIA Support:</strong>
            Uses semantic HTML and aria-current for the active section
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Visible Focus State:</strong>
            Focus rings are preserved for keyboard users
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Screen Reader Friendly:</strong>
            Lists and links are announced correctly by assistive technology
          </span>
        </li>
        <li class="flex items-start">
          <span class="mr-3 text-green-500">✓</span>
          <span>
            <strong>Color Contrast:</strong>
            Default styles follow WCAG AA contrast guidelines
          </span>
        </li>
      </ul>

      <div class="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 class="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">Best Practices</h3>
        <ul class="space-y-2 text-green-800 dark:text-green-200">
          <li>• Use clear, descriptive labels for each navigation item</li>
          <li>• Ensure sufficient color contrast if overriding default styles</li>
          <li>• Test with keyboard-only navigation and screen readers</li>
          <li>• Provide meaningful and properly structured section headings</li>
        </ul>
      </div>
    </section>
  </main>
</div>
