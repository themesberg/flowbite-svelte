<script lang="ts">
  import { Video, Button, Label, Radio } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'video';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let controls = $state(true);
  const changeControls = () => {
    controls = !controls;
  };

  let autoplay = $state(false);
  const changeAutoplay = () => {
    autoplay = !autoplay;
  };
  let muted = $state(false);
  const changeMuted = () => {
    muted = !muted;
  };
  const videoClasses = [
    { name: 'default', class: 'w-full' },
    { name: 'width', class: 'w-96' },
    { name: 'height', class: 'h-80' },
    { name: 'responsive', class: 'w-full max-w-full h-auto' },
    { name: 'customStyle', class: 'w-full max-w-full h-auto rounded-3xl border border-gray-200 dark:border-gray-700' }
  ];
  let selectedClass = $state('default');
  // let selectedTransition = $state('Fly');
  let currentClass = $derived(videoClasses.find((t) => t.name === selectedClass) || videoClasses[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (controls) props.push(' controls');
      if (autoplay) props.push(' autoplay');
      if (muted) props.push(' muted');
      if (currentClass.name !== 'default') props.push(` class="${currentClass.class}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Video src="/videos/flowbite.mp4"${propsString} trackSrc="flowbite.mp4" />`;
    })()
  );
</script>

<H1>Video</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Video Player Builder</H2>
<CodeWrapper>
  <div class="h-[500px]">
    <Video src="/videos/flowbite.mp4" {controls} {autoplay} {muted} trackSrc="flowbite.mp4" class={currentClass.class} />
  </div>
  <div class="flex flex-wrap space-x-6">
    <Label class="mb-4 w-full font-bold">Style:</Label>
    {#each videoClasses as option}
      <Radio labelClass="w-24 my-1" name="interactive_toast_color" bind:group={selectedClass} value={option.name}>{option.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap justify-center gap-2 md:justify-start">
    <Button class="w-48" color="emerald" onclick={changeControls}>{controls ? 'Remove controls' : 'Add controls'}</Button>
    <Button class="w-48" color="blue" onclick={changeAutoplay}>{autoplay ? 'Remove autoplay' : 'Add autoplay'}</Button>
    <Button class="w-48" color="pink" onclick={changeMuted}>{muted ? 'Remove muted' : 'Add muted'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
