<script lang="ts">
  import { FloatingLabelInput, Helper, Label, Radio, Toggle, floatingLabelInput, Button, type FloatingLabelInputProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Floating label builder";
  let description = "A quick way to create Floating label component";
  let title = "Floating label builder";
  let dir = "builder";

  const inputStyles = ["standard", "filled", "outlined"];
  let inputStyle: FloatingLabelInputProps["variant"] = $state("standard");
  let floatingSize: FloatingLabelInputProps["size"] = $state("default");
  const validations = Object.keys(floatingLabelInput.variants.validation);
  let floatingValidation = $state<FloatingLabelInputProps["validation"]>("none");
  let helperValidation = $state<"none" | "success" | "error">("none");
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperSlot = $state(false);
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    helperValidation = "none";
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (floatingValidation !== "none") props.push(` validation="${floatingValidation}"`);
      if (disabled) props.push(" disabled");
      if (inputStyle !== "standard") props.push(` variant="${inputStyle}"`);
      if (floatingSize !== "default") props.push(` size="${floatingSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      let helperCode = "";
      if (helperSlot) {
        const helperClass = helperValidation === "success" ? "text-fg-success-strong" : helperValidation === "error" ? "text-fg-danger-strong" : "";
        helperCode = `
<Helper class="pt-2${helperClass ? ` ${helperClass}` : ""}">
  Helper text
</Helper>`;
      }
      return `<FloatingLabelInput${propsString}>
  Floating label
</FloatingLabelInput>${helperCode}`;
    })()
  );

  // for interactive builder
  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };

  // Get helper class based on validation state
  const getHelperClass = (validation: string) => {
    if (validation === "success") return "text-fg-success-strong";
    if (validation === "error") return "text-fg-danger-strong";
    return "";
  };
</script>

<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Floating-label Builder</H1>

<CodeWrapper>
  <div class="mb-4 md:h-20">
    <FloatingLabelInput variant={inputStyle} {disabled} size={floatingSize} validation={floatingValidation} id="floating_filled" type="text">Floating {inputStyle}</FloatingLabelInput>
    {#if helperSlot}
      <Helper class="pt-2 {getHelperClass(helperValidation)}">
        Remember, contributions to this topic should follow our <a href="/">Community Guidelines</a>
        .
      </Helper>
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Style</Label>
    {#each inputStyles as option}
      <Radio class="my-1" classes={{ label: "w-24" }} name="style1" bind:group={inputStyle} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Validation</Label>
    {#each validations as validationOption}
      <Radio class="my-1" classes={{ label: "w-24" }} name="floating_validation" bind:group={floatingValidation} value={validationOption}>{validationOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Button class="mb-4 w-48" onclick={changeHelperSlot}>{helperSlot ? "Remove helper slot" : "Add helper slot"}</Button>
    <Label class="mb-4 w-full font-bold">Helper Validation</Label>
    {#each validations as validationOption}
      <Radio
        class="my-1 {helperSlot ? '' : 'cursor-not-allowed opacity-30'}"
        classes={{ label: "w-24" }}
        disabled={!helperSlot}
        name="helper_validation"
        bind:group={helperValidation}
        value={validationOption}
      >
        {validationOption}
      </Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size</Label>
    <Toggle
      onclick={() => {
        floatingSize = floatingSize === "default" ? "small" : "default";
      }}
    >
      {#snippet offLabel()}
        <span class="me-4">Default</span>
      {/snippet}
      Small
    </Toggle>
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" onclick={changeDisabled}>{disabled ? "Remove disabled" : "Add disabled"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
