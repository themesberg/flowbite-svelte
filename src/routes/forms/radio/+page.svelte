<script lang="ts">
  import { type Component } from 'svelte';
  import { sineIn } from 'svelte/easing';
  import { Radio, radio, Helper, RadioButton, ButtonGroup, Label, P, Dropdown, DropdownUl, Button, uiHelpers } from '$lib';
  import { ArrowRightOutline, ListMusicSolid, OrderedListOutline, ListOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
  let radioGroup = $state('notes');
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';

  let technology = $state('svelte');
  let inline1 = $state('second');
  const dirName = 'forms/radio';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples'; 
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  
  const exampleArr = [
    { name: 'Radio with a link', component: ExampleComponents.RadioWithALink },
    { name: 'Bordered', component: ExampleComponents.Bordered },
    { name: 'Advanced layout', component: ExampleComponents.AdvancedLayout },
    { name: 'Horizontal list group', component: ExampleComponents.HorizontalListGroup },
    { name: 'Inline layout', component: ExampleComponents.InlineLayout },
    { name: 'Radio button', component: ExampleComponents.RadioButton },
    { name: 'Radio in dropdown', component: ExampleComponents.RadioInDropdown },
    { name: 'Radio list group', component: ExampleComponents.RadioListGroup },
  ]
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject (arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find(obj => obj.name === name);
    return matchingObject ? matchingObject.component : null; 
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample)); 
  // end of dynamic svelte component

  const colors = Object.keys(radio.variants.color) as Radio['color'][];
  let radioColor: Radio['color'] = $state('primary');
  // hack for demo purposes
  let demoRadioColor: Radio['color'] = $state('primary');
  let isChecked = $state(true);
  const handleOnchange = (colorOption: Radio['color']) => {
    demoRadioColor = colorOption
    isChecked = false;
    isChecked = true;
  }
  // end of hack
  let helperState = $state(false);
  const inputClasses = ['', 'w-6 h-6' ]
  let inputClass = $state(inputClasses[0]);
  const changeInputClass = () => {
    inputClass = inputClass === inputClasses[0] ? inputClasses[1] : inputClasses[0];
  };
  const labelClasses = [ 'w-24 m-2', '']
  let labelClass = $state(labelClasses[0]);
  const changeLabelClass = () => {  
    labelClass = labelClass === labelClasses[0] ? labelClasses[1] : labelClasses[0];
  };
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperColor: Radio['color'] = $state('primary');
  let helperSlot = $state(false);
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    // helperColor = 'gray';
  };

  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let group3 = $state(2);
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (radioColor !== 'primary') props.push(`color="${radioColor}"`);
      if (labelClass !== '') props.push(`labelClass="${labelClass}"`);
      if (inputClass !== '') props.push(`inputClass="${inputClass}"`);
      if (disabled) props.push('disabled');
      // if (indeterminateState) props.push(' indeterminate');
      // if (disabledState) props.push(' disabled');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Radio
  name="my_radio"${propsString}>Item 1</Radio>
${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ''}`;
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

<H1>Radio, Helper, and RadioButton</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Radio Builder</H2>
<CodeWrapper>
  <div class="mb-4">
    <Radio {inputClass} {labelClass} name="radio_interactive"  {disabled} color={demoRadioColor} checked={isChecked} >Radio</Radio>
    {#if helperSlot}
    <Helper id="helper-radio-text" color={helperColor} class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
    {/if}
  </div>
  <div class="flex flex-wrap space-x-2 mb-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="radio_color" bind:group={radioColor} onchange={()=>handleOnchange(colorOption)} color={colorOption as Radio['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-2 mb-4">
    <Button class="w-40 mb-4" color="secondary" onclick={changeHelperSlot}>{helperSlot ? 'Remove helper' : 'Add helper'}</Button>
    <Label class="mb-4 w-full font-bold">Helper Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1 {helperSlot ? '' : 'opacity-30 cursor-not-allowed'}" disabled={helperSlot ? false : true} name="helper_color" bind:group={helperColor} color={colorOption as Radio['color']} value={colorOption} >{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2 justify-center md:justify-start">
    <Button class="w-32" color="primary" onclick={changeInputClass}>{inputClass === inputClasses[0] ? 'inputClass=w-6 h-6' : 'Default size' }</Button>
    <Button class="w-32" color="secondary" onclick={changeLabelClass}>{labelClass === labelClasses[0] ? 'Default labelClass' : 'labelClass=w-24 m-2' }</Button>
    <Button class="w-32" color="lime" onclick={changeDisabled}>{disabled ? 'Enabled' : 'Disabled' }</Button>
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
      <Radio labelClass="w-44 my-1" onclick={()=> exampleExpand = false} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="md:h-[350px] overflow-auto">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
  <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
