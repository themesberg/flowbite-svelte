<script>
	import { Heading, Button, P, A, Span, Mark } from '$lib';
	import { ArrowRightOutline, ChevronRightSolid } from 'flowbite-svelte-icons';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	import H1 from '../../components/H1.svelte';
	import H2 from '../../components/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Heading, Span & Mark</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default heading</H2>

<CodeWrapper>
	<div class="text-center">
		<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
			>We invest in the world’s potential</Heading
		>
		<P pclass="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
			>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
			long-term value and drive economic growth.</P
		>
		<Button href="/">
			Learn more
			<ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
		</Button>
	</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-heading.md']} />

<H2>Second-level heading</H2>

<CodeWrapper>
	<Heading tag="h2" class="text-4xl font-extrabold ">Payments tool for companies</Heading>
	<P pclass="my-4 text-gray-500"
		>Start developing with an open-source library of over 450+ UI components, sections, and pages
		built with the utility classes from Tailwind CSS and designed in Figma.</P
	>
	<P pclass="mb-4"
		>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
		Accelerate critical development work, eliminate toil, and deploy changes with ease.</P
	>
	<A href="/">
		Read more
		<ChevronRightSolid class="ms-2 h-3.5 w-3.5" />
	</A>
</CodeWrapper>

<HighlightCompo code={modules['./md/second-level-heading.md']} />

<H2>Highlighted heading</H2>

<CodeWrapper>
	<Heading tag="h1" class="mb-4"
		>Get back to growth with <Span highlight>the world's #1</Span> CRM.</Heading
	>
	<P
		>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
		long-term value and drive economic growth.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/highlighted-heading.md']} />

<H2>Heading mark</H2>

<CodeWrapper>
	<Heading tag="h1" class="mb-4">Regain <Mark>control</Mark> over your days</Heading>
	<P
		>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
		long-term value and drive economic growth.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/heading-mark.md']} />

<H2>Heading gradient</H2>

<CodeWrapper>
	<Heading tag="h1" class="mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl">
		<Span gradient>Better Data</Span> Scalable AI.
	</Heading>
	<P
		>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
		long-term value and drive economic growth.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/heading-gradient.md']} />
