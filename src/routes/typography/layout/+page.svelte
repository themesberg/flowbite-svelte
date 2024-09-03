<script lang="ts">
  import { P, Layout } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let { content1 = $bindable('Track work across the enterprise through an open, collaborative platform.'), content2 = $bindable('Deliver great service experiences fast - without the complexity of traditional ITSM solutions.') } = $props();
  // code generator
  let generatedCode1 = $derived(
    (() => {
      return `<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>${content1}</P><P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>${content2}</P>`;
    })()
  );
</script>

<H1>Layout</H1>

<H2>One column</H2>

<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>{content1}</P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>{content2}</P>
  {#snippet codeblock()}
    <HighlightCompo class="overflow-scroll" code={generatedCode1} />
  {/snippet}
</CodeWrapper>

<H2>Two columns even</H2>
<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Layout class="gap-6">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/two-columns-even.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Three columns even</H2>
<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/three-columns-even.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Two columns uneven</H2>

<CodeWrapper>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
    <div class="col-span-2">
      <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
      <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    </div>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </Layout>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/three-columns-uneven.md'] as string} />
  {/snippet}
</CodeWrapper>
