<script lang="ts">
  import { type Component } from 'svelte';
  import { Button, Tooltip, tooltip, P, Span, Radio, Label, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'tooltip';
  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'External reference', component: ExampleComponents.ExternalReference },
    { name: 'Inline', component: ExampleComponents.Inline }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const positions = Object.keys(tooltip.variants.position);
  let position: Tooltip['position'] = $state(positions[0]);
  const colors = Object.keys(tooltip.variants.color) as Tooltip['color'][];
  let color: Tooltip['color'] = $state('default');
  let tooltipClass: Tooltip['class'] = $state('');
  const changeClass = () => {
    tooltipClass = tooltipClass === '' ? 'w-64 p-4' : '';
  };
  let arrow = $state(true);
  const changeArrow = () => {
    arrow = !arrow;
    offset = 0;
  };
  let offset = $state(0);
  const changeOffset = () => {
    offset = offset === 0 ? 20 : 0;
    arrow = false;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (arrow !== true) props.push(`arrow="${arrow}"`);
      if (color) props.push(`color="${color}"`);
      if (position !== 'top') props.push(`position="${position}"`);
      if (offset) props.push(`offset="${offset}"`);
      if (tooltipClass !== '') props.push(`class="${tooltipClass}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Button id="type-1" class="m-8">Tooltip trigger</Button>\n<Toottip${propsString}  triggeredBy="#type-1">Tooltip content</Tooltip>`;
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

<H1>Tooltip</H1>
<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Tooltip Builder</H2>

<CodeWrapper>
  <div class="my-4 flex justify-center">
    <Button id="type-1" class="m-8">Tooltip trigger</Button>
    <Tooltip triggeredBy="#type-1" {color} {position} {arrow} {offset} class={tooltipClass}>Tooltip content</Tooltip>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as Tooltip['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Position:</Label>
    {#each positions as option}
      <Radio labelClass="w-20 my-1" name="interactive_toast_position" bind:group={position} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-36" onclick={changeClass}>{tooltipClass ? 'Remove class' : 'Add class'}</Button>
    <Button class="w-36" color="secondary" onclick={changeArrow}>{arrow ? 'Remove arrow' : 'Add arrow'}</Button>
    <Button class="w-36" color="rose" onclick={changeOffset}>{offset ? 'Remove offset' : 'Add offset'}</Button>
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
      <Radio labelClass="w-40 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="md:h-40">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
