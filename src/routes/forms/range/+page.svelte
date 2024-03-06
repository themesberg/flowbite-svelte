<script lang="ts">
  import { Range, Label } from '$lib';

  let minmaxValue = $state(5);
  let stepValue = $state(2.5);
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Range</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Range slider example</H2>
<CodeWrapper>
  <Label>Default range</Label>
  <Range id="range1" />
</CodeWrapper>
<HighlightCompo code={modules['./md/range-slider-example.md'] as string} />

<H2>Disabled state</H2>
<CodeWrapper>
  <Label>Default range</Label>
  <Range id="range-disabled" disabled />
</CodeWrapper>
<HighlightCompo code={modules['./md/disabled-state.md'] as string} />

<H2>Min and max</H2>
<CodeWrapper>
  <Label>Min-max range</Label>
  <Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
  <p>Value: {minmaxValue}</p>
</CodeWrapper>
<HighlightCompo code={modules['./md/min-and-max.md'] as string} />

<H2>Steps</H2>
<CodeWrapper>
  <Label>Range steps</Label>
  <Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5" />
  <p>Value: {stepValue}</p>
</CodeWrapper>
<HighlightCompo code={modules['./md/steps.md'] as string} />

<H2>Sizes</H2>
<CodeWrapper class="space-y-6">
  <Label>Small range</Label>
  <Range id="small-range" size="sm" />
  <Label>Default range</Label>
  <Range id="default-range" size="md" />
  <Label>Large range</Label>
  <Range id="large-range" size="lg" />
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md'] as string} />
