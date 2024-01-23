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
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Skeleton</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default skeleton</h2>

<CodeWrapper>
	<Skeleton size="sm" divclass="my-8" />
	<Skeleton size="md" divclass="my-8" />
	<Skeleton size="lg" divclass="my-8" />
	<Skeleton size="xl" divclass="my-8" />
	<Skeleton size="xxl" divclass="mb-2.5 mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/skeleton.md']} />

<h2>Image placeholder</h2>

<CodeWrapper>
	<ImagePlaceholder />
	<ImagePlaceholder imgHeight="h-60" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/imageplaceholder.md']} />

<h2>Video placeholder</h2>

<CodeWrapper>
	<VideoPlaceholder />
	<VideoPlaceholder size="md" divclass="mt-8" />
	<VideoPlaceholder size="lg" divclass="mt-8" />
	<VideoPlaceholder size="xl" divclass="mt-8" />
	<VideoPlaceholder size="xxl" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/videoplaceholder.md']} />

<h2>Text placeholder</h2>

<CodeWrapper>
	<TextPlaceholder />
	<TextPlaceholder size="md" divclass="mt-8" />
	<TextPlaceholder size="lg" divclass="mt-8" />
	<TextPlaceholder size="xl" divclass="mt-8" />
	<TextPlaceholder size="xxl" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/textplaceholder.md']} />

<h2>Card placeholder</h2>

<CodeWrapper>
	<CardPlaceholder />
	<CardPlaceholder size="md" divclass="mt-8" />
	<CardPlaceholder size="lg" divclass="mt-8" />
	<CardPlaceholder size="xl" divclass="mt-8" />
	<CardPlaceholder size="xxl" divclass="mt-8" />
</CodeWrapper>

<HighlightCompo code={modules['./md/cardplaceholder.md']} />

<h2>Widget placeholder</h2>

<CodeWrapper>
	<WidgetPlaceholder />
</CodeWrapper>
<HighlightCompo code={modules['./md/widgetplaceholder.md']} />

<h2>List placeholder</h2>

<CodeWrapper>
	<ListPlaceholder />
</CodeWrapper>

<HighlightCompo code={modules['./md/listplaceholder.md']} />

<h2>Testimonial placeholder</h2>

<CodeWrapper>
	<TestimonialPlaceholder />
</CodeWrapper>

<HighlightCompo code={modules['./md/testimonialplaceholder.md']} />
