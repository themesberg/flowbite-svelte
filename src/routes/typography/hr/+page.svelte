<script lang="ts">
  import { Hr, P, Label, Radio } from '$lib';
  import { QuoteSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const types = ['default', 'trimmed', 'icon', 'text', 'shape'];
  let selectedStyle = $state('default');
</script>

<H1>Horizontal line (HR)</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default HR</H2>

<CodeWrapper>
  <div class="h-[360px] sm:h-[320px] md:h-[250px] mb-4">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  {#if selectedStyle === 'trimmed'}
    <Hr hrClass="w-48 h-1 mx-auto my-4 rounded md:my-10" />
  {:else if selectedStyle === 'icon'}
    <Hr hrClass="my-8 w-64 h-1">
      <QuoteSolid class="h-6 w-6 text-gray-700 dark:text-gray-300" />
    </Hr>
  {:else if selectedStyle === 'text'}
    <Hr hrClass="my-8 w-64">or</Hr>
  {:else if selectedStyle === 'shape'}
    <Hr hrClass="my-8 mx-auto w-8 h-8" />
  {:else}
    <Hr hrClass="my-8" />
  {/if}
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
  {#each types as type}
    <Radio labelClass="w-24 my-1" name="hr_style" bind:group={selectedStyle} value={type}>{type}</Radio>
  {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/hr.md'] as string} />
