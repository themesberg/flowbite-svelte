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

<div class="my-8 mx-auto max-w-4xl border border-gray-200 bg-gray-50 p-0.5 rounded-md dark:border-gray-600 dark:bg-gray-700">
	<Highlight {language} {code} />
</div>
