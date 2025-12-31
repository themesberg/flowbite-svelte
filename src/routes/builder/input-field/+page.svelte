<script lang="ts">
  import { Input, input, Radio, Label, Helper, Button, CloseButton, uiHelpers, type InputProps, type HelperProps, type LabelProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Input field builder";
  let description = "A quick way to create Input field component";
  let title = "Input field builder";
  let dir = "builder";

  let { text = $bindable("") } = $props();
  const sizes = ["sm", "md", "lg"];
  let inputSize: InputProps["size"] = $state("md");

  const colors = Object.keys(input.variants.color);
  let inputColor: InputProps["color"] = $state("default");
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperColor: InputProps["color"] = $state("default");
  let helperSlot = $state(false);
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    helperColor = "default";
  };
  let closeBtnStatus = $state(false);
  const changeCloseBtnStatus = () => {
    closeBtnStatus = !closeBtnStatus;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (inputColor !== "default") props.push(` color="${inputColor}"`);
      if (disabled) props.push(" disabled");
      if (inputSize !== "md") props.push(` size="${inputSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Input${propsString}${
        closeBtnStatus
          ? `>\n{#snippet right()}
  <CloseButton onclick={() => (text = '')} />
{/snippet}`
          : "/>"
      }
${closeBtnStatus ? `</Input>` : ""}${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ""}`;
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

<H1>Input Builder</H1>

<CodeWrapper>
  <div class="mb-4 md:h-24">
    <Label for="color-example" color={inputColor as LabelProps["color"]} class="mb-2 block">Your name</Label>
    <Input id="color-example" bind:value={text} {disabled} color={inputColor} size={inputSize} placeholder={disabled ? "Disabled " : "Placeholder"}>
      {#snippet right()}
        {#if closeBtnStatus}
          <CloseButton onclick={() => (text = "")} />
        {/if}
      {/snippet}
    </Input>
    {#if helperSlot}
      <Helper class="mt-2" color={helperColor as HelperProps["color"]}>
        <span class="font-medium">Well done!</span>
        Some helper message.
      </Helper>
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="my-1" classes={{ label: "w-20" }} name="input_color" bind:group={inputColor} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio class="my-1" classes={{ label: "w-20" }} name="input_size" bind:group={inputSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Button class="mb-4 w-40" color="success" onclick={changeHelperSlot}>{helperSlot ? "Remove helper" : "Add helper"}</Button>
    <Label class="mb-4 w-full font-bold">Helper Color</Label>
    {#each colors as colorOption}
      <Radio
        class="my-1 {helperSlot ? '' : 'cursor-not-allowed opacity-30'}"
        classes={{ label: "w-20" }}
        disabled={helperSlot ? false : true}
        name="helper_color"
        bind:group={helperColor}
        value={colorOption}
      >
        {colorOption}
      </Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-44" onclick={changeDisabled}>{disabled ? "Remove disabled" : "Add disabled"}</Button>
    <Button class="w-44" color="warning" onclick={changeCloseBtnStatus}>{closeBtnStatus ? "Remove close button" : "Add close button"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
