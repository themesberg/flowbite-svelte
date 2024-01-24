<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib';
	import { HomeOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import H1 from '../components/H1.svelte';
	import H2 from '../components/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Breadcrumb</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default Breadcrumb</H2>

<CodeWrapper>
	<Breadcrumb>
		<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
		<BreadcrumbItem href="/">Projects</BreadcrumbItem>
		<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
	</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultbreadcrumb.md']} />

<H2>Solid Breadcrumb</H2>

<CodeWrapper>
	<Breadcrumb solid>
		<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
		<BreadcrumbItem href="/">Projects</BreadcrumbItem>
		<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
	</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={modules['./md/solidbreadcrumb.md']} />

<H2>Icons</H2>

<CodeWrapper>
	<Breadcrumb class="bg-gray-50 px-5 py-3 dark:bg-gray-900">
		<BreadcrumbItem href="/" home>
			{#snippet icon()}
				<HomeOutline class="me-2 h-4 w-4" />
			{/snippet}Home
		</BreadcrumbItem>
		<BreadcrumbItem href="/">
			{#snippet icon()}
				<ChevronDoubleRightOutline class="mx-2 h-3 w-3 dark:text-white" />
			{/snippet}
			Projects
		</BreadcrumbItem>
		<BreadcrumbItem>
			{#snippet icon()}
				<ChevronDoubleRightOutline class="mx-2 h-3 w-3 dark:text-white" />
			{/snippet}
			Flowbite Svelte
		</BreadcrumbItem>
	</Breadcrumb>
</CodeWrapper>

<HighlightCompo code={modules['./md/icons.md']} />
