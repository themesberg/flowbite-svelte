<script>
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
	const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Skeleton</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default skeleton</H2>

<CodeWrapper>
	<Skeleton size="sm" divclass="my-8" />
	<Skeleton size="md" divclass="my-8" />
	<Skeleton size="lg" divclass="my-8" />
	<Skeleton size="xl" divclass="my-8" />
	<Skeleton size="xxl" divclass="mb-2.5 mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/skeleton.md']} />

<H2>Image placeholder</H2>

<CodeWrapper>
	<ImagePlaceholder />
	<ImagePlaceholder imgHeight="h-60" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/imageplaceholder.md']} />

<H2>Video placeholder</H2>

<CodeWrapper>
	<VideoPlaceholder />
	<VideoPlaceholder size="md" divclass="mt-8" />
	<VideoPlaceholder size="lg" divclass="mt-8" />
	<VideoPlaceholder size="xl" divclass="mt-8" />
	<VideoPlaceholder size="xxl" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/videoplaceholder.md']} />

<H2>Text placeholder</H2>

<CodeWrapper>
	<TextPlaceholder />
	<TextPlaceholder size="md" divclass="mt-8" />
	<TextPlaceholder size="lg" divclass="mt-8" />
	<TextPlaceholder size="xl" divclass="mt-8" />
	<TextPlaceholder size="xxl" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/textplaceholder.md']} />

<H2>Card placeholder</H2>

<CodeWrapper>
	<CardPlaceholder />
	<CardPlaceholder size="md" divclass="mt-8" />
	<CardPlaceholder size="lg" divclass="mt-8" />
	<CardPlaceholder size="xl" divclass="mt-8" />
	<CardPlaceholder size="xxl" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/cardplaceholder.md']} />

<H2>Widget placeholder</H2>

<CodeWrapper>
	<WidgetPlaceholder />
</CodeWrapper>
<HighlightCompo code={modules['./md/widgetplaceholder.md']} />

<H2>List placeholder</H2>

<CodeWrapper>
	<ListPlaceholder />
</CodeWrapper>

<HighlightCompo code={modules['./md/listplaceholder.md']} />

<H2>Testimonial placeholder</H2>

<CodeWrapper>
	<TestimonialPlaceholder />
</CodeWrapper>

<HighlightCompo code={modules['./md/testimonialplaceholder.md']} />
