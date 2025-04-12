<script lang="ts">
  import { Label, Fileupload, fileupload, Helper, Radio, Button, type FileuploadProps, uiHelpers } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "File input builder";
  let description = "A quick way to create File input component";
  let title = "File input builder";
  let dir = "builder";

  let files: FileList | undefined = $state();
  const sizes = Object.keys(fileupload.variants.size);
  let size: FileuploadProps["size"] = $state("md");
  let helperState = $state(false);
  const changeHelperState = () => {
    helperState = !helperState;
  };
  let fileNames = $state(true);
  const changeBindFile = () => {
    fileNames = !fileNames;
  };
  let multiple = $state(false);
  const changeMultiple = () => {
    multiple = !multiple;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (size !== "md") props.push(` size="${size}"`);
      if (multiple) props.push(" multiple");
      if (fileNames) props.push(" bind:files");

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Fileupload${propsString} />${helperState ? `\n<Helper>Helper text</Helper>` : ""}
${fileNames ? `{#each files as file}<p>{file.name}</p>{/each}` : ""}`;
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

<H1>File input Builder</H1>
<CodeWrapper>
  <div class="md:h-24">
    <Fileupload id="small_size" {size} class="mb-2" {multiple} bind:files />
    {#if helperState}
      <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
    {/if}
    {#if fileNames && files}
      <div class="h-16 overflow-y-scroll">
        {#each files as file}
          <p>{file.name}</p>
        {/each}
      </div>
    {/if}
  </div>
  <div class="mt-4 mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as sizeOption}
      <Radio class="my-1 w-16" name="file_input_size" bind:group={size} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" onclick={changeHelperState}>{helperState ? "Remove helper" : "Add helper"}</Button>
    <Button class="w-40" color="emerald" onclick={changeBindFile}>{fileNames ? "Hide file names" : "Show file names"}</Button>
    <Button class="w-40" color="sky" onclick={changeMultiple}>{multiple ? "Remove multiple" : "Add multiple"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
