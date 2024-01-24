<script>
	import { A, P } from '$lib';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Links</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default link</h2>

<CodeWrapper>
	<A href="/" aclass="font-medium hover:underline">Read more</A>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-link.md']} />

<h2>Paragraph</h2>
<CodeWrapper>
<P>
	The free updates that will be provided is based on the <A href="/" aclass="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
</P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph.md']} />

<h2>Icon link</h2>
<CodeWrapper>
<P>
	500,000 people have made over a million apps with Glide.
	<A href="/" aclass="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium  hover:underline">
	  Read their stories
	  <ArrowRightOutline class="w-4 h-4 ms-2" />
	</A>
</P>
</CodeWrapper>

<HighlightCompo code={modules['./md/icon-link.md']} />