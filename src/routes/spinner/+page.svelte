<script>
	import { Spinner, Button } from '$lib';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import H1 from '../components/H1.svelte'
	import H2 from '../components/H2.svelte'
	import H3 from '../components/H3.svelte'
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Spinner</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default spinner</H2>

<CodeWrapper>
	<Spinner />
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultspinner.md']} />

<H2>Colors</H2>

<CodeWrapper>
	<Spinner />
	<Spinner color="gray" />
	<Spinner color="green" />
	<Spinner color="red" />
	<Spinner color="yellow" />
	<Spinner color="pink" />
	<Spinner color="purple" />
</CodeWrapper>

<HighlightCompo code={modules['./md/colors.md']} />

<H2>Sizes</H2>

<CodeWrapper>
	<Spinner size={4} />
	<Spinner size="6" />
	<Spinner size={8} />
</CodeWrapper>

<HighlightCompo code={modules['./md/sizes.md']} />

<H2>Alignment</H2>

<CodeWrapper>
	<div class="text-left"><Spinner /></div>
	<div class="text-center"><Spinner /></div>
	<div class="text-right"><Spinner /></div>
</CodeWrapper>

<HighlightCompo code={modules['./md/alignment.md']} />

<H2>Button</H2>

<CodeWrapper>
	<div class="flex flex-wrap items-center gap-2">
		<Button>
			<Spinner svgclass="me-3" size="4" color="white" />
			Loading ...
		</Button>
		<Button outline color="dark">
			<Spinner svgclass="me-3" size="4" />
			Loading ...
		</Button>
	</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/button.md']} />
