<script lang="ts">
  import { Toggle, toggle, Radio, Label, Button, uiHelpers, type ToggleProps } from "$lib";
  import type { ToggleColor } from "../types";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Toggle builder";
  let description = "A quick way to create Toggle component";
  let title = "Toggle builder";
  let dir = "builder";

  const colors = Object.keys(toggle.variants.color) as ToggleProps["color"][];
  let toggleColor: ToggleProps["color"] = $state("primary");
  const sizes = Object.keys(toggle.variants.size) as ToggleProps["size"][];
  let toggleSize: ToggleProps["size"] = $state("default");
  let checked: boolean = $state(false);
  const changeChecked = () => {
    checked = !checked;
  };
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let leftSlot = $state(false);
  const changeLeftLabel = () => {
    leftSlot = !leftSlot;
    checked = false;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // let fileSlot = '';
      if (toggleSize !== "default") props.push(` size="${toggleSize}"`);
      if (toggleColor !== "primary") props.push(` color="${toggleColor}"`);
      if (checked) props.push(" checked");
      if (disabled) props.push(" disabled");
      if (leftSlot) props.push(" bind:checked");

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Toggle${propsString}>${leftSlot ? `\n {#snippet leftLabel()}\n  <div class="me-4 {!checked ? 'text-red-600 font-semibold' : ''}">Off</div>\n {/snippet}\n <div class={checked ? 'text-green-600 font-semibold' : ''}>On</div>\n` : "Toggle me"}</Toggle>`;
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

<H1>Toggle Builder</H1>
<CodeWrapper>
  <div class="h-12">
    <Toggle color={toggleColor} size={toggleSize} bind:checked {disabled}>
      {#snippet offLabel()}
        {#if leftSlot}
          <div class="me-4 {!checked ? 'font-semibold text-red-600' : ''}">Off</div>
        {/if}
      {/snippet}
      {#if !leftSlot}
        {#if disabled}Disabled
        {/if}
        {#if checked}Checked
        {/if} Toggle
      {:else}
        <div class={checked ? "font-semibold text-green-600" : ""}>On</div>
      {/if}
    </Toggle>
  </div>
  <div class="mb-4 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="m-2 w-24" name="toggle_color" bind:group={toggleColor} color={colorOption as ToggleColor} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as size}
      <Radio class="m-2 w-32" name="toggle_size" bind:group={toggleSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" onclick={changeChecked}>{checked ? "Remove checked" : "Add checked"}</Button>
    <Button class="w-40" color="secondary" onclick={changeDisabled}>{disabled ? "Remove disabled" : "Add disabled"}</Button>
    <Button class="w-40" color="emerald" onclick={changeLeftLabel}>{leftSlot ? "Remove left slot" : "Add left slot"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
