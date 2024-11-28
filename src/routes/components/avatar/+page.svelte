<script lang="ts">
  import { Avatar, avatar, Label, Radio, Button, uiHelpers, type AvatarProps } from "$lib";
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import DynamicCodeBlockHighlight from "../../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../../utils/CodeWrapper.svelte";
  import H1 from "../../utils/H1.svelte";
  import H2 from "../../utils/H2.svelte";
  import { isGeneratedCodeOverflow } from "../../utils/helpers";
  // Props table
  import CompoAttributesViewer from "../../utils/CompoAttributesViewer.svelte";
  const dirName = "avatar";

  // for examples section that dynamically changes the svelte component and svelteCode content
  import * as ExampleComponents from "./examples";
  const exampleModules = import.meta.glob("./examples/*.svelte", {
    query: "?raw",
    import: "default",
    eager: true
  }) as Record<string, string>;

  // reactive example, rounded, border, stacked, size, className
  const sizes = Object.keys(avatar.variants.size);
  let avatarSize: AvatarProps["size"] = $state("md");
  let isRounded = $state(false);
  const toggleCornerStyle = () => {
    isRounded = !isRounded;
  };
  let border: AvatarProps["border"] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let stacked: AvatarProps["stacked"] = $state(false);
  const changeStacked = () => {
    stacked = !stacked;
  };
  let avatarClass: AvatarProps["class"] = $state("");
  const changeClass = () => {
    avatarClass = avatarClass === "" ? "mx-0.5" : "";
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (isRounded) props.push('cornerStyle="rounded"');
      if (avatarSize !== "md") props.push(`size="${avatarSize}"`);
      if (border) props.push("border");
      if (stacked) props.push("stacked");
      if (avatarClass) props.push(`class="${avatarClass}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Avatar${propsString} />`;
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

<H1>Avatar</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Avatar Bilder</H2>
<CodeWrapper>
  <div class="mb-4 flex h-36 justify-center">
    <Avatar src="/images/profile-picture-1.webp" alt="Profile picture 1" cornerStyle={isRounded ? "rounded" : undefined} {border} {stacked} class={avatarClass} size={avatarSize} />
    <Avatar src="/images/profile-picture-2.webp" alt="Profile picture 2" cornerStyle={isRounded ? "rounded" : undefined} {border} {stacked} class={avatarClass} size={avatarSize} />
    <Avatar src="/images/profile-picture-3.webp" alt="Profile picture 3" cornerStyle={isRounded ? "rounded" : undefined} {border} {stacked} class={avatarClass} size={avatarSize} />
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as size}
      <Radio labelClass="w-12 my-1" name="spinnersize" bind:group={avatarSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={toggleCornerStyle}>{isRounded ? "Default: circular" : "Rounded"}</Button>
    <Button class="w-40" color="red" onclick={changeBorder}>{border ? "Remove border" : "Add border"}</Button>
    <Button class="w-40" color="green" onclick={changeStacked}>{stacked ? "Remove stacked" : "Add  stacked"}</Button>
    <Button class="w-40" color="purple" onclick={changeClass}>{avatarClass ? "Remove class" : "Add class"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Avatar text</H2>
<CodeWrapper>
  <ExampleComponents.AvatarText />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/AvatarText.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dot indicator</H2>
<CodeWrapper>
  <ExampleComponents.DotIndicator />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/DotIndicator.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placeholder</H2>
<CodeWrapper>
  <ExampleComponents.Placeholder />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Placeholder.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Placeholder initial</H2>
<CodeWrapper>
  <ExampleComponents.PlaceholderInitial />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/PlaceholderInitial.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Stacked</H2>
<CodeWrapper>
  <ExampleComponents.Stacked />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/Stacked.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>User dropdown</H2>
<CodeWrapper>
  <ExampleComponents.UserDropdown />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/UserDropdown.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Avatar with tooltip</H2>
<CodeWrapper>
  <ExampleComponents.AvatarWithTooltip />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules["./examples/AvatarWithTooltip.svelte"] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
