<script lang="ts">
  import { blur, fly, slide, scale, fade } from "svelte/transition";
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from "svelte/transition";
  import { sineIn, linear } from "svelte/easing";
  import { Popover, popover, Button, Label, Radio, uiHelpers, type RadioColorType, type PopoverProps } from "$lib";
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import DynamicCodeBlockHighlight from "../../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  import { isGeneratedCodeOverflow } from "../../utils/helpers";
  // Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "popover";
  // end of props table

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;

  const positions = Object.keys(popover.variants.position);
  let position: PopoverProps["position"] = $state(positions[0]) as PopoverProps["position"];
  const colors = Object.keys(popover.variants.color);
  let color: PopoverProps["color"] = $state("default");
  let popoverClass: PopoverProps["class"] = $state("w-64 text-sm font-light");
  const changeClass = () => {
    popoverClass = popoverClass === "w-64 text-sm font-light" ? "w-64 text-sm font-light p-2" : "w-64 text-sm font-light";
  };
  let arrow = $state(true);
  const changeArrow = () => {
    arrow = !arrow;
    offset = 0;
  };
  let offset = $state(0);
  const changeOffset = () => {
    offset = offset === 0 ? 20 : 0;
    arrow = false;
  };

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    // color: Drawer['color'];
  };

  const transitions: TransitionOption[] = [
    { name: "Fade", transition: fade, params: { duration: 100, easing: linear } },
    { name: "Fly", transition: fly, params: { duration: 300, easing: linear, x: -150 } },
    { name: "Blur", transition: blur, params: { duration: 800, easing: sineIn } }
  ];

  let selectedTransition: string | number = $state("Fade");
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (color !== "default") props.push(` color="${color}"`);
      if (position !== "top") props.push(` position="${position}"`);
      if (offset) props.push(` offset="${offset}"`);
      if (popoverClass !== "w-64 text-sm font-light") props.push(` class="${popoverClass}"`);
      if (arrow !== true) props.push(" arrow={false}");
      if (currentTransition !== transitions[0]) {
        props.push(` transition={${currentTransition.transition.name}}`);

        // Generate params string without quotes and handle functions
        let paramValues = currentTransition.params;
        const paramsString = Object.entries(paramValues)
          .map(([key, value]) => {
            if (typeof value === "function") {
              return `${key}:${value.name}`;
            }
            return `${key}:${value}`;
          })
          .join(",");
        props.push(` params={{${paramsString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Button id="demo">Popover</Button>
<Popover titleSlot="Popover title" triggeredBy="#demo"${propsString} >
  My Popover content
</Popover>`;
    })()
  );
  // end of code generator

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

<H1>Popover</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Popover Builder</H2>
<CodeWrapper class="">
  <div class="flex h-64 items-center justify-center">
    <Button id="b1">Popover</Button>
    <Popover {color} {position} {arrow} {offset} class={popoverClass} transition={currentTransition.transition} params={currentTransition.params} titleSlot="Popover title" triggeredBy="#b1">
      <p class="px-3 py-2 dark:text-white">And here's some amazing content. It's very engaging. Right?</p>
    </Popover>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="alert_reactive" bind:group={color} color={colorOption as RadioColorType} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Position</Label>
    {#each positions as option}
      <Radio labelClass="w-28 my-1" name="interactive_toast_position" bind:group={position} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-16 my-1" name="interactive_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-36" onclick={changeClass}>{popoverClass !== "w-64 text-sm font-light" ? "Remove class" : "Add class"}</Button>
    <Button class="w-36" color="secondary" onclick={changeArrow}>{arrow ? "Remove arrow" : "Add arrow"}</Button>
    <Button class="w-36" color="rose" onclick={changeOffset}>{offset ? "Remove offset" : "Add offset"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Title slot</H2>
<CodeWrapper>
  <ExampleComponents.TitleSlot />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/TitleSlot.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User profile</H2>
<CodeWrapper>
  <ExampleComponents.UserProfile />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/UserProfile.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Company profile</H2>
<CodeWrapper>
  <ExampleComponents.CompanyProfile />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/CompanyProfile.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Image</H2>
<CodeWrapper>
  <ExampleComponents.Image />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Image.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Description</H2>
<CodeWrapper>
  <ExampleComponents.Description />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Description.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Progress</H2>
<CodeWrapper>
  <ExampleComponents.Progress />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Progress.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Password</H2>
<CodeWrapper>
  <ExampleComponents.Password />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Password.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>External reference</H2>
<CodeWrapper>
  <ExampleComponents.ExternalReference />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/ExternalReference.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
