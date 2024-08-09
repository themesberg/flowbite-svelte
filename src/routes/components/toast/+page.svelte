<script lang="ts">
  import { Toast, toast, Avatar, Button, Label, Radio } from '$lib';
  import {
    FireOutline,
    CheckCircleSolid,
    ExclamationCircleSolid,
    CloseOutline,
    PaperPlaneOutline,
    BellOutline,
    DownloadOutline,
    CameraPhotoOutline
  } from 'flowbite-svelte-icons';
  import { slide, blur, fly } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';

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
  let toastStatus: boolean = $state(true);
</script>

<H1>Toast</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default toast</H2>
<CodeWrapper class="flex h-28 flex-col items-center">
  <Toast>
    {#snippet icon()}
      <FireOutline
        class="h-5 w-5 bg-primary-100 text-primary-500 dark:bg-primary-800 dark:text-primary-200"
      />
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
    <Toast color={toastColor} bind:toastStatus={toastStatus}>
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
      <Radio
        labelClass="w-24 my-1"
        name="border_accent_alert_color"
        bind:group={toastColor}
        value={colorOption}>{colorOption}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Simple toast</H2>
<CodeWrapper class="flex h-28 flex-col items-center">
  <Toast
    dismissable={false}
    contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700"
  >
    <PaperPlaneOutline
      class="h-5 w-5 rotate-45 text-primary-600 dark:text-primary-500"
    />
    <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/simple-toast.md'] as string} />

<H2>Transitions</H2>
<H3>Slide</H3>
<CodeWrapper class="flex h-[350px] flex-col items-center space-y-2">
  <Toast transition={slide}>
    {#snippet icon()}
      <CheckCircleSolid class="h-5 w-5" />
    {/snippet}
    Transition type: slide
  </Toast>

  <Toast
    transition={slide}
    params={{ delay: 250, duration: 300, easing: quintOut }}
  >
    {#snippet icon()}
      <CheckCircleSolid class="h-5 w-5" />
    {/snippet}
    Transition type: slide, delay: 250, duration: 300, easing: quintOut
  </Toast>

  <Toast
    transition={slide}
    params={{ delay: 250, duration: 2000, easing: elasticOut }}
  >
    {#snippet icon()}
      <CheckCircleSolid class="h-5 w-5" />
    {/snippet}
    Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/slide.md'] as string} />

<H3>Blur</H3>
<CodeWrapper class="flex h-[200px] flex-col items-center space-y-2">
  <Toast transition={blur} color="purple" params={{ amount: 10 }}>
    {#snippet icon()}
      <BellOutline class="h-5 w-5" />
    {/snippet}
    Transition type: blur, amount: 10
  </Toast>

  <Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
    {#snippet icon()}
      <BellOutline class="h-5 w-5" />
    {/snippet}
    Transition type: blur, amount: 50, delay 1000
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/blur.md'] as string} />

<H3>Fly</H3>
<CodeWrapper class="flex h-[200px] flex-col items-center space-y-2">
  <Toast transition={fly} params={{ x: 200 }} color="green">
    {#snippet icon()}
      <DownloadOutline class="h-5 w-5" />
    {/snippet}
    Transition type: fly right
  </Toast>

  <Toast transition={fly} params={{ y: 200 }} color="green">
    {#snippet icon()}
      <DownloadOutline class="h-5 w-5" />
    {/snippet}
    Transition type: fly down
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/fly.md'] as string} />

<H2>Undo button</H2>
<CodeWrapper class="flex h-[104px] flex-col items-center">
  <Toast
    iconClass="w-full text-sm font-normal flex items-center justify-between"
  >
    Conversation archived.
    <a
      class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700"
      href="/"
    >
      Undo
    </a>
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
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white"
        >Jese Leos</span
      >
      <div class="mb-2 text-sm font-normal">
        Hi Neil, thanks for sharing your thoughts regarding Flowbite.
      </div>
      <Button size="xs">Reply</Button>
    </div>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/toast-message.md'] as string} />

<H3>Push notification</H3>
<CodeWrapper class="flex h-44 flex-col items-center">
  <Toast align={false}>
    <span class="font-semibold text-gray-900 dark:text-white"
      >New notification</span
    >
    <div class="mt-3 flex items-center">
      <Avatar src="/images/profile-picture-3.webp" />
      <div class="ms-3">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">
          Bonnie Green
        </h4>
        <div class="text-sm font-normal">commented on your photo</div>
        <span class="text-xs font-medium text-primary-600 dark:text-primary-500"
          >a few seconds ago</span
        >
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
    <span class="font-semibold text-gray-900 dark:text-white"
      >Update available</span
    >
    <div class="mt-3">
      <div class="mb-2 text-sm font-normal">
        A new software version is available for download.
      </div>
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
    <Toast
      dismissable={false}
      position="top-left"
      baseClass="text-white dark:text-white bg-red-600 dark:bg-red-500 w-20 h-20 sm:w-48 sm:h-16"
      >Top-left</Toast
    >
    <Toast
      dismissable={false}
      position="top-right"
      baseClass="text-white dark:text-white bg-green-600 dark:bg-green-500 w-20 h-20 sm:w-48 sm:h-16"
      >Top-right</Toast
    >
    <Toast
      dismissable={false}
      position="bottom-left"
      baseClass="text-white dark:text-white bg-blue-600 dark:bg-blue-500 w-20 h-20 sm:w-48 sm:h-16"
      >Bottom-left</Toast
    >
    <Toast
      dismissable={false}
      position="bottom-right"
      baseClass="text-white dark:text-white bg-purple-600 dark:bg-purple-500 w-20 h-20 sm:w-48 sm:h-16"
      >Bottom-right</Toast
    >
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/positioning.md'] as string} />
