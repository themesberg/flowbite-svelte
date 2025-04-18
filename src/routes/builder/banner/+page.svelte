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
  let color: BannerProps["color"] = $state("primary");
  $inspect("color", color);
  let bannerClass: BannerProps["class"] = $state("absolute");
  const changeClass = () => {
    bannerClass = bannerClass === "" ? "mt-4" : "";
  };
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

  type BuilderTransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    codeImportName: string;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    easingName: string;
  };

  const transitions: BuilderTransitionOption[] = [
    {
      name: "Fly",
      transition: fly,
      codeImportName: "fly",
      params: { duration: 500, easing: linear, x: 150 },
      easingName: "linear"
    },
    {
      name: "Blur",
      transition: blur,
      codeImportName: "blur",
      params: { duration: 500, easing: linear },
      easingName: "linear"
    },
    {
      name: "Slide",
      transition: slide,
      codeImportName: "slide",
      params: { duration: 500, easing: linear, x: -150 },
      easingName: "linear"
    },
    {
      name: "Scale",
      transition: scale,
      codeImportName: "scale",
      params: { duration: 500, easing: linear },
      easingName: "linear"
    }
  ];

  let selectedTransition = $state("Fly");
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      // position, bannerType color, class
      let props = [];
      if (color !== "primary") props.push(` color="${color}"`);
      if (bannerClass) props.push(` class="${bannerClass}"`);
      if (!bannerStatus) props.push(" bannerStatus={false}");
      if (currentTransition !== transitions[0]) {
        props.push(` transition={${currentTransition.transition.name}}`);

        // Generate params string without quotes and handle functions
        const paramsString = Object.entries(currentTransition.params)
          .map(([key, value]) => {
            if (key === "easing") {
              return `${key}:${currentTransition.easingName}`;
            }
            if (typeof value === "function") {
              return `${key}:${value.name}`;
            }
            return `${key}:${value}`;
          })
          .filter((item) => !item.includes("easingName")) // Filter out the helper property
          .join(",");
        props.push(` params={{${paramsString}}}`);
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
    <Banner id="sample-banner" {color} bind:open={bannerStatus} class={bannerClass} transition={currentTransition.transition} params={currentTransition.params}>
      <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
        <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
          <BullhornOutline class="h-3 w-3 text-gray-500 dark:text-gray-400" />
          <span class="sr-only">Light bulb</span>
        </span>
        <span>
          New brand identity has been launched for the <a href="https://flowbite.com" class="text-primary-600 dark:text-primary-500 inline font-medium decoration-solid decoration-600 dark:decoration-500">Flowbite Library</a>
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
        <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as BannerProps["color"]} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="mb-4 flex flex-wrap space-x-4">
      <Label class="mb-4 w-full font-bold">Transition</Label>
      {#each transitions as transition}
        <Radio labelClass="w-16 my-1" name="interactive_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
      {/each}
    </div>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
