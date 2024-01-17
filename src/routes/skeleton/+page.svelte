<script>
    import { Skeleton, CardPlaceholder, ImagePlaceholder, VideoPlaceholder, TextPlaceholder, ListPlaceholder, TestimonialPlaceholder, WidgetPlaceholder } from "$lib";
    import HighlightCompo from '../components/HighlightCompo.svelte';
    import CodeWrapper from '../components/CodeWrapper.svelte';
    import setup from './md/setup.md?raw'
    import cardplaceholder from './md/cardplaceholder.md?raw'
    import imageplaceholder from './md/imageplaceholder.md?raw'
    import skeleton from './md/skeleton.md?raw'
    import videoplaceholder from './md/videoplaceholder.md?raw'
    import textplaceholder from './md/textplaceholder.md?raw'
    import widgetplaceholder from './md/widgetplaceholder.md?raw'
    import listplaceholder from './md/listplaceholder.md?raw'
    import testimonialplaceholder from './md/testimonialplaceholder.md?raw'
</script>

<h1>Skeleton</h1>

<h2>Setup</h2>

<HighlightCompo code={setup} />

<h2>Default skeleton</h2>

<CodeWrapper>
<Skeleton size="sm" class="my-8" />
<Skeleton size="md" class="my-8" />
<Skeleton size="lg" class="my-8" />
<Skeleton size="xl" class="my-8" />
<Skeleton size="xxl" class="mt-8 mb-2.5" />
</CodeWrapper>

<HighlightCompo code={skeleton} />

<h2>Image placeholder</h2>

<CodeWrapper>
<ImagePlaceholder />
<ImagePlaceholder imgHeight="h-60" class="mt-8" />
</CodeWrapper>

<HighlightCompo code={imageplaceholder} />

<h2>Video placeholder</h2>

<CodeWrapper>
<VideoPlaceholder />
<VideoPlaceholder size="md" class="mt-8" />
<VideoPlaceholder size="lg" class="mt-8" />
<VideoPlaceholder size="xl" class="mt-8" />
<VideoPlaceholder size="xxl" class="mt-8" />
</CodeWrapper>

<HighlightCompo code={videoplaceholder} />

<h2>Text placeholder</h2>

<CodeWrapper>
<TextPlaceholder />
<TextPlaceholder size="md" class="mt-8" />
<TextPlaceholder size="lg" class="mt-8" />
<TextPlaceholder size="xl" class="mt-8" />
<TextPlaceholder size="xxl" class="mt-8" />
</CodeWrapper>

<HighlightCompo code={textplaceholder} />

<h2>Card placeholder</h2>

<CodeWrapper>
<CardPlaceholder />
<CardPlaceholder size="md" class="mt-8" />
<CardPlaceholder size="lg" class="mt-8" />
<CardPlaceholder size="xl" class="mt-8" />
<CardPlaceholder size="xxl" class="mt-8" />
</CodeWrapper>

<HighlightCompo code={cardplaceholder} />

<h2>Widget placeholder</h2>

<CodeWrapper>
<WidgetPlaceholder />
</CodeWrapper>
<HighlightCompo code={widgetplaceholder} />

<h2>List placeholder</h2>

<CodeWrapper>
<ListPlaceholder />
</CodeWrapper>

<HighlightCompo code={listplaceholder} />

<h2>Testimonial placeholder</h2>

<CodeWrapper>
<TestimonialPlaceholder />
</CodeWrapper>

<HighlightCompo code={testimonialplaceholder} />