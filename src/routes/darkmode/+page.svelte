<script>
	import { Darkmode } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Darkmode</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default Darkmode</h2>

<CodeWrapper>
	<Darkmode />
</CodeWrapper>

<HighlightCompo code={modules['./md/darkmode.md']} />

<h2>Initial theme</h2>

Add the following to `app.html`:

<HighlightCompo code={modules['./md/initialtheme.md']} />

<h2>Switcher style</h2>

Use the btnClass prop to overwrite the default classes or just use class attribute to append classes
to the default classes.

<h2>Mode icon</h2>

Use the lightIcon and darkIcon slots to change icons:

<CodeWrapper>
	<Darkmode class="text-lg">
		<ThumbsUpSolid slot="lightIcon" color="red" />
		<ThumbsDownSolid slot="darkIcon" color="green" />
	</Darkmode>
</CodeWrapper>

<HighlightCompo code={modules['./md/modeicon.md']} />
