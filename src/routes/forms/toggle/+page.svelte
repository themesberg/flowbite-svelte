<script lang="ts">
  import { type Component } from 'svelte';
  import { Toggle, toggle, Radio, Label, Button, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/toggle';

   // for examples section that dynamically changes the svelte component and svelteCode content
   import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Custom size', component: ExampleComponents.CustomSize },
  ];
  let selectedExample = $state(exampleArr[0].name);
  let svelteCode = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const colors = Object.keys(toggle.variants.color) as Toggle['color'][];
  let toggleColor: Toggle['color'] = $state('primary');
  const sizes = Object.keys(toggle.variants.size) as Toggle['size'][];
  let toggleSize: Toggle['size'] = $state('default');
  let checked: boolean = $state(false);
  const changeChecked = () => {
    checked = !checked;
  };
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let leftSlot = $state(false);
  const changeLeftLabel = () => {
    leftSlot = !leftSlot;
    checked = false;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // let fileSlot = '';
      if (toggleSize !== 'default') props.push(` size="${toggleSize}"`);
      if (toggleColor !== 'primary') props.push(` color="${toggleColor}"`);
      if (checked) props.push(' checked');
      if (disabled) props.push(' disabled');
      if (leftSlot) props.push(' bind:checked');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Toggle${propsString}>${leftSlot ? `\n {#snippet leftLabel()}\n  <div class="me-4 {!checked ? 'text-red-600 font-semibold' : ''}">Off</div>\n {/snippet}\n <div class={checked ? 'text-green-600 font-semibold' : ''}>On</div>\n` : 'Toggle me'}</Toggle>`;
    })()
  );
    // for interactive builder
    let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.

  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(svelteCode, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>Toggle</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Toggle Builder</H2>
<CodeWrapper>
  <div class="h-12">
    <Toggle color={toggleColor} {toggleSize} bind:checked {disabled}>
      {#snippet leftLabel()}
        {#if leftSlot}
          <div class="me-4 {!checked ? 'font-semibold text-red-600' : ''}">Off</div>
        {/if}
      {/snippet}
      {#if !leftSlot}
        {#if disabled}Disabled
        {/if}
        {#if checked}Checked
        {/if} Toggle
      {:else}
        <div class={checked ? 'font-semibold text-green-600' : ''}>On</div>
      {/if}
    </Toggle>
  </div>
  <div class="mb-4 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Color:</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 m-2" name="toggle_color" bind:group={toggleColor} color={colorOption as Toggle['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-32 m-2" name="toggle_size" bind:group={toggleSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" onclick={changeChecked}>{checked ? 'Remove checked' : 'Add checked'}</Button>
    <Button class="w-40" color="secondary" onclick={changeDisabled}>{disabled ? 'Remove disabled' : 'Add disabled'}</Button>
    <Button class="w-40" color="emerald" onclick={changeLeftLabel}>{leftSlot ? 'Remove left slot' : 'Add left slot'}</Button>
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
<SelectedComponent />
{#snippet codeblock()}
  <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${svelteCode}`] as string} />
{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
