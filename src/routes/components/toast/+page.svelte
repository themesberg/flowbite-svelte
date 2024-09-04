<script lang="ts">
  import { Toast, toast, Avatar, Button, Label, Radio } from '$lib';
  import { FireOutline, CheckCircleSolid, CameraPhotoOutline } from 'flowbite-svelte-icons';
  import { linear } from 'svelte/easing';
  import { blur, fly, slide, scale, fade } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  const colors = Object.keys(toast.variants.color) as Toast['color'][];
  let toastColor: Toast['color'] = $state('primary');
  let dismissable = $state(true);
  const changeDismissable = () => {
    dismissable = !dismissable;
  };
  const positions = Object.keys(toast.variants.position) as Toast['position'][];
  let toastPosition: Toast['position'] = $state('top-left');
  // console.log('positions', positions);
  // transition example
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };

  const transitions: TransitionOption[] = [
    { name: 'Default', transition: fly, params: { duration: 400 } },
    { name: 'Fly', transition: fly, params: { duration: 300, easing: linear, x: 150 } },
    { name: 'Blur', transition: blur, params: { duration: 400, easing: linear } },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 } },
    { name: 'Scale', transition: scale, params: { duration: 400, easing: linear } },
    { name: 'Fade', transition: fade, params: { duration: 500, easing: linear } }
  ];

  let selectedTransition = $state('Default');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);
  let defaultToastStatus: boolean = $state(true);
  let toastStatus: boolean = $state(true);
  let toastUndoStatus: boolean = $state(true);
  const changeUndoStatus = () => {
    toastUndoStatus = !toastUndoStatus;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (toastColor !== 'primary') props.push(` color="${toastColor}"`);
      if (dismissable !== true) props.push(' dismissable={false}');
      if (toastPosition !== 'top-left') props.push(` position="${toastPosition}"`);
      if (currentTransition !== transitions[0] && dismissable) {
        props.push(` transition={${currentTransition.transition.name}}`);
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

      return `<div class="relative h-56">
  <Toast${propsString}>My Toast</Toast>
</div>`;
    })()
  );
</script>

<H1>Toast</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Toast Builder</H2>
<CodeWrapper>
  <div class="relative h-56">
    <Toast color={toastColor} bind:toastStatus {dismissable} transition={currentTransition.transition} params={currentTransition.params} position={toastPosition}>
      {#snippet icon()}
        <CheckCircleSolid class="h-5 w-5" />
        <span class="sr-only">Check icon</span>
      {/snippet}
      Toast content
    </Toast>
  </div>
  <div class="mb-4">
    <Button disabled={toastStatus ? true : false} onclick={() => (toastStatus = true)}>Open toast</Button>
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color:</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="interactive_toast_color" bind:group={toastColor} color={colorOption as Toast['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-24 my-1" name="interactive_toast_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Position:</Label>
    {#each positions as option}
      <Radio labelClass="w-32 my-1" name="interactive_toast_position" bind:group={toastPosition} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap gap-2">
    <Button onclick={changeDismissable}>{dismissable ? 'Disable' : 'Enable'} dismissable</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Undo button</H2>
<CodeWrapper>
  <div class="flex flex-col items-center">
    <div class="mb-4 h-16">
      <Toast bind:toastStatus={toastUndoStatus} iconClass="w-full text-sm font-normal flex items-center justify-between">
        Conversation archived.
        <a class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700" href="/">Undo</a>
      </Toast>
    </div>
    <Button class="w-36" disabled={toastUndoStatus ? true : false} onclick={changeUndoStatus}>Open toast</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/undo-button.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Other examples</H2>
<H3>Toast message</H3>
<CodeWrapper>
  <div class="flex h-[180px] flex-col items-center">
    <Toast align={false} iconClass="w-10 h-10 rounded-full">
      {#snippet icon()}
        <Avatar src="/images/profile-picture-1.webp" />
      {/snippet}
      <div class="ms-3 text-sm font-normal">
        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
        <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
        <Button size="xs">Reply</Button>
      </div>
    </Toast>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/toast-message.md'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Push notification</H3>
<CodeWrapper>
  <div class="flex h-[140px] flex-col items-center">
    <Toast align={false}>
      <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
      <div class="mt-3 flex items-center">
        <Avatar src="/images/profile-picture-3.webp" />
        <div class="ms-3">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
          <div class="text-sm font-normal">commented on your photo</div>
          <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span>
        </div>
      </div>
    </Toast>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/push-notification.md'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Interactive toast</H3>
<CodeWrapper>
  <div class="flex h-48 flex-col items-center">
    <Toast align={false}>
      {#snippet icon()}
        <CameraPhotoOutline class="h-5 w-5" />
      {/snippet}
      <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
      <div class="mt-3">
        <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
        <div class="grid grid-cols-2 gap-2">
          <Button size="xs" class="w-full">Update</Button>
        </div>
      </div>
    </Toast>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/interactive-toast.md'] as string} />
  {/snippet}
</CodeWrapper>
