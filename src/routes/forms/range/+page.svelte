<script lang="ts">
  import { Range, range, Label, Button, Radio, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/range';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let interactiveValue = $state(5);
  let stepValue = $state(1);
  const changeStepValue = () => {
    stepValue = stepValue === 0.5 ? 1 : 0.5;
  };
  const colors = Object.keys(range.variants.color) as Range['color'];
  let rangeColor: Range['color'] = $state('blue');
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let minmax = $state({ min: 0, max: 10 });
  const changeMinMax = () => {
    if (minmax.max === 10) {
      minmax.min = 0;
      minmax.max = 20;
      interactiveValue = 10;
    } else {
      minmax.min = 0;
      minmax.max = 10;
      interactiveValue = 5;
    }
  };
  let labelStatus = $state(false);
  const changeLabelStatus = () => {
    labelStatus = !labelStatus;
  };
  const rangeSizes = Object.keys(range.variants.size);
  let rangeSize: Range['size'] = $state('md');
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (rangeColor !== 'primary') props.push(`color="${rangeColor}"`);
      if (minmax.max !== 10) props.push(`min="${minmax.min}" max="${minmax.max}"`);
      if (stepValue !== 1) props.push(`step="${stepValue}"`);
      if (disabled) props.push('disabled');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `${labelStatus ? `<div class="relative">\n  ` : ''}<Range${propsString}/>
${
  labelStatus
    ? `<span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min: ${minmax.min}</span>
<span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">${minmax.max / 2}</span>
<span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max: ${minmax.max}</span></div>`
    : ''
}`;
    })()
  );
  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };

  $effect(() => {
    builderExpand = builder.isOpen;
  });
</script>

<H1>Range</H1>

<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Range Builder</H2>
<CodeWrapper>
  <div class="relative">
    {stepValue !== 1 ? `Step: ${stepValue}` : ''}
    {#if minmax.max !== 10}
      <p>Value: {interactiveValue}</p>
    {/if}
    <Range color={rangeColor} {disabled} min={minmax.min} max={minmax.max} bind:value={interactiveValue} step={stepValue} appearance="auto" />
    {#if labelStatus}
      <span class="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">Min: {minmax.min}</span>
      <span class="absolute -bottom-6 start-1/2 -translate-x-1/2 text-sm text-gray-500 rtl:translate-x-1/2 dark:text-gray-400">{minmax.max / 2}</span>
      <span class="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">Max: {minmax.max}</span>
    {/if}
  </div>
  <div class="mb-4 mt-12 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="default_alert_color" bind:group={rangeColor} color={colorOption as Range['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" onclick={changeDisabled}>{disabled ? 'Enabled' : 'Disabled'}</Button>
    <Button class="w-40" color="secondary" onclick={changeMinMax}>{minmax.max === 10 ? 'Add max min' : 'Remove max min'}</Button>
    <Button class="w-40" color="rose" onclick={changeLabelStatus}>{labelStatus ? 'Remove label' : 'Add label'}</Button>
    <Button class="w-40" color="indigo" onclick={changeStepValue}>{stepValue !== 0.5 ? 'Add step' : 'Remove step'}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Sizes</H2>
<p class="text-red-600">Size props won't work with colors.</p>
<CodeWrapper>
  <Label>Size: {rangeSize}</Label>
  <Range id="small-range" {rangeSize} />
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each rangeSizes as sizeOption}
      <Radio labelClass="w-16 my-1" name="file_input_size" bind:group={rangeSize} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
