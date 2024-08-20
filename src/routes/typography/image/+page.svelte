<script lang="ts">
  import { Img, Badge, Radio, Label } from '$lib';
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

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];
  let imgSize: Img['size'] = $state('md');
  const alignments = ['left', 'center', 'right'];
  let imgAlignment: Img['alignment'] = $state('center');
  const effects = ['blur', 'grayscale', 'invert', 'sepia', 'saturate', 'hue-rotate', 'none'];
  let imgEffect: Img['effect'] = $state('sepia');
  const shadows = ['xs', 'sm', 'regular', 'md', 'lg', 'xl', '2xl', 'inner', 'none'];
  let imgShadow: Img['shadow'] = $state('xl');
  const roundeds = ['none', 'sm', 'regular', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];
  let imgRounded: Img['rounded'] = $state('full');
</script>

<H1>Image</H1>

<p>Get started with a collection of responsive image components coded with the utility classes from Tailwind CSS that you can use inside articles, cards, sections, and other components based on multiple styles, sizes, layouts, and hover animations.</p>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default image</H2>
<p>Use this example to show the a responsive image that won’t grow beyond the maximum original width.</p>

<CodeWrapper class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" alt="sample 1" />
</CodeWrapper>
<HighlightCompo code={modules['./md/default-image.md'] as string} />

<H2>Image caption</H2>
<p>This example can be used to add a caption for the image often used inside articles.</p>
<Badge large class="mb-4">Warning: the caption is using @html.</Badge>

<CodeWrapper class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" alt="sample 1" caption="Image caption" />
</CodeWrapper>
<HighlightCompo code={modules['./md/image-caption.md'] as string} />

<H2>Rounded corners</H2>
<p>Apply rounded corners to the image by using the rounded props or class from Tailwind CSS.</p>
<CodeWrapper>
  <div class="h-[500px]">
    <Img src="/images/examples/image-4@2x.jpg" size="md" alignment="center" rounded={imgRounded} alt="sample 1" />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Rounded:</Label>
    {#each roundeds as rounded}
      <Radio labelClass="w-20 my-1" name="img_rounded" bind:group={imgRounded} value={rounded}>{rounded}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/rounded.md'] as string} />

<H2>Image shadow</H2>
<p>Apply shadow to the image by using the `shadow` props or class from Tailwind CSS.</p>
<CodeWrapper>
  <div class="h-72">
    <Img src="/images/examples/image-2@2x.jpg" size="md" alignment="center" shadow={imgShadow} alt="sample 1" />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Shadow:</Label>
    {#each shadows as shadow}
      <Radio labelClass="w-20 my-1" name="img_shadow" bind:group={imgShadow} value={shadow}>{shadow}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/image-shadow.md'] as string} />

<H2>Retina-ready</H2>
<p>Use the srcset attribute to set Retina-ready images with double resolution.</p>
<CodeWrapper class="flex justify-center">
  <Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" class="w-full max-w-xl rounded-lg" />
</CodeWrapper>
<HighlightCompo code={modules['./md/retina-ready.md'] as string} />

<H2>Image card</H2>
<p>Use this example to make the image a card item with a link and a short text description.</p>
<CodeWrapper class="flex justify-center">
  <Img src="/images/examples/content-gallery-3.png" alt="sample 1" class="rounded-lg" figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" captionClass="absolute bottom-6 px-4 text-lg text-white" caption="Do you want to get notified when a new component is added to Flowbite?" />
</CodeWrapper>
<HighlightCompo code={modules['./md/image-card.md'] as string} />

<H2>Image effects</H2>
<p>Use image effects such as grayscale or blur to change the appearances of the image when being hovered.</p>
<CodeWrapper>
  <div class="h-80">
    <Img src="/images/examples/content-gallery-3.png" size="sm" alignment="center" effect={imgEffect} alt="sample 1" />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each effects as effect}
      <Radio labelClass="w-24 my-1" name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/image-effects.md'] as string} />

<H2>Alignment</H2>
<p>Align the image component to the left, center or right side of the document page using the `alignment` props.</p>
<CodeWrapper>
  <div class="h-72">
    <Img src="/images/examples/image-1@2x.jpg" size="md" alignment={imgAlignment} alt="sample 1" />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as alignment}
      <Radio labelClass="w-20 my-1" name="img_alignment" bind:group={imgAlignment} value={alignment}>{alignment}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/alignment.md'] as string} />

<H2>Sizes</H2>
<p>Set the size of the image using the `size` props or the `class`.</p>

<CodeWrapper class="overflow-scroll">
  <div class="h-[500px]">
    <Img src="/images/examples/image-1@2x.jpg" size={imgSize} alt="sample 1" />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-12 my-1" name="img_size" bind:group={imgSize} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/size.md'] as string} />
