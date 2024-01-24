<script>
	import { Blockquote, P } from '$lib';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	import H1 from '../../components/H1.svelte'
	import H2 from '../../components/H2.svelte'
	import H3 from '../../components/H3.svelte'
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
	import { QuoteSolid } from 'flowbite-svelte-icons';
</script>

<H1>Blockquote</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default blockquote</H2>

<CodeWrapper>
	<Blockquote size="xl"
		>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-blockquote.md']} />

<H2>Solid background</H2>

<CodeWrapper>
	<P color="text-gray-500 dark:text-gray-400"
		>Does your user know how to exit out of screens? Can they follow your intended user journey and
		buy something from the site you’ve designed? By running a usability test, you’ll be able to see
		how users will interact with your design once it’s live.</P
	>
	<Blockquote border bg class="my-4 p-4">
		<P size="xl" height="relaxed"
			>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application."</P
		>
	</Blockquote>
	<P color="text-gray-500 dark:text-gray-400"
		>First of all you need to understand how Flowbite works. This library is not another framework.
		Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
		documentation.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/solid-background.md']} />

<H2>Blockquote icon</H2>

<CodeWrapper>
	<Blockquote size="xl">
		<QuoteSolid class="h-10 w-10 text-gray-400 dark:text-gray-600" />
		"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login
		screen to complex dashboard. Perfect choice for your next SaaS application."
	</Blockquote>
</CodeWrapper>

<HighlightCompo code={modules['./md/blockquote-icon.md']} />

<H2>Paragraph context</H2>

<CodeWrapper>
	<P pclass="mb-3" color="text-gray-500 dark:text-gray-400"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">
		<P pclass="mb-3" color="text-gray-500 dark:text-gray-400"
			>Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.</P
		>
		<Blockquote class="mb-3" size="xl"
			>" Flowbite is just awesome. It contains tons of predesigned components and pages starting
			from login screen to complex dashboard. Perfect choice for your next SaaS application. "</Blockquote
		>
	</div>
	<P pclass="mb-3" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-context.md']} />

<H2>User testimonial</H2>

<CodeWrapper>
	<figure class="mx-auto max-w-screen-md text-center">
		<QuoteSolid class="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />
		<Blockquote alignment="center" size="2xl"
			>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
		>
		<figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
			<img
				class="h-6 w-6 rounded-full"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
				alt="Micheal Gough profile"
			/>
			<div
				class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 rtl:divide-x-reverse"
			>
				<cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
				<cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
			</div>
		</figcaption>
	</figure>
</CodeWrapper>

<HighlightCompo code={modules['./md/user-testimonial.md']} />

<H2>Alignment</H2>

<H3>Left</H3>

<CodeWrapper>
	<Blockquote size="xl"
		>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/left.md']} />

<H3>Center</H3>

<CodeWrapper>
	<Blockquote alignment="center" size="xl"
		>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/center.md']} />

<H3>Right</H3>

<CodeWrapper>
	<Blockquote alignment="right" size="xl"
		>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/right.md']} />

<H2>Sizes</H2>

<H3>Small</H3>

<CodeWrapper>
	<Blockquote size="lg"
		>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/small.md']} />

<H3>Medium</H3>

<CodeWrapper>
	<Blockquote size="xl"
		>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/medium.md']} />

<H3>Large</H3>

<CodeWrapper>
	<Blockquote size="2xl"
		>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/large.md']} />
