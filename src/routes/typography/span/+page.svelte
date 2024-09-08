<script lang="ts">
  import { P, Span, span, Button, Label, Radio, Input, CloseButton } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/span';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let { editableContent = $bindable('span content') } = $props();

  let spanItalic: Span['italic'] = $state(false);
  const changeItalic = () => {
    spanItalic = !spanItalic;
  };
  let spanUnderline: Span['underline'] = $state(false);
  const changeUnderline = () => {
    spanUnderline = !spanUnderline;
    spanDecorationColor = 'none';
    spanDecorationThickness = '0';
    spanDecoration = 'none';
    spanLinethrough = false;
  };
  let spanLinethrough: Span['linethrough'] = $state(false);
  const changeLinethrough = () => {
    spanLinethrough = !spanLinethrough;
    spanUnderline = false;
    spanDecorationColor = 'none';
    spanDecorationThickness = '0';
    spanDecoration = 'none';
    spanGradient = 'none';
  };
  let spanUppercase: Span['uppercase'] = $state(false);
  const changeUppercase = () => {
    spanUppercase = !spanUppercase;
  };
  const gradients = Object.keys(span.variants.gradient);
  let spanGradient: Span['gradient'] = $state('none');
  let spanHighlight: Span['highlight'] = $state('none');
  const highlights = Object.keys(span.variants.highlight);
  let spanDecoration: Span['decoration'] = $state('none');
  const decorations = Object.keys(span.variants.decoration);
  let spanDecorationColor: Span['decorationColor'] = $state('none');
  const decorationColors = Object.keys(span.variants.decorationColor);
  let spanDecorationThickness: Span['decorationThickness'] = $state('0');
  const docrationThickness = Object.keys(span.variants.decorationThickness);
  let opacityClass = $state('');
  const changeOpacity = () => {
    opacityClass = opacityClass === '' ? 'text-gray-600/50 dark:text-gray-500/50' : '';
    spanHighlight = 'none';
    spanGradient = 'none';
  };
  // let editableContent = $state('Click to edit content.')

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (spanItalic) props.push(` italic`);
      if (spanUnderline) props.push(` underline`);
      if (spanLinethrough) props.push(` linethrough`);
      if (spanUppercase) props.push(` uppercase`);
      if (spanGradient !== 'none') props.push(` gradient="${spanGradient}"`);
      if (spanHighlight !== 'none') props.push(` highlight="${spanHighlight}"`);
      if (spanDecoration !== 'none') props.push(` decoration="${spanDecoration}"`);
      if (spanDecorationColor !== 'none') props.push(` decorationColor="${spanDecorationColor}"`);
      if (spanDecorationThickness !== '0') props.push(` decorationThickness="${spanDecorationThickness}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<P size="xl" weight="bold">
  Lorem ipsum 
  <Span${propsString}>${editableContent}</Span>
  consectetur elit.
</P>`;
    })()
  );
</script>

<H1>Span</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Span Builder</H2>
<CodeWrapper>
  <div class="h-40">
    <div class=" mb-4">
      <Label class="mr-4 text-lg font-bold">Edit span content:</Label>
      <Input type="text" bind:value={editableContent} placeholder="Write your blockquote text" class="mb-4 pr-12">
        {#snippet right()}
          <CloseButton onclick={() => (editableContent = '')} />
        {/snippet}
      </Input>
    </div>
    <P size="xl" weight="bold">Lorem ipsum <Span italic={spanItalic} underline={spanUnderline} linethrough={spanLinethrough} uppercase={spanUppercase} gradient={spanGradient} decoration={spanDecoration} decorationColor={spanDecorationColor} decorationThickness={spanDecorationThickness} highlight={spanHighlight} class={opacityClass}>{editableContent}</Span> consectetur elit.</P>
  </div>
  <div class="mb-4 mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Highlight:</Label>
    {#each highlights as highlight}
      <Radio
        labelClass="w-20 my-1"
        name="span_highlight"
        bind:group={spanHighlight}
        onchange={() => {
          spanGradient = 'none';
          opacityClass = '';
        }}
        color={highlight as Span['color']}
        value={highlight}
      >
        {highlight}
      </Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Decoration color:</Label>
    {#each decorationColors as color}
      <Radio
        labelClass="w-20 my-1"
        name="p_decoration_color"
        bind:group={spanDecorationColor}
        onchange={() => {
          spanUnderline = false;
          spanLinethrough = false;
        }}
        color={color as Span['decorationColor']}
        value={color}
      >
        {color}
      </Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Decoration:</Label>
    {#each decorations as decoration}
      <Radio
        labelClass="w-20 my-1"
        name="span_decoration"
        bind:group={spanDecoration}
        onchange={() => {
          spanUnderline = false;
          spanLinethrough = false;
        }}
        value={decoration}
      >
        {decoration}
      </Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Decoration thickness:</Label>
    {#each docrationThickness as thickness}
      <Radio
        labelClass="w-12 my-1"
        name="span_decoration_thickness"
        bind:group={spanDecorationThickness}
        onchange={() => {
          spanUnderline = false;
          spanLinethrough = false;
        }}
        value={thickness}
      >
        {thickness}
      </Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Gradient:</Label>
    {#each gradients as gradient}
      <Radio labelClass="w-32 my-1" name="span_gradient" bind:group={spanGradient} onchange={() => (spanHighlight = 'none')} value={gradient}>{gradient}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-36" color="violet" onclick={changeLinethrough}>{spanLinethrough ? 'No linethrough' : 'Linethrough '}</Button>
    <Button class="w-36" color="blue" onclick={changeUppercase}>{spanUppercase ? 'No uppercase' : 'Uppercase'}</Button>
    <Button class="w-24" onclick={changeItalic}>{spanItalic ? 'No italic' : 'Italic'}</Button>
    <Button class="w-28" color="amber" onclick={changeUnderline}>{spanUnderline ? 'No underline' : 'Underline'}</Button>
    <Button class="w-32" color="teal" onclick={changeOpacity}>{opacityClass ? 'No opacity' : 'Add opacity'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
