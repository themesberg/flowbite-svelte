<script lang="ts">
  import { P, Layout, Label, Radio, uiHelpers } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import { isOverflow } from '../../utils/helpers';
  import H2 from '../../utils/H2.svelte';
  // import H3 from '../../utils/H3.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/layout';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let { content1 = $bindable('Track work across the enterprise through an open, collaborative platform.'), content2 = $bindable('Deliver great service experiences fast - without the complexity of traditional ITSM solutions.') } = $props();

  const styles = ['one-column', 'two-columns-even', 'three-columns-even', 'two-columns-uneven'];
  let selectedStyle = $state('one-column');
  let markdown = $derived.by(()=>{
    if (selectedStyle === 'two-columns-even') {
      return 'two-columns-even.md'
    } else if (selectedStyle === 'three-columns-even') {
      return 'three-columns-even.md'
    } else if (selectedStyle === 'two-columns-uneven') {
      return 'two-columns-uneven.md'
    } else {
      return 'one-column.md'
    }
  })
  // for DynamicCodeBlock setup
  let codeBlock = uiHelpers();
  let expand = $state(false);
  let showExpandButton = $derived(isOverflow(markdown, modules));
  const handleExpandClick = () => {
    expand = !expand;
  }
  $effect(() => {
    isOverflow(markdown, modules)
    expand = codeBlock.isOpen;
  });
  // end of DynamicCodeBlock setup
</script>

<H1>Layout</H1>

<CodeWrapper>
  <div class="h-[400px] overflow-y-scroll">
  {#if selectedStyle === 'two-columns-even'}
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <Layout class="gap-6">
      <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
      <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    </Layout>
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  {:else if selectedStyle === 'three-columns-even'}
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
      <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
      <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
      <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    </Layout>
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  {:else if selectedStyle === 'two-columns-uneven'}
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <Layout class="grid-cols-1 gap-6 sm:grid-cols-3">
      <div class="col-span-2">
        <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
        <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
      </div>
      <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
    </Layout>
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  {:else}
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>{content1}</P>
    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>{content2}</P>
  {/if}
  </div>
<div class="mb-4 flex flex-wrap space-x-4">
  <Label class="mb-4 w-full font-bold">Style:</Label>
  {#each styles as style}
    <Radio labelClass="w-48 my-1" name="block_style" bind:group={selectedStyle} value={style}>{style}</Radio>
  {/each}
</div>
{#snippet codeblock()}
<DynamicCodeBlockHighlight {handleExpandClick} {expand} {showExpandButton}  code={modules[`./md/${markdown}`] as string} />
{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
