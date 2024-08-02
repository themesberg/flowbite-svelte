<script lang="ts">
  import {
    Skeleton,
    CardPlaceholder,
    ImagePlaceholder,
    VideoPlaceholder,
    TextPlaceholder,
    ListPlaceholder,
    TestimonialPlaceholder, Label, Radio,
    WidgetPlaceholder
  } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  // size
  const skeletonSizes = ['sm', 'md', 'lg', 'xl', 'xxl'];
  let skeletonSize: Skeleton['size'] = $state('sm');
  const imageSizes = ['sm', 'md', 'lg'];
  let imagePlaceholderSize: ImagePlaceholder['size'] = $state('md');
  let imagePlaceholderRounded: ImagePlaceholder['rounded'] = $state('none');
  const videoSizes = skeletonSizes;
  let videoPlaceholderSize: VideoPlaceholder['size'] = $state('md');
  const imageRoundedSizes = ['none', 'sm', 'md', 'lg', 'full'];
  const textSizes = skeletonSizes;
  let textPlaceholderSize: TextPlaceholder['size'] = $state('md');
  const cardSizes = skeletonSizes;
  let cardPlaceholderSize: CardPlaceholder['size'] = $state('md');
  const listSizes = imageSizes;
  const listRoundedSizes = imageRoundedSizes;
  const listItemNumbers = [1, 2, 3, 4];
  let listPlaceholderSize: ListPlaceholder['size'] = $state('md');
  let listPlaceholderRounded: ListPlaceholder['rounded'] = $state('none');
  let listPlaceholderItemNumber: ListPlaceholder['itemNumber'] = $state(3);
</script>

<H1>Skeleton</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default skeleton</H2>
<CodeWrapper>
  <Skeleton size={skeletonSize} class="mt-8"/>
  <div class="flex flex-wrap space-x-4 mt-8">
    <Label>Change size</Label>
    {#each skeletonSizes as size}
      <Radio name="skeletonsize" bind:group={skeletonSize} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/skeleton.md'] as string} />

<H2>Image placeholder</H2>
<CodeWrapper>
  <ImagePlaceholder size={imagePlaceholderSize} rounded={imagePlaceholderRounded}/>

  <div class="flex flex-wrap space-x-4 mt-8">
    <Label>Change size</Label>
    {#each imageSizes as size}
      <Radio name="imageSize" bind:group={imagePlaceholderSize} value={size}>{size}</Radio>
    {/each}
    </div>
  <div class="flex flex-wrap space-x-4 mt-4">
    <Label>Change rounded</Label>
    {#each imageRoundedSizes as size}
      <Radio name="imageRoundedSize" bind:group={imagePlaceholderRounded} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/imageplaceholder.md'] as string} />

<H2>Video placeholder</H2>

<CodeWrapper>
  <VideoPlaceholder size={videoPlaceholderSize} />
  <div class="flex flex-wrap space-x-4 mt-8">
    <Label>Change size</Label>
    {#each videoSizes as size}
      <Radio name="videoSize" bind:group={videoPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/videoplaceholder.md'] as string} />

<H2>Text placeholder</H2>

<CodeWrapper>
  <TextPlaceholder size={textPlaceholderSize}/>
  <div class="flex flex-wrap space-x-4 mt-8">
    <Label>Change size</Label>
    {#each textSizes as size}
      <Radio name="textSize" bind:group={textPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/textplaceholder.md'] as string} />

<H2>Card placeholder</H2>

<CodeWrapper>
  <CardPlaceholder size={cardPlaceholderSize}/>
  <div class="flex flex-wrap space-x-4 mt-8">
    <Label>Change size</Label>
    {#each cardSizes as size}
      <Radio name="cardSize" bind:group={cardPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/cardplaceholder.md'] as string} />

<H2>Widget placeholder</H2>

<CodeWrapper>
  <WidgetPlaceholder />
</CodeWrapper>
<HighlightCompo code={modules['./md/widgetplaceholder.md'] as string} />

<H2>List placeholder</H2>

<CodeWrapper>
  <div class="h-96">
    <ListPlaceholder itemNumber={listPlaceholderItemNumber} size={listPlaceholderSize} rounded={listPlaceholderRounded}/>
  </div>
  <div class="flex flex-wrap space-x-4 mt-8">
    <Label>Change size</Label>
    {#each listSizes as size}
      <Radio name="size" bind:group={listPlaceholderSize} value={size}>{size}</Radio>
    {/each}
    </div>
  <div class="flex flex-wrap space-x-4 mt-4">
    <Label>Change rounded</Label>
    {#each listRoundedSizes as size}
      <Radio name="roundedSize" bind:group={listPlaceholderRounded} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 mt-4">
    <Label>Change item number</Label>
    {#each listItemNumbers as itemNumber}
      <Radio name="itemNumber" bind:group={listPlaceholderItemNumber} value={itemNumber}>{itemNumber}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/listplaceholder.md'] as string} />

<H2>Testimonial placeholder</H2>

<CodeWrapper class="flex flex-col">
  <TestimonialPlaceholder />
  <TestimonialPlaceholder class="mx-auto mt-8 w-[400px]" />
</CodeWrapper>

<HighlightCompo code={modules['./md/testimonialplaceholder.md'] as string} />
