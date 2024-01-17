<script>
	import Dropdown from '../components/Dropdown.svelte';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import atomonedark from 'svelte-highlight/styles/atom-one-dark';
	import dropdown1 from './md/dropdown1.md?raw';
	const code = 'const add = (a: number, b: number) => a + b;';
</script>

<svelte:head>
	{@html atomonedark}
</svelte:head>

<h1>Dropdown</h1>

<CodeWrapper class='h-96'>
<Dropdown />
</CodeWrapper>

<HighlightCompo code={dropdown1} />
