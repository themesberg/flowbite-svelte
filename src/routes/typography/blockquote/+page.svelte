<script lang="ts">
  import { type Component } from 'svelte';
  import { Blockquote, blockquote, Label, Radio, Button, Input, CloseButton, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/blockquote';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Default', component: ExampleComponents.Default },
    { name: 'Context', component: ExampleComponents.Context },
    { name: 'Icon', component: ExampleComponents.Icon },
    { name: 'Review', component: ExampleComponents.Review },
    { name: 'Solid', component: ExampleComponents.Solid },
    { name: 'Testimonial', component: ExampleComponents.Testimonial }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  let { text = $bindable('Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!') } = $props();

  const sizes = Object.keys(blockquote.variants.size);
  let selectedSize: Blockquote['size'] = $state('lg');

  const alignments = Object.keys(blockquote.variants.alignment);
  let selectedAlignment: Blockquote['alignment'] = $state('left');
  let border = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let italic = $state(false);
  const changeItalic = () => {
    italic = !italic;
  };
  let bg = $state(false);
  const changeBg = () => {
    bg = !bg;
  };
  let blockClass: Blockquote['class'] = $state('p-8');
  const changeClass = () => {
    blockClass = blockClass === 'p-8' ? 'p-4' : 'p-8';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (bg) props.push(' bg');
      if (border) props.push(' border');
      if (italic) props.push(' italic');
      if (selectedAlignment !== 'left') props.push(` alignment="${selectedAlignment}"`);
      // blockClass
      if (blockClass) props.push(` class="${blockClass}"`);
      if (selectedSize !== 'lg') props.push(` size="${selectedSize}"`);
      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Blockquote${propsString}>
  ${text}
</Blockquote>`;
    })()
  );

  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.
  let codeBlock = uiHelpers();
  let expand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));

  const handleExpandClick = () => {
    expand = !expand;
  };
  $effect(() => {
    expand = codeBlock.isOpen;
  });
  // end of DynamicCodeBlock setup
</script>

<H1>Blockquote</H1>

<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Blockquote Bilder</H2>
<CodeWrapper>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = '')} />
    {/snippet}
  </Input>
  <div class="mb-4 h-[300px] overflow-y-auto md:h-[250px]">
    <Blockquote {border} {italic} size={selectedSize} {bg} alignment={selectedAlignment} class={blockClass}>{text}</Blockquote>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-16 my-1" name="block_size" bind:group={selectedSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as alignment}
      <Radio labelClass="w-16 my-1" name="block_alignment" bind:group={selectedAlignment} value={alignment}>{alignment}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
    <Button class="w-40" color="rose" onclick={changeItalic}>{italic ? 'Remove italic' : 'Add italic'}</Button>
    <Button class="w-40" color="indigo" onclick={changeBg}>{bg ? 'Remove bg' : 'Add bg'}</Button>
    <Button class="w-40" color="sky" onclick={changeClass}>{blockClass === 'p-8' ? 'class: p-4' : 'class: p-8'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-4 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-24 my-1" onclick={() => (expand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="md:h-96">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} {expand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
