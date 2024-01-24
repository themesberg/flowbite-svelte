<script>
    import { Hr, P, Blockquote } from '$lib'
    import { QuoteSolid } from 'flowbite-svelte-icons';
    import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<h1>Horizontal line (HR)</h1>

<h2>Setup</h2>

<HighlightCompo code={modules['./md/setup.md']} />

<h2>Default HR</h2>
  
<CodeWrapper>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr hrclass="my-8" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-hr.md']} />

<h2>Trimmed</h2>

<CodeWrapper>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr hrclass="w-48 h-1 mx-auto my-4 rounded md:my-10" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</CodeWrapper>

<HighlightCompo code={modules['./md/trimmed.md']} />

<h2>Icon HR</h2>

<CodeWrapper>
    <div class="text-center">
        <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
        <Hr hrclass="my-8 w-64 h-1" icon>
          <QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </Hr>
        <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/icon-hr.md']} />

<h2>HR with text</h2>

<CodeWrapper>
    <div class="text-center">
        <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
        <Hr hrclass="my-8 w-64">or</Hr>
        <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/hr-with-text.md']} />

<h2>HR with shape</h2>

<CodeWrapper>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr hrclass="my-8 mx-auto w-8 h-8" />
<Blockquote alignment="center">
  <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</CodeWrapper>

<HighlightCompo code={modules['./md/hr-with-shape.md']} />