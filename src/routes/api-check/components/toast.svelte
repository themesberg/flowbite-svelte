<script lang="ts">
  import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid, ImageOutline, BellOutline, DownloadOutline, PaperPlaneOutline, CameraPhotoOutline } from "flowbite-svelte-icons";
  import { Toast, Button, Avatar } from "$lib";
  import { slide } from "svelte/transition";
  import { blur } from "svelte/transition";
  import { quintOut, elasticOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  let toastStatus = true;
  let counter = 6;

  function trigger() {
    toastStatus = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    toastStatus = false;
  }
</script>

<h1 class="my-4 text-3xl">Toast</h1>

<h2 class="text-2xl">Default toast</h2>
Default toast Use this simple toast component with an icon, message, and dismissable close button to show alert messages to your website visitors.

<div class="my-4 rounded border p-8">
  <Toast>
    {#snippet icon()}
      <FireOutline class="text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200 h-6 w-6" />
    {/snippet}
    Set yourself free.
  </Toast>
</div>

<h2 class="text-2xl">Colors</h2>
Colors Use the `color` prop to easily change the colors of the icons. Set the `color` prop to `none` and use the `extraIconClass` prop to customize your desired icon styles. Usually, green, red, and orange are used to show success, danger, or warning alert messages to your users. See the first three examples below.

<div class="my-4 space-y-4 rounded border p-8">
  <Toast color="green">
    {#snippet icon()}
      <CheckCircleSolid class="h-5 w-5" />
      <span class="sr-only">Check icon</span>
    {/snippet}
    Item moved successfully.
  </Toast>

  <Toast color="red">
    {#snippet icon()}
      <CloseCircleSolid class="h-5 w-5" />
      <span class="sr-only">Error icon</span>
    {/snippet}
    Item has been deleted.
  </Toast>

  <Toast color="red">
    {#snippet icon()}
      <ExclamationCircleSolid class="h-5 w-5" />
      <span class="sr-only">Warning icon</span>
    {/snippet}
    Improve password difficulty.
  </Toast>

  <Toast color="gray">
    {#snippet icon()}
      <FireOutline class="h-6 w-6" />
    {/snippet}
    Gray
  </Toast>

  <Toast color="yellow">
    {#snippet icon()}
      <FireOutline class="h-6 w-6" />
    {/snippet}
    Yellow
  </Toast>

  <Toast color="blue">
    {#snippet icon()}
      <FireOutline class="h-6 w-6" />
    {/snippet}
    Blue
  </Toast>

  <Toast color="indigo">
    {#snippet icon()}
      <FireOutline class="h-6 w-6" />
    {/snippet}
    Indigo
  </Toast>

  <Toast color="purple">
    {#snippet icon()}
      <FireOutline class="h-6 w-6" />
    {/snippet}
    Purple
  </Toast>

  <Toast color={undefined} class="h-8 w-8 bg-pink-100 text-pink-500 dark:bg-pink-800 dark:text-pink-200">
    {#snippet icon()}
      <FireOutline class="h-6 w-6" />
    {/snippet}
    Customize your colors.
  </Toast>
</div>

<h2 class="text-2xl">Simple toast</h2>
Simple toast This component can be used to show simple messages and notifications without the use of a close button.

<div class="my-4 rounded border p-8">
  <Toast dismissable={false} contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700">
    {#snippet icon()}
      <PaperPlaneOutline class="text-primary-600 dark:text-primary-500 h-5 w-5 rotate-45" />
    {/snippet}
    <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
  </Toast>
</div>

<h2 class="text-2xl">Icons</h2>
Icons For the right positioning of the icon use: `{#snippet icon()}...{/snippet}`. You can use any [icon components](/icons).

<div class="my-4 space-y-4 rounded border p-8">
  <Toast>
    {#snippet icon()}
      <ImageOutline class="h-6 w-6" />
    {/snippet}
    There is a box icon.
  </Toast>

  <Toast>No icon at all.</Toast>
</div>

<h2 class="text-2xl">Autohide example</h2>

<div class="my-4 rounded border p-8">
  <div class="flex gap-10">
    <Button onclick={trigger} class="my-3">Restart</Button>
    <Toast dismissable={false} transition={slide} bind:toastStatus>
      {#snippet icon()}
        <CheckCircleSolid class="h-5 w-5" />
      {/snippet}
      Autohide in {counter}s.
    </Toast>
  </div>
</div>

<h2 class="text-2xl">Transitions</h2>

<div class="my-4 space-y-4 rounded border p-8">
  <Toast transition={slide} class="mb-4">
    {#snippet icon()}
      <CheckCircleSolid class="h-6 w-6" />
    {/snippet}
    Transition type: slide
  </Toast>

  <Toast transition={slide} params={{ delay: 250, duration: 300, easing: quintOut }} class="mb-4">
    {#snippet icon()}
      <CheckCircleSolid class="h-6 w-6" />
    {/snippet}
    Transition type: slide, delay: 250, duration: 300, easing: quintOut
  </Toast>

  <Toast transition={slide} params={{ delay: 250, duration: 2000, easing: elasticOut }}>
    {#snippet icon()}
      <CheckCircleSolid class="h-6 w-6" />
    {/snippet}
    Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
  </Toast>
</div>

<h3 class="text-xl">Blur examples</h3>

<div class="my-4 space-y-4 rounded border p-8">
  <Toast transition={blur} color="purple" params={{ amount: 10 }} class="mb-4">
    {#snippet icon()}
      <BellOutline class="h-6 w-6" />
    {/snippet}
    Transition type: blur, amount: 10
  </Toast>

  <Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
    {#snippet icon()}
      <BellOutline class="h-6 w-6" />
    {/snippet}
    Transition type: blur, amount: 50, delay 1000
  </Toast>
</div>

<h3 class="text-xl">Fly examples</h3>

<div class="my-4 space-y-4 rounded border p-8">
  <Toast transition={fly} params={{ x: 200 }} color="green" class="mb-4">
    {#snippet icon()}
      <DownloadOutline class="h-6 w-6" />
    {/snippet}
    Transition type: fly right
  </Toast>

  <Toast transition={fly} params={{ y: 200 }} color="green">
    {#snippet icon()}
      <DownloadOutline class="h-6 w-6" />
    {/snippet}
    Transition type: fly down
  </Toast>
</div>

<h2 class="text-2xl">Undo button</h2>
Use this toast component to also show an “undo” button to reverse the action of the user.

<div class="my-4 rounded border p-8">
  <Toast contentClass="w-full text-sm font-normal flex items-center justify-between">
    Conversation archived.
    <a class="text-primary-600 hover:bg-primary-100 dark:text-primary-500 ms-auto rounded-lg p-1.5 font-medium dark:hover:bg-gray-700" href="/">Undo</a>
  </Toast>
</div>

<h2 class="text-2xl">Advanced examples</h2>
If the toast content grows to multiple lines we need to switch off the `items-center` alignment. Notice how the examples below achieve that by setting `align=flase` property. #Toast message This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

<div class="my-4 rounded border p-8">
  <Toast align={false} color={undefined}>
    {#snippet icon()}
      <Avatar src="/images/profile-picture-1.webp" class="h-8" />
    {/snippet}
    <div class="ms-3 text-sm font-normal">
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
      <Button size="xs">Reply</Button>
    </div>
  </Toast>
</div>

<h2 class="text-2xl">Push notification</h2>
This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

<div class="my-4 rounded border p-8">
  <Toast align={false}>
    <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
    <div class="mt-3 flex items-center">
      <Avatar src="/images/profile-picture-3.webp" />
      <div class="ms-3">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
        <div class="text-sm font-normal">commented on your photo</div>
        <span class="text-primary-600 dark:text-primary-500 text-xs font-medium">a few seconds ago</span>
      </div>
    </div>
  </Toast>
</div>

<h2 class="text-2xl">Interactive toast</h2>
Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

<p class="italic">This is an example with the icon and extra content at the same time.</p>

<div class="my-4 rounded border p-8">
  <Toast align={false}>
    {#snippet icon()}
      <CameraPhotoOutline class="h-6 w-6" />
    {/snippet}

    <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
    <div class="mt-3">
      <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
      <div class="grid grid-cols-2 gap-2">
        <Button size="xs" class="w-full">Update</Button>
        <Button size="xs" class="w-full" color="dark">Not now</Button>
      </div>
    </div>
  </Toast>
</div>

<h2 class="text-2xl">Positioning</h2>
Use the position property to position these toast components relative to the main content wrapper element from your document.

<div class="my-4 rounded border p-8">
  <div class="relative h-56">
    <Toast dismissable={false} position="top-left">Top left positioning.</Toast>
    <Toast dismissable={false} position="top-right">Top right positioning.</Toast>
    <Toast dismissable={false} position="bottom-left">Bottom left positioning.</Toast>
    <Toast dismissable={false} position="bottom-right">Bottom right positioning.</Toast>
  </div>
</div>

<h2>Toast style</h2>

<div class="my-4 rounded border p-8">
  <div class="relative h-56">
    <Toast class="border" iconClass="border" contentClass="border"
    >
    {#snippet icon()}
    <CameraPhotoOutline class="h-6 w-6" />
  {/snippet}
    Click the close button to see the event.</Toast>
  </div>
</div>

<h2 class="text-2xl">Events</h2>
You can use `onclose` to execute custom logic when the toast is closed.

<div class="my-4 rounded border p-8">
  <div class="relative h-56">
    <Toast onclick={() => alert("Toast closed")}>Click the close button to see the event.</Toast>
  </div>
</div>
