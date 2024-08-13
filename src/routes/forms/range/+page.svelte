<script lang="ts">
  import { Range, range, Label, Radio } from '$lib';

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

  const colors = Object.keys(range.variants.color) as Range['color'];
  // const colors2 = ['gray', 'red', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  //  const colors = Object.keys(badge.variants.color);
  let rangeColor: Range['color'] = $state('blue');
</script>

<H1>Range</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Reference</H2>
<CodeWrapper>
  <input
    class="range w-full accent-red-500"
    type="range"
    value="50"
    min="0"
    max="100"
  />
  <input
    class="range w-full bg-gray-50 accent-yellow-500"
    type="range"
    value="50"
    min="0"
    max="100"
  />
  <input
    type="range"
    class="range-lg range h-3 w-full cursor-pointer rounded-lg bg-gray-200 accent-pink-500 dark:bg-gray-700"
  />
</CodeWrapper>
<H2>Range slider example</H2>
<CodeWrapper>
  <Label>Default range</Label>
  <Range />
</CodeWrapper>
<HighlightCompo code={modules['./md/range-slider-example.md'] as string} />

<H2>Color</H2>
<CodeWrapper>
  <Range color={rangeColor} appearance="auto" />
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio
        labelClass="w-24 my-1"
        name="default_alert_color"
        bind:group={rangeColor}
        value={colorOption}>{colorOption}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/color.md'] as string} />

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
<p>Size props won't work with colors.</p>
<CodeWrapper class="space-y-6">
  <Label>Small range</Label>
  <Range id="small-range" rangeSize="sm" />
  <Label>Default range</Label>
  <Range id="default-range" rangeSize="md" />
  <Label>Large range</Label>
  <Range id="large-range" rangeSize="lg" />
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md'] as string} />
