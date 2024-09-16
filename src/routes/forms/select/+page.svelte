<script lang="ts">
  import { type Component } from 'svelte';
  import { Select, Label, Radio, Helper, uiHelpers, Button } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'forms/select';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Dropdown Select', component: ExampleComponents.DropdownSelect },
    // { name: 'My options', component: ExampleComponents.MyOptions },
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  interface Country {
    value: string;
    name: string;
    href?: string;
  }
  interface State {
    value: string;
    name: string;
  }

  let countries: Country[] = [
    { value: 'us', name: 'United States', href: '/' },
    { value: 'ca', name: 'Canada', href: '/' },
    { value: 'fr', name: 'France', href: '/' }
  ];


  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });

  const sizes = ['sm', 'md', 'lg'];
  let selectSize: Select['size'] = $state('md');
  const sizeDisplay: Record<Select['size'], string> = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large'
  };
  let underline = $state(false);
  const changeUnderline = () => {
    underline = !underline;
  };
  let disabled = $state(false);
  const changeDiabled = () => {
    disabled = !disabled;
  };
  let selected = $state('');
  let bindValue = $state(false);
  const changeBindValue = () => {
    bindValue = !bindValue;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // let fileSlot = '';
      if (selectSize !== 'md') props.push(` size="${selectSize}"`);
      if (underline) props.push(' underline');
      if (disabled) props.push(' disabled');
      if (bindValue) props.push(' bind:value={selected}');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Select${propsString} />${bindValue ? '\nSelected value: {selected}' : ''}`;
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

<H1>Select</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Select Builder</H2>
<CodeWrapper>
  <div class="h-32">
    <Label for="select-sm" class="mb-4">
      {#if disabled}Disabled{/if}
      {sizeDisplay[selectSize]} select
    </Label>
    <Select id="select-sm" size={selectSize} items={countries} {underline} {disabled} bind:value={selected} class="mb-2" />
    {#if bindValue}
      <Helper class="text-base">Selected value: {selected}</Helper>
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as option}
      <Radio labelClass="w-24 my-1" name="input_size" bind:group={selectSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" onclick={changeUnderline}>{underline ? 'Default' : 'Underline'}</Button>
    <Button class="w-40" color="secondary" onclick={changeDiabled}>{disabled ? 'Enabled' : 'Disabled'}</Button>
    <Button class="w-40" color="rose" onclick={changeBindValue}>{bindValue ? 'Unbind' : 'Bind value'}</Button>
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
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
