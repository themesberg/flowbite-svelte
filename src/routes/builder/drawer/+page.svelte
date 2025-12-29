<script lang="ts">
  import { Drawer, Drawerhead, Button, uiHelpers, Label, Radio, type DrawerProps } from "$lib";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
  import { blur, fly, slide, scale, fade } from "svelte/transition";
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from "svelte/transition";
  import { linear, sineIn } from "svelte/easing";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";

  let open = $state(false);

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    // color: Drawer['color'];
  };

  const transitions: TransitionOption[] = [
    { name: "Fly", transition: fly, params: { duration: 300, easing: linear, x: -150 } },
    { name: "Blur", transition: blur, params: { duration: 400, easing: sineIn } },
    { name: "Slide", transition: slide, params: { duration: 200, easing: linear } },
    { name: "Scale", transition: scale, params: { duration: 300, easing: sineIn } },
    { name: "Fade", transition: fade, params: { duration: 400, easing: linear } }
  ];

  let selectedTransition = $state("Fly");
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  const placements = [
    {
      name: "Left",
      placement: "left",
      params: { x: -320, duration: 300, easing: sineIn },
      width: "default"
    },
    {
      name: "Top",
      placement: "top",
      params: { y: -320, duration: 300, easing: sineIn },
      width: "full"
    },
    {
      name: "Right",
      placement: "right",
      params: { x: 320, duration: 300, easing: sineIn },
      width: "default"
    },
    {
      name: "Bottom",
      placement: "bottom",
      params: { y: 320, duration: 300, easing: sineIn },
      width: "full"
    }
  ];

  let selectedPlacement = $state("Left");
  let currentPlacement = $derived(placements.find((p) => p.name === selectedPlacement) || placements[0]);

  // outsideclick
  let outsideclickStatus = $state(true);
  const changeOutsideclickStatus = () => {
    outsideclickStatus = !outsideclickStatus;
  };
  // $effect(() => {
  // 	changeOutsideclickStatus;
  // })

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (!outsideclickStatus) props.push(" activateClickOutside={false}");
      if (currentPlacement.width !== "default") props.push(` width="${currentPlacement.width}"`);
      if (currentTransition !== transitions[0]) {
        props.push(` transitionType={${currentTransition.transition.name}}`);

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
      // placement
      if (currentPlacement !== placements[0]) {
        props.push(` placement="${currentPlacement.placement}"`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Button onclick={drawer.toggle}>Drawer</Button>
<Drawer drawerStatus={drawerStatus} closeDrawer={closeDrawer}${propsString}>
  <Drawerhead onclick={closeDrawer} class="mb-4>
    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-5 w-5" />${selectedTransition} drawer
      </h5>
  </Drawerhead>
    My Drawer
</Drawer>`;
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

<H1>Drawer Builder</H1>
<CodeWrapper>
  <div class="text-center">
    <Button onclick={() => (open = true)}>Drawer</Button>
  </div>
  <Drawer
    bind:open
    transition={currentTransition.transition}
    placement={currentPlacement.placement as DrawerProps["placement"]}
    dismissable={false}
    width={currentPlacement.width as DrawerProps["width"]}
    transitionParams={currentPlacement.placement === "left" ? currentTransition.params : currentPlacement.params}
    outsideclose={outsideclickStatus}
  >
    <Drawerhead onclick={() => (open = false)} class="mb-4">
      <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-5 w-5" />{selectedTransition} drawer
      </h5>
    </Drawerhead>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Content</p>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Outsideclose: {outsideclickStatus ? "true" : "false"}
    </p>
  </Drawer>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio classes={{ label: "w-16 my-1" }} name="interactive_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Placement</Label>
    {#each placements as placement}
      <Radio classes={{ label: "w-16 my-1" }} name="interactive_placement" bind:group={selectedPlacement} value={placement.name}>{placement.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" onclick={changeOutsideclickStatus}>{outsideclickStatus ? "Disable outsideclick" : "Enable outsideclick"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
