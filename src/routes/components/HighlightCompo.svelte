<script>
	import { Highlight } from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import atomonedark from 'svelte-highlight/styles/atom-one-dark';
	// import classicdark from 'svelte-highlight/styles/classic-dark';
	let { code, language = typescript } = $props();
	// const code = "const add = (a: number, b: number) => a + b;";
</script>

<svelte:head>
	{@html atomonedark}
</svelte:head>

<div class="my-4">
	<Highlight {language} {code} />
</div>
