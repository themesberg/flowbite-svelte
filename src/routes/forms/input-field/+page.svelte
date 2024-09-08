<script lang="ts">
  import { type Component } from 'svelte';
  import { Input, input, Radio, Label, Helper, Button, CloseButton, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  let { text = $bindable('') } = $props();
  const dirName = 'forms/input';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Click handler', component: ExampleComponents.ClickHandler },
    { name: 'Dropdown', component: ExampleComponents.Dropdown },
    { name: 'Form', component: ExampleComponents.Form },
    { name: 'Group', component: ExampleComponents.Group },
    { name: 'Icon', component: ExampleComponents.Icon },
    { name: 'Number', component: ExampleComponents.Number },
    { name: 'Search', component: ExampleComponents.Search }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const sizes = ['sm', 'md', 'lg'];
  let inputSize: Input['size'] = $state('md');

  const colors = Object.keys(input.variants.color);
  let inputColor: Input['color'] = $state('default');
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperColor: Input['color'] = $state('default');
  let helperSlot = $state(false);
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    helperColor = 'default';
  };
  let closeBtnStatus = $state(false);
  const changeCloseBtnStatus = () => {
    closeBtnStatus = !closeBtnStatus;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (inputColor !== 'default') props.push(` color="${inputColor}"`);
      if (disabled) props.push(' disabled');
      if (inputSize !== 'md') props.push(` size="${inputSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Input${propsString}${
        closeBtnStatus
          ? `>\n{#snippet right()}
  <CloseButton onclick={() => (text = '')} />
{/snippet}`
          : '/>'
      }
${closeBtnStatus ? `</Input>` : ''}${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ''}`;
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

<H1>Input field</H1>

<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Input Builder</H2>

<CodeWrapper>
  <div class="mb-4 md:h-24">
    <Label for="color-example" color={inputColor} class="mb-2 block">Your name</Label>
    <Input id="color-example" bind:value={text} {disabled} color={inputColor} size={inputSize} placeholder={disabled ? 'Disabled ' : 'Placeholder'}>
      {#snippet right()}
        {#if closeBtnStatus}
          <CloseButton onclick={() => (text = '')} />
        {/if}
      {/snippet}
    </Input>
    {#if helperSlot}
      <Helper class="mt-2" color={helperColor}>
        <span class="font-medium">Well done!</span>
        Some helper message.
      </Helper>
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-20 my-1" name="input_color" bind:group={inputColor} color={colorOption as Input['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as option}
      <Radio labelClass="w-20 my-1" name="input_size" bind:group={inputSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Button class="mb-4 w-40" color="secondary" onclick={changeHelperSlot}>{helperSlot ? 'Remove helper' : 'Add helper'}</Button>
    <Label class="mb-4 w-full font-bold">Helper Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-20 my-1 {helperSlot ? '' : 'opacity-30 cursor-not-allowed'}" disabled={helperSlot ? false : true} name="helper_color" bind:group={helperColor} color={colorOption as Input['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-44" onclick={changeDisabled}>{disabled ? 'Remove disabled' : 'Add disabled'}</Button>
    <Button class="w-44" color="secondary" onclick={changeCloseBtnStatus}>{closeBtnStatus ? 'Remove close button' : 'Add close button'}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-8 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-32 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="overflow-auto md:h-[350px]">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
