<script>
	import { P, Layout } from '$lib';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
    const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Paragraph</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default paragraph</h2>

<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<P weight="light" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
		Accelerate critical development work, eliminate toil, and deploy changes with ease, with a
		complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-paragraph.md']} />

<h2>Leading paragraph</h2>

<CodeWrapper>
	<P pclass="mb-3 md:text-xl" weight="light" size="lg" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work and deploy.</P
	>
	<P weight="light" color="text-gray-500 dark:text-gray-400"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/leading-paragraph.md']} />

<h2>First letter</h2>

<CodeWrapper>
	<P pclass="mb-3" color="text-gray-500 dark:text-gray-400" firstupper
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<P weight="light" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/first-letter.md']} />

<h2>Paragraph bold</h2>

<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
		Track work across the enterprise through an open, collaborative platform. <strong
			class="font-semibold text-gray-900 dark:text-white"
		>
			Link issues across Jira
		</strong>
		and ingest data from other software development tools, so your IT support and operations teams have
		richer contextual information to rapidly respond to requests, incidents, and changes.
	</P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-bold.md']} />

<h2>Paragraph underline</h2>

<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
		Track work across the enterprise through an open, collaborative platform. <u class="underline">
			Link issues across Jira
		</u>
		and ingest data from other software development tools, so your IT support and operations teams have
		richer contextual information to rapidly respond to requests, incidents, and changes.
	</P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-underline.md']} />

<h2>Paragraph italic</h2>

<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
		Track work across the enterprise through an open, collaborative platform. <em
			class="font-italic"
		>
			Link issues across Jira
		</em>
		and ingest data from other software development tools, so your IT support and operations teams have
		richer contextual information to rapidly respond to requests, incidents, and changes.
	</P>

	<P italic pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
		Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.
	</P>
</CodeWrapper>

<HighlightCompo code={modules['./md/paragraph-italic.md']} />

<h2>Layout</h2>

<h3>One column</h3>

<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/one-column.md']} />

<h3>Two columns even</h3>
<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<Layout divclass="gap-6">
		<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
			>Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.</P
		>
		<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
			>Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.</P
		>
	</Layout>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/two-columns-even.md']} />

<h3>Three columns even</h3>
<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<Layout divclass="gap-6" cols="grid-cols-1 sm:grid-cols-3">
		<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
			>Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.</P
		>
		<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
			>Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.</P
		>
		<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
			>Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.</P
		>
	</Layout>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/three-columns-even.md']} />

<h3>Two columns uneven</h3>

<CodeWrapper>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<Layout divclass="gap-6" cols="grid-cols-1 sm:grid-cols-3">
		<div class="col-span-2">
			<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
				>Track work across the enterprise through an open, collaborative platform. Link issues
				across Jira and ingest data from other software development tools, so your IT support and
				operations teams have richer contextual information to rapidly respond to requests,
				incidents, and changes.</P
			>
			<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
				>Deliver great service experiences fast - without the complexity of traditional ITSM
				solutions.Accelerate critical development work, eliminate toil, and deploy changes with
				ease, with a complete audit trail for every change.</P
			>
		</div>
		<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
			>Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.</P
		>
	</Layout>
	<P pclass="mb-3" weight="light" color="text-gray-500 dark:text-gray-400"
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/three-columns-uneven.md']} />

<h2>Text alignment</h2>

<h3>Left</h3>

<CodeWrapper>
	<P align="left"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/left.md']} />

<h3>Center</h3>

<CodeWrapper>
	<P align="center"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/center.md']} />

<h3>Right</h3>

<CodeWrapper>
	<P align="right"
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/right.md']} />

