<script lang="ts">
  import { Toggle, toggle, Radio, Label } from '$lib';
  const customSize =
    'w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const colors = Object.keys(toggle.variants.color) as Toggle['color'][];
  let toggleColor: Toggle['color'] = $state('primary');
  const sizes = Object.keys(toggle.variants.size) as Toggle['size'][];
  let toggleSize: Toggle['size'] = $state('default');
</script>

<H1>Toggle</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />
<H2>Default toggle</H2>

<CodeWrapper class="flex flex-col space-y-4">
  <Toggle>Toggle me</Toggle>
  <Toggle checked>Checked toggle</Toggle>
  <Toggle disabled>Disabled toggle</Toggle>
  <Toggle checked disabled>Disabled checked</Toggle>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-toggle.md'] as string} />

<H2>Colors</H2>
<CodeWrapper class="space-y-4">
  <Toggle color={toggleColor} checked>Toggle</Toggle>
  <div class="flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Color:</Label>
    {#each colors as colorOption}
      <Radio
        labelClass="w-24 m-2"
        name="toggle_color"
        bind:group={toggleColor}
        color={colorOption}
        value={colorOption}>{colorOption}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Sizes</H2>
<CodeWrapper class="flex flex-col space-y-2">
  <div class="h-10">
    <Toggle toggleSize={toggleSize} checked>Toggle</Toggle>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio
        labelClass="w-32 m-2"
        name="toggle_size"
        bind:group={toggleSize}
        value={size}>{size}</Radio
      >
    {/each}
  </div>
  <Toggle spanClass={customSize}>Custom toggle</Toggle>
</CodeWrapper>
<HighlightCompo code={modules['./md/sizes.md'] as string} />
