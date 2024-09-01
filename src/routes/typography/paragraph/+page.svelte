<script lang="ts">
  import { P, paragraph, Label, Radio, Button } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // import H3 from '../../utils/H3.svelte';
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
  const styles = Object.keys(paragraph.variants.style);
  let pStyle: P['style'] = $state('normal');
  let pFirstupper: P['firstUpper'] = $state(false);
  let pJustify: P['justify'] = $state(false);

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
      if (pStyle !== 'normal') props.push(` style="${pStyle}"`);
      if (pFirstupper) props.push(` firstUpper`);
      if (pJustify) props.push(` justify`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<P${propsString}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</P>`;
    })()
  );
</script>

<H1>Paragraph</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Paragraph Builder</H2>
<CodeWrapper>
  <div class="h-[150px] overflow-scroll">
    <P weight={pWeight} size={pSize} space={pSpace} height={pHeight} align={pAlign} whitespace={pWhitespace} style={pStyle} firstUpper={pFirstupper} justify={pJustify} color="text-gray-500  dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius debitis cupiditate tempora necessitatibus perspiciatis pariatur aspernatur, atque corporis aut deserunt temporibus eligendi inventore id doloribus veritatis quos nesciunt adipisci.</P>
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-12 my-1" name="p_size" bind:group={pSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Weight:</Label>
    {#each weights as weight}
      <Radio labelClass="w-20 my-1" name="p_weight" bind:group={pWeight} value={weight}>{weight}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-2 mb-4">
    <Label class="mb-4 w-full font-bold">Space:</Label>
    {#each spaces as space}
      <Radio labelClass="w-20 my-1" name="p_space" bind:group={pSpace} value={space}>{space}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Height:</Label>
    {#each heights as height}
      <Radio labelClass="w-16 my-1" name="p_height" bind:group={pHeight} value={height}>{height}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as align}
      <Radio labelClass="w-20 my-1" name="p_align" bind:group={pAlign} value={align}>{align}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">whitespace:</Label>
    {#each whitespaces as whitespace}
      <Radio labelClass="w-16 my-1" name="p_whitespace" bind:group={pWhitespace} value={whitespace}>{whitespace}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mb-4">
    <Label class="mb-4 w-full font-bold">Style:</Label>
    {#each styles as style}
      <Radio labelClass="w-20 my-1" name="p_style" bind:group={pStyle} value={style}>{style}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap gap-4">
    <Button class="mt-4" onclick={() => (pFirstupper = !pFirstupper)}>{pFirstupper ? 'Normal' : 'Upper'}</Button>
    <Button class="mt-4" onclick={() => (pJustify = !pJustify)}>{pJustify ? 'Normal' : 'Justify'}</Button>
  </div>
  {#snippet codeblock()}
  <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>
