<script lang="ts">
  import { P, Span, Button, Label, Radio } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let spanItalic: Span['italic'] = $state(false);
  let spanUnderline: Span['underline'] = $state(false);
  let spanLinethrough: Span['linethrough'] = $state(false);
  let spanUppercase: Span['uppercase'] = $state(false);
  const gradients = [ 'skyToEmerald', 'purpleToBlue', 'tealToLime', 'redToYellow', 'indigoToCyan', 'fuchsiaToRose', 'amberToEmerald', 'violetToRed', 'blueToGreen', 'orangeToPurple', 'yellowToRed', 'normal']
  let spanGradient: Span['gradient'] = $state('normal');
  let spanHighlight: Span['highlight'] = $state();
  const highlights = [ 'blue', 'red', 'green', 'yellow', 'purple', 'pink', 'indigo', 'teal', 'orange', 'cyan',  'fuchsia', 'amber', 'lime'];
  let spanDecoration: Span['decoration'] = $state('solid');
  const decorations = [ 'solid', 'double', 'dotted', 'dashed', 'wavy', 'none'];
  let spanDecorationColor: Span['decorationColor'] = $state('blue');
  const decorationColors = [ 'blue', 'red', 'green', 'yellow', 'purple', 'pink', 'indigo', 'teal', 'orange', 'cyan',  'fuchsia', 'amber', 'lime'];
  let spanDecorationThickness: Span['decorationThickness'] = $state('1');
  const docrationThickness = [ '1', '2', '4', '8', '0']
</script>

<H1>Span</H1>

<H2>Italic, underline, linethrough, and uppercase</H2>
<CodeWrapper>
  <P> Track work across the enterprise through an open, collaborative platform.
    <Span 
    italic={spanItalic}
    underline={spanUnderline}
    class="text-red-500"
    >Link issues across Jira</Span> and ingest data from other <Span
      linethrough={spanLinethrough}
      uppercase={spanUppercase}
      class="text-blue-500">software development</Span
    > tools, so your IT support and operations teams have richer contextual information ...
    </P>
  <div class="flex flex-wrap mt-4 items-center gap-2 rtl:space-x-reverse">
  <Button onclick={() => spanItalic = !spanItalic}>Italic</Button>
  <Button onclick={() => spanUnderline = !spanUnderline}>Underline</Button>
  <Button onclick={() => spanLinethrough = !spanLinethrough}>Linethrough</Button>
  <Button onclick={() => spanUppercase = !spanUppercase}>Uppercase</Button>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/italic.md'] as string} />

<H2>Gradient</H2>
<CodeWrapper>
  <P size="2xl" weight="bold"><Span
    gradient={spanGradient}
    >Track work across the enterprise through an open, collaborative platform.</Span
    >
  </P>
  <div class="flex flex-wrap space-x-4 mt-4">
    <Label class="mb-4 w-full font-bold">Gradient:</Label>
    {#each gradients as gradient}
      <Radio
        labelClass="w-32 my-1"
        name="span_gradient"
        bind:group={spanGradient}
        value={gradient}>{gradient}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/gradient.md'] as string} />

<H2>Highlight</H2>
<CodeWrapper>
  <P size="2xl" weight="bold"><Span
    highlight={spanHighlight}
  >Track work across the enterprise through an open, collaborative platform.</Span
  >
  </P>
<div class="flex flex-wrap space-x-4 mt-4">
  <Label class="mb-4 w-full font-bold">Highlight:</Label>
  {#each highlights as highlight}
    <Radio
      labelClass="w-32 my-1"
      name="span_highlight"
      bind:group={spanHighlight}
      value={highlight}>{highlight}</Radio
    >
  {/each}
</div>
</CodeWrapper>
<HighlightCompo code={modules['./md/highlight.md'] as string} />

<H2>Decoration</H2>
<CodeWrapper>
  <P size="2xl" weight="bold"><Span
    decoration={spanDecoration}
    decorationColor={spanDecorationColor}
    decorationThickness={spanDecorationThickness}
  >Track work across the enterprise through an open, collaborative platform.</Span
  >
</P>
<div class="flex flex-wrap space-x-4 mt-4">
  <Label class="mb-4 w-full font-bold">Decoration:</Label>
  {#each decorations as decoration}
    <Radio
      labelClass="w-32 my-1"
      name="span_decoration"
      bind:group={spanDecoration}
      value={decoration}>{decoration}</Radio
    >
  {/each}
</div>
<div class="flex flex-wrap space-x-4 mt-4">
  <Label class="mb-4 w-full font-bold">Decoration color:</Label>
  {#each decorationColors as color}
    <Radio
      labelClass="w-32 my-1"
      name="p_decoration_color"
      bind:group={spanDecorationColor}
      value={color}>{color}</Radio
    >
  {/each}
</div>
<div class="flex flex-wrap space-x-4 mt-4">
  <Label class="mb-4 w-full font-bold">Decoration thickness:</Label>
  {#each docrationThickness as thickness}
    <Radio
      labelClass="w-32 my-1"
      name="span_decoration_thickness"
      bind:group={spanDecorationThickness}
      value={thickness}>{thickness}</Radio
    >
  {/each}
</div>
</CodeWrapper>


<H2>Opacity</H2>
<p>
  Use the `class` prop to set the opacity of inline text elements.
</p>

<CodeWrapper>
  <P size="xl"><Span class="text-blue-600 dark:text-blue-500">
    Flowbite app will help you</Span> improve yourself by analysing your everyday
    life.</P
  >
  <P size="xl"><Span class="text-blue-600/75 dark:text-blue-500/75"
    >Flowbite app will help you</Span> improve yourself by analysing your everyday
    life.</P
  >
  <P size="xl"><Span class="text-blue-600/50 dark:text-blue-500/50"
    >Flowbite app will help you</Span> improve yourself by analysing your everyday
    life.</P
  >
  <P size="xl"><Span class="text-blue-600/25 dark:text-blue-500/25"
    >Flowbite app will help you</Span> improve yourself by analysing your everyday
    life.</P
  >
</CodeWrapper>
<HighlightCompo code={modules['./md/opacity.md'] as string} />