<script>
	import { A } from '$lib';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Links</h1>

<h2>Setup</h2>

<h2>Default link</h2>

<CodeWrapper>
	<A class="font-medium hover:underline">Read more</A>
</CodeWrapper>
