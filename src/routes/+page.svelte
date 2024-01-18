<script>
	import HighlightCompo from './components/HighlightCompo.svelte';

	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true })
</script>

<h1>Svelte 5 UI Lib: Work in progress</h1>

<p>
	Welcome to Svelte 5 UI Lib - an experimental UI library project crafted for personal use with
	Svelte 5. The design is based on Flowbite. While you're welcome to utilize it, please note that
	there are a limited set of components, and I regret that I am unable to provide any support.
	However, your suggestions are always welcome!
</p>

<h2>Dependencies</h2>
<ul>
	<li>Svelte 5</li>
	<li>SvelteKit 2</li>
	<li>TailwindCSS</li>
	<li>tailwind-merge</li>
</ul>

<h2>Credits</h2>

<ul>
	<li>Flowbite</li>
	<li>Flowbite-Svelte</li>
</ul>

<h2>Installation</h2>

<HighlightCompo code={modules['./md/installation.md']} />

<h2>Components</h2>

<ul>
	<li class='hover:underline list-disc'><a href="/banner">Banner</a></li>
	<li class='hover:underline list-disc'><a href="/breadcrumb">Breadcrumb</a></li>
	<li class='hover:underline list-disc'><a href="/button">Buttons</a></li>
	<li class='hover:underline list-disc'><a href="/card">Cards</a></li>
	<li class='hover:underline list-disc'><a href="/darkmode">Darkmode</a></li>
	<li class='hover:underline list-disc'><a href="/dropdown">Dropdown</a></li>
	<li class='hover:underline list-disc'><a href="/footer">Footer</a></li>
	<li class='hover:underline list-disc'><a href="/indicator">Indicator</a></li>
	<li class='hover:underline list-disc'><a href="/kbd">Kbd</a></li>
	<li class='hover:underline list-disc'><a href="/navbar">Navbar</a></li>
	<li class='hover:underline list-disc'><a href="/progress">Progressbar</a></li>
	<li class='hover:underline list-disc'><a href="/forms/select">Select</a></li>
	<li class='hover:underline list-disc'><a href="/sidebar">Sidebar</a></li>
	<li class='hover:underline list-disc'><a href="/skeleton">Skelton</a></li>
	<li class='hover:underline list-disc'><a href="/spinner)">Spinner</a></li>
	<li class='hover:underline list-disc'><a href="/forms/select">Select</a></li>
</ul>

