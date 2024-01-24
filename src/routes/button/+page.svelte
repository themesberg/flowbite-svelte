<script>
	import { Button, Indicator } from '$lib';
	import { EnvelopeSolid, ArrowRightOutline, ShoppingCartSolid } from 'flowbite-svelte-icons';
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	import H1 from '../components/H1.svelte';
	import H2 from '../components/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Buttons</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default buttons</H2>

<CodeWrapper class="flex flex-wrap gap-2">
	<Button>Default</Button>
	<Button color="alternative">Alternative</Button>
	<Button color="dark">Dark</Button>
	<Button color="light">Light</Button>
	<Button color="blue">Blue</Button>
	<Button color="green">Green</Button>
	<Button color="red">Red</Button>
	<Button color="yellow">Yellow</Button>
	<Button color="purple">Purple</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultbuttons.md']} />

<H2>Button with link</H2>

<CodeWrapper>
	<Button href="/">Home</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/link.md']} />

<H2>Button pills</H2>

<CodeWrapper class="flex flex-wrap gap-2">
	<Button pill>Default</Button>
	<Button color="alternative" pill>Alternative</Button>
	<Button color="dark" pill>Dark</Button>
	<Button color="light" pill>Light</Button>
	<Button color="blue" pill>Blue</Button>
	<Button color="green" pill>Green</Button>
	<Button color="red" pill>Red</Button>
	<Button color="yellow" pill>Yellow</Button>
	<Button color="purple" pill>Purple</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/pills.md']} />

<H2>Outline buttons</H2>

<CodeWrapper class="flex flex-wrap gap-2">
	<Button outline>Default</Button>
	<Button outline color="dark">Dark</Button>
	<Button outline color="green">Green</Button>
	<Button outline color="red">Red</Button>
	<Button outline color="yellow">Yellow</Button>
	<Button outline color="purple">Purple</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/outline.md']} />

<H2>Button sizes with icons</H2>

<CodeWrapper>
	<Button size="xs"><EnvelopeSolid class="me-2 h-3 w-3" />Extra small</Button>
	<Button size="sm"><EnvelopeSolid class="me-2 h-3 w-3" />Small</Button>
	<Button size="md"><EnvelopeSolid class="me-2 h-3.5 w-3.5" />Base</Button>
	<Button size="lg"><EnvelopeSolid class="me-2 h-4 w-4" />Large</Button>
	<Button size="xl"><EnvelopeSolid class="me-2 h-4 w-4" />Extra large</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/sizesicons.md']} />

<H2>Button with icon</H2>

<CodeWrapper>
	<Button>
		<ShoppingCartSolid class="me-2 h-3.5 w-3.5" /> Buy Now
	</Button>
	<Button>
		Choose Plan <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
	</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/withicon.md']} />

<H2>Button with label</H2>

<CodeWrapper>
	<Button btnclass="gap-2">
		Messages
		<Indicator color="none" class="bg-primary-200 text-xs font-semibold text-primary-800" size="lg"
			>2</Indicator
		>
	</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/label.md']} />
