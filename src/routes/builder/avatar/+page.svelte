<script lang="ts">
  import { Avatar, avatar, Label, Radio, Button, uiHelpers, type AvatarProps } from "$lib";
  import DynamicCodeBlockHighlight from "../utils/DynamicCodeBlockHighlight.svelte";
  import CodeWrapper from "../utils/CodeWrapper.svelte";
  import H1 from "../utils/H1.svelte";
  import { isGeneratedCodeOverflow } from "../utils/helpers";
  import MetaTag from "../../utils/MetaTag.svelte";

  // MetaTag
  let breadcrumb_title = "Avatar builder";
  let description = "A quick way to create Avatar component";
  let title = "Avatar builder";
  let dir = "builder";

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
  let classStatus = $state(false);
  const changeClassStatus = () => {
    classStatus = !classStatus;
    changeClass();
  };
  let avatarClass: AvatarProps["class"] = $state("");
  const changeClass = () => {
    const parts = [];
    if (classStatus) {
      parts.push("mx-0.5");
    }

    if (eventStatus) {
      parts.push("hover:cursor-pointer");
    }

    avatarClass = parts.join(" ");
  };

  let hrefStatus = $state(false);
  const changeHrf = () => {
    hrefStatus = !hrefStatus;
    if (!hrefStatus) targetStatus = false;
  };
  let dotStatus = $state(false);
  const changeDot = () => {
    dotStatus = !dotStatus;
  };
  let targetStatus = $state(false);
  const changeTarget = () => {
    targetStatus = !targetStatus;
    if (targetStatus) hrefStatus = true;
  };
  let eventStatus = $state(false);
  const changeEventStatus = () => {
    eventStatus = !eventStatus;
    changeClass();
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
      if (hrefStatus) props.push('href="/"');
      if (dotStatus) props.push('dot={{ placement: "bottom-right", color: "green" }}');
      if (targetStatus) props.push('target="_blank"');
      if (eventStatus) props.push('onclick={()=> alert("Clicked!")}');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `<Avatar src="/images/profile-picture-1.webp" alt="Profile picture 1"${propsString} />`;
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

<H1>Avatar Builder</H1>

<CodeWrapper>
  <div class="mb-4 flex h-36 justify-center">
    <Avatar
      src="/images/profile-picture-1.webp"
      alt="Profile picture 1"
      cornerStyle={isRounded ? "rounded" : undefined}
      {border}
      {stacked}
      class={avatarClass}
      size={avatarSize}
      href={hrefStatus ? "/" : ""}
      dot={dotStatus ? { placement: "bottom-right", color: "success" } : undefined}
      target={targetStatus ? "_blank" : undefined}
      onclick={eventStatus ? () => alert("Clicked!") : undefined}
    />
    <Avatar
      src="/images/profile-picture-2.webp"
      alt="Profile picture 2"
      cornerStyle={isRounded ? "rounded" : undefined}
      {border}
      {stacked}
      class={avatarClass}
      size={avatarSize}
      href={hrefStatus ? "/" : ""}
      dot={dotStatus ? { placement: "bottom-right", color: "success" } : undefined}
      target={targetStatus ? "_blank" : undefined}
      onclick={eventStatus ? () => alert("Clicked!") : undefined}
    />
    <Avatar
      src="/images/profile-picture-3.webp"
      alt="Profile picture 3"
      cornerStyle={isRounded ? "rounded" : undefined}
      {border}
      {stacked}
      class={avatarClass}
      size={avatarSize}
      href={hrefStatus ? "/" : ""}
      dot={dotStatus ? { placement: "bottom-right", color: "success" } : undefined}
      target={targetStatus ? "_blank" : undefined}
      onclick={eventStatus ? () => alert("Clicked!") : undefined}
    />
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as size}
      <Radio class="my-1" classes={{ label: "w-12" }} name="spinnersize" bind:group={avatarSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={toggleCornerStyle}>{isRounded ? "Default: circular" : "Rounded"}</Button>
    <Button class="w-40" color="red" onclick={changeBorder}>{border ? "Remove border" : "Add border"}</Button>
    <Button class="w-40" color="green" onclick={changeStacked}>{stacked ? "Remove stacked" : "Add  stacked"}</Button>
    <Button class="w-40" color="purple" onclick={changeClassStatus}>{classStatus ? "Remove class" : "Add class"}</Button>
    <Button class="w-40" color="yellow" onclick={changeHrf}>{hrefStatus ? "Remove href" : "Add href"}</Button>
    <Button class="w-40" color="cyan" onclick={changeDot}>{dotStatus ? "Remove dot" : "Add dot"}</Button>
    <Button class="w-40" color="pink" onclick={changeTarget}>{targetStatus ? "Remove target" : "Add target"}</Button>
    <Button class="w-40" color="gray" onclick={changeEventStatus}>{eventStatus ? "Remove event" : "Add event"}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>
