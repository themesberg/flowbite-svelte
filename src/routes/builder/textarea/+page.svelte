<script lang="ts">
  import { Label, uiHelpers, Radio, Textarea, Button, Helper, type TextareaProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Textarea builder";
  let description = "A quick way to create Textarea component";
  let title = "Textarea builder";
  let dir = "builder";

  // props
  let value = $state("");
  const changeValue = () => {
    value = value !== "" ? "" : "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  };
  let disabled: TextareaProps["disabled"] = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let required: TextareaProps["required"] = $state(false);
  const changeRequired = () => {
    required = !required;
  };
  let placeholder: TextareaProps["placeholder"] = $state("");
  const changePlaceholder = () => {
    placeholder = placeholder !== "" ? "" : "Your message";
    value = placeholder !== "" ? "" : "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  };
  let rows: TextareaProps["rows"] = $state();
  const changeRows = () => {
    rows = rows !== undefined ? undefined : 5;
  };
  let maxlength: TextareaProps["maxlength"] = $state();
  const changeMaxlength = () => {
    maxlength = maxlength !== undefined ? undefined : 20;
    value = maxlength === 20 ? "" : "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  };
  let textAreaClass: TextareaProps["class"] = $state("");
  const changeClass = () => {
    textAreaClass = textAreaClass === "w-full" ? "w-48" : "w-full";
  };
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (required) props.push(`required`);
      if (placeholder) props.push(`placeholder="${placeholder}"`);
      if (rows !== undefined) props.push(`rows="${rows}"`);
      if (maxlength) props.push(`maxlength="${maxlength}"`);
      if (textAreaClass) props.push(`class="${textAreaClass}"`);
      if (disabled) props.push(`disabled`);
      if (value) props.push(`value="${value}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Textarea${propsString} />`;
    })()
  );
  // end of code generator

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

<H1>Textarea Builder</H1>

<CodeWrapper>
  <div class="mb-4 h-64">
    <Label for="textarea-id" class="mb-2">
      Your message {#if required}
        <Helper color="red" class="inline">* Required</Helper>
      {/if}
    </Label>
    <Textarea id="textarea-id" name="message" {value} {required} {rows} {maxlength} {placeholder} class={textAreaClass} {disabled} />
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" color="blue" onclick={changeRequired}>{required ? "Remove required" : "Add required"}</Button>
    <Button class="w-48" color="red" onclick={changePlaceholder}>{placeholder ? "Remove placeholder" : "Add placeholder"}</Button>
    <Button class="w-48" color="yellow" onclick={changeRows}>{rows !== undefined ? "Remove rows" : "Add rows"}</Button>
    <Button class="w-48" color="green" onclick={changeMaxlength}>{maxlength ? "Remove maxlength" : "Add maxlength"}</Button>
    <Button class="w-48" color="pink" onclick={changeClass}>{textAreaClass !== "" ? "Remove class" : "Add class"}</Button>
    <Button class="w-48" color="purple" onclick={changeDisabled}>{disabled ? "Remove disabled" : "Add disabled"}</Button>
    <Button class="w-48" color="orange" onclick={changeValue}>{value ? "Remove value" : "Add value"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
