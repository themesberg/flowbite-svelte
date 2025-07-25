<script lang="ts">
  import { List, list, Li, Heading, Label, Radio, Button, uiHelpers, type ListProps } from "$lib";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "List builder";
  let description = "A quick way to create List component";
  let title = "List builder";
  let dir = "builder";

  const tags = Object.keys(list.variants.tag);
  let listTag: ListProps["tag"] = $state("ul");
  const positions = Object.keys(list.variants.position);
  let listPosition: ListProps["position"] = $state("inside");
  let listIcon = $state(false);
  const changeListIcon = () => {
    listIcon = !listIcon;
    if (listIcon) {
      nested = false;
    }
  };
  let ctxClass = $state("");
  const changeCtxClass = () => {
    ctxClass = ctxClass === "" ? "pl-8" : "";
  };
  let nested = $state(false);
  const changeNested = () => {
    nested = !nested;
    if (nested) {
      listIcon = false;
    }
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      let iconSlot;
      let liIcon;
      let nestedContent;

      if (listTag !== "ul") props.push(` tag="${listTag}"`);
      if (listPosition !== "inside") props.push(` position="${listPosition}"`);
      // if (linkClass) props.push(` class="${linkClass}"`);
      iconSlot = listIcon ? `<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />` : "";
      if (ctxClass) props.push(` ctxClass="${ctxClass}"`);
      liIcon = listIcon ? ` icon` : "";
      nestedContent = nested
        ? `<List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
      <Li>item 1-1</Li>
      <Li>item 1-2</Li>
      <Li>item 1-3</Li>
    </List>
      `
        : "";

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<List${propsString}>
  <Li${liIcon}>${iconSlot}Item 1${nestedContent}</Li>
  <Li${liIcon}>${iconSlot}Item 2</Li>
  <Li${liIcon}>${iconSlot}Item 3</Li>
</List>`;
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

<H1>List Builder</H1>
<CodeWrapper>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">List title</Heading>
  <List tag={listTag} position={listPosition} class="space-y-1 text-gray-500 dark:text-gray-400" {ctxClass}>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}At least 10 characters (and up to 100 characters)
      {#if nested}
        <List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
          <Li>item 1-1</Li>
          <Li>item 1-2</Li>
          <Li>item 1-3</Li>
        </List>
      {/if}
    </Li>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}At least one lowercase character
    </Li>
    <Li icon={listIcon}>
      {#if listIcon}<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />{/if}Inclusion of at least one special character, e.g., ! @ # ?
    </Li>
  </List>
  <div class="mt-4 mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Tag</Label>
    {#each tags as tag}
      <Radio class="my-1" classes={{ label: "w-20" }} name="list_tag" bind:group={listTag} value={tag}>{tag}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Position</Label>
    {#each positions as position}
      <Radio class="my-1" classes={{ label: "w-20" }} name="list_position" bind:group={listPosition} value={position}>{position}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" color="blue" onclick={changeListIcon}>{listIcon ? "Remove icon" : "Add icon"}</Button>
    <Button class="w-48" color="rose" onclick={changeCtxClass}>{ctxClass !== "" ? "Remove ctxClass" : "Add ctxClass"}</Button>
    <Button class="w-48" color="teal" onclick={changeNested}>{nested ? "Remove nested" : "Add nested"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
