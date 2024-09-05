<script lang="ts">
  import { P, paragraph, Label, Radio, Button, Input, CloseButton } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/paragraph';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const sizes = Object.keys(paragraph.variants.size);
  let pSize: P['size'] = $state('base');
  const weights = Object.keys(paragraph.variants.weight);
  let pWeight: P['weight'] = $state('normal');
  const spaces = Object.keys(paragraph.variants.space);
  let pSpace: P['space'] = $state('normal');
  const heights = Object.keys(paragraph.variants.height);
  let pHeight: P['height'] = $state('normal');
  const alignments = Object.keys(paragraph.variants.align);
  let pAlign: P['align'] = $state('left');
  const whitespaces = Object.keys(paragraph.variants.whitespace);
  let pWhitespace: P['whitespace'] = $state('normal');
  let pFirstupper: P['firstUpper'] = $state(false);
  let pJustify: P['justify'] = $state(false);
  let italic = $state(false);
  const changeItalic = () => {
    italic = !italic;
  };

  let { text = $bindable('') } = $props();
   text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius debitis cupiditate tempora necessitatibus perspiciatis pariatur aspernatur.';

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (pSize !== 'base') props.push(` size="${pSize}"`);
      if (pWeight !== 'normal') props.push(` weight="${pWeight}"`);
      if (pSpace !== 'normal') props.push(` space="${pSpace}"`);
      if (pHeight !== 'normal') props.push(` height="${pHeight}"`);
      if (pAlign !== 'left') props.push(` align="${pAlign}"`);
      if (pWhitespace !== 'normal') props.push(` whitespace="${pWhitespace}"`);
      if (italic) props.push(` italic`);
      if (pFirstupper) props.push(` firstUpper`);
      if (pJustify) props.push(` justify`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<P${propsString}>
  ${text}
</P>`;
    })()
  );
</script>

<H1>Paragraph</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Paragraph Builder</H2>
<CodeWrapper>
  <Label class="text-md mb-2">Edit paragraph</Label>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = '')} />
    {/snippet}
  </Input>
  <div class="h-[200px] overflow-scroll">
    <P contenteditable weight={pWeight} size={pSize} space={pSpace} height={pHeight} align={pAlign} whitespace={pWhitespace} {italic} firstUpper={pFirstupper} justify={pJustify}>{text}</P>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-12 my-1" name="p_size" bind:group={pSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Weight:</Label>
    {#each weights as weight}
      <Radio labelClass="w-20 my-1" name="p_weight" bind:group={pWeight} value={weight}>{weight}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Space(Tracking):</Label>
    {#each spaces as space}
      <Radio labelClass="w-20 my-1" name="p_space" bind:group={pSpace} value={space}>{space}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Height(Leading):</Label>
    {#each heights as height}
      <Radio labelClass="w-16 my-1" name="p_height" bind:group={pHeight} value={height}>{height}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as align}
      <Radio labelClass="w-20 my-1" name="p_align" bind:group={pAlign} onchange={() => (pJustify = false)} value={align}>{align}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">whitespace:</Label>
    {#each whitespaces as whitespace}
      <Radio labelClass="w-16 my-1" name="p_whitespace" bind:group={pWhitespace} value={whitespace}>{whitespace}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-4">
    <Button class="w-40" onclick={() => (pFirstupper = !pFirstupper)}>{pFirstupper ? 'Remove upper' : 'First upper'}</Button>
    <Button
      class="w-40"
      color="secondary"
      onclick={() => {
        pJustify = !pJustify;
        pAlign = 'left';
      }}
    >
      {pJustify ? 'Remove justify' : 'Justify'}
    </Button>
    <Button class="w-40" color="emerald" onclick={changeItalic}>{italic ? 'Remove italic' : 'Italic'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
