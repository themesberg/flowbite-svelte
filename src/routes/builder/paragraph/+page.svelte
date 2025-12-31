<script lang="ts">
  import { P, paragraph, Label, Radio, Button, Input, CloseButton, uiHelpers, type ParagraphProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Paragraph builder";
  let description = "A quick way to create Paragraph component";
  let title = "Paragraph builder";
  let dir = "builder";

  const sizes = Object.keys(paragraph.variants.size);
  let pSize: ParagraphProps["size"] = $state("base");
  const weights = Object.keys(paragraph.variants.weight);
  let pWeight: ParagraphProps["weight"] = $state("normal");
  const spaces = Object.keys(paragraph.variants.space);
  let pSpace: ParagraphProps["space"] = $state("normal");
  const heights = Object.keys(paragraph.variants.height);
  let pHeight: ParagraphProps["height"] = $state("normal");
  const alignments = Object.keys(paragraph.variants.align);
  let pAlign: ParagraphProps["align"] = $state("left");
  const whitespaces = Object.keys(paragraph.variants.whitespace);
  let pWhitespace: ParagraphProps["whitespace"] = $state("normal");
  let pFirstupper: ParagraphProps["firstUpper"] = $state(false);
  let pJustify: ParagraphProps["justify"] = $state(false);
  let italic = $state(false);
  const changeItalic = () => {
    italic = !italic;
  };

  let { text = $bindable("") } = $props();
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius debitis cupiditate tempora necessitatibus perspiciatis pariatur aspernatur.";

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (pSize !== "base") props.push(` size="${pSize}"`);
      if (pWeight !== "normal") props.push(` weight="${pWeight}"`);
      if (pSpace !== "normal") props.push(` space="${pSpace}"`);
      if (pHeight !== "normal") props.push(` height="${pHeight}"`);
      if (pAlign !== "left") props.push(` align="${pAlign}"`);
      if (pWhitespace !== "normal") props.push(` whitespace="${pWhitespace}"`);
      if (italic) props.push(` italic`);
      if (pFirstupper) props.push(` firstUpper`);
      if (pJustify) props.push(` justify`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<P${propsString}>
  ${text}
</P>`;
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

<H1>Paragraph Builder</H1>
<CodeWrapper>
  <Label class="text-md mb-2">Edit paragraph</Label>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = "")} />
    {/snippet}
  </Input>
  <div class="mb-4 overflow-auto md:h-[200px]">
    <P contenteditable weight={pWeight} size={pSize} space={pSpace} height={pHeight} align={pAlign} whitespace={pWhitespace} {italic} firstUpper={pFirstupper} justify={pJustify}>{text}</P>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as size}
      <Radio class="my-1" classes={{ label: "w-12" }} name="p_size" bind:group={pSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Weight</Label>
    {#each weights as weight}
      <Radio class="my-1" classes={{ label: "w-20" }} name="p_weight" bind:group={pWeight} value={weight}>{weight}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Space(Tracking)</Label>
    {#each spaces as space}
      <Radio class="my-1" classes={{ label: "w-20" }} name="p_space" bind:group={pSpace} value={space}>{space}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Height(Leading)</Label>
    {#each heights as height}
      <Radio class="my-1" classes={{ label: "w-16" }} name="p_height" bind:group={pHeight} value={height}>{height}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Alignment</Label>
    {#each alignments as align}
      <Radio class="my-1" classes={{ label: "w-20" }} name="p_align" bind:group={pAlign} onchange={() => (pJustify = false)} value={align}>{align}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Whitespace</Label>
    {#each whitespaces as whitespace}
      <Radio class="my-1" classes={{ label: "w-16" }} name="p_whitespace" bind:group={pWhitespace} value={whitespace}>{whitespace}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" onclick={() => (pFirstupper = !pFirstupper)}>{pFirstupper ? "Remove upper" : "First upper"}</Button>
    <Button
      class="w-40"
      color="success"
      onclick={() => {
        pJustify = !pJustify;
        pAlign = "left";
      }}
    >
      {pJustify ? "Remove justify" : "Justify"}
    </Button>
    <Button class="w-40" color="warning" onclick={changeItalic}>{italic ? "Remove italic" : "Italic"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
