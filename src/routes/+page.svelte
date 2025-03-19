<script lang="ts">
	import { P, A } from '$lib';
	import HighlightCompo from './utils/HighlightCompo.svelte';
	import H1 from './utils/H1.svelte';
	import H2 from './utils/H2.svelte';
	import H3 from './utils/H3.svelte';
	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});

	import { removeHyphensAndCapitalize } from './utils/helpers';
	const name = __NAME__;
	const version = __VERSION__;
	const githuburl = __GITHUBURL__;
</script>

<H1
	><a class="dark:text-primary-500 hover:underline" href={githuburl}
		>{removeHyphensAndCapitalize(name)}: v{version}</a
	></H1
>

<P
	>Svelte 5 UI Lib is a UI library built from scratch to leverage Svelte 5's runes system, creating
	smooth, reactive components.</P
>

<H2>Installation</H2>

<H3>Svelte 5 Runes</H3>
<P>Installing Svelte 5:</P>

<HighlightCompo class="mb-8" codeLang="js" code={modules['./md/install-svelte.md'] as string} />

<H3>Installing Svelte-5-Ui-Lib</H3>
<P>Install `svelte-5-ui-lib` and update dependencies:</P>

<HighlightCompo class="mb-8" codeLang="sh" code={modules['./md/svelte-5-ui-lib.md'] as string} />

<H3>TailwindCSS</H3>
<P>Update src/app.css:</P>

<HighlightCompo class="mb-8" codeLang="js" code={modules['./md/app-css.md'] as string} />
