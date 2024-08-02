<script lang="ts">
  import {
    Skeleton,
    CardPlaceholder,
    ImagePlaceholder,
    VideoPlaceholder,
    TextPlaceholder,
    ListPlaceholder,
    TestimonialPlaceholder, Label, Radio,
    WidgetPlaceholder, Button
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
  // let skeletonClass: Skeleton['class'] = $state('')
  // let imageClass: Skeleton['class'] = $state('')
  // let videoClass: Skeleton['class'] = $state('')
  // let textClass: Skeleton['class'] = $state('')
  // let cardClass: Skeleton['class'] = $state('')
  // let listClass: Skeleton['class'] = $state('')
  // let testimonialClass: Skeleton['class'] = $state('')
  // const changeSkeletonClass = () => {
  //   skeletonClass = skeletonClass === '' ? 'pt-8' : '';
  // }
  // const changeImageClass = () => {
  //   imageClass = imageClass === '' ? 'm-4' : '';
  // }
  // const changeVideoClass = () => {
  //   videoClass = videoClass === '' ? 'm-4' : '';
  // }
  // const changeTextClass = () => {
  //   textClass = textClass === '' ? 'm-4' : '';
  // }
  // const changeCardClass = () => {
  //   cardClass = cardClass === '' ? 'm-4' : '';
  // }
  // const changeListClass = () => {
  //   listClass = listClass === '' ? 'm-4' : '';
  // }
  // const changeTestimonialClass = () => {
  //   testimonialClass = testimonialClass === '' ? 'm-4' : '';
  // } 
  type SkeletonType = 'skeleton' | 'image' | 'video' | 'text' | 'card' | 'list' | 'testimonial';

  let classes: Record<SkeletonType, Skeleton['class']> = $state({
    skeleton: '',
    image: '',
    video: '',
    text: '',
    card: '',
    list: '',
    testimonial: ''
  });

  const changeClass = (type: SkeletonType) => {
    classes[type] = classes[type] === '' ? 'ml-4' : '';
  };
</script>

<H1>Skeleton</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default skeleton</H2>
<CodeWrapper>
  <div class="h-40">
    <Skeleton size={skeletonSize} class={classes.skeleton}/>
  </div>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change size</Label>
    {#each skeletonSizes as size}
      <Radio labelClass="w-24 my-1" name="skeletonsize" bind:group={skeletonSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-48" onclick={()=>changeClass('skeleton')}>{classes.skeleton? 'Remove class' : 'Add class'}</Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/skeleton.md'] as string} />

<H2>Image placeholder</H2>
<CodeWrapper>
  <div class="h-96 md:h-64">
  <ImagePlaceholder size={imagePlaceholderSize} rounded={imagePlaceholderRounded} class={classes.image}/>
  </div>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change size</Label>
    {#each imageSizes as size}
      <Radio labelClass="w-24 my-1" name="imageSize" bind:group={imagePlaceholderSize} value={size}>{size}</Radio>
    {/each}
    </div>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change rounded</Label>
    {#each imageRoundedSizes as size}
      <Radio labelClass="w-24 my-1" name="imageRoundedSize" bind:group={imagePlaceholderRounded} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-48" onclick={()=>changeClass('image')}>{classes.image? 'Remove class' : 'Add class'}</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/imageplaceholder.md'] as string} />

<H2>Video placeholder</H2>

<CodeWrapper>
  <div class="h-64">
  <VideoPlaceholder size={videoPlaceholderSize} class={classes.video}/>
  </div>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change size</Label>
    {#each videoSizes as size}
      <Radio labelClass="w-24 my-1" name="videoSize" bind:group={videoPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <Button class="w-48" onclick={()=>changeClass('video')}>{classes.video? 'Remove class' : 'Add class'}</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/videoplaceholder.md'] as string} />

<H2>Text placeholder</H2>

<CodeWrapper>
  <TextPlaceholder size={textPlaceholderSize}/>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change size</Label>
    {#each textSizes as size}
      <Radio labelClass="w-24 my-1" name="textSize" bind:group={textPlaceholderSize} value={size}>{size}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/textplaceholder.md'] as string} />

<H2>Card placeholder</H2>

<CodeWrapper>
  <CardPlaceholder size={cardPlaceholderSize}/>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change size</Label>
    {#each cardSizes as size}
      <Radio labelClass="w-24 my-1" name="cardSize" bind:group={cardPlaceholderSize} value={size}>{size}</Radio>
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
  <div class="h-80 md:h-96">
    <ListPlaceholder itemNumber={listPlaceholderItemNumber} size={listPlaceholderSize} rounded={listPlaceholderRounded}/>
  </div>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change size</Label>
    {#each listSizes as size}
      <Radio labelClass="w-24 my-1" name="size" bind:group={listPlaceholderSize} value={size}>{size}</Radio>
    {/each}
    </div>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change rounded</Label>
    {#each listRoundedSizes as size}
      <Radio labelClass="w-24 my-1" name="roundedSize" bind:group={listPlaceholderRounded} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-4 my-4">
    <Label class="w-full mb-4 font-bold">Change item number</Label>
    {#each listItemNumbers as itemNumber}
      <Radio labelClass="w-24 my-1" name="itemNumber" bind:group={listPlaceholderItemNumber} value={itemNumber}>{itemNumber}</Radio>
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
