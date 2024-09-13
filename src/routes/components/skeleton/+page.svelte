<script lang="ts">
  import { Skeleton, skeleton, CardPlaceholder, ImagePlaceholder, imagePlaceholder, VideoPlaceholder, TextPlaceholder, ListPlaceholder, TestimonialPlaceholder, Label, Radio, WidgetPlaceholder, Button } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'skeleton';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  // size
  const skeletonSizes = Object.keys(skeleton.variants.size) as Skeleton['size'][];
  let skeletonSize: Skeleton['size'] = $state('sm');
  const imageSizes = Object.keys(imagePlaceholder.variants.size) as ImagePlaceholder['size'][];
  let imagePlaceholderSize: ImagePlaceholder['size'] = $state('md');
  let imagePlaceholderRounded: ImagePlaceholder['rounded'] = $state('none');
  const videoSizes = skeletonSizes;
  let videoPlaceholderSize: VideoPlaceholder['size'] = $state('sm');
  const imageRoundedSizes = Object.keys(imagePlaceholder.variants.rounded) as ImagePlaceholder['rounded'][];
  const textSizes = skeletonSizes;
  let textPlaceholderSize: TextPlaceholder['size'] = $state('sm');
  const cardSizes = skeletonSizes;
  let cardPlaceholderSize: CardPlaceholder['size'] = $state('sm');
  const listSizes = imageSizes;
  const listRoundedSizes = imageRoundedSizes;
  const listItemNumbers = [1, 2, 3, 4, 5];
  let listPlaceholderSize: ListPlaceholder['size'] = $state('md');
  let listPlaceholderRounded: ListPlaceholder['rounded'] = $state('none');
  let listPlaceholderItemNumber: ListPlaceholder['itemNumber'] = $state(5);
  // class
  let skeletonClass: Skeleton['class'] = $state('');
  let imagePlaceholderClass: ImagePlaceholder['class'] = $state('');
  let videoPlaceholderClass: VideoPlaceholder['class'] = $state('');
  let textPlaceholderClass: TextPlaceholder['class'] = $state('');
  let cardPlaceholderClass: CardPlaceholder['class'] = $state('');
  let widgetPlaceholderClass: WidgetPlaceholder['class'] = $state('');
  let listPlaceholderClass: ListPlaceholder['class'] = $state('');
  let TestimonialPlaceholderClass: TestimonialPlaceholder['class'] = $state('');

  // code generator
  const generatePlaceholderCode = (componentName: string, size: string, classes: string): string => {
    let props = [];
    if (componentName === 'Skeleton' && size !== 'sm') props.push(` size="${size}"`);
    if (componentName === 'ImagePlaceholder' && size !== 'md') props.push(` size="${size}"`);
    if (componentName === 'VideoPlaceholder' && size !== 'sm') props.push(` size="${size}"`);
    if (componentName === 'TextPlaceholder' && size !== 'sm') props.push(` size="${size}"`);
    if (componentName === 'CardPlaceholder' && size !== 'sm') props.push(` size="${size}"`);
    if (componentName === 'ListPlaceholder' && size !== 'md') props.push(` size="${size}"`);

    if (classes !== '') props.push(` class="${classes}"`);
    if (componentName === 'ImagePlaceholder' && imagePlaceholderRounded !== 'none') props.push(` rounded="${imagePlaceholderRounded}"`);
    if (componentName === 'ListPlaceholder' && listPlaceholderItemNumber !== 5) props.push(` itemNumber={${listPlaceholderItemNumber}}`);
    if (componentName === 'ListPlaceholder' && listPlaceholderRounded !== 'none') props.push(` rounded="${listPlaceholderRounded}"`);

    return `<${componentName}${props.join('')} />`;
  };
  let generatedCodeSkeleton = $derived(generatePlaceholderCode('Skeleton', skeletonSize, skeletonClass));
  let generatedCodeVideo = $derived(generatePlaceholderCode('VideoPlaceholder', videoPlaceholderSize, videoPlaceholderClass));
  let generatedCodeText = $derived(generatePlaceholderCode('TextPlaceholder', textPlaceholderSize, textPlaceholderClass));
  let generatedCodeCard = $derived(generatePlaceholderCode('CardPlaceholder', cardPlaceholderSize, cardPlaceholderClass));
  let generatedCodeImage = $derived(generatePlaceholderCode('ImagePlaceholder', imagePlaceholderSize, imagePlaceholderClass));
  let generatedCodeWidget = $derived(generatePlaceholderCode('WidgetPlaceholder', 'md', widgetPlaceholderClass));
  let generatedCodeList = $derived(generatePlaceholderCode('ListPlaceholder', listPlaceholderSize, listPlaceholderClass));
  let generatedCodeTestimonial = $derived(generatePlaceholderCode('TestimonialPlaceholder', 'md', TestimonialPlaceholderClass));
</script>

<H1>Skeleton</H1>
<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Default skeleton</H2>
<CodeWrapper>
  <div class="md:h-40">
    <Skeleton size={skeletonSize} class={skeletonClass} />
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size(width):</Label>
    {#each skeletonSizes as size}
      <Radio labelClass="w-12 my-1" name="skeletonsize" bind:group={skeletonSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-36" onclick={() => (skeletonClass === '' ? (skeletonClass = 'ml-4') : (skeletonClass = ''))}>{skeletonClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeSkeleton} />
  {/snippet}
</CodeWrapper>

<H2>Image placeholder</H2>
<CodeWrapper>
  <div class="md:h-64">
    <ImagePlaceholder size={imagePlaceholderSize} rounded={imagePlaceholderRounded} class={imagePlaceholderClass} />
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each imageSizes as size}
      <Radio labelClass="w-12 my-1" name="imageSize" bind:group={imagePlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Rounded:</Label>
    {#each imageRoundedSizes as size}
      <Radio labelClass="w-12 my-1" name="imageRoundedSize" bind:group={imagePlaceholderRounded} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-36" onclick={() => (imagePlaceholderClass === '' ? (imagePlaceholderClass = 'ml-4') : (imagePlaceholderClass = ''))}>{imagePlaceholderClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeImage} />
  {/snippet}
</CodeWrapper>

<H2>Video placeholder</H2>
<CodeWrapper>
  <div class="md:h-64">
    <VideoPlaceholder size={videoPlaceholderSize} class={videoPlaceholderClass} />
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size(width):</Label>
    {#each videoSizes as size}
      <Radio labelClass="w-12 my-1" name="videoSize" bind:group={videoPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-36" onclick={() => (videoPlaceholderClass === '' ? (videoPlaceholderClass = 'ml-4') : (videoPlaceholderClass = ''))}>{videoPlaceholderClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeVideo} />
  {/snippet}
</CodeWrapper>

<H2>Text placeholder</H2>
<CodeWrapper>
  <TextPlaceholder size={textPlaceholderSize} class={textPlaceholderClass} />
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size(width):</Label>
    {#each textSizes as size}
      <Radio labelClass="w-12 my-1" name="textSize" bind:group={textPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-36" onclick={() => (textPlaceholderClass === '' ? (textPlaceholderClass = 'ml-4') : (textPlaceholderClass = ''))}>{textPlaceholderClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeText} />
  {/snippet}
</CodeWrapper>

<H2>Card placeholder</H2>
<CodeWrapper>
  <CardPlaceholder size={cardPlaceholderSize} class={cardPlaceholderClass} />
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size(width):</Label>
    {#each cardSizes as size}
      <Radio labelClass="w-12 my-1" name="cardSize" bind:group={cardPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-36" onclick={() => (cardPlaceholderClass === '' ? (cardPlaceholderClass = 'ml-4') : (cardPlaceholderClass = ''))}>{cardPlaceholderClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeCard} />
  {/snippet}
</CodeWrapper>

<H2>Widget placeholder</H2>
<CodeWrapper>
  <WidgetPlaceholder class={widgetPlaceholderClass} />
  <Button class="mt-4 w-36" onclick={() => (widgetPlaceholderClass === '' ? (widgetPlaceholderClass = 'ml-4') : (widgetPlaceholderClass = ''))}>{widgetPlaceholderClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeWidget} />
  {/snippet}
</CodeWrapper>

<H2>List placeholder</H2>
<CodeWrapper>
  <div class="md:h-[500px]">
    <ListPlaceholder itemNumber={listPlaceholderItemNumber} size={listPlaceholderSize} rounded={listPlaceholderRounded} class={listPlaceholderClass} />
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each listSizes as size}
      <Radio labelClass="w-12 my-1" name="size" bind:group={listPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Rounded:</Label>
    {#each listRoundedSizes as size}
      <Radio labelClass="w-12 my-1" name="roundedSize" bind:group={listPlaceholderRounded} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Items:</Label>
    {#each listItemNumbers as itemNumber}
      <Radio labelClass="w-10 my-1" name="itemNumber" bind:group={listPlaceholderItemNumber} value={itemNumber}>{itemNumber}</Radio>
    {/each}
  </div>
  <Button class="w-36" onclick={() => (listPlaceholderClass === '' ? (listPlaceholderClass = 'ml-4') : (listPlaceholderClass = ''))}>{listPlaceholderClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeList} />
  {/snippet}
</CodeWrapper>

<H2>Testimonial placeholder</H2>
<CodeWrapper>
  <TestimonialPlaceholder class={TestimonialPlaceholderClass} />
  <Button class="mt-4 w-36" onclick={() => (TestimonialPlaceholderClass === '' ? (TestimonialPlaceholderClass = 'mx-auto w-[200px] sm:w-[400px]') : (TestimonialPlaceholderClass = ''))}>{TestimonialPlaceholderClass ? 'Remove class' : 'Add class'}</Button>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCodeTestimonial} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
