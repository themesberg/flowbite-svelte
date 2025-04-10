<script lang="ts">
  import { A, Button, anchor, Label, Radio, Input, CloseButton, uiHelpers, type AnchorProps } from "$lib";
  import type { AnchorColorType } from "../types";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Link builder";
  let description = "A quick way to create Link component";
  let title = "Link builder";
  let dir = "builder";
  // for Props table
  // import CompoAttributesViewer from '../utils/CompoAttributesViewer.svelte';
  let { text = $bindable("Read more") } = $props();
  const dirName = "typography/anchor";

  const colors = Object.keys(anchor.variants.color);
  let anchorColor: AnchorProps["color"] = $state("primary");
  let linkClass = $state("font-medium hover:underline");
  const changeLinkClass = () => {
    linkClass = linkClass === "font-medium hover:underline" ? "underline hover:no-underline italic font-semibold" : "font-medium hover:underline";
  };
  let linkIcon = $state(false);
  const changeIcon = () => {
    linkIcon = !linkIcon;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      let iconSlot;
      props.push(` href="/"`);
      if (anchorColor !== "primary") props.push(` color="${anchorColor}"`);
      if (linkClass) props.push(` class="${linkClass}"`);
      iconSlot = linkIcon ? `\n  <ArrowRightOutline class="ms-2 h-6 w-6" />` : "";
      // if (imgAlignment !== 'left') props.push(` alignment="${imgAlignment}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<A${propsString}>
  ${text} ${iconSlot}
</A>`;
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

<H1>Link Builder</H1>
<CodeWrapper>
  <Label class="text-md mb-2">Edit link</Label>
  <Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-4 pr-12">
    {#snippet right()}
      <CloseButton onclick={() => (text = "")} />
    {/snippet}
  </Input>
  <div class="mb-4 md:h-10">
    <A href="/" color={anchorColor} class={linkClass}>
      {text}
      {#if linkIcon}<ArrowRightOutline class="ms-2 h-6 w-6" />{/if}
    </A>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="my-1 w-24" name="anchor_color" bind:group={anchorColor} color={colorOption as AnchorColorType} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-36" color="blue" onclick={changeLinkClass}>{linkClass === "font-medium hover:underline" ? "Change class" : "Remove class"}</Button>
    <Button class="w-36" color="pink" onclick={changeIcon}>{linkIcon ? "Remove icon" : "Add icon"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
