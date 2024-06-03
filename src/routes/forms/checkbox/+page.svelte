<script lang="ts">
  import { Checkbox, Helper, Label } from '$lib';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Checkbox</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Checkbox examples</H2>
<CodeWrapper class="space-y-4">
  <Checkbox>Default checkbox</Checkbox>
  <Checkbox checked>Checked state</Checkbox>
</CodeWrapper>
<HighlightCompo code={modules['./md/checkbox-examples.md'] as string} />

<H2>Disabled state</H2>
<CodeWrapper class="space-y-4">
  <Checkbox disabled>Disabled checkbox</Checkbox>
  <Checkbox disabled checked>Disabled checked</Checkbox>
</CodeWrapper>
<HighlightCompo code={modules['./md/disabled-state.md'] as string} />

<H2>Checkbox with a link</H2>
<CodeWrapper>
  <Checkbox>
    I agree with the
    <a
      href="/"
      class="ms-1 text-primary-600 hover:underline dark:text-primary-500"
      >terms and conditions</a
    >.
  </Checkbox>
</CodeWrapper>
<HighlightCompo code={modules['./md/checkbox-with-a-link.md'] as string} />

<H2>Helper text</H2>
<CodeWrapper class="space-y-1">
  <Checkbox aria_describedby="helper-checkbox-text"
    >Free shipping via Flowbite</Checkbox
  >
  <Helper id="helper-checkbox-text" pclass="ps-6"
    >For orders shipped from $25 in books or $29 in other categories</Helper
  >
</CodeWrapper>
<HighlightCompo code={modules['./md/helper-text.md'] as string} />

<H2>Bordered</H2>
<CodeWrapper>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox labelclass="w-full p-4">Default radio</Checkbox>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox checked labelclass="w-full p-4">Checked state</Checkbox>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/bordered.md'] as string} />

<H2>Checkbox list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
  <ul
    class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"
  >
    <li><Checkbox checked labelclass="p-3">svelte</Checkbox></li>
    <li><Checkbox labelclass="p-3">Vue JS</Checkbox></li>
    <li><Checkbox labelclass="p-3">React</Checkbox></li>
    <li><Checkbox labelclass="p-3">Angular</Checkbox></li>
  </ul>
</CodeWrapper>
<HighlightCompo code={modules['./md/checkbox-list-group.md'] as string} />

<H2>Horizontal list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
  <ul
    class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800 sm:flex rtl:divide-x-reverse"
  >
    <li class="w-full"><Checkbox checked labelclass="p-3">Svelte</Checkbox></li>
    <li class="w-full"><Checkbox labelclass="p-3">Vue JS</Checkbox></li>
    <li class="w-full"><Checkbox labelclass="p-3">React</Checkbox></li>
    <li class="w-full"><Checkbox labelclass="p-3">Angular</Checkbox></li>
  </ul>
</CodeWrapper>
<HighlightCompo code={modules['./md/horizontal-list-group.md'] as string} />

<H2>Inline layout</H2>
<CodeWrapper>
  <div class="flex gap-3">
    <Checkbox>Inline 1</Checkbox>
    <Checkbox>Inline 2</Checkbox>
    <Checkbox checked>Inline checked</Checkbox>
    <Checkbox disabled>Inline disabled</Checkbox>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/inline-layout.md'] as string} />
