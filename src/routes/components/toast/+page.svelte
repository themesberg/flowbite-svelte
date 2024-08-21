<script lang="ts">
  import { Toast, toast, Avatar, Button, Label, Radio } from '$lib';
  import { FireOutline, CheckCircleSolid, PaperPlaneOutline, CameraPhotoOutline } from 'flowbite-svelte-icons';
  import { linear } from 'svelte/easing';
  import { blur, fly, slide, scale } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  import { capitalizeFirstLetter } from '../../utils/helpers';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  const colors = Object.keys(toast.variants.color) as Toast['color'][];
  let toastColor: Toast['color'] = $state('primary');
  let toastStatus: boolean = $state(true);

  // transition example
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    color: Toast['color'];
  };

  const transitions: TransitionOption[] = [
    { name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: 150 }, color: 'blue' },
    { name: 'Blur', transition: blur, params: { duration: 500, easing: linear }, color: 'lime' },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 }, color: 'violet' },
    { name: 'Scale', transition: scale, params: { duration: 500, easing: linear }, color: 'pink' }
  ];

  let selectedTransition = $state('Fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  let transionStatus = $state(true);
  const changeTransitionStatus = () => {
    transionStatus = !transionStatus;
  };
</script>

<H1>Toast</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default toast</H2>
<CodeWrapper class="flex h-28 flex-col items-center">
  <Toast>
    {#snippet icon()}
      <FireOutline class="h-5 w-5 bg-primary-100 text-primary-500 dark:bg-primary-800 dark:text-primary-200" />
    {/snippet}
    Set yourself free.
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-toast.md'] as string} />

<H2>Color</H2>
<CodeWrapper class="flex flex-col items-center space-y-2">
  <div class="h-16">
    {#if !toastStatus}
      <Button color="light" onclick={() => (toastStatus = true)}>Open toast</Button>
    {/if}
    <Toast color={toastColor} bind:toastStatus>
      {#snippet icon()}
        <CheckCircleSolid class="h-5 w-5" />
        <span class="sr-only">Check icon</span>
      {/snippet}
      Toast content
    </Toast>
  </div>
  <div class="flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Color:</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="border_accent_alert_color" bind:group={toastColor} color={colorOption as Toast['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Simple toast</H2>
<CodeWrapper class="flex h-28 flex-col items-center">
  <Toast dismissable={false} contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700">
    <PaperPlaneOutline class="h-5 w-5 rotate-45 text-primary-600 dark:text-primary-500" />
    <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/simple-toast.md'] as string} />

<H2>Transitions</H2>

<CodeWrapper class="h-64">
  <div class="h-24">
    <Toast color={currentTransition.color as Toast['color']} dismissable bind:toastStatus={transionStatus} transition={currentTransition.transition} params={currentTransition.params}>
      {#snippet icon()}
        <CheckCircleSolid class="h-5 w-5" />
        <span class="sr-only">Check icon</span>
      {/snippet}
      {capitalizeFirstLetter(selectedTransition)} transition
    </Toast>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-24 my-1" name="icon_alert_color" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  {#if !transionStatus}
    <Button class="w-36" color="green" onclick={changeTransitionStatus}>{transionStatus ? '' : 'Open'}</Button>
  {/if}
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/transition.md'] as string} />

<H2>Undo button</H2>
<CodeWrapper class="flex h-[104px] flex-col items-center">
  <Toast iconClass="w-full text-sm font-normal flex items-center justify-between">
    Conversation archived.
    <a class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700" href="/"> Undo </a>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/undo-button.md'] as string} />

<H2>Advanced examples</H2>
<H3>Toast message</H3>
<CodeWrapper class="flex h-[204px] flex-col items-center">
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
</CodeWrapper>
<HighlightCompo code={modules['./md/toast-message.md'] as string} />

<H3>Push notification</H3>
<CodeWrapper class="flex h-44 flex-col items-center">
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
</CodeWrapper>
<HighlightCompo code={modules['./md/push-notification.md'] as string} />

<H3>Interactive toast</H3>
<CodeWrapper class="flex h-48 flex-col items-center">
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
</CodeWrapper>
<HighlightCompo code={modules['./md/interactive-toast.md'] as string} />

<H2>Positioning</H2>
<CodeWrapper>
  <div class="relative h-56">
    <Toast dismissable={false} position="top-left" baseClass="text-white dark:text-white bg-red-600 dark:bg-red-500 w-20 h-20 sm:w-48 sm:h-16">Top-left</Toast>
    <Toast dismissable={false} position="top-right" baseClass="text-white dark:text-white bg-green-600 dark:bg-green-500 w-20 h-20 sm:w-48 sm:h-16">Top-right</Toast>
    <Toast dismissable={false} position="bottom-left" baseClass="text-white dark:text-white bg-blue-600 dark:bg-blue-500 w-20 h-20 sm:w-48 sm:h-16">Bottom-left</Toast>
    <Toast dismissable={false} position="bottom-right" baseClass="text-white dark:text-white bg-purple-600 dark:bg-purple-500 w-20 h-20 sm:w-48 sm:h-16">Bottom-right</Toast>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/positioning.md'] as string} />
