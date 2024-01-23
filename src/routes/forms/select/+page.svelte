<script lang="ts">
	import { Select, Label } from '$lib';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	let selected: any = $state();
	let countries = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' }
	];
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Select</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Select input example</h2>

<CodeWrapper class="h-48">
	<Label>
		Select an option
		<Select selectclass="mt-2" items={countries} bind:value={selected} />
	</Label>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultselect.md']} />

<h2>Disabled state</h2>

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

<h2>Underline select</h2>

<CodeWrapper class="h-48">
	<Label for="select-underline" labelclass="sr-only">Underline select</Label>
	<Select id="select-underline" underline selectclass="mt-2" items={countries} />
</CodeWrapper>

<HighlightCompo code={modules['./md/underline.md']} />
