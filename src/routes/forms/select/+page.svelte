<script lang="ts">
	import { Select, Label } from '$lib';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	let selected: any =$state();
	let countries = [
		{ value: 'us', name: 'United States' },
		{ value: 'ca', name: 'Canada' },
		{ value: 'fr', name: 'France' }
	];
    import defaultselect from './md/defaultselect.md?raw'
    import disabled from './md/disabled.md?raw'
    import setup from './md/setup.md?raw'
    import underline from './md/underline.md?raw'

</script>

<h1>Select</h1>

<h2>Setup</h2>

<HighlightCompo code={setup} />

<h2>Select input example</h2>

<CodeWrapper class="h-48">
	<Label>
		Select an option
		<Select class="mt-2" items={countries} bind:value={selected} />
	</Label>
</CodeWrapper>

<HighlightCompo code={defaultselect} />

<h2>Disabled state </h2>

<CodeWrapper class="h-48">
	<Label for="select-disabled" color='disabled' class="mb-2">Disabled select</Label>
	<Select
		id="select-disabled"
		disabled
		items={countries}
		placeholder="You can't select anything..."
	/>
</CodeWrapper>

<HighlightCompo code={disabled} />

<h2>Underline select</h2>

<CodeWrapper class="h-48">
	<Label for="select-underline" class="sr-only">Underline select</Label>
	<Select id="select-underline" underline class="mt-2" items={countries} />
</CodeWrapper>

<HighlightCompo code={underline} />

