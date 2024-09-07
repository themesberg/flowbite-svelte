<script lang="ts">
  import { type Component } from 'svelte';
  import { Banner, banner, Button, Skeleton, ImagePlaceholder, Label, Radio, type BannerProps, uiHelpers } from '$lib';
  import { BullhornOutline, ArrowRightOutline, BookOpenSolid } from 'flowbite-svelte-icons';
  import { blur, fly, slide, scale } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'banner';

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples'; 
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  
  const exampleArr = [
    { name: 'Newsletter signup banner', component: ExampleComponents.NewsletterSignupBanner },
    { name: 'Information banner', component: ExampleComponents.InformationBanner }
  ]
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject (arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find(obj => obj.name === name);
    return matchingObject ? matchingObject.component : null; 
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample)); 
  // end of dynamic svelte component

  // interactive example
  // position, bannerType, color, class:divClass
  const colors = Object.keys(banner.variants.color);
  let position: BannerProps['position'] = $state('sticky');
  const changePosition = () => {
    position = position === 'sticky' ? 'absolute' : 'sticky';
    if (position === 'sticky') {
      bannerType = 'default';
    }
  };
  let bannerType: BannerProps['bannerType'] = $state('default');
  const changeBannerType = () => {
    bannerType = bannerType === 'default' ? 'cta' : 'default';
    if (bannerType === 'cta') {
      position = 'absolute';
    }
  };
  let color: BannerProps['color'] = $state('primary');
  let bannerClass: BannerProps['class'] = $state('');
  const changeClass = () => {
    bannerClass = bannerClass === '' ? 'mt-4' : '';
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

  const transitions: TransitionOption[] = [
    { name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: 150 } },
    { name: 'Blur', transition: blur, params: { duration: 500, easing: linear } },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 } },
    { name: 'Scale', transition: scale, params: { duration: 500, easing: linear } }
  ];

  let selectedTransition = $state('Fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      // position, bannerType color, class
      let props = [];
      if (color !== 'primary') props.push(` color="${color}"`);
      if (bannerType !== 'default') props.push(` bannerType="${bannerType}"`);
      if (position !== 'sticky') props.push(` position="${position}"`);
      if (bannerClass) props.push(` class="${bannerClass}"`);
      if (!bannerStatus) props.push(' bannerStatus={false}');
      if (currentTransition !== transitions[0]) {
        props.push(` transition={${currentTransition.transition.name}}`);

        // Generate params string without quotes and handle functions
        const paramsString = Object.entries(currentTransition.params)
          .map(([key, value]) => {
            if (typeof value === 'function') {
              return `${key}:${value.name}`;
            }
            return `${key}:${value}`;
          })
          .join(',');
        props.push(` params={{${paramsString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

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
  }
  // for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the markdown content.
  
  // for examples DynamicCodeBlockHighlight
  let codeBlock = uiHelpers();
  let exampleExpand = $state(false);
  let showExpandButton = $derived(isSvelteOverflow(markdown, exampleModules));
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  }
  // end of DynamicCodeBlock setup
  $effect(() => {
    exampleExpand = codeBlock.isOpen;
    builderExpand = builder.isOpen;
  });
</script>

<H1>Banner</H1>
<H2>Setup</H2>
<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Interactive Banner Builder</H2>
<CodeWrapper class="relative" innerClass="p-0">
  <div class="mb-4 h-[670px] md:h-[480px]">
    <div class="p-6">
      <Skeleton class="py-4" />
      <ImagePlaceholder class="py-4" />
    </div>
    <Banner id="sample-banner" {position} {bannerType} {color} class={bannerClass} bind:bannerStatus transition={currentTransition.transition} params={currentTransition.params}>
      <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
        <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
          <BullhornOutline class="h-3 w-3 text-gray-500 dark:text-gray-400" />
          <span class="sr-only">Light bulb</span>
        </span>
        <span>
          New brand identity has been launched for the <a href="https://flowbite.com" class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500">Flowbite Library</a>
        </span>
      </p>
    </Banner>
  </div>
<div class="p-6">
  <div class="mb-4 h-12">
    <Button class="w-48" disabled={bannerStatus ? true : false} onclick={changeStatus}>Open banner</Button>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Change color {color}</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as BannerProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-24 my-1" name="interactive_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap gap-4">
    <Button class="w-48" onclick={changePosition}>Position: {position === 'sticky' ? 'absolute' : 'sticky'}</Button>
    <Button class="w-48" color="blue" onclick={changeBannerType}>Type: {bannerType === 'default' ? 'cta' : 'default'}</Button>
    <Button class="w-48" color="green" onclick={changeClass}>{bannerClass ? 'Remove class' : 'Add class'}</Button>
  </div>
</div>
  {#snippet codeblock()}
    <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper innerClass="p-0">
  <div class="mb-4 flex flex-wrap p-6">
    <Label class="mb-4 w-full font-bold">Example:</Label>
    {#each exampleArr as style}
      <Radio labelClass="w-64 my-1" onclick={()=> exampleExpand = false} name="block_style" bind:group={selectedExample} value={style.name}>{style.name}</Radio>
    {/each}
  </div>
  <div class="h-[420px]">
    <SelectedComponent />
  </div>
  {#snippet codeblock()}
  <DynamicCodeBlockHighlight replaceLib {handleExpandClick} expand={exampleExpand} {showExpandButton} code={exampleModules[`./examples/${markdown}`] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>