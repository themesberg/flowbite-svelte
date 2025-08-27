<script lang="ts">
  import { Hr, P, Label, Radio, uiHelpers } from "$lib";
  import { QuoteSolid } from "flowbite-svelte-icons";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Hr builder";
  let description = "A quick way to create Hr component";
  let title = "Hr builder";
  let dir = "builder";

  const types = ["default", "trimmed", "icon", "text", "shape"];
  let selectedStyle: string | number = $state("default");

  // code generator
  let generatedCode = $derived(
    (() => {
      let hr;
      if (selectedStyle === "default") {
        hr = `<Hr hrClass="my-8" />`;
      }
      if (selectedStyle === "trimmed") {
        hr = `<Hr hrClass="w-48 h-1 mx-auto my-4 rounded md:my-10" />`;
      }
      if (selectedStyle === "icon") {
        hr = `<Hr hrClass="my-8 w-64 h-1" icon>
  <QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
</Hr>`;
      }
      if (selectedStyle === "text") {
        hr = `<Hr hrClass="my-8 w-64">or</Hr>`;
      }
      if (selectedStyle === "shape") {
        hr = `<Hr hrClass="my-8 mx-auto w-8 h-8" />`;
      }
      return `<p>Lorem ipsum dolor sit amet.</p> 
   ${hr} 
<p>Fusce eu vitae pretium libero imperdiet.</p>`;
    })()
  );
  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };

  $effect(() => {
    builderExpand = builder.isOpen;
  });
</script>

<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Hr Builder</H1>

<CodeWrapper>
  <div class="mb-4 sm:h-[250px] md:h-[200px]">
    <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools.</P>
    {#if selectedStyle === "trimmed"}
      <Hr class="mx-auto my-4 h-1 w-48 rounded md:my-10" />
    {:else if selectedStyle === "icon"}
      <Hr class="my-8 h-1 w-64">
        <QuoteSolid class="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </Hr>
    {:else if selectedStyle === "text"}
      <Hr class="my-8 w-64">or</Hr>
    {:else if selectedStyle === "shape"}
      <Hr class="mx-auto my-8 h-8 w-8" />
    {:else}
      <Hr class="my-8" />
    {/if}
    <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</P>
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each types as type}
      <Radio class="my-1" classes={{ label: "w-20" }} name="hr_style" bind:group={selectedStyle} value={type}>{type}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
