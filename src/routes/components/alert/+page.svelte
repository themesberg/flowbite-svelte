<script>
	import { Alert, List, Li, Button } from '$lib';
	import { InfoCircleSolid, EyeSolid } from 'flowbite-svelte-icons';

	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Alert</H1>
<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md']} />

<H2>Default alert</H2>
<CodeWrapper class="space-y-4">
	<Alert>
		<span class="font-medium">Default alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="blue">
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="red">
		<span class="font-medium">Danger alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="green">
		<span class="font-medium">Success alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="yellow">
		<span class="font-medium">Warning alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="pink">
		<span class="font-medium">Pink alert!</span>
		Change a few things up and try submitting again.
	</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/default-alert.md']} />

<H2>Alerts with icon</H2>
<CodeWrapper class="space-y-4">
	<Alert>
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Default alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="blue">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="red">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Danger alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="green">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Success alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="yellow">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Warning alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="pink">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Pink alert!</span>
		Change a few things up and try submitting again.
	</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/alerts-with-icon.md']} />

<H2>Bordered alerts</H2>
<CodeWrapper class="space-y-4">
	<Alert border>
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Default alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert border color="blue">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert border color="red">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Danger alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert border color="green">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Success alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert border color="yellow">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Warning alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert border color="pink">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Dark alert!</span>
		Change a few things up and try submitting again.
	</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/bordered-alerts.md']} />

<H2>Alerts with list</H2>
<CodeWrapper class="space-y-4">
	<Alert divclass="!items-start">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
			<span class="sr-only">Info</span>
		{/snippet}
		<p class="font-medium">Ensure that these requirements are met:</p>
		<ul class="ms-4 mt-1.5 list-inside list-disc">
			<li>At least 10 characters (and up to 100 characters)</li>
			<li>At least one lowercase character</li>
			<li>Inclusion of at least one special character, e.g., ! @ # ?</li>
		</ul>
	</Alert>
	<Alert color="blue" divclass="!items-start">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
			<span class="sr-only">Info</span>
		{/snippet}
		<p class="font-medium">Ensure that these requirements are met:</p>
		<List class="ms-4 mt-1.5">
			<Li>At least 10 characters (and up to 100 characters)</Li>
			<Li>At least one lowercase character</Li>
			<Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
		</List>
	</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/alerts-with-list.md']} />

<H2>Dismissable alerts</H2>
<CodeWrapper class="min-h-[450px] space-y-4">
	<Alert dismissable>
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Default alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert dismissable color="blue">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert dismissable color="red">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Danger alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert dismissable color="green">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Success alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert dismissable color="yellow">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Warning alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert dismissable color="pink">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Dark alert!</span>
		Change a few things up and try submitting again.
	</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/dismissable-alerts.md']} />

<H2>Border accent</H2>
<CodeWrapper class="space-y-4">
	<Alert rounded={false} divclass="border-t-4">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="red" rounded={false} divclass="border-t-4">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Danger alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="green" rounded={false} divclass="border-t-4">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Success alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="yellow" rounded={false} divclass="border-t-4">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Warning alert!</span>
		Change a few things up and try submitting again.
	</Alert>
	<Alert color="pink" rounded={false} divclass="border-t-4 flex-row-reverse">
		{#snippet icon()}
			<InfoCircleSolid class="h-4 w-4" />
		{/snippet}
		<span class="font-medium">Dark alert!</span>
		Change a few things up and try submitting again.
	</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/border-accent.md']} />

<H2>Additional content</H2>
<CodeWrapper class="space-y-4">
	<Alert>
		<div class="flex items-center gap-3">
			{#snippet icon()}
				<InfoCircleSolid class="h-4 w-4" />
			{/snippet}
			<span class="text-lg font-medium">This is a info alert</span>
		</div>
		<p class="mb-4 mt-2 text-sm">
			More info about this info alert goes here. This example text is going to run a bit longer so
			that you can see how spacing within an alert works with this kind of content.
		</p>
		<div class="flex gap-2">
			<Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
			<Button size="xs" outline>Go to Home</Button>
		</div>
	</Alert>
	<Alert color="green">
		<div class="flex items-center gap-3">
			{#snippet icon()}
				<InfoCircleSolid class="h-4 w-4" />
			{/snippet}
			<span class="text-lg font-medium">This is a info alert</span>
		</div>
		<p class="mb-4 mt-2 text-sm">
			More info about this info alert goes here. This example text is going to run a bit longer so
			that you can see how spacing within an alert works with this kind of content.
		</p>
		<div class="flex gap-2">
			<Button size="xs" color="green"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
			<Button size="xs" outline color="green">Go to Home</Button>
		</div>
	</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/additional-content.md']} />

<H2>Custom color</H2>
<CodeWrapper>
	<Alert color="none" divclass="bg-sky-500 text-white">Your content</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/custom-color.md']} />

<H2>Events</H2>
<CodeWrapper class="h-24">
	<Alert
		dismissable
		onclick={() => {
			alert('Clicked closeAlert.');
		}}>Close me</Alert
	>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/events.md']} />
