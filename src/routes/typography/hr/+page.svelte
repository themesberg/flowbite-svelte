<script lang="ts">
  import { Hr, P, Label, Radio } from '$lib';
  import { QuoteSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'typography/hr';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const types = ['default', 'trimmed', 'icon', 'text', 'shape'];
  let selectedStyle = $state('default');

  // code generator
  let generatedCode = $derived(
    (() => {
      let hr;
      if (selectedStyle === 'default') {
        hr = `<Hr hrClass="my-8" />`;
      }
      if (selectedStyle === 'trimmed') {
        hr = `<Hr hrClass="w-48 h-1 mx-auto my-4 rounded md:my-10" />`;
      }
      if (selectedStyle === 'icon') {
        hr = `<Hr hrClass="my-8 w-64 h-1" icon>
  <QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
</Hr>`;
      }
      if (selectedStyle === 'text') {
        hr = `<Hr hrClass="my-8 w-64">or</Hr>`;
      }
      if (selectedStyle === 'shape') {
        hr = `<Hr hrClass="my-8 mx-auto w-8 h-8" />`;
      }
      return `<p>Lorem ipsum dolor sit amet.</p> 
   ${hr} 
<p>Fusce eu vitae pretium libero imperdiet.</p>`;
    })()
  );
</script>

<H1>Horizontal line (HR)</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />
<H2>Default HR</H2>

<CodeWrapper>
  <div class="mb-4 sm:h-[250px] md:h-[200px]">
    <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools.</P>
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
    <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</P>
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each types as type}
      <Radio labelClass="w-20 my-1" name="hr_style" bind:group={selectedStyle} value={type}>{type}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>
