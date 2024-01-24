<script>
	import HighlightCompo from './components/HighlightCompo.svelte';
    import H1 from './components/H1.svelte'
	import H2 from './components/H2.svelte'
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Svelte 5 UI Lib: Work in progress</H1>

<p>
	Welcome to Svelte 5 UI Lib - an experimental UI library project crafted for personal use with
	Svelte 5. The design is based on Flowbite. While you're welcome to utilize it, please note that
	there are a limited set of components, and I regret that I am unable to provide any support.
	However, your suggestions are always welcome!
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

<HighlightCompo code={modules['./md/installation.md']} />
