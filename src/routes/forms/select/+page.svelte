<script lang="ts">
	import { Select, Label } from '$lib';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	import H1 from '../../components/H1.svelte';
	import H2 from '../../components/H2.svelte';

	let selected: any = $state();
	let countries = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' }
	];
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Select</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Select input example</H2>

<CodeWrapper class="h-48">
	<Label>
		Select an option
		<Select selectclass="mt-2" items={countries} bind:value={selected} />
	</Label>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultselect.md']} />

<H2>Disabled state</H2>

<CodeWrapper class="h-48">
	<Label for="select-disabled" color="disabled" labelclass="mb-2">Disabled select</Label>
	<Select
		id="select-disabled"
		disabled
		items={countries}
		placeholder="You can't select anything..."
	/>
</CodeWrapper>

<HighlightCompo code={modules['./md/disabled.md']} />

<H2>Underline select</H2>

<CodeWrapper class="h-48">
	<Label for="select-underline" labelclass="sr-only">Underline select</Label>
	<Select id="select-underline" underline selectclass="mt-2" items={countries} />
</CodeWrapper>

<HighlightCompo code={modules['./md/underline.md']} />
