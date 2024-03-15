<script lang="ts">
  import { Toggle } from '$lib';
  const customSize = 'w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8';

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

<H1>Toggle</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />
<H2>Default toggle</H2>

<CodeWrapper class="flex flex-col gap-2">
  <Toggle>Toggle me</Toggle>
  <Toggle checked={true}>Checked toggle</Toggle>
  <Toggle disabled>Disabled toggle</Toggle>
  <Toggle checked disabled>Disabled checked</Toggle>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-toggle.md'] as string} />

<H2>Colors</H2>
<CodeWrapper class="flex justify-between">
  <Toggle color="red" checked>Red</Toggle>
  <Toggle color="green" checked>Green</Toggle>
  <Toggle color="purple" checked>Purple</Toggle>
  <Toggle color="yellow" checked>Yellow</Toggle>
  <Toggle color="teal" checked>Teal</Toggle>
  <Toggle color="orange" checked>Orange</Toggle>
</CodeWrapper>
<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Sizes</H2>
<CodeWrapper class="flex flex-col gap-2">
  <Toggle size="small">Small toggle</Toggle>
  <Toggle size="default" checked>Default toggle</Toggle>
  <Toggle size="large" checked>Large toggle</Toggle>
  <Toggle size="custom" {customSize}>Custom toggle</Toggle>
</CodeWrapper>
<HighlightCompo code={modules['./md/sizes.md'] as string} />
