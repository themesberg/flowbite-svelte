<script lang="ts">
  import { type Component } from "svelte";
  import { Select, Label, Radio, Helper, uiHelpers, Button } from "$lib";
  import type { SelectSize } from "../types";
  import HighlightCompo from "../utils/HighlightCompo.svelte";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Select builder";
  let description = "A quick way to create Select component";
  let title = "Select builder";
  let dir = "builder";

  interface Country {
    value: string;
    name: string;
    href?: string;
  }

  let countries: Country[] = [
    { value: "us", name: "United States", href: "/" },
    { value: "ca", name: "Canada", href: "/" },
    { value: "fr", name: "France", href: "/" }
  ];

  const sizes: SelectSize[] = ["sm", "md", "lg"];
  let selectSize: SelectSize = $state("md");

  const sizeDisplay = {
    sm: "Small",
    md: "Medium",
    lg: "Large"
  };
  let underline = $state(false);
  const changeUnderline = () => {
    underline = !underline;
  };
  let disabled = $state(false);
  const changeDiabled = () => {
    disabled = !disabled;
  };
  let selected = $state("");
  let bindValue = $state(false);
  const changeBindValue = () => {
    bindValue = !bindValue;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // let fileSlot = '';
      if (selectSize !== "md") props.push(` size="${selectSize}"`);
      if (underline) props.push(" underline");
      if (disabled) props.push(" disabled");
      if (bindValue) props.push(" bind:value={selected}");

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Select${propsString} />${bindValue ? "\nSelected value: {selected}" : ""}`;
    })()
  );
  // for interactive builder
  let builder = uiHelpers();
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.

  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);

  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Select Builder</H1>
<CodeWrapper>
  <div class="h-32">
    <Label for="select-sm" class="mb-4">
      {#if disabled}Disabled{/if}
      {#if selectSize}
        {sizeDisplay[selectSize]} select
      {/if}
    </Label>
    <Select id="select-sm" size={selectSize} items={countries} {underline} {disabled} bind:value={selected} class="mb-2" />
    {#if bindValue}
      <Helper class="text-base">Selected value: {selected}</Helper>
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio class="my-1 w-24" name="input_size" bind:group={selectSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" onclick={changeUnderline}>{underline ? "Default" : "Underline"}</Button>
    <Button class="w-40" color="secondary" onclick={changeDiabled}>{disabled ? "Enabled" : "Disabled"}</Button>
    <Button class="w-40" color="rose" onclick={changeBindValue}>{bindValue ? "Unbind" : "Bind value"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
