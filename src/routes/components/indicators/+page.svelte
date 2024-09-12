<script lang="ts">
  import { type Component } from 'svelte';
  import { Indicator, indicator, Button, Label, Radio, type IndicatorProps, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'indicator';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Legend', component: ExampleComponents.Legend },
    { name: 'Count', component: ExampleComponents.Count },
    { name: 'Status', component: ExampleComponents.Status },
    { name: 'Badge', component: ExampleComponents.Badge },
    { name: 'Stepper', component: ExampleComponents.Stepper },
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // color, size, rounded, border, placement and offset
  const sizes: Indicator['size'][] = Object.keys(indicator.variants.size);
  const colors: Indicator['color'][] = Object.keys(indicator.variants.color);
  const placements: Indicator['placement'][] = Object.keys(indicator.variants.placement);
  let color: IndicatorProps['color'] = $state('primary');
  let size: IndicatorProps['size'] = $state('md');
  let border: IndicatorProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let cornerStyle: IndicatorProps['cornerStyle'] = $state('circular');
  const changeCornerStyle = () => {
    cornerStyle = cornerStyle === 'circular' ? 'rounded' : 'circular';
  };
  let placement: IndicatorProps['placement'] = $state('default');

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // {color} {size} {border} {placement} {cornerStyle}
      // color = 'primary', cornerStyle = 'circular', size = 'md', border = false, placement, offset = true,
      // if (color) props.push(` color="${color}"`);
      if (color !== 'primary') props.push(` color="${color}"`);
      if (size !== 'md') props.push(` size="${size}"`);
      if (border) props.push(' border');
      if (placement !== 'default') props.push(` placement="${placement}"`);
      if (cornerStyle !== 'circular') props.push(` cornerStyle="${cornerStyle}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<div class="borer relative h-56 w-56 rounded-lg border-gray-300 m-8">
  <Indicator${propsString} />
</div>`;
    })()
  );
  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.

  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>Indicator</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive indicator</H2>
<CodeWrapper>
  <div class="borer relative h-56 w-56 rounded-lg border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
    <Indicator {color} {size} {border} {placement} {cornerStyle} />
  </div>
  <div class="mt-8 space-y-4">
    <div class="flex flex-wrap space-x-2">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each colors as colorOption}
        <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as IndicatorProps['color']} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Size:</Label>
      {#each sizes as sizeOption}
        <Radio labelClass="w-24 my-1" name="size" bind:group={size} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Placement:</Label>
      {#each placements as positionOption}
        <Radio labelClass="w-32 my-1" name="placement" bind:group={placement} value={positionOption}>{positionOption}</Radio>
      {/each}
    </div>
    <Button onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
    <Button onclick={changeCornerStyle}>{cornerStyle === 'circular' ? 'Rounded' : 'Circular'}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-12 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-48 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
    <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
