<script>
	import Dropdown from '../components/Dropdown.svelte';
	// import {Highlight} from "svelte-highlight";
	import HighlightCompo from '../components/HighlightCompo.svelte';
	// import typescript from "svelte-highlight/languages/typescript";
	import atomonedark from 'svelte-highlight/styles/atom-one-dark';
	import dropdown1 from './md/dropdown1.md?raw';
	const code = 'const add = (a: number, b: number) => a + b;';
</script>

<svelte:head>
	{@html atomonedark}
</svelte:head>

<h1>Dropdown</h1>

<Dropdown />

<HighlightCompo code={dropdown1} />
