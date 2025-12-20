<script lang="ts">
  import { Indicator, indicator, Button, Label, Radio, uiHelpers, type IndicatorProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Indicator builder";
  let description = "A quick way to create Indicator component";
  let title = "Indicator builder";
  let dir = "builder";

  // color, size, rounded, border, placement and offset
  const sizes = Object.keys(indicator.variants.size) as IndicatorProps["size"][];
  const colors = Object.keys(indicator.variants.color) as IndicatorProps["color"][];
  const placements = Object.keys(indicator.variants.placement) as IndicatorProps["placement"][];
  let color: IndicatorProps["color"] = $state("brand");
  let size: IndicatorProps["size"] = $state("md");
  let border: IndicatorProps["border"] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let cornerStyle: IndicatorProps["cornerStyle"] = $state("circular");
  const changeCornerStyle = () => {
    cornerStyle = cornerStyle === "circular" ? "rounded" : "circular";
  };
  let placement: IndicatorProps["placement"] = $state("default");

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // {color} {size} {border} {placement} {cornerStyle}
      // color = 'primary', cornerStyle = 'circular', size = 'md', border = false, placement, offset = true,
      // if (color) props.push(` color="${color}"`);
      if (color !== "brand") props.push(` color="${color}"`);
      if (size !== "md") props.push(` size="${size}"`);
      if (border) props.push(" border");
      if (placement !== "default") props.push(` placement="${placement}"`);
      if (cornerStyle !== "circular") props.push(` cornerStyle="${cornerStyle}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<div class="border relative h-56 w-56 rounded-lg border-gray-300 m-8">
  <Indicator${propsString} />
</div>`;
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

<H1>Indicator Builder</H1>
<CodeWrapper>
  <div class="border relative h-56 w-56 rounded-lg border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
    <Indicator {color} {size} {border} {placement} {cornerStyle} />
  </div>
  <div class="mt-8 space-y-4">
    <div class="flex flex-wrap space-x-2">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each colors as colorOption}
        <Radio classes={{ label: "w-24 my-1" }} name="color" bind:group={color} color={colorOption as IndicatorProps["color"]} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Size</Label>
      {#each sizes as sizeOption}
        <Radio class="my-1" classes={{ label: "w-24" }} name="size" bind:group={size} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Placement</Label>
      {#each placements as positionOption}
        <Radio class="my-1" classes={{ label: "w-32" }} name="placement" bind:group={placement} value={positionOption}>{positionOption}</Radio>
      {/each}
    </div>
    <Button onclick={changeBorder}>{border ? "Remove border" : "Add border"}</Button>
    <Button onclick={changeCornerStyle}>{cornerStyle === "circular" ? "Rounded" : "Circular"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
