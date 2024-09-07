<script lang="ts">
  import { type Component } from 'svelte';
  import { Checkbox, checkbox, Helper, Label, Radio, Button, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/checkbox';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples'; 
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  
  const exampleArr = [
    { name: 'Advanced', component: ExampleComponents.Advanced },
    { name: 'Bordered', component: ExampleComponents.Bordered },
    { name: 'Button', component: ExampleComponents.Button },
    { name: 'Dropdown', component: ExampleComponents.Dropdown },
    { name: 'Group variable', component: ExampleComponents.GroupVariable },
    { name: 'Horizontal list', component: ExampleComponents.HorizontalList },
    { name: 'Inline layout', component: ExampleComponents.InlineLayout },
    { name: 'Link', component: ExampleComponents.Link },
    { name: 'List group', component: ExampleComponents.ListGroup },
    { name: 'Table', component: ExampleComponents.Table },
  ]
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject (arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find(obj => obj.name === name);
    return matchingObject ? matchingObject.component : null; 
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample)); 
  // end of dynamic svelte component

  const colors = Object.keys(checkbox.variants.color);
  let checkboxColor: Checkbox['color'] = $state('primary');

  // const checkedStates = [ 'false', 'true', 'indeterminate' ];
  let checkedState = $state(false);
  const changeCheckedState = () => {
    checkedState = !checkedState;
    indeterminateState = false;
  };
  let indeterminateState = $state(false);
  const changeIntermidiateState = () => {
    indeterminateState = !indeterminateState;
    checkedState = false;
  };
  let disabledState = $state(false);
  const changeDisabledState = () => {
    disabledState = !disabledState;
  };
  let helperState = $state(false);
  const changeHelperState = () => {
    helperState = !helperState;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (checkedState) props.push(' checked');
      if (indeterminateState) props.push(' indeterminate');
      if (disabledState) props.push(' disabled');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Checkbox${propsString}>My Checkbox</Checkbox>
${helperState ? `<Helper class="ps-6">Helper text</Helper>` : ''}`;
    })()
  );
  
  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  }
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.
  
  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  }
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>Checkbox</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Checkbox Builder</H2>
<CodeWrapper>
  <div class="md:h-8">
    <Checkbox checked={checkedState} indeterminate={indeterminateState} color={checkboxColor} disabled={disabledState}>
      {#if disabledState}This is disabled{:else}Default checkbox{/if}
    </Checkbox>
    {#if helperState}
      <Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
    {/if}
  </div>
  <div class="mb-4 mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="checkbox_color" bind:group={checkboxColor} color={colorOption as Checkbox['color']} onchange={() => (checkedState = true)} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2 justify-center md:justify-start">
    <Button class="w-48" color="primary" onclick={changeCheckedState}>{checkedState ? 'Remove checked' : 'Add checked'}</Button>
    <Button class="w-48" color="secondary" onclick={changeIntermidiateState}>{indeterminateState ? 'Remove indeterminate' : 'Add indeterminate'}</Button>
    <Button class="w-48" color="pink" onclick={changeDisabledState}>{disabledState ? 'Remove disabled' : 'Add disabled'}</Button>
    <Button class="w-48" color="lime" onclick={changeHelperState}>{helperState ? 'Remove helper' : 'Add helper'}</Button>
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
      <Radio labelClass="w-36 my-1" onclick={()=> exampleExpand = false} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="md:h-[350px]">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
  <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
