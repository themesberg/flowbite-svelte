<script lang="ts">
  import { Checkbox, checkbox, Helper, Label, Radio, Button, uiHelpers, type CheckboxProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Checkbox builder";
  let description = "A quick way to create Checkbox component";
  let title = "Checkbox builder";
  let dir = "builder";

  const colors = Object.keys(checkbox.variants.color);
  let checkboxColor: CheckboxProps["color"] = $state("primary");

  // const checkedStates = [ 'false', 'true', 'indeterminate' ];
  let checkedState = $state(false);
  const changeCheckedState = () => {
    checkedState = !checkedState;
    indeterminateState = false;
  };
  let indeterminateState = $state(false);
  const changeIntermidiateState = () => {
    indeterminateState = !indeterminateState;
    checkedState = false;
  };
  let disabledState = $state(false);
  const changeDisabledState = () => {
    disabledState = !disabledState;
  };
  let helperState = $state(false);
  const changeHelperState = () => {
    helperState = !helperState;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (checkedState) props.push(" checked");
      if (indeterminateState) props.push(" indeterminate");
      if (disabledState) props.push(" disabled");

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Checkbox${propsString}>My Checkbox</Checkbox>
${helperState ? `<Helper class="ps-6">Helper text</Helper>` : ""}`;
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

<H1>Checkbox Builder</H1>
<CodeWrapper>
  <div class="md:h-8">
    <Checkbox checked={checkedState} indeterminate={indeterminateState} color={checkboxColor} disabled={disabledState}>
      {#if disabledState}This is disabled{:else}Default checkbox{/if}
    </Checkbox>
    {#if helperState}
      <Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
    {/if}
  </div>
  <div class="mt-4 mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="my-1" classes={{ label: "w-24" }} name="checkbox_color" bind:group={checkboxColor} onchange={() => (checkedState = true)} value={colorOption}>
        {colorOption}
      </Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" color="primary" onclick={changeCheckedState}>{checkedState ? "Remove checked" : "Add checked"}</Button>
    <Button class="w-48" color="secondary" onclick={changeIntermidiateState}>{indeterminateState ? "Remove indeterminate" : "Add indeterminate"}</Button>
    <Button class="w-48" color="pink" onclick={changeDisabledState}>{disabledState ? "Remove disabled" : "Add disabled"}</Button>
    <Button class="w-48" color="lime" onclick={changeHelperState}>{helperState ? "Remove helper" : "Add helper"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
