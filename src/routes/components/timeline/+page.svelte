<script lang="ts">
  import { type Component } from 'svelte';
  import { Group, GroupItem, Activity, ActivityItem, Timeline, TimelineItem, Button, Label, Radio, uiHelpers } from '$lib';
  import { ArrowRightOutline, CalendarWeekSolid } from 'flowbite-svelte-icons';
  import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { isGeneratedCodeOverflow, isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'timeline';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  // for examples section that dynamically changes the svelte component and markdown content
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const exampleArr = [
    { name: 'Default timeline', component: ExampleComponents.DefaultTimeline },
    { name: 'Vertical timeline', component: ExampleComponents.VerticalTimeline },
    { name: 'Horizontal timeline', component: ExampleComponents.HorizontalTimeline },
    { name: 'Activity log', component: ExampleComponents.ActivityLog },
    { name: 'Grouped timeline', component: ExampleComponents.GroupedTimeline }
  ];
  let selectedExample = $state(exampleArr[0].name);
  let markdown = $derived(getExampleFileName(selectedExample, exampleArr));

  function findObject(arr: { name: string; component: Component }[], name: string) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
  // end of dynamic svelte component

  let activities = [
    {
      name: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: 'just now',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp'
    },
    {
      name: 'We don’t serve their kind here! What? Your droids. ',
      date: '2 hours ago',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp',
      activity: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
    },
    {
      name: 'They’ll have to wait outside. We don’t want them here. ',
      date: '1 day ago',
      alt: 'image alt here',
      src: '/images/profile-picture-3.webp'
    }
  ];

  let groupTimelines = [
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: '/images/profile-picture-1.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
      src: '/images/profile-picture-2.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
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
  });
</script>

<H1>Timeline</H1>

<H2>Examples</H2>

<CodeWrapper>
  <div class="mb-8 flex flex-wrap">
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
