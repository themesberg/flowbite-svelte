<script>
	import { Darkmode } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import H1 from '../components/H1.svelte';
	import H2 from '../components/H2.svelte';
	import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Darkmode</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default Darkmode</H2>

<CodeWrapper>
	<Darkmode />
</CodeWrapper>

<HighlightCompo code={modules['./md/darkmode.md']} />

<H2>Initial theme</H2>

Add the following to `app.html`:

<HighlightCompo code={modules['./md/initialtheme.md']} />

<H2>Switcher style</H2>

Use the btnClass prop to overwrite the default classes or just use class attribute to append classes
to the default classes.

<H2>Mode icon</H2>

Use the lightIcon and darkIcon slots to change icons:

<CodeWrapper>
	<Darkmode class="text-lg">
		<ThumbsUpSolid slot="lightIcon" color="red" />
		<ThumbsDownSolid slot="darkIcon" color="green" />
	</Darkmode>
</CodeWrapper>

<HighlightCompo code={modules['./md/modeicon.md']} />
