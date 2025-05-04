<script lang="ts">
  import { Table, table, uiHelpers, Label, Radio, Button, type TableProps } from "$lib";
  import type { RadioColorType } from "../types";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Table builder";
  let description = "A quick way to create Table component";
  let title = "Table builder";
  let dir = "builder";

  let color: TableProps["color"] = $state("default");
  const colors = Object.keys(table.variants.color);
  let striped = $state(false);
  const changeStriped = () => {
    striped = !striped;
  };
  let hoverable = $state(false);
  const changeHoverable = () => {
    hoverable = !hoverable;
  };
  // noborder, shadow,
  let noborder = $state(false);
  const changeNoborder = () => {
    noborder = !noborder;
  };
  let shadow = $state(false);
  const changeShadow = () => {
    shadow = !shadow;
  };

  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (color !== "default") props.push(` color="${color}"`);
      if (striped) props.push(" striped");
      if (hoverable) props.push(" hoverable");
      if (!noborder) props.push(" noborder");
      if (shadow) props.push(" shadow");

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Table {tableItems}${propsString} />`;
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

<H1>Table Builder</H1>
<CodeWrapper>
  <Table items={tableItems} {hoverable} {color} {striped} border={noborder} {shadow} />
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="my-1 w-24" name="table_color" bind:group={color} color={colorOption as RadioColorType} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex gap-4">
    <Button class="w-40" onclick={changeStriped}>{striped ? "Unstriped" : "Striped"}</Button>
    <Button class="w-40" color="secondary" onclick={changeHoverable}>{hoverable ? "Unhoverable" : "Hoverable"}</Button>
    <Button class="w-40" color="indigo" onclick={changeNoborder}>{noborder ? "Borderless" : "Border"}</Button>
    <Button class="w-40" color="rose" onclick={changeShadow}>{shadow ? "No Shadow" : "Shadow"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
