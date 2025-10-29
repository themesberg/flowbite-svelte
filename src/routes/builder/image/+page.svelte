<script lang="ts">
  import { Img, img, Badge, Radio, Label, Button, uiHelpers, type ImgProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Image builder";
  let description = "A quick way to create Image component";
  let title = "Image builder";
  let dir = "builder";

  const sizes = Object.keys(img.variants.size);
  let imgSize: ImgProps["size"] = $state(undefined);
  // const alignments = Object.keys(img.variants.alignment);
  // let imgAlignment: ImgProps['alignment'] = $state('left');
  const effects = Object.keys(img.variants.effect);
  let imgEffect: ImgProps["effect"] = $state(undefined);

  // const shadows = Object.keys(img.variants.shadow);
  // let imgShadow: ImgProps['shadow'] = $state('none');
  // const roundeds = Object.keys(img.variants.rounded);
  // let imgRounded: ImgProps['rounded'] = $state('none');
  let imgClass: string = $state("mx-auto");
  let imgCaption = $state(false);
  const changeImgCaption = () => {
    imgCaption = !imgCaption;
  };
  let imgHref = $state("");
  const changeImgHrf = () => {
    imgHref = imgHref === "" ? "/" : "";
  };
  $effect(() => {
    if (imgSize !== undefined) {
      imgEffect = undefined;
    }
  });

  // code generator
  let generatedCode = $derived(
    (() => {
      // size, alignment, effect, shadow, rounded, caption, imgClass, figClass, captionClass,
      let props = [];
      if (imgSize !== undefined) props.push(` size="${imgSize}"`);
      // if (imgAlignment !== 'left') props.push(` alignment="${imgAlignment}"`);
      if (imgEffect !== undefined) props.push(` effect="${imgEffect}"`);
      // if (imgShadow !== 'none') props.push(` shadow="${imgShadow}"`);
      // if (imgRounded !== 'none') props.push(` rounded="${imgRounded}"`);
      if (imgEffect !== undefined && imgCaption) props.push(` figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"`);
      if (imgEffect !== undefined && imgCaption) props.push(` captionClass="absolute bottom-6 px-4 text-lg text-white"`);
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

  $effect(() => {
    builderExpand = builder.isOpen;
  });
</script>

<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Image Builder</H1>
<CodeWrapper>
  <div class="relative mb-4 overflow-y-auto md:h-[700px]">
    <Img
      src={imgEffect !== undefined ? "/images/examples/content-gallery-3.png" : imgClass.includes("full") ? "/images/examples/image-4@2x.jpg" : "/images/examples/image-1@2x.jpg"}
      size={imgSize}
      class={imgClass}
      alt="sample 1"
      effect={imgEffect}
      figClass={imgEffect !== undefined && imgCaption ? "relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" : ""}
      captionClass={imgEffect !== undefined && imgCaption ? "absolute bottom-6 px-4 text-lg text-white mx-auto" : ""}
      caption={imgEffect !== undefined ? "Do you want to get notified when a new component is added to Flowbite?" : imgCaption ? "Image caption" : ""}
      href={imgHref}
    />
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="img_size" bind:group={imgSize} value={option}>{option}</Radio>
    {/each}
  </div>

  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Effect</Label>
    {#each effects as effect}
      <Radio class="my-1" classes={{ label: "w-24" }} name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
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
