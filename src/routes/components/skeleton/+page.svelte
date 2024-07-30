<script lang="ts">
  import {
    Skeleton,
    CardPlaceholder,
    ImagePlaceholder,
    VideoPlaceholder,
    TextPlaceholder,
    ListPlaceholder,
    TestimonialPlaceholder,
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
</script>

<H1>Skeleton</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default skeleton</H2>

<CodeWrapper>
  <Skeleton size="sm" />
  <Skeleton size="md" class="mt-8"/>
  <Skeleton size="lg" class="mt-8"/>
  <Skeleton size="xl" class="mt-8"/>
  <Skeleton size="xxl" class="mt-8"/>
</CodeWrapper>

<HighlightCompo code={modules['./md/skeleton.md'] as string} />

<H2>Image placeholder</H2>

<CodeWrapper>
  <ImagePlaceholder size="sm" />
  <ImagePlaceholder class="mt-8"/>
  <ImagePlaceholder size="lg" class="mt-8"/>
</CodeWrapper>

<HighlightCompo code={modules['./md/imageplaceholder.md'] as string} />

<H2>Video placeholder</H2>

<CodeWrapper>
  <VideoPlaceholder />
  <VideoPlaceholder size="md" class="mt-8" />
  <VideoPlaceholder size="lg" class="mt-8" />
  <VideoPlaceholder size="xl" class="mt-8" />
  <VideoPlaceholder size="xxl" class="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/videoplaceholder.md'] as string} />

<H2>Text placeholder</H2>

<CodeWrapper>
  <TextPlaceholder />
  <TextPlaceholder size="md" class="mt-8" />
  <TextPlaceholder size="lg" class="mt-8" />
  <TextPlaceholder size="xl" class="mt-8" />
  <TextPlaceholder size="xxl" class="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/textplaceholder.md'] as string} />

<H2>Card placeholder</H2>

<CodeWrapper>
  <CardPlaceholder />
  <CardPlaceholder size="md" class="mt-8"/>
  <CardPlaceholder size="lg" class="mt-8"/>
  <CardPlaceholder size="xl" class="mt-8"/>
  <CardPlaceholder size="xxl" class="mt-8"/>
</CodeWrapper>

<HighlightCompo code={modules['./md/cardplaceholder.md'] as string} />

<H2>Widget placeholder</H2>

<CodeWrapper>
  <WidgetPlaceholder />
</CodeWrapper>
<HighlightCompo code={modules['./md/widgetplaceholder.md'] as string} />

<H2>List placeholder</H2>

<CodeWrapper>
  <ListPlaceholder itemNumber={3} size="sm" />
  <ListPlaceholder class="mt-8"/>
  <ListPlaceholder itemNumber={7} size="lg" class="mt-8"/>
</CodeWrapper>

<HighlightCompo code={modules['./md/listplaceholder.md'] as string} />

<H2>Testimonial placeholder</H2>

<CodeWrapper class="flex flex-col">
  <TestimonialPlaceholder/>
  <TestimonialPlaceholder class='w-[400px] mx-auto mt-8'/>
</CodeWrapper>

<HighlightCompo code={modules['./md/testimonialplaceholder.md'] as string} />
