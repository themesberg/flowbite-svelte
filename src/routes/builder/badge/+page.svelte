<script lang="ts">
  import { Badge, badge, Button, Radio, Label, type BadgeProps, uiHelpers } from "$lib";
  import { ClockSolid } from "flowbite-svelte-icons";
  import { blur, fly, slide, scale } from "svelte/transition";
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from "svelte/transition";
  import { linear } from "svelte/easing";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Badge builder";
  let description = "A quick way to create Badge component";
  let title = "Badge builder";
  let dir = "builder";

  // interactive example
  const colors = Object.keys(badge.variants.color);
  let color: BadgeProps["color"] = $state("primary");
  let badgeSize: BadgeProps["large"] = $state(false);
  const changeSize = () => {
    badgeSize = !badgeSize;
  };
  let badgeDismissable: BadgeProps["dismissable"] = $state(false);
  const changeDismissable = () => {
    badgeDismissable = !badgeDismissable;
  };
  let badgeClass: BadgeProps["class"] = $state("");
  const changeClass = () => {
    badgeClass = badgeClass === "" ? "w-40 p-2" : "";
  };
  let badgeStatus2 = $state(true);
  const changeStatus = () => {
    badgeStatus2 = true;
  };
  let border: BadgeProps["border"] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let rounded: BadgeProps["rounded"] = $state(false);
  const changeRounded = () => {
    rounded = !rounded;
  };
  let link = $state("");
  const changeLink = () => {
    link = link === "" ? "/" : "";
  };
  let iconSlot = $state(false);
  const changeIconSlot = () => {
    iconSlot = !iconSlot;
  };

  // transition example
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    color: BadgeProps["color"];
  };

  const transitions: TransitionOption[] = [
    {
      name: "Fly",
      transition: fly,
      params: { duration: 500, easing: linear, x: 150 },
      color: "blue"
    },
    { name: "Blur", transition: blur, params: { duration: 500, easing: linear }, color: "lime" },
    {
      name: "Slide",
      transition: slide,
      params: { duration: 500, easing: linear, x: -150 },
      color: "violet"
    },
    { name: "Scale", transition: scale, params: { duration: 500, easing: linear }, color: "pink" }
  ];

  let selectedTransition = $state("Fly");
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);
  $inspect("currentTransition:", currentTransition);
  let generatedCode = $derived(
    (() => {
      let importScript: string =
        currentTransition !== transitions[0]
          ? ` // script tag 
				import { ${currentTransition} } from 'svelte/transition'`
          : "";
      let props = [];
      if (color !== "primary") props.push(` color="${color}"`);
      if (badgeSize) props.push(" large");
      if (badgeDismissable) props.push(" dismissable");
      if (badgeClass) props.push(` class="${badgeClass}"`);
      if (!badgeStatus2) props.push(" badgeStatus={false}");
      if (border) props.push(" border");
      if (link) props.push(` href="${link}"`);
      if (rounded) props.push(" rounded");
      if (currentTransition !== transitions[0] && badgeDismissable) {
        props.push(` transition={${currentTransition.transition.name}}`);
        // Generate params string without quotes and handle functions
        const paramsString = Object.entries(currentTransition.params)
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

      if (iconSlot) {
        return (
          importScript +
          `<Badge${propsString}>
  <ClockSolid class="me-1.5 h-3 w-3" />
  My Badge
</Badge>`
        );
      } else {
        return `<Badge${propsString}>My Badge</Badge>`;
      }
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

<H1>Badge Builder</H1>

<CodeWrapper>
  <div class="mb-4 h-10">
    <Badge {color} large={badgeSize} dismissable={badgeDismissable} class={badgeClass} bind:badgeStatus={badgeStatus2} {border} {rounded} transition={currentTransition.transition} params={currentTransition.params} href={link}>
      {#if iconSlot}
        <ClockSolid class="my-1 me-1.5 h-2.5 w-2.5" />
      {/if}
      My Badge
    </Badge>
  </div>
  <div class="mb-4 h-12">
    <Button disabled={badgeStatus2 ? true : false} onclick={changeStatus}>Open badge</Button>
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio class="my-1 w-24" name="color" bind:group={color} color={colorOption as BadgeProps["color"]} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio disabled={badgeDismissable ? false : true} labelClass="w-16 my-1 {badgeDismissable ? '' : 'opacity-30 cursor-not-allowed'}" name="transition_interactive" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={changeSize}>{badgeSize ? "Small" : "Large"}</Button>
    <Button class="w-40" color="green" onclick={changeDismissable}>{badgeDismissable ? "Not dismissable" : "Dismissable"}</Button>
    <Button class="w-40" color="purple" onclick={changeClass}>{badgeClass ? "Remove class" : "Add class"}</Button>
    <Button class="w-40" color="yellow" onclick={changeBorder}>{border ? "Remove border" : "Add border"}</Button>
    <Button class="w-40" color="dark" onclick={changeRounded}>{rounded ? "Remove rounded" : "Add rounded"}</Button>
    <Button class="w-40" color="pink" onclick={changeLink}>{link ? "Remove href" : "Add href"}</Button>
    <Button class="w-40" color="teal" onclick={changeIconSlot}>{iconSlot ? "Remove icon" : "Add icon"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
