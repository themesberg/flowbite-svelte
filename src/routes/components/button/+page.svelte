<script lang="ts">
  import { Button, GradientButton, gradientButton, button, Radio, Label, uiHelpers, type ButtonProps, type GradientButtonProps, type RadioColorType } from "$lib";
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import DynamicCodeBlockHighlight from "../../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  import { isGeneratedCodeOverflow } from "../../utils/helpers";
  // for Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "buttons";
  import { capitalizeFirstLetter } from "../../utils/helpers";

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;

  // color, size, group, outline, shadow, disabled, pill
  const btnColors = Object.keys(button.variants.color);
  let btnColor = $state("primary");
  let btnClass: GradientButtonProps["class"] = $state("");
  const changeBtnClass = () => {
    btnClass = btnClass === "" ? "w-48" : "";
  };

  let btnLink = $state("");
  const changeBtnLink = () => {
    btnLink = btnLink === "" ? "/" : "";
  };

  let btnOutline = $state(false);
  const changeBtnOutline = () => {
    btnOutline = !btnOutline;
  };
  let btnShadow = $state(false);
  const changeBtnShadow = () => {
    btnShadow = !btnShadow;
  };
  let btnPill = $state(false);
  const changeBtnPill = () => {
    btnPill = !btnPill;
  };
  let btnDisabled = $state(false);
  const changeBtnDisabled = () => {
    btnDisabled = !btnDisabled;
  };
  const btnSizes = Object.keys(button.variants.size);
  let btnSize = $state("md");

  const gradientColors = Object.keys(gradientButton.variants.color) as GradientButtonProps["color"][];
  let gradientColor = $state("blue");

  const gradientSizes = Object.keys(button.variants.size);
  let gradientSize = $state("md");

  let gradientClass: GradientButtonProps["class"] = $state("");
  const changeGradientClass = () => {
    gradientClass = gradientClass === "" ? "w-48" : "";
  };
  let gradientOutline = $state(false);
  const changeGradientOutline = () => {
    gradientOutline = !gradientOutline;
  };
  let gradientShadow = $state(false);
  const changeGradientShadow = () => {
    gradientShadow = !gradientShadow;
  };
  let graidentPill = $state(false);
  const changeGradientPill = () => {
    graidentPill = !graidentPill;
  };
  let gradientDisabled = $state(false);
  const changeGradientDisabled = () => {
    gradientDisabled = !gradientDisabled;
  };

  let gradientLink = $state("");
  const changeGradientLink = () => {
    gradientLink = gradientLink === "" ? "/" : "";
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (btnColor !== "primary") props.push(` color="${btnColor}"`);
      if (btnShadow) props.push(" shadow");
      if (btnOutline) props.push(" outline");
      if (btnPill) props.push(" pill");
      if (btnClass) props.push(` class="${btnClass}"`);
      if (btnLink) props.push(` href="${btnLink}"`);
      if (btnDisabled) props.push(" disabled");
      if (btnSize !== "md") props.push(` size="${btnSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Button${propsString}>My Button</Button>`;
    })()
  );

  let gradientGeneratedCode = $derived(
    (() => {
      let props = [];
      if (gradientColor !== "blue") props.push(` color="${gradientColor}"`);
      if (gradientShadow) props.push(" shadow");
      if (gradientOutline) props.push(" outline");
      if (graidentPill) props.push(" pill");
      if (gradientClass) props.push(` class="${gradientClass}"`);
      if (gradientLink) props.push(` href="${gradientLink}"`);
      if (gradientDisabled) props.push(" disabled");
      if (gradientSize !== "md") props.push(` size="${gradientSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<GradientButton${propsString}>My Gradient Button</GradientButton>`;
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

<H1>Buttons</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Button Bilder</H2>

<CodeWrapper innerClass="flex flex-wrap gap-2">
  <div class="h-16">
    <Button color={btnColor as ButtonProps["color"]} class={btnClass} outline={btnOutline} shadow={btnShadow} pill={btnPill} disabled={btnDisabled} size={btnSize as ButtonProps["size"]} href={btnLink ? btnLink : ""}>Button</Button>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each btnColors as colorOption}
      <Radio labelClass="w-24 my-1" name="btn_color" bind:group={btnColor as ButtonProps["color"]} color={colorOption as RadioColorType} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each btnSizes as sizeOption}
      <Radio labelClass="w-24 my-1" name="btn_size" bind:group={btnSize as ButtonProps["size"]} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={changeBtnOutline}>{btnOutline === false ? "Add outline" : "Remove outline"}</Button>
    <Button class="w-40" color="green" onclick={changeBtnShadow}>{btnShadow === false ? "Add shadow" : "Remove shadow"}</Button>
    <Button class="w-40" color="yellow" onclick={changeBtnPill}>{btnPill === false ? "Add pill" : "Remove pill"}</Button>
    <Button class="w-40" color="red" onclick={changeBtnDisabled}>{btnDisabled === false ? "Add disabled" : "Remove disabled"}</Button>
    <Button class="w-40" onclick={changeBtnClass}>{btnClass === "" ? "Add class" : "Remove class"}</Button>
    <Button class="w-40" color="sky" onclick={changeBtnLink}>{btnLink === "" ? "Add link" : "Remove link"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Interactive Gradient Button Builder</H2>

<CodeWrapper>
  <div class="h-16">
    <GradientButton outline={gradientOutline} shadow={gradientShadow} pill={graidentPill} class={gradientClass} disabled={gradientDisabled} color={gradientColor as GradientButtonProps["color"]} size={gradientSize as GradientButtonProps["size"]}>{capitalizeFirstLetter(gradientColor)}</GradientButton>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each gradientColors as colorOption}
      <Radio labelClass="w-32 my-1" name="gradient_color" bind:group={gradientColor} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each gradientSizes as sizeOption}
      <Radio labelClass="w-24 my-1" name="gradient_size" bind:group={gradientSize as GradientButtonProps["size"]} value={sizeOption}>{sizeOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={changeGradientOutline}>{gradientOutline === false ? "Add outline" : "Remove outline"}</Button>
    <Button class="w-40" color="green" onclick={changeGradientShadow}>{gradientShadow === false ? "Add shadow" : "Remove shadow"}</Button>
    <Button class="w-40" color="yellow" onclick={changeGradientPill}>{graidentPill === false ? "Add pill" : "Remove pill"}</Button>
    <Button class="w-40" color="red" onclick={changeGradientDisabled}>{gradientDisabled === false ? "Add disabled" : "Remove disabled"}</Button>
    <Button class="w-40" onclick={changeGradientClass}>{gradientClass === "" ? "Add class" : "Remove class"}</Button>
    <Button class="w-40" color="sky" onclick={changeGradientLink}>{btnLink === "" ? "Add link" : "Remove link"}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={gradientGeneratedCode} />
  {/snippet}
</CodeWrapper>

<H2>Button with icon</H2>
<CodeWrapper>
  <ExampleComponents.ButtonWithIcon />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ButtonWithIcon.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button with label</H2>
<CodeWrapper>
  <ExampleComponents.ButtonWithLabel />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ButtonWithLabel.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper>
  <ExampleComponents.Events />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Events.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon buttons</H2>
<CodeWrapper>
  <ExampleComponents.IconButtons />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/IconButtons.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Loader</H2>
<CodeWrapper>
  <ExampleComponents.Loader />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Loader.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
