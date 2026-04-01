<script lang="ts">
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";

  import { Button, Radio, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, uiHelpers, Label } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { blur, fly, slide, scale } from "svelte/transition";
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from "svelte/transition";
  import { sineIn, linear } from "svelte/easing";
  import { page } from "$app/state";
  let activeUrl = $state(page.url.pathname);
  $effect(() => {
    activeUrl = page.url.pathname;
  });

  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Dropdown builder";
  let description = "A quick way to create Dropdown component";
  let title = "Dropdown builder";
  let dir = "builder";

  let dividerStatus = $state(false);
  const changeDividerStatus = () => {
    dividerStatus = !dividerStatus;
  };
  let headerStatus = $state(false);
  const changeHeaderStatus = () => {
    headerStatus = !headerStatus;
  };

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };

  const transitions: TransitionOption[] = [
    { name: "Fly", transition: fly, params: { y: 0, duration: 200, easing: sineIn } },
    { name: "Blur", transition: blur, params: { y: 0, duration: 400, easing: linear } },
    { name: "Slide", transition: slide, params: { x: -100, duration: 300, easing: sineIn } },
    { name: "Scale", transition: scale, params: { duration: 300, easing: linear } }
  ];
  let selectedTransition = $state("Fly");
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      let headerContent = headerStatus
        ? `
    <DropdownHeader>
      <div>Bonnie Green</div>
      <div class="truncate font-medium">name@flowbite.com</div>
    </DropdownHeader>`
        : "";
      let dividerContent = dividerStatus
        ? `
      <DropdownDivider />`
        : "";
      let props = [];
      props.push(` transition={${currentTransition.name.toLowerCase()}}`);

      const paramsString = Object.entries(currentTransition.params)
        .map(([key, value]) => {
          if (key === "easing") {
            return `${key}:${value.name || "linear"}`;
          }
          return `${key}:${value}`;
        })
        .join(",");
      props.push(` transitionParams={{${paramsString}}}`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Button>Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<Dropdown {activeUrl} simple${propsString} class="w-44">${headerContent}
  <DropdownItem href="/">Dashboard</DropdownItem>${dividerContent}
  <DropdownItem href="/components/dropdown">Dropdown</DropdownItem>
  <DropdownItem href="/components/footer">Footer</DropdownItem>
</Dropdown>`;
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

<H1>Dropdown Builder</H1>
<CodeWrapper>
  <div class="mb-4 flex h-72 items-start justify-center">
    <Button>
      Dropdown
      <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
    </Button>
    <Dropdown {activeUrl} simple class="w-44" transition={currentTransition.transition} transitionParams={currentTransition.params}>
      {#if headerStatus}
        <DropdownHeader>
          <div>Bonnie Green</div>
          <div class="truncate font-medium">name@flowbite.com</div>
        </DropdownHeader>
      {/if}
      <DropdownItem href="/">Dashboard</DropdownItem>
      {#if dividerStatus}
        <DropdownDivider />
      {/if}
      <DropdownItem href="/components/dropdown">Dropdown</DropdownItem>
      <DropdownItem href="/components/footer">Footer</DropdownItem>
    </Dropdown>
  </div>
  <div class="mb-4 flex gap-4">
    <Button onclick={changeHeaderStatus}>
      Header {#if headerStatus}off{:else}on{/if}
    </Button>
    <Button onclick={changeDividerStatus}>
      Divider {#if dividerStatus}off{:else}on{/if}
    </Button>
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio class="my-1" classes={{ label: "w-24" }} name="dropdown_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
