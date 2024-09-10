<script lang="ts">
  import { type Component } from 'svelte';
  import { Avatar, avatar, Label, Radio, Button, uiHelpers, type AvatarProps } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'avatar';
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Avatar text', component: ExampleComponents.AvatarText },
    { name: 'Dot indicator', component: ExampleComponents.DotIndicator },
    { name: 'Placeholder', component: ExampleComponents.Placeholder },
    { name: 'Placeholder initial', component: ExampleComponents.PlaceholderInitial },
    { name: 'Stacked', component: ExampleComponents.Stacked },
    { name: 'User dropdown', component: ExampleComponents.UserDropdown }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  // reactive example, rounded, border, stacked, size, className
  const sizes = Object.keys(avatar.variants.size);
  let avatarSize: Avatar['size'] = $state('md');
  let isRounded = $state(false);
  const toggleCornerStyle = () => {
    isRounded = !isRounded;
  };
  let border: AvatarProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let stacked: AvatarProps['stacked'] = $state(false);
  const changeStacked = () => {
    stacked = !stacked;
  };
  let avatarClass: AvatarProps['class'] = $state('');
  const changeClass = () => {
    avatarClass = avatarClass === '' ? 'mx-0.5' : '';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (isRounded) props.push('cornerStyle="rounded"');
      if (avatarSize !== 'md') props.push(`size="${avatarSize}"`);
      if (border) props.push('border');
      if (stacked) props.push('stacked');
      if (avatarClass) props.push(`class="${avatarClass}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

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
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.

  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>Avatar</H1>

<H2>Setup</H2>
<HighlightCompo replaceLib code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Avatar Bilder</H2>
<CodeWrapper>
  <div class="mb-4 flex h-36 justify-center">
    <Avatar src="/images/profile-picture-1.webp" cornerStyle={isRounded ? 'rounded' : undefined} {border} {stacked} class={avatarClass} size={avatarSize} />
    <Avatar src="/images/profile-picture-2.webp" cornerStyle={isRounded ? 'rounded' : undefined} {border} {stacked} class={avatarClass} size={avatarSize} />
    <Avatar src="/images/profile-picture-3.webp" cornerStyle={isRounded ? 'rounded' : undefined} {border} {stacked} class={avatarClass} size={avatarSize} />
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio labelClass="w-12 my-1" name="spinnersize" bind:group={avatarSize} value={size}>{size}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-40" color="blue" onclick={toggleCornerStyle}>{isRounded ? 'Default: circular' : 'Rounded'}</Button>
    <Button class="w-40" color="red" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
    <Button class="w-40" color="green" onclick={changeStacked}>{stacked ? 'Remove stacked' : 'Add  stacked'}</Button>
    <Button class="w-40" color="purple" onclick={changeClass}>{avatarClass ? 'Remove class' : 'Add class'}</Button>
  </div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-4 flex flex-wrap">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-40 my-1" onclick={() => (exampleExpand = false)} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
    <SelectedComponent />
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
