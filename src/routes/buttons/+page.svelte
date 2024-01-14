<script>
	import { Button } from '$lib';
	import { EnvelopeSolid, ArrowRightOutline, ShoppingCartSolid } from 'flowbite-svelte-icons'
	import HighlightCompo from '../components/HighlightCompo.svelte';
	import setup from './md/setup.md?raw';
	import defaultbuttons from './md/defaultbuttons.md?raw';
	import link from './md/link.md?raw'
	import pills from './md/pills.md?raw'
	import outline from './md/outline.md?raw'
	import sizesicons from './md/sizesicons.md?raw'
	import withicon from './md/withicon.md?raw'
</script>

<h1>Buttons</h1>

<h2>Setup</h2>

<HighlightCompo code={setup} />

<h2>Default buttons</h2>

<div class="flex flex-wrap gap-2">
<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="blue">Blue</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
</div>

<HighlightCompo code={defaultbuttons} />

<h2>Button with link</h2>

<Button href="/">Home</Button>

<HighlightCompo code={link} />

<h2>Button pills</h2>

<div class="flex flex-wrap gap-2">
<Button pill>Default</Button>
<Button color="alternative" pill>Alternative</Button>
<Button color="dark" pill>Dark</Button>
<Button color="light" pill>Light</Button>
<Button color="blue" pill>Blue</Button>
<Button color="green" pill>Green</Button>
<Button color="red" pill>Red</Button>
<Button color="yellow" pill>Yellow</Button>
<Button color="purple" pill>Purple</Button>
</div>

<HighlightCompo code={pills} />

<h2>Outline buttons</h2>

<div class="flex flex-wrap gap-2">
	<Button outline>Default</Button>
	<Button outline color="dark">Dark</Button>
	<Button outline color="green">Green</Button>
	<Button outline color="red">Red</Button>
	<Button outline color="yellow">Yellow</Button>
	<Button outline color="purple">Purple</Button>
</div>

<HighlightCompo code={outline} />

<h2>Button sizes with icons</h2>

<Button size="xs"><EnvelopeSolid class="w-3 h-3 me-2" />Extra small</Button>
<Button size="sm"><EnvelopeSolid class="w-3 h-3 me-2" />Small</Button>
<Button size="md"><EnvelopeSolid class="w-3.5 h-3.5 me-2" />Base</Button>
<Button size="lg"><EnvelopeSolid class="w-4 h-4 me-2" />Large</Button>
<Button size="xl"><EnvelopeSolid class="w-4 h-4 me-2" />Extra large</Button>

<HighlightCompo code={sizesicons} />

<h2>Button with icon</h2>

<Button>
	<ShoppingCartSolid class="w-3.5 h-3.5 me-2" /> Buy Now
</Button>
<Button>
	Choose Plan <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
</Button>

<HighlightCompo code={withicon} />

<h2>Button with label</h2>