<script lang="ts">
  import { type Component } from 'svelte';
  import { Spinner, spinner, Button, Label, Radio, uiHelpers } from '$lib';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'spinner';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [{ name: 'Button', component: ExampleComponents.Button }];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // color, size, class
  const colors: Spinner['color'][] = Object.keys(spinner.variants.color);
  let spinnerColor: Spinner['color'] = $state('primary');
  const sizes: Spinner['size'][] = ['4', '5', '6', '8', '10', '12', '16'];
  let spinnerSize: Spinner['size'] = $state('8');
  let spinnerClass: Spinner['class'] = $state('');
  const changeClass = () => {
    spinnerClass = spinnerClass === '' ? 'ml-4' : '';
  };
  const alignments = [
    { name: 'left', class: 'text-left' },
    { name: 'center', class: 'text-center' },
    { name: 'right', class: 'text-right' }
  ];

  let selectedAlignment = $state('left');
  let currentSpinner = $derived(alignments.find((t) => t.name === selectedAlignment) || alignments[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (spinnerSize !== '8') props.push(` size="${spinnerSize}"`);
      if (spinnerColor !== 'primary') props.push(` color="${spinnerColor}"`);
      if (spinnerClass !== '') props.push(` class="${spinnerClass}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      // alignment needs div wrapper
      if (selectedAlignment !== 'left') {
        return `<div class="${currentSpinner.class}">\n  <Spinner${propsString}/>\n</div>`;
      } else {
        return `<Spinner${propsString}/>`;
      }
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

<H1>Spinner</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Spinner Builder</H2>

<CodeWrapper>
  <div class="h-20">
    <div class={currentSpinner.class}>
      <Spinner color={spinnerColor} size={spinnerSize} class={spinnerClass} />
    </div>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as color}
      <Radio labelClass="w-24 my-1" name="spinnercolor" bind:group={spinnerColor} color={color as Spinner['color']} value={color}>{color}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-12 my-1" name="spinnersize" bind:group={spinnerSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as option}
      <Radio labelClass="w-16 my-1" name="alignment" bind:group={selectedAlignment} value={option.name}>{option.name}</Radio>
    {/each}
  </div>
  <Button class="w-36" onclick={changeClass}>{spinnerClass ? 'Remove class' : 'Add class'}</Button>
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
