<script lang="ts">
  import { Banner, banner, Button, Skeleton, ImagePlaceholder, Label, Radio, type BannerProps, uiHelpers } from "$lib";
  import { BullhornOutline } from "flowbite-svelte-icons";
  import { blur, fly, slide, scale } from "svelte/transition";
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from "svelte/transition";
  import { linear } from "svelte/easing";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Banner builder";
  let description = "A quick way to create Banner component";
  let title = "Banner builder";
  let dir = "builder";

  // interactive example
  const colors = Object.keys(banner.variants.color);
  let color: BannerProps["color"] = $state("gray");

  let bannerClass: BannerProps["class"] = $state("absolute");

  let bannerStatus = $state(true);
  const changeStatus = () => {
    bannerStatus = true;
  };

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };

  const transitions: TransitionOption[] = [
    { name: "Fly", transition: fly, params: { duration: 500, easing: linear, x: 150 } },
    { name: "Blur", transition: blur, params: { duration: 500, easing: linear } },
    { name: "Slide", transition: slide, params: { duration: 500, easing: linear, x: -150 } },
    { name: "Scale", transition: scale, params: { duration: 500, easing: linear } }
  ];

  let selectedTransition = $state("Fly");
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      // position, bannerType color, class
      let props = [];
      if (color !== "gray") props.push(` color="${color}"`);
      if (bannerClass) props.push(` class="${bannerClass}"`);
      if (!bannerStatus) props.push(" bannerStatus={false}");
      if (currentTransition !== transitions[0]) {
        props.push(` transition={${currentTransition.name.toLowerCase()}}`);

        // Generate params string without quotes and handle functions
        const paramsString = Object.entries(currentTransition.params)
          .map(([key, value]) => {
            if (key === "easing") {
              // For easing, use the name of the easing function
              return `${key}:${value.name || "linear"}`;
            }
            // For other values, just use the literal value
            return `${key}:${value}`;
          })
          .join(",");
        props.push(` transitionParams={{${paramsString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<div class="relative h-40">
  <Banner${propsString}>
    My Banner
  </Banner>
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
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.

  // end of DynamicCodeBlock setup
  $effect(() => {
    builderExpand = builder.isOpen;
  });
</script>

<MetaTag {breadcrumb_title} {description} {title} {dir} />

<H1>Banner Builder</H1>

<CodeWrapper class="relative" innerClass="p-0">
  <div class="mb-4 h-[670px] md:h-[480px]">
    <div class="p-6">
      <Skeleton class="py-4" />
      <ImagePlaceholder class="py-4" />
    </div>
    <Banner id="sample-banner" {color} bind:open={bannerStatus} class={bannerClass} transition={currentTransition.transition} transitionParams={currentTransition.params}>
      <p class="text-body flex items-center text-sm font-normal">
        <span class="bg-neutral-quaternary-medium me-3 inline-flex rounded-full p-1">
          <BullhornOutline class="text-body h-3 w-3" />
          <span class="sr-only">Light bulb</span>
        </span>
        <span>
          New brand identity has been launched for the <a href="https://flowbite.com" class="text-fg-brand decoration-fg-brand inline font-medium underline">Flowbite Library</a>
        </span>
      </p>
    </Banner>
  </div>
  <div class="p-6">
    <div class="mb-4 h-12">
      <Button class="w-48" disabled={bannerStatus ? true : false} onclick={changeStatus}>Open banner</Button>
    </div>
    <div class="mb-4 flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each colors as colorOption}
        <Radio classes={{ label: "w-24 my-1" }} name="color" bind:group={color} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="mb-4 flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Transition</Label>
      {#each transitions as transition}
        <Radio classes={{ label: "w-16 my-1" }} name="interactive_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
      {/each}
    </div>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
