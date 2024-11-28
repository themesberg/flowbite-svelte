<script lang="ts">
  import { type Component } from "svelte";
  import { Img, img, Badge, Radio, Label, Button, uiHelpers, type ImgProps } from "$lib";
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import DynamicCodeBlockHighlight from "../../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from "../../utils/helpers";
  // for Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "typography/img";

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;

  const exampleArr = [
    // { name: "Import ex", component: ExampleComponents.ImportEx },
    { name: "Enhanced", component: ExampleComponents.Enhanced },
    { name: "Retina ready", component: ExampleComponents.RetinaReady }
  ];
  let selectedExample: string | number = $state(exampleArr[0].name);
  let svelteCode = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  const sizes = Object.keys(img.variants.size);
  let imgSize: ImgProps["size"] = $state("none");
  const alignments = Object.keys(img.variants.alignment);
  let imgAlignment: ImgProps["alignment"] = $state("left");
  const effects = Object.keys(img.variants.effect);
  let imgEffect: ImgProps["effect"] = $state("none");
  const shadows = Object.keys(img.variants.shadow);
  let imgShadow: ImgProps["shadow"] = $state("none");
  const roundeds = Object.keys(img.variants.rounded);
  let imgRounded: ImgProps["rounded"] = $state("none");
  let imgCaption = $state(false);
  const changeImgCaption = () => {
    imgCaption = !imgCaption;
  };
  let imgHref = $state("");
  const changeImgHrf = () => {
    imgHref = imgHref === "" ? "/" : "";
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      // size, alignment, effect, shadow, rounded, caption, imgClass, figClass, captionClass,
      let props = [];
      if (imgSize !== "none") props.push(` size="${imgSize}"`);
      if (imgAlignment !== "left") props.push(` alignment="${imgAlignment}"`);
      if (imgEffect !== "none") props.push(` effect="${imgEffect}"`);
      if (imgShadow !== "none") props.push(` shadow="${imgShadow}"`);
      if (imgRounded !== "none") props.push(` rounded="${imgRounded}"`);
      if (imgEffect !== "none" && imgCaption) props.push(` figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"`);
      if (imgEffect !== "none" && imgCaption) props.push(` captionClass="absolute bottom-6 px-4 text-lg text-white"`);
      if (imgCaption) props.push(` caption="Image caption"`);
      if (imgHref) props.push(` href="/"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Img${propsString} src='/images/examples/content-gallery-1.png'/>`;
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
  let showExpandButton = $derived(isSvelteOverflow(svelteCode, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>Image</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Image Builder</H2>
<CodeWrapper>
  <div class="mb-4 overflow-y-auto md:h-[470px]">
    <Img src={imgEffect !== "none" ? "/images/examples/content-gallery-3.png" : imgRounded === "full" ? "/images/examples/image-4@2x.jpg" : "/images/examples/image-1@2x.jpg"} size={imgSize} shadow={imgShadow} alignment={imgAlignment} rounded={imgRounded} alt="sample 1" effect={imgEffect} figClass={imgEffect !== "none" && imgCaption ? "relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" : ""} captionClass={imgEffect !== "none" && imgCaption ? "absolute bottom-6 px-4 text-lg text-white" : ""} caption={imgEffect !== "none" ? "Do you want to get notified when a new component is added to Flowbite?" : imgCaption ? "Image caption" : ""} href={imgHref} />
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio labelClass="w-16 my-1" name="img_size" bind:group={imgSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Alignment</Label>
    {#each alignments as alignment}
      <Radio labelClass="w-20 my-1" name="img_alignment" bind:group={imgAlignment} value={alignment}>{alignment}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Shadow</Label>
    {#each shadows as shadow}
      <Radio labelClass="w-20 my-1" name="img_shadow" bind:group={imgShadow} value={shadow}>{shadow}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Rounded</Label>
    {#each roundeds as rounded}
      <Radio labelClass="w-20 my-1" name="img_rounded" bind:group={imgRounded} value={rounded}>{rounded}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Effect</Label>
    {#each effects as effect}
      <Radio labelClass="w-24 my-1" name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" color="blue" onclick={changeImgCaption}>{imgCaption ? "Remove caption" : "Add caption"}</Button>
    <Button class="w-48" color="lime" onclick={changeImgHrf}>{imgHref === "" ? "Add href" : "Remove href"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<Badge large class="my-4">Warning: the caption is using @html.</Badge>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-12 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-40 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${svelteCode}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
