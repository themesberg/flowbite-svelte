<script lang="ts">
  import { Img, img, Badge, Radio, Label, Button } from '$lib';
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

  const sizes = Object.keys(img.variants.size);
  let imgSize: Img['size'] = $state('none');
  const alignments = Object.keys(img.variants.alignment);
  let imgAlignment: Img['alignment'] = $state('left');
  const effects = Object.keys(img.variants.effect);
  let imgEffect: Img['effect'] = $state('none');
  const shadows = Object.keys(img.variants.shadow);
  let imgShadow: Img['shadow'] = $state('none');
  const roundeds = Object.keys(img.variants.rounded);
  let imgRounded: Img['rounded'] = $state('none');
  let imgCaption = $state(false);
  const changeImgCaption = () => {
    imgCaption = !imgCaption;
  };
  let imgHref = $state('');
  const changeImgHrf = () => {
    imgHref = imgHref === '' ? '/' : '';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      // size, alignment, effect, shadow, rounded, caption, imgClass, figClass, captionClass,
      let props = [];
      if (imgSize !== 'none') props.push(` size="${imgSize}"`);
      if (imgAlignment !== 'left') props.push(` alignment="${imgAlignment}"`);
      if (imgEffect !== 'none') props.push(` effect="${imgEffect}"`);
      if (imgShadow !== 'none') props.push(` shadow="${imgShadow}"`);
      if (imgRounded !== 'none') props.push(` rounded="${imgRounded}"`);
      if (imgEffect !== 'none' && imgCaption) props.push(` figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"`);
      if (imgEffect !== 'none' && imgCaption) props.push(` captionClass="absolute bottom-6 px-4 text-lg text-white"`);
      if (imgCaption) props.push(` caption="Image caption"`);
      if (imgHref) props.push(` href="/"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : ' ';

      return `<Img${propsString}src='/images/examples/content-gallery-1.png'/>`;
    })()
  );
</script>

<H1>Image</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Image Builder</H2>
<CodeWrapper>
  <div class="h-[540px] overflow-y-auto">
    <Img src={imgEffect !== 'none' ? '/images/examples/content-gallery-3.png' : imgRounded === 'full' ? '/images/examples/image-4@2x.jpg' : '/images/examples/image-1@2x.jpg'} size={imgSize} shadow={imgShadow} alignment={imgAlignment} rounded={imgRounded} alt="sample 1" effect={imgEffect} figClass={imgEffect !== 'none' && imgCaption ? 'relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' : ''} captionClass={imgEffect !== 'none' && imgCaption ? 'absolute bottom-6 px-4 text-lg text-white' : ''} caption={imgEffect !== 'none' ? 'Do you want to get notified when a new component is added to Flowbite?' : '' || imgCaption ? 'Image caption' : ''} href={imgHref} />
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as option}
      <Radio labelClass="w-24 my-1" name="img_size" bind:group={imgSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Alignment:</Label>
    {#each alignments as alignment}
      <Radio labelClass="w-20 my-1" name="img_alignment" bind:group={imgAlignment} value={alignment}>{alignment}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Shadow:</Label>
    {#each shadows as shadow}
      <Radio labelClass="w-20 my-1" name="img_shadow" bind:group={imgShadow} value={shadow}>{shadow}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Rounded:</Label>
    {#each roundeds as rounded}
      <Radio labelClass="w-20 my-1" name="img_rounded" bind:group={imgRounded} value={rounded}>{rounded}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Effect:</Label>
    {#each effects as effect}
      <Radio labelClass="w-24 my-1" name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
    {/each}
  </div>
  <div class="mt-12 flex flex-wrap gap-2">
    <Button class="w-48" color="blue" onclick={changeImgCaption}>{imgCaption ? 'Remove caption' : 'Add caption'}</Button>
    <Button class="w-48" color="lime" onclick={changeImgHrf}>{imgHref === '' ? 'Add href' : 'Remove href'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<Badge large class="mb-4">Warning: the caption is using @html.</Badge>

<H2>Retina-ready</H2>
<p>Use the srcset attribute to set Retina-ready images with double resolution.</p>
<CodeWrapper class="flex justify-center">
  <Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" class="w-full max-w-xl rounded-lg" />
</CodeWrapper>
<HighlightCompo code={modules['./md/retina-ready.md'] as string} />
