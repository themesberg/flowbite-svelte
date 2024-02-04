<script lang="ts">
	import { HighlightSvelte, Highlight } from 'svelte-highlight';
	// check colorscheme at https://highlightjs.org/demo
	import githubDark from 'svelte-highlight/styles/github-dark';
	import markdown from 'svelte-highlight/languages/markdown';
	// import classicdark from 'svelte-highlight/styles/classic-dark';
	let { code, codeLang } = $props<{ code: string; codeLang?: string }>();
</script>

<svelte:head>
	{@html githubDark}
</svelte:head>

<div
	class="mx-auto my-8 max-w-4xl rounded-md border border-gray-200 bg-gray-50 p-0.5 dark:border-gray-600 dark:bg-gray-700"
>
	{#if codeLang === 'md'}
		<Highlight language={markdown} {code} />
	{:else if code}
		<HighlightSvelte {code} />
	{:else}
		no code is provided
	{/if}
</div>
