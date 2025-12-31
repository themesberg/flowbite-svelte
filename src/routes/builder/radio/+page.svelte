<script lang="ts">
  import { Radio, radio, Helper, Label, Button, uiHelpers, type RadioProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Radio builder";
  let description = "A quick way to create Radio component";
  let title = "Radio builder";
  let dir = "builder";

  // end of dynamic svelte component
  type GroupType = string;
  const colors = Object.keys(radio.variants.color) as RadioProps<GroupType>["color"][];
  let radioColor: RadioProps<GroupType>["color"] = $state("brand");
  // hack for demo purposes
  let demoRadioColor: RadioProps<GroupType>["color"] = $state("brand");
  let isChecked = $state(true);
  const handleOnchange = (colorOption: RadioProps<GroupType>["color"]) => {
    demoRadioColor = colorOption;
    isChecked = false;
    isChecked = true;
  };
  // end of hack

  const inputClasses = ["", "w-6 h-6"];
  let inputClass = $state(inputClasses[0]);
  const changeInputClass = () => {
    inputClass = inputClass === inputClasses[0] ? inputClasses[1] : inputClasses[0];
  };
  const labelClasses = ["w-24 m-2", ""];
  let labelClass = $state(labelClasses[0]);
  const changeLabelClass = () => {
    labelClass = labelClass === labelClasses[0] ? labelClasses[1] : labelClasses[0];
  };
  let disabled = $state(false);
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperColor: RadioProps<GroupType>["color"] = $state("brand");
  let helperSlot = $state(false);
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    // helperColor = 'gray';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (radioColor !== "brand") props.push(`color="${radioColor}"`);
      if (labelClass !== "") props.push(`classes={{label:"${labelClass}"}}`);
      if (inputClass !== "") props.push(`class="${inputClass}"`);
      if (disabled) props.push("disabled");
      // if (indeterminateState) props.push(' indeterminate');
      // if (disabledState) props.push(' disabled');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Radio
  name="my_radio"${propsString}>Item 1</Radio>
${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ""}`;
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

<H1>Radio Builder</H1>
<CodeWrapper>
  <div class="mb-4">
    <Radio class={inputClass} classes={{ label: labelClass }} name="radio_interactive" {disabled} color={demoRadioColor} checked={isChecked}>Radio</Radio>
    {#if helperSlot}
      <Helper id="helper-radio-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
    {/if}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="my-1" classes={{ label: "w-24" }} name="radio_color" bind:group={radioColor} onchange={() => handleOnchange(colorOption)} value={colorOption}>
        {colorOption}
      </Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Button class="mb-4 w-40" onclick={changeHelperSlot}>{helperSlot ? "Remove helper" : "Add helper"}</Button>
    <Label class="mb-4 w-full font-bold">Helper Color</Label>
    {#each colors as colorOption}
      <Radio
        class="my-1{helperSlot ? '' : 'cursor-not-allowed opacity-30'}"
        classes={{ label: "w-24" }}
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
    <Button class="w-32" onclick={changeInputClass}>{inputClass === inputClasses[0] ? "class=w-6 h-6" : "Default size"}</Button>
    <Button class="w-32" color="success" onclick={changeLabelClass}>{labelClass === labelClasses[0] ? "Default label" : "label:w-24 m-2"}</Button>
    <Button class="w-32" color="warning" onclick={changeDisabled}>{disabled ? "Enabled" : "Disabled"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
