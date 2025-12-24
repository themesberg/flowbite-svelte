<script lang="ts">
  import { Toast, toast, Button, Label, Radio, uiHelpers, type ToastProps } from "$lib";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
  import { linear } from "svelte/easing";
  import { blur, fly, slide, scale, fade } from "svelte/transition";
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from "svelte/transition";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Toast builder";
  let description = "A quick way to create Toast component";
  let title = "Toast builder";
  let dir = "builder";

  const colors = Object.keys(toast.variants.color) as ToastProps["color"][];
  let toastColor: ToastProps["color"] = $state("primary");
  let dismissable = $state(true);
  const changeDismissable = () => {
    dismissable = !dismissable;
  };
  const positions = Object.keys(toast.variants.position) as ToastProps["position"][];
  let toastPosition: ToastProps["position"] = $state("top-left");
  // transition example
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };

  const transitions: TransitionOption[] = [
    { name: "Default", transition: fly, params: { duration: 400 } },
    { name: "Fly", transition: fly, params: { duration: 300, easing: linear, x: 150 } },
    { name: "Blur", transition: blur, params: { duration: 400, easing: linear } },
    { name: "Slide", transition: slide, params: { duration: 500, easing: linear, x: -150 } },
    { name: "Scale", transition: scale, params: { duration: 400, easing: linear } },
    { name: "Fade", transition: fade, params: { duration: 500, easing: linear } }
  ];

  let selectedTransition: string | number = $state("Default");
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);
  let toastStatus: boolean = $state(true);
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (toastColor !== "primary") props.push(` color="${toastColor}"`);
      if (dismissable !== true) props.push(" dismissable={false}");
      if (toastPosition !== "top-left") props.push(` position="${toastPosition}"`);
      if (currentTransition !== transitions[0] && dismissable) {
        props.push(` transition={${currentTransition.name.toLowerCase()}}`);
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
        props.push(` params={{${paramsString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<div class="relative h-56">
  <Toast${propsString}>My Toast</Toast>
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

<H1>Toast Builder</H1>
<CodeWrapper>
  <div class="relative h-28 md:h-56">
    <Toast color={toastColor} bind:toastStatus {dismissable} transition={currentTransition.transition} params={currentTransition.params} position={toastPosition}>
      {#snippet icon()}
        <CheckCircleSolid class="h-5 w-5" />
        <span class="sr-only">Check icon</span>
      {/snippet}
      Toast content
    </Toast>
  </div>
  <div class="mb-4">
    <Button disabled={toastStatus ? true : false} onclick={() => (toastStatus = true)}>Open toast</Button>
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="my-1" classes={{ label: "w-24" }} name="interactive_toast_color" bind:group={toastColor} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio class="my-1" classes={{ label: "w-16" }} name="interactive_toast_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Position</Label>
    {#each positions as option}
      <Radio class="my-1" classes={{ label: "w-32" }} name="interactive_toast_position" bind:group={toastPosition} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2">
    <Button onclick={changeDismissable}>{dismissable ? "Disable" : "Enable"} dismissable</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
