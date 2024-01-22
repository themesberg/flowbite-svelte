<script>
	import Dropdown from '../components/Dropdown.svelte';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true })
</script>

<svelte:head>
	{@html atomonedark}
</svelte:head>

<h1>Dropdown</h1>

<CodeWrapper class='h-96'>
<Dropdown />
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown1.md']} />
