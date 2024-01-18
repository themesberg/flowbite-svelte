<script>
	import { Button, Indicator } from '$lib';
	import { EnvelopeSolid, ArrowRightOutline, ShoppingCartSolid } from 'flowbite-svelte-icons'
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import CodeWrapper from '../components/CodeWrapper.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true })
</script>

<h1>Buttons</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default buttons</h2>

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

<h2>Button with link</h2>

<CodeWrapper>
<Button href="/">Home</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/link.md']} />

<h2>Button pills</h2>

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

<h2>Outline buttons</h2>

<CodeWrapper class="flex flex-wrap gap-2">
	<Button outline>Default</Button>
	<Button outline color="dark">Dark</Button>
	<Button outline color="green">Green</Button>
	<Button outline color="red">Red</Button>
	<Button outline color="yellow">Yellow</Button>
	<Button outline color="purple">Purple</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/outline.md']} />

<h2>Button sizes with icons</h2>

<CodeWrapper>
<Button size="xs"><EnvelopeSolid class="w-3 h-3 me-2" />Extra small</Button>
<Button size="sm"><EnvelopeSolid class="w-3 h-3 me-2" />Small</Button>
<Button size="md"><EnvelopeSolid class="w-3.5 h-3.5 me-2" />Base</Button>
<Button size="lg"><EnvelopeSolid class="w-4 h-4 me-2" />Large</Button>
<Button size="xl"><EnvelopeSolid class="w-4 h-4 me-2" />Extra large</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/sizesicons.md']} />

<h2>Button with icon</h2>

<CodeWrapper>
<Button>
	<ShoppingCartSolid class="w-3.5 h-3.5 me-2" /> Buy Now
</Button>
<Button>
	Choose Plan <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/withicon.md']} />

<h2>Button with label</h2>

<CodeWrapper>
<Button class="gap-2">
	Messages
	<Indicator color="none" class="bg-primary-200 text-xs text-primary-800 font-semibold" size="lg">2</Indicator>
</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/label.md']} />