<script lang="ts">
  import { Button, Tooltip, tooltip, Radio, Label, uiHelpers, type RadioColorType, type TooltipProps } from "$lib";
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import DynamicCodeBlockHighlight from "../../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  import { isGeneratedCodeOverflow } from "../../utils/helpers";
  // Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "tooltip";
  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;

  // for interactive code builder
  const positions = Object.keys(tooltip.variants.position);
  let position: TooltipProps["position"] = $state(positions[0] as TooltipProps["position"]);
  const colors = Object.keys(tooltip.variants.color) as TooltipProps["color"][];
  let color: TooltipProps["color"] = $state("default");
  let tooltipClass: TooltipProps["class"] = $state("");
  const changeClass = () => {
    tooltipClass = tooltipClass === "" ? "p-4" : "";
  };
  let arrow = $state(true);
  const changeArrow = () => {
    arrow = !arrow;
  };
  let offset = $state(6);

  function increaseOffset() {
    offset += 2;
  }

  function decreaseOffset() {
    if (offset > 0) {
      offset -= 2;
    }
  }

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (arrow !== true) props.push(`arrow="${arrow}"`);
      if (color) props.push(`color="${color}"`);
      if (position !== "top") props.push(`position="${position}"`);
      if (offset) props.push(`offset={${offset}}`);
      if (tooltipClass !== "") props.push(`class="${tooltipClass}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Button id="type-1" class="m-8">Tooltip trigger</Button>\n<Tooltip${propsString}  triggeredBy="#type-1">Tooltip content</Tooltip>`;
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

<H1>Tooltip</H1>
<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Tooltip Builder</H2>

<CodeWrapper>
  <div class="my-4 flex justify-center">
    <Button id="type-1" class="m-8">Tooltip trigger</Button>
    <Tooltip triggeredBy="#type-1" {color} {position} {arrow} {offset} class={tooltipClass}>Tooltip content</Tooltip>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as RadioColorType} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Position</Label>
    {#each positions as option}
      <Radio labelClass="w-20 my-1" name="interactive_toast_position" bind:group={position} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mb-4">
    <Button onclick={decreaseOffset} class="rounded-sm border p-1">-</Button>
    <span class="mx-2">Offset: {offset}px</span>
    <Button onclick={increaseOffset} class="rounded-sm border p-1">+</Button>
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-36" onclick={changeClass}>{tooltipClass ? "Remove class" : "Add class"}</Button>
    <Button class="w-36" color="secondary" onclick={changeArrow}>{arrow ? "Remove arrow" : "Add arrow"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Show on click</H2>
<CodeWrapper>
  <ExampleComponents.ShowOnClick />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ShowOnClick.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>External control</H2>
<CodeWrapper>
  <ExampleComponents.ExternalControl />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ExternalControl.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>External reference</H2>
<CodeWrapper>
  <ExampleComponents.ExternalReference />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ExternalReference.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Inline</H2>
<CodeWrapper>
  <ExampleComponents.Inline />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Inline.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
