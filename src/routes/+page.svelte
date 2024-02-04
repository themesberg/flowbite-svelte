<script>
	import HighlightCompo from './utils/HighlightCompo.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Svelte 5 UI Lib</H1>

<p>
	Introducing Svelte 5 UI Lib – a UI library crafted with Svelte 5 and built upon
	Flowbite/Flowbite-Svelte. Explore our collection featuring over 26 components.
</p>

<H2>Dependencies</H2>
<ul>
	<li>Svelte 5</li>
	<li>SvelteKit 2</li>
	<li>TailwindCSS</li>
	<li>tailwind-merge</li>
</ul>

<H2>Credits</H2>

<ul>
	<li>Flowbite</li>
	<li>Flowbite-Svelte</li>
</ul>

<H2>Installation</H2>

<HighlightCompo codeLang='md' code={modules['./md/installation.md']} />
